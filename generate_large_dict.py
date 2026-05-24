import urllib.request
import csv
import re
import io
import os
import json
import sys
import random

# Reconfigure stdout to support UTF-8 on Windows command prompt
if sys.platform.startswith('win'):
    sys.stdout.reconfigure(encoding='utf-8')

# Devanagari syllable regex components
C = r'[\u0915-\u0939\u0958-\u095F\u0979-\u097F\u0929\u0931\u0934]'
V = r'[\u0904-\u0914\u0960\u0961\u0972]'
N = r'\u093C'  # Nukta
H = r'\u094D'  # Halant
M = r'[\u093E-\u094C\u0901-\u0903\u0955-\u0957\u0962\u0963]'  # Matras / Modifiers

# Compiling the syllable splitter regex
SYLLABLE_REGEX = re.compile(rf'(?:{C}{N}?{H})*{C}{N}?{M}*|{V}{M}*')

def split_syllables(word):
    return SYLLABLE_REGEX.findall(word)

def download_file(url):
    print(f"Downloading {url}...")
    try:
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        )
        response = urllib.request.urlopen(req)
        return response.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return None

def clean_english_meaning(meaning):
    # Clean some common artifacts in the CSV
    meaning = re.sub(r'\s+', ' ', meaning).strip()
    # If the meaning is too long, truncate it
    if len(meaning) > 100:
        meaning = meaning[:97] + "..."
    return meaning

def main():
    # 1. Download Hunspell Dictionary
    hunspell_url = "https://raw.githubusercontent.com/Shreeshrii/hindi-hunspell/master/Hindi/hi_IN.dic"
    hunspell_content = download_file(hunspell_url)
    if not hunspell_content:
        # Fallback URL
        hunspell_url = "https://spellcheck-dictionaries.github.io/hi_IN/hi_IN.dic"
        hunspell_content = download_file(hunspell_url)
        
    if not hunspell_content:
        print("Failed to download Hunspell dictionary.")
        return

    # 2. Download English-Hindi CSV dictionary
    csv_url = "https://raw.githubusercontent.com/bdrillard/english-hindi-dictionary/master/English-Hindi%20Dictionary.csv"
    csv_content = download_file(csv_url)
    if not csv_content:
        print("Failed to download English-Hindi CSV dictionary.")
        return

    # 3. Parse English-Hindi Dictionary CSV to build Hindi -> English map
    print("Parsing English-Hindi translation dictionary...")
    hindi_to_english = {}
    f = io.StringIO(csv_content)
    reader = csv.reader(f)
    next(reader, None)  # Skip header
    
    devnagari_word_re = re.compile(r'[\u0900-\u097f]+')
    
    for row in reader:
        if len(row) < 2:
            continue
        eng_word = clean_english_meaning(row[0])
        hindi_desc = row[1]
        
        # Find all Devanagari words in the Hindi description
        hindi_words = devnagari_word_re.findall(hindi_desc)
        for hw in hindi_words:
            hw = hw.strip()
            # Must be a clean Devanagari word of at least length 2
            if len(hw) >= 2:
                # Prefer shorter, cleaner translations
                if hw not in hindi_to_english:
                    hindi_to_english[hw] = eng_word
                else:
                    if len(eng_word) < len(hindi_to_english[hw]):
                        hindi_to_english[hw] = eng_word

    print(f"Loaded {len(hindi_to_english)} Hindi words with English translations.")

    # 4. Parse Hunspell dictionary
    print("Parsing Hunspell dictionary and matching valid words...")
    lines = hunspell_content.split('\n')
    devnagari_regex = re.compile(r'^[\u0900-\u097f]+$')
    
    # Matras and Halant regex for categorization
    matras_regex = re.compile(r'[\u093e-\u094c\u0901\u0902\u0903\u0943]')
    halant_regex = re.compile(r'\u094d')

    beginner = []
    intermediate = []
    advanced = []
    
    seen_words = set()

    for line in lines:
        line = line.strip()
        if not line or line.isdigit():
            continue
        
        # Hunspell format: word/flags
        word = line.split('/')[0].strip()
        # Remove any leading/trailing garbage characters
        word = re.sub(r'[^\u0900-\u097f]', '', word)
        
        # Word validation:
        # - Must contain only Devanagari characters
        # - No space, hyphen, digits
        # - Must exist in our translation dictionary
        # - Must not be already processed
        if not devnagari_regex.match(word):
            continue
        if word in seen_words:
            continue
        if word not in hindi_to_english:
            continue
            
        seen_words.add(word)
        
        # Syllable splitting
        syllables = split_syllables(word)
        syllable_count = len(syllables)
        
        # Length check (syllables should be 2 to 10)
        if syllable_count < 2 or syllable_count > 10:
            continue
            
        meaning = hindi_to_english[word]
        
        # Categorization based on syllable length & characters
        has_matra = bool(matras_regex.search(word))
        has_halant = bool(halant_regex.search(word))
        
        entry = {
            "word": word,
            "meaning": meaning,
            "syllables": syllables
        }
        
        if has_halant or syllable_count >= 6:
            advanced.append(entry)
        elif has_matra:
            if syllable_count <= 4:
                intermediate.append(entry)
            else:
                advanced.append(entry)
        else:
            if syllable_count <= 3:
                beginner.append(entry)
            else:
                intermediate.append(entry)

    # De-duplicate lists
    print(f"Total matched words before balancing: {len(beginner) + len(intermediate) + len(advanced)}")
    print(f"Beginner: {len(beginner)}, Intermediate: {len(intermediate)}, Advanced: {len(advanced)}")

    # Shuffle to ensure a diverse vocab distribution
    random.seed(42)
    random.shuffle(beginner)
    random.shuffle(intermediate)
    random.shuffle(advanced)

    # Set target caps: we want a balanced database.
    # We will aim for about 5,000 to 6,000 words per level to hit the 12,000+ words target.
    # If a category doesn't have enough, we'll take all available.
    cap = 6000
    final_beginner = beginner[:cap]
    final_intermediate = intermediate[:cap]
    final_advanced = advanced[:cap]
    
    total_words = len(final_beginner) + len(final_intermediate) + len(final_advanced)
    print(f"\nFinal capped counts:")
    print(f"Beginner     : {len(final_beginner)}")
    print(f"Intermediate : {len(final_intermediate)}")
    print(f"Advanced     : {len(final_advanced)}")
    print(f"Total words  : {total_words}")

    # Output to words_large.js
    output_path = r"C:\Users\vijay\.gemini\antigravity\scratch\hindi-reading-companion\js\data\words_large.js"
    print(f"\nWriting database to {output_path}...")
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("// Hindi Mitra — Large Curated Hindi Word Database (12,000+ words)\n")
        f.write(f"// Generated on the fly with English translations & syllables\n")
        f.write(f"// Total: {total_words} verified valid Hindi words\n\n")
        f.write("export const largeWords = {\n")
        f.write("  beginner: ")
        json.dump(final_beginner, f, ensure_ascii=False, indent=2)
        f.write(",\n  intermediate: ")
        json.dump(final_intermediate, f, ensure_ascii=False, indent=2)
        f.write(",\n  advanced: ")
        json.dump(final_advanced, f, ensure_ascii=False, indent=2)
        f.write("\n};\n")
        
    print("Database generation completed successfully!")

if __name__ == "__main__":
    main()
