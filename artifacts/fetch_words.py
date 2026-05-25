import urllib.request
import re
import json
import os

def main():
    print("Downloading Hindi Hunspell Dictionary...")
    url = "https://raw.githubusercontent.com/Shreeshrii/hindi-hunspell/master/hi_IN.dic"
    try:
        response = urllib.request.urlopen(url)
        content = response.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error downloading: {e}")
        return

    print("Processing words...")
    lines = content.split('\n')
    raw_words = []
    
    # Devnagari characters block is \u0900 to \u097f
    devnagari_regex = re.compile(r'^[\u0900-\u097f]+$')
    
    for line in lines:
        line = line.strip()
        if not line or line.isdigit():
            continue
        # Hunspell format: word/flags
        word = line.split('/')[0].strip()
        # Clean word from any hidden symbols
        word = re.sub(r'[^\u0900-\u097f]', '', word)
        
        if not devnagari_regex.match(word):
            continue
        
        # Word length filters
        word_len = len(word)
        if word_len < 2 or word_len > 10:
            continue
            
        raw_words.append(word)

    # De-duplicate
    unique_words = list(set(raw_words))
    print(f"Found {len(unique_words)} unique Devnagari words.")

    # Matras and Halant definitions
    matras_regex = re.compile(r'[\u093e-\u094c\u0901\u0902\u0903\u0943]')
    halant_regex = re.compile(r'\u094d')

    beginner = []
    intermediate = []
    advanced = []

    for w in unique_words:
        has_matra = bool(matras_regex.search(w))
        has_halant = bool(halant_regex.search(w))
        length = len(w)

        if has_halant or length >= 6:
            advanced.append(w)
        elif has_matra:
            if length <= 4:
                intermediate.append(w)
            else:
                advanced.append(w)
        else:
            if length <= 3:
                beginner.append(w)
            else:
                intermediate.append(w)

    print(f"Initial counts - Beginner: {len(beginner)}, Intermediate: {len(intermediate)}, Advanced: {len(advanced)}")

    # Shuffle lists to get a diverse distribution
    import random
    random.seed(42)
    random.shuffle(beginner)
    random.shuffle(intermediate)
    random.shuffle(advanced)

    # Let's cap them to get a balanced set of ~4,000 words per category, total ~12,000 words
    cap = 4500
    final_beginner = beginner[:cap]
    final_intermediate = intermediate[:cap]
    final_advanced = advanced[:cap]
    
    total_count = len(final_beginner) + len(final_intermediate) + len(final_advanced)
    print(f"Capped counts - Beginner: {len(final_beginner)}, Intermediate: {len(final_intermediate)}, Advanced: {len(final_advanced)}")
    print(f"Total words: {total_count}")

    # Output to words_large.js
    # Each entry: { word }
    # Syllables will be generated dynamically in JS using the grapheme cluster regex!
    
    output_path = r"C:\Users\vijay\.gemini\antigravity\scratch\hindi-reading-companion\js\data\words_large.js"
    
    print(f"Writing database to {output_path}...")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("// Large generated Hindi words database (12,000+ words)\n")
        f.write("export const largeWords = {\n")
        f.write("  beginner: " + json.dumps(final_beginner, ensure_ascii=False) + ",\n")
        f.write("  intermediate: " + json.dumps(final_intermediate, ensure_ascii=False) + ",\n")
        f.write("  advanced: " + json.dumps(final_advanced, ensure_ascii=False) + "\n")
        f.write("};\n")
        f.write("export default largeWords;\n")
        
    print("Words database generated successfully!")

if __name__ == "__main__":
    main()
