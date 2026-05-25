import re
import sys

# Reconfigure stdout to support UTF-8 on Windows command prompt
if sys.platform.startswith('win'):
    sys.stdout.reconfigure(encoding='utf-8')

# Devanagari syllable regex
# Consonants: U+0915 to U+0939, plus nukta/additional forms
# Vowels: U+0904 to U+0914
# Modifiers (Matras, Anusvara, Visarga, Chandrabindu, etc.): U+0901-U+0903, U+093E-U+094C, U+0962-U+0963, U+093C (Nukta)
# Halant: U+094D

C = r'[\u0915-\u0939\u0958-\u095F\u0979-\u097F\u0929\u0931\u0934]'
V = r'[\u0904-\u0914\u0960\u0961\u0972]'
N = r'\u093C'  # Nukta
H = r'\u094D'  # Halant
M = r'[\u093E-\u094C\u0901-\u0903\u0955-\u0957\u0962\u0963]'  # Matras / Modifiers

# Syllable pattern:
# Either: (Consonant + optional Nukta + Halant)* + Consonant + optional Nukta + optional Matras
# Or: Vowel + optional Matras
pattern = re.compile(rf'(?:{C}{N}?{H})*{C}{N}?{M}*|{V}{M}*')

def split_syllables(word):
    # Find all matches
    matches = pattern.findall(word)
    return matches

test_words = [
    "कमल", "कलम", "घर", "आम", "अंगूर", "इमली", "कबूतर", "खरगोश", 
    "ऋषि", "स्वागत", "प्रणाम", "दुर्गा", "स्वास्थ्य", "भक्त", "अग्नि", 
    "उल्लू", "दिल्ली", "सब्जी", "लड्डू", "क्रिकेट", "डॉक्टर", "इंजीनियर",
    "पढ़ना", "घंटा", "चाँद", "दूध", "आँख", "क्या", "संसार", "पर्यावरण"
]

for w in test_words:
    sylls = split_syllables(w)
    joined = "+".join(sylls)
    print(f"{w} -> {sylls} (joined: {joined})")
