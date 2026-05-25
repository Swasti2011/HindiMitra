import urllib.request
import csv
import re
import io

def download_file(url):
    print(f"Downloading {url}...")
    try:
        response = urllib.request.urlopen(url)
        return response.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return None

def main():
    # 1. Download Hunspell Dictionary
    # Primary URL (with correct 'Hindi' subdirectory)
    hunspell_url = "https://raw.githubusercontent.com/Shreeshrii/hindi-hunspell/master/Hindi/hi_IN.dic"
    hunspell_content = download_file(hunspell_url)
    if not hunspell_content:
        # Fallback URL
        hunspell_url = "https://spellcheck-dictionaries.github.io/hi_IN/hi_IN.dic"
        hunspell_content = download_file(hunspell_url)
        
    if not hunspell_content:
        print("Failed to download Hunspell dictionary from both sources.")
        return

    # 2. Download bdrillard's English-Hindi Dictionary CSV
    # Note: URL needs to be the raw version
    csv_url = "https://raw.githubusercontent.com/bdrillard/english-hindi-dictionary/master/English-Hindi%20Dictionary.csv"
    csv_content = download_file(csv_url)
    if not csv_content:
        return

    # 3. Parse English-Hindi Dictionary CSV to create Hindi -> English map
    hindi_to_english = {}
    f = io.StringIO(csv_content)
    reader = csv.reader(f)
    next(reader, None)  # Skip header if any
    
    # Simple regex to extract Hindi words from the comma-separated or space-separated definitions
    devnagari_word_re = re.compile(r'[\u0900-\u097f]+')
    
    for row in reader:
        if len(row) < 2:
            continue
        eng_word = row[0].strip()
        hindi_desc = row[1]
        
        # Extract all Devanagari words from the Hindi description
        hindi_words = devnagari_word_re.findall(hindi_desc)
        for hw in hindi_words:
            hw = hw.strip()
            if len(hw) >= 2:
                # If not present, or if current english word is shorter (often cleaner)
                if hw not in hindi_to_english:
                    hindi_to_english[hw] = eng_word
                else:
                    # Append or keep the existing one
                    if len(eng_word) < len(hindi_to_english[hw]):
                        hindi_to_english[hw] = eng_word

    print(f"Parsed {len(hindi_to_english)} unique Hindi words with English translations from CSV.")

    # 4. Parse Hunspell Dictionary
    lines = hunspell_content.split('\n')
    devnagari_regex = re.compile(r'^[\u0900-\u097f]+$')
    
    hunspell_words = []
    for line in lines:
        line = line.strip()
        if not line or line.isdigit():
            continue
        word = line.split('/')[0].strip()
        word = re.sub(r'[^\u0900-\u097f]', '', word)
        
        if devnagari_regex.match(word) and len(word) >= 2 and len(word) <= 10:
            hunspell_words.append(word)

    unique_hunspell_words = list(set(hunspell_words))
    print(f"Parsed {len(unique_hunspell_words)} unique Devnagari words from Hunspell.")

    # 5. See how many Hunspell words have meanings in CSV
    matched_words = []
    unmatched_words = []
    
    for w in unique_hunspell_words:
        if w in hindi_to_english:
            matched_words.append((w, hindi_to_english[w]))
        else:
            unmatched_words.append(w)

    print(f"Matched words: {len(matched_words)}")
    print(f"Unmatched words: {len(unmatched_words)}")

if __name__ == "__main__":
    main()
