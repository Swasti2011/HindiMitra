// Curated Hindi content database for "Hindi Mitra" (Hindi Reading Companion)
export const vowels = [
  { letter: 'अ', phonetics: 'a', example: 'अनार', meaning: 'Pomegranate' },
  { letter: 'आ', phonetics: 'aa', example: 'आम', meaning: 'Mango' },
  { letter: 'इ', phonetics: 'i', example: 'इमली', meaning: 'Tamarind' },
  { letter: 'ई', phonetics: 'ee', example: 'ईख', meaning: 'Sugarcane' },
  { letter: 'उ', phonetics: 'u', example: 'उल्लू', meaning: 'Owl' },
  { letter: 'ऊ', phonetics: 'oo', example: 'ऊन', meaning: 'Wool' },
  { letter: 'ऋ', phonetics: 'ri', example: 'ऋषि', meaning: 'Sage' },
  { letter: 'ए', phonetics: 'e', example: 'एड़ी', meaning: 'Heel' },
  { letter: 'ऐ', phonetics: 'ai', example: 'ऐनक', meaning: 'Spectacles' },
  { letter: 'ओ', phonetics: 'o', example: 'ओखली', meaning: 'Mortar' },
  { letter: 'औ', phonetics: 'au', example: 'औरत', meaning: 'Woman' },
  { letter: 'अं', phonetics: 'ang', example: 'अंगूर', meaning: 'Grapes' },
  { letter: 'अः', phonetics: 'aha', example: 'प्रातः', meaning: 'Morning (Visarga)' }
];

export const consonants = [
  { letter: 'क', phonetics: 'ka', example: 'कबूतर', meaning: 'Pigeon' },
  { letter: 'ख', phonetics: 'kha', example: 'खरगोश', meaning: 'Rabbit' },
  { letter: 'ग', phonetics: 'ga', example: 'गमला', meaning: 'Flowerpot' },
  { letter: 'घ', phonetics: 'gha', example: 'घर', meaning: 'House' },
  { letter: 'ङ', phonetics: 'nga', example: 'पंख', meaning: 'Wing (nasal)' },
  { letter: 'च', phonetics: 'cha', example: 'चम्मच', meaning: 'Spoon' },
  { letter: 'छ', phonetics: 'chha', example: 'छतरी', meaning: 'Umbrella' },
  { letter: 'ज', phonetics: 'ja', example: 'जग', meaning: 'Jug' },
  { letter: 'झ', phonetics: 'jha', example: 'झंडा', meaning: 'Flag' },
  { letter: 'ञ', phonetics: 'nya', example: 'ज्ञान', meaning: 'Knowledge' },
  { letter: 'ट', phonetics: 'Ta', example: 'टमाटर', meaning: 'Tomato' },
  { letter: 'ठ', phonetics: 'Tha', example: 'ठठेरा', meaning: 'Coppersmith' },
  { letter: 'ड', phonetics: 'Da', example: 'डमरू', meaning: 'Small Drum' },
  { letter: 'ढ', phonetics: 'Dha', example: 'ढक्कन', meaning: 'Lid' },
  { letter: 'ण', phonetics: 'Na', example: 'बाण', meaning: 'Arrow' },
  { letter: 'त', phonetics: 'ta', example: 'तरबूज', meaning: 'Watermelon' },
  { letter: 'थ', phonetics: 'tha', example: 'थर्मस', meaning: 'Thermos' },
  { letter: 'द', phonetics: 'da', example: 'दवात', meaning: 'Inkpot' },
  { letter: 'ध', phonetics: 'dha', example: 'धनुष', meaning: 'Bow' },
  { letter: 'न', phonetics: 'na', example: 'नल', meaning: 'Tap' },
  { letter: 'प', phonetics: 'pa', example: 'पतंग', meaning: 'Kite' },
  { letter: 'फ', phonetics: 'pha', example: 'फल', meaning: 'Fruit' },
  { letter: 'ब', phonetics: 'ba', example: 'बस', meaning: 'Bus' },
  { letter: 'भ', phonetics: 'bha', example: 'भालू', meaning: 'Bear' },
  { letter: 'म', phonetics: 'ma', example: 'मछली', meaning: 'Fish' },
  { letter: 'य', phonetics: 'ya', example: 'यज्ञ', meaning: 'Sacred Fire' },
  { letter: 'र', phonetics: 'ra', example: 'रथ', meaning: 'Chariot' },
  { letter: 'ल', phonetics: 'la', example: 'लट्टू', meaning: 'Spinning Top' },
  { letter: 'व', phonetics: 'va', example: 'वन', meaning: 'Forest' },
  { letter: 'श', phonetics: 'sha', example: 'शलगम', meaning: 'Turnip' },
  { letter: 'ष', phonetics: 'Sha', example: 'षटकोण', meaning: 'Hexagon' },
  { letter: 'स', phonetics: 'sa', example: 'सपेरा', meaning: 'Snake Charmer' },
  { letter: 'ह', phonetics: 'ha', example: 'हाथी', meaning: 'Elephant' },
  { letter: 'क्ष', phonetics: 'ksha', example: 'क्षत्रिय', meaning: 'Warrior' },
  { letter: 'त्र', phonetics: 'tra', example: 'त्रिशूल', meaning: 'Trident' },
  { letter: 'ज्ञ', phonetics: 'gya', example: 'ज्ञानी', meaning: 'Wise Person' },
  { letter: 'श्र', phonetics: 'shra', example: 'श्रमिक', meaning: 'Worker' }
];

// ─── NEW: LETTER GROUPS FOR LETTER READING MODULE ───────────────────────────
export const letterGroups = [
  {
    id: 'swar',
    label: 'स्वर (Vowels)',
    emoji: '🅰️',
    description: 'All Hindi vowels — अ, आ, इ, ई ...',
    letters: ['अ','आ','इ','ई','उ','ऊ','ऋ','ए','ऐ','ओ','औ','अं','अः']
  },
  {
    id: 'kavarga',
    label: 'क-वर्ग (Velar)',
    emoji: '🟣',
    description: 'Similar sounding: क, ख, ग, घ, ङ',
    letters: ['क','ख','ग','घ','ङ']
  },
  {
    id: 'chavarga',
    label: 'च-वर्ग (Palatal)',
    emoji: '🔵',
    description: 'Similar sounding: च, छ, ज, झ, ञ',
    letters: ['च','छ','ज','झ','ञ']
  },
  {
    id: 'tavarga_retro',
    label: 'ट-वर्ग (Retroflex)',
    emoji: '🟤',
    description: 'Similar sounding: ट, ठ, ड, ढ, ण',
    letters: ['ट','ठ','ड','ढ','ण']
  },
  {
    id: 'tavarga_dental',
    label: 'त-वर्ग (Dental)',
    emoji: '🟡',
    description: 'Similar sounding: त, थ, द, ध, न',
    letters: ['त','थ','द','ध','न']
  },
  {
    id: 'pavarga',
    label: 'प-वर्ग (Labial)',
    emoji: '🟢',
    description: 'Similar sounding: प, फ, ब, भ, म',
    letters: ['प','फ','ब','भ','म']
  },
  {
    id: 'antastha',
    label: 'अंतस्थ (Semi-vowels)',
    emoji: '🔶',
    description: 'Similar sounding: य, र, ल, व',
    letters: ['य','र','ल','व']
  },
  {
    id: 'sibilants',
    label: 'ऊष्म / सिबिलेंट',
    emoji: '🔴',
    description: 'Similar sounding: श, ष, स, ह',
    letters: ['श','ष','स','ह']
  },
  {
    id: 'sanyukt',
    label: 'संयुक्त अक्षर',
    emoji: '⚡',
    description: 'Conjunct letters: क्ष, त्र, ज्ञ, श्र',
    letters: ['क्ष','त्र','ज्ञ','श्र']
  },
  {
    id: 'da_ta_confusion',
    label: 'ड/ड़ और त/ट भ्रम',
    emoji: '🔀',
    description: 'Commonly confused: ड, ड़, ढ, त, ट, द',
    letters: ['ड','ड़','ढ','त','ट','द']
  },
  {
    id: 'bha_va_confusion',
    label: 'ब/व और भ/फ भ्रम',
    emoji: '🔁',
    description: 'Commonly confused: ब, व, भ, फ, प',
    letters: ['ब','व','भ','फ','प']
  },
  {
    id: 'sha_sa_confusion',
    label: 'श/स/ष भ्रम',
    emoji: '🌀',
    description: 'Commonly confused sibilants: श, स, ष',
    letters: ['श','स','ष']
  },
  {
    id: 'random',
    label: 'यादृच्छिक (Random)',
    emoji: '🎲',
    description: 'Random mix of all letters for surprise practice!',
    letters: [] // populated dynamically in JS
  }
];

// ─── NEW: MATRAS (Vowel Diacritics) FOR WORD BUILDER ────────────────────────
export const matras = [
  { symbol: '', label: 'शुद्ध (Pure)', phonetics: 'a', display: 'क' },
  { symbol: 'ा', label: 'आ की मात्रा', phonetics: 'aa', display: 'का' },
  { symbol: 'ि', label: 'इ की मात्रा', phonetics: 'i',  display: 'कि' },
  { symbol: 'ी', label: 'ई की मात्रा', phonetics: 'ee', display: 'की' },
  { symbol: 'ु', label: 'उ की मात्रा', phonetics: 'u',  display: 'कु' },
  { symbol: 'ू', label: 'ऊ की मात्रा', phonetics: 'oo', display: 'कू' },
  { symbol: 'े', label: 'ए की मात्रा', phonetics: 'e',  display: 'के' },
  { symbol: 'ै', label: 'ऐ की मात्रा', phonetics: 'ai', display: 'कै' },
  { symbol: 'ो', label: 'ओ की मात्रा', phonetics: 'o',  display: 'को' },
  { symbol: 'ौ', label: 'औ की मात्रा', phonetics: 'au', display: 'कौ' },
  { symbol: 'ं', label: 'अनुस्वार (ं)',  phonetics: 'an', display: 'कं' },
  { symbol: 'ृ', label: 'ऋ की मात्रा', phonetics: 'ri', display: 'कृ' }
];

// ─── NEW: WORD BUILDER DATABASE (indexed by consonant + matra combos) ────────
// Each entry: { word, syllables[], meaning, consonants[], matras[] }
// consonants[] and matras[] list which consonant/matra characters appear in this word.
export const wordBuilderDB = [
  // Pure (no matra) words — बिना मात्रा वाले शब्द
  { word: 'कमल', syllables: ['क','म','ल'], meaning: 'Lotus',         consonants: ['क','म','ल'], matras: [''] },
  { word: 'नल',  syllables: ['न','ल'],     meaning: 'Tap',           consonants: ['न','ल'],     matras: [''] },
  { word: 'फल',  syllables: ['फ','ल'],     meaning: 'Fruit',         consonants: ['फ','ल'],     matras: [''] },
  { word: 'घर',  syllables: ['घ','र'],     meaning: 'House',         consonants: ['घ','र'],     matras: [''] },
  { word: 'बस',  syllables: ['ब','स'],     meaning: 'Bus',           consonants: ['ब','स'],     matras: [''] },
  { word: 'रथ',  syllables: ['र','थ'],     meaning: 'Chariot',       consonants: ['र','थ'],     matras: [''] },
  { word: 'मन',  syllables: ['म','न'],     meaning: 'Mind',          consonants: ['म','न'],     matras: [''] },
  { word: 'वन',  syllables: ['व','न'],     meaning: 'Forest',        consonants: ['व','न'],     matras: [''] },
  { word: 'नभ',  syllables: ['न','भ'],     meaning: 'Sky',           consonants: ['न','भ'],     matras: [''] },
  { word: 'जल',  syllables: ['ज','ल'],     meaning: 'Water',         consonants: ['ज','ल'],     matras: [''] },
  { word: 'मटर', syllables: ['म','ट','र'], meaning: 'Peas',          consonants: ['म','ट','र'], matras: [''] },
  { word: 'कलम', syllables: ['क','ल','म'], meaning: 'Pen',           consonants: ['क','ल','म'], matras: [''] },
  { word: 'चटक', syllables: ['च','ट','क'], meaning: 'Bright',        consonants: ['च','ट','क'], matras: [''] },
  { word: 'पवन', syllables: ['प','व','न'], meaning: 'Wind',          consonants: ['प','व','न'], matras: [''] },
  { word: 'नमन', syllables: ['न','म','न'], meaning: 'Greetings',     consonants: ['न','म','न'], matras: [''] },
  // आ-matra words (ा)
  { word: 'काम',   syllables: ['का','म'],     meaning: 'Work',        consonants: ['क','म'],     matras: ['ा'] },
  { word: 'नाम',   syllables: ['ना','म'],     meaning: 'Name',        consonants: ['न','म'],     matras: ['ा'] },
  { word: 'राम',   syllables: ['रा','म'],     meaning: 'Ram (name)',  consonants: ['र','म'],     matras: ['ा'] },
  { word: 'बात',   syllables: ['बा','त'],     meaning: 'Talk',        consonants: ['ब','त'],     matras: ['ा'] },
  { word: 'दाल',   syllables: ['दा','ल'],     meaning: 'Lentil',      consonants: ['द','ल'],     matras: ['ा'] },
  { word: 'माल',   syllables: ['मा','ल'],     meaning: 'Goods',       consonants: ['म','ल'],     matras: ['ा'] },
  { word: 'पाल',   syllables: ['पा','ल'],     meaning: 'Raise/Pet',   consonants: ['प','ल'],     matras: ['ा'] },
  { word: 'ताल',   syllables: ['ता','ल'],     meaning: 'Rhythm/Pond', consonants: ['त','ल'],     matras: ['ा'] },
  { word: 'खाना',  syllables: ['खा','ना'],    meaning: 'Food',        consonants: ['ख','न'],     matras: ['ा'] },
  { word: 'गाना',  syllables: ['गा','ना'],    meaning: 'Song',        consonants: ['ग','न'],     matras: ['ा'] },
  { word: 'जाना',  syllables: ['जा','ना'],    meaning: 'To go',       consonants: ['ज','न'],     matras: ['ा'] },
  { word: 'माता',  syllables: ['मा','ता'],    meaning: 'Mother',      consonants: ['म','त'],     matras: ['ा'] },
  { word: 'पाठ',   syllables: ['पा','ठ'],     meaning: 'Lesson',      consonants: ['प','ठ'],     matras: ['ा'] },
  { word: 'बाग',   syllables: ['बा','ग'],     meaning: 'Garden',      consonants: ['ब','ग'],     matras: ['ा'] },
  { word: 'राज',   syllables: ['रा','ज'],     meaning: 'Kingdom',     consonants: ['र','ज'],     matras: ['ा'] },
  // इ-matra words (ि)
  { word: 'मिल',   syllables: ['मि','ल'],     meaning: 'Meet/Mill',   consonants: ['म','ल'],     matras: ['ि'] },
  { word: 'तिल',   syllables: ['ति','ल'],     meaning: 'Sesame',      consonants: ['त','ल'],     matras: ['ि'] },
  { word: 'किला',  syllables: ['कि','ला'],    meaning: 'Fort',        consonants: ['क','ल'],     matras: ['ि','ा'] },
  { word: 'दिन',   syllables: ['दि','न'],     meaning: 'Day',         consonants: ['द','न'],     matras: ['ि'] },
  { word: 'बिल',   syllables: ['बि','ल'],     meaning: 'Burrow',      consonants: ['ब','ल'],     matras: ['ि'] },
  { word: 'गिर',   syllables: ['गि','र'],     meaning: 'Fall',        consonants: ['ग','र'],     matras: ['ि'] },
  { word: 'किताब', syllables: ['कि','ता','ब'], meaning: 'Book',       consonants: ['क','त','ब'], matras: ['ि','ा'] },
  { word: 'तितली', syllables: ['ति','त','ली'], meaning: 'Butterfly',  consonants: ['त','ल'],     matras: ['ि','ी'] },
  // ई-matra words (ी)
  { word: 'मीठा',  syllables: ['मी','ठा'],    meaning: 'Sweet',       consonants: ['म','ठ'],     matras: ['ी','ा'] },
  { word: 'नीला',  syllables: ['नी','ला'],    meaning: 'Blue',        consonants: ['न','ल'],     matras: ['ी','ा'] },
  { word: 'चीनी',  syllables: ['ची','नी'],    meaning: 'Sugar',       consonants: ['च','न'],     matras: ['ी'] },
  { word: 'पानी',  syllables: ['पा','नी'],    meaning: 'Water',       consonants: ['प','न'],     matras: ['ा','ी'] },
  { word: 'दादी',  syllables: ['दा','दी'],    meaning: 'Grandmother', consonants: ['द'],         matras: ['ा','ी'] },
  { word: 'नानी',  syllables: ['ना','नी'],    meaning: 'Maternal Gma',consonants: ['न'],         matras: ['ा','ी'] },
  { word: 'शादी',  syllables: ['शा','दी'],    meaning: 'Marriage',    consonants: ['श','द'],     matras: ['ा','ी'] },
  { word: 'बाती',  syllables: ['बा','ती'],    meaning: 'Wick',        consonants: ['ब','त'],     matras: ['ा','ी'] },
  // उ-matra words (ु)
  { word: 'गुड़',   syllables: ['गु','ड़'],    meaning: 'Jaggery',     consonants: ['ग','ड़'],    matras: ['ु'] },
  { word: 'कुत्ता', syllables: ['कु','त्ता'],  meaning: 'Dog',         consonants: ['क','त'],     matras: ['ु','ा'] },
  { word: 'चुना',  syllables: ['चु','ना'],    meaning: 'Lime/Chose',  consonants: ['च','न'],     matras: ['ु','ा'] },
  { word: 'धुन',   syllables: ['धु','न'],     meaning: 'Tune/Melody', consonants: ['ध','न'],     matras: ['ु'] },
  { word: 'सुन',   syllables: ['सु','न'],     meaning: 'Listen',      consonants: ['स','न'],     matras: ['ु'] },
  { word: 'बुला',  syllables: ['बु','ला'],    meaning: 'To call',     consonants: ['ब','ल'],     matras: ['ु','ा'] },
  // ऊ-matra words (ू)
  { word: 'फूल',   syllables: ['फू','ल'],     meaning: 'Flower',      consonants: ['फ','ल'],     matras: ['ू'] },
  { word: 'भूल',   syllables: ['भू','ल'],     meaning: 'Forget',      consonants: ['भ','ल'],     matras: ['ू'] },
  { word: 'सूरज',  syllables: ['सू','र','ज'], meaning: 'Sun',         consonants: ['स','र','ज'], matras: ['ू'] },
  { word: 'चूहा',  syllables: ['चू','हा'],    meaning: 'Mouse',       consonants: ['च','ह'],     matras: ['ू','ा'] },
  { word: 'गूंज',  syllables: ['गूं','ज'],    meaning: 'Echo',        consonants: ['ग','ज'],     matras: ['ू','ं'] },
  { word: 'झूला',  syllables: ['झू','ला'],    meaning: 'Swing',       consonants: ['झ','ल'],     matras: ['ू','ा'] },
  { word: 'टूटा',  syllables: ['टू','टा'],    meaning: 'Broken',      consonants: ['ट'],         matras: ['ू','ा'] },
  // ए-matra words (े)
  { word: 'केला',  syllables: ['के','ला'],    meaning: 'Banana',      consonants: ['क','ल'],     matras: ['े','ा'] },
  { word: 'शेर',   syllables: ['शे','र'],     meaning: 'Lion',        consonants: ['श','र'],     matras: ['े'] },
  { word: 'मेला',  syllables: ['मे','ला'],    meaning: 'Fair/Mela',   consonants: ['म','ल'],     matras: ['े','ा'] },
  { word: 'तेल',   syllables: ['ते','ल'],     meaning: 'Oil',         consonants: ['त','ल'],     matras: ['े'] },
  { word: 'देश',   syllables: ['दे','श'],     meaning: 'Country',     consonants: ['द','श'],     matras: ['े'] },
  { word: 'खेत',   syllables: ['खे','त'],     meaning: 'Field',       consonants: ['ख','त'],     matras: ['े'] },
  { word: 'रेत',   syllables: ['रे','त'],     meaning: 'Sand',        consonants: ['र','त'],     matras: ['े'] },
  { word: 'गेंद',  syllables: ['गें','द'],    meaning: 'Ball',        consonants: ['ग','द'],     matras: ['े','ं'] },
  // ऐ-matra words (ै)
  { word: 'पैर',   syllables: ['पै','र'],     meaning: 'Foot/Leg',    consonants: ['प','र'],     matras: ['ै'] },
  { word: 'मैदान', syllables: ['मै','दा','न'], meaning: 'Ground',     consonants: ['म','द','न'], matras: ['ै','ा'] },
  { word: 'कैसे',  syllables: ['कै','से'],    meaning: 'How',         consonants: ['क','स'],     matras: ['ै','े'] },
  { word: 'तैरना', syllables: ['तै','र','ना'], meaning: 'To swim',    consonants: ['त','र','न'], matras: ['ै','ा'] },
  // ओ-matra words (ो)
  { word: 'मोर',   syllables: ['मो','र'],     meaning: 'Peacock',     consonants: ['म','र'],     matras: ['ो'] },
  { word: 'तोता',  syllables: ['तो','ता'],    meaning: 'Parrot',      consonants: ['त'],         matras: ['ो','ा'] },
  { word: 'रोटी',  syllables: ['रो','टी'],    meaning: 'Bread',       consonants: ['र','ट'],     matras: ['ो','ी'] },
  { word: 'बोलो',  syllables: ['बो','लो'],    meaning: 'Speak!',      consonants: ['ब','ल'],     matras: ['ो'] },
  { word: 'सोना',  syllables: ['सो','ना'],    meaning: 'Gold/Sleep',  consonants: ['स','न'],     matras: ['ो','ा'] },
  { word: 'दोस्त', syllables: ['दो','स्त'],   meaning: 'Friend',      consonants: ['द','स','त'], matras: ['ो'] },
  { word: 'होना',  syllables: ['हो','ना'],    meaning: 'To be',       consonants: ['ह','न'],     matras: ['ो','ा'] },
  // औ-matra words (ौ)
  { word: 'कौआ',   syllables: ['कौ','आ'],     meaning: 'Crow',        consonants: ['क'],         matras: ['ौ','ा'] },
  { word: 'मौसम',  syllables: ['मौ','स','म'], meaning: 'Weather',     consonants: ['म','स'],     matras: ['ौ'] },
  { word: 'खिलौना',syllables: ['खि','लौ','ना'],meaning: 'Toy',        consonants: ['ख','ल','न'], matras: ['ि','ौ','ा'] },
  { word: 'चौका',  syllables: ['चौ','का'],    meaning: 'Kitchen',     consonants: ['च','क'],     matras: ['ौ','ा'] },
  { word: 'पौधा',  syllables: ['पौ','धा'],    meaning: 'Plant',       consonants: ['प','ध'],     matras: ['ौ','ा'] },
  // अनुस्वार ं-matra words
  { word: 'अंगूर', syllables: ['अं','गू','र'], meaning: 'Grapes',     consonants: ['ग','र'],     matras: ['ं','ू'] },
  { word: 'रंग',   syllables: ['रं','ग'],     meaning: 'Color',       consonants: ['र','ग'],     matras: ['ं'] },
  { word: 'संगीत', syllables: ['सं','गी','त'], meaning: 'Music',      consonants: ['स','ग','त'], matras: ['ं','ी'] },
  { word: 'तरंग',  syllables: ['त','रं','ग'], meaning: 'Wave',        consonants: ['त','र','ग'], matras: ['ं'] },
  { word: 'पतंग',  syllables: ['प','तं','ग'], meaning: 'Kite',        consonants: ['प','त','ग'], matras: ['ं'] },
  { word: 'संगम',  syllables: ['सं','ग','म'], meaning: 'Confluence',  consonants: ['स','ग','म'], matras: ['ं'] },
];

export const words = {
  beginner: [
    { word: 'घर', syllables: ['घ', 'र'], meaning: 'House' },
    { word: 'फल', syllables: ['फ', 'ल'], meaning: 'Fruit' },
    { word: 'बस', syllables: ['ब', 'स'], meaning: 'Bus' },
    { word: 'नल', syllables: ['न', 'ल'], meaning: 'Tap' },
    { word: 'जल', syllables: ['ज', 'ल'], meaning: 'Water' },
    { word: 'कमल', syllables: ['क', 'म', 'ल'], meaning: 'Lotus' },
    { word: 'मटर', syllables: ['म', 'ट', 'र'], meaning: 'Peas' },
    { word: 'कलम', syllables: ['क', 'ल', 'म'], meaning: 'Pen' },
    { word: 'सड़क', syllables: ['स', 'ड़', 'क'], meaning: 'Road' },
    { word: 'रथ', syllables: ['र', 'थ'], meaning: 'Chariot' }
  ],
  intermediate: [
    { word: 'आम', syllables: ['आ', 'म'], meaning: 'Mango' },
    { word: 'किताब', syllables: ['कि', 'ता', 'ब'], meaning: 'Book' },
    { word: 'सूरज', syllables: ['सू', 'र', 'ज'], meaning: 'Sun' },
    { word: 'चूहा', syllables: ['चू', 'हा'], meaning: 'Mouse' },
    { word: 'केला', syllables: ['के', 'ला'], meaning: 'Banana' },
    { word: 'शेर', syllables: ['शे', 'र'], meaning: 'Lion' },
    { word: 'मोर', syllables: ['मो', 'र'], meaning: 'Peacock' },
    { word: 'तितली', syllables: ['ति', 'त', 'ली'], meaning: 'Butterfly' },
    { word: 'गुलाब', syllables: ['गु', 'ला', 'ब'], meaning: 'Rose' },
    { word: 'खिलौना', syllables: ['खि', 'लौ', 'ना'], meaning: 'Toy' }
  ],
  advanced: [
    { word: 'विद्यालय', syllables: ['वि', 'द्या', 'ल', 'य'], meaning: 'School' },
    { word: 'पुस्तक', syllables: ['पु', 'स्त', 'क'], meaning: 'Book' },
    { word: 'त्रिशूल', syllables: ['त्रि', 'शू', 'ल'], meaning: 'Trident' },
    { word: 'गुब्बारा', syllables: ['गु', 'ब्बा', 'रा'], meaning: 'Balloon' },
    { word: 'प्रकाश', syllables: ['प्र', 'का', 'श'], meaning: 'Light' },
    { word: 'मित्रता', syllables: ['मि', 'त्र', 'ता'], meaning: 'Friendship' },
    { word: 'ऋषि', syllables: ['ऋ', 'षि'], meaning: 'Sage' },
    { word: 'अंगूर', syllables: ['अं', 'गू', 'र'], meaning: 'Grapes' },
    { word: 'चन्द्रमा', syllables: ['च', 'न्द्र', 'मा'], meaning: 'Moon' },
    { word: 'ज्ञान', syllables: ['ज्ञा', 'न'], meaning: 'Knowledge' }
  ]
};

export const sentences = {
  beginner: [
  {
    "sentence": "नल चल।",
    "meaning": "Walk to the tap."
  },
  {
    "sentence": "जल भर।",
    "meaning": "Fill the water."
  },
  {
    "sentence": "घर चल।",
    "meaning": "Go home."
  },
  {
    "sentence": "फल चख।",
    "meaning": "Taste the fruit."
  },
  {
    "sentence": "खत पढ़।",
    "meaning": "Read the letter."
  },
  {
    "sentence": "अब पढ़।",
    "meaning": "Now read."
  },
  {
    "sentence": "सच कह।",
    "meaning": "Speak the truth."
  },
  {
    "sentence": "डर मत।",
    "meaning": "Do not be afraid."
  },
  {
    "sentence": "टब रख।",
    "meaning": "Keep the tub."
  },
  {
    "sentence": "जग रख।",
    "meaning": "Keep the jug."
  },
  {
    "sentence": "बस कर।",
    "meaning": "Stop it now."
  },
  {
    "sentence": "हठ मत कर।",
    "meaning": "Do not be stubborn."
  },
  {
    "sentence": "धन रख।",
    "meaning": "Keep the money."
  },
  {
    "sentence": "रथ पर चढ़।",
    "meaning": "Get on the chariot."
  },
  {
    "sentence": "पथ पर चल।",
    "meaning": "Walk on the path."
  },
  {
    "sentence": "बटन दबा।",
    "meaning": "Press the button."
  },
  {
    "sentence": "कलम पकड़।",
    "meaning": "Hold the pen."
  },
  {
    "sentence": "मटर चख।",
    "meaning": "Taste the peas."
  },
  {
    "sentence": "कलम रख।",
    "meaning": "Keep the pen."
  },
  {
    "sentence": "शहद चख।",
    "meaning": "Taste the honey."
  },
  {
    "sentence": "नल पर चल।",
    "meaning": "Walk to the tap."
  },
  {
    "sentence": "घर पर रह।",
    "meaning": "Stay at home."
  },
  {
    "sentence": "बस पर चढ़।",
    "meaning": "Get on the bus."
  },
  {
    "sentence": "घर चल कर पढ़।",
    "meaning": "Go home and study."
  },
  {
    "sentence": "कमल बटन दबा।",
    "meaning": "Kamal, press the button."
  },
  {
    "sentence": "फल चख कर रख।",
    "meaning": "Taste the fruit and keep it."
  },
  {
    "sentence": "अब बस पर चढ़।",
    "meaning": "Now get on the bus."
  },
  {
    "sentence": "सड़क पर मत चल।",
    "meaning": "Do not walk on the road."
  },
  {
    "sentence": "कलम पकड़ कर लिख।",
    "meaning": "Hold the pen and write."
  },
  {
    "sentence": "कमल इधर आ।",
    "meaning": "Kamal, come here."
  },
  {
    "sentence": "रमन घर चल।",
    "meaning": "Raman, go home."
  },
  {
    "sentence": "अमन शहद चख।",
    "meaning": "Aman, taste the honey."
  },
  {
    "sentence": "मदन मटर रख।",
    "meaning": "Madan, keep the peas."
  },
  {
    "sentence": "लखन सबक पढ़।",
    "meaning": "Lakhan, read the lesson."
  },
  {
    "sentence": "नयन खत पढ़।",
    "meaning": "Nayan, read the letter."
  },
  {
    "sentence": "करण फल चख।",
    "meaning": "Karan, taste the fruit."
  },
  {
    "sentence": "भरत घर चल।",
    "meaning": "Bharat, go home."
  },
  {
    "sentence": "चमन अब उठ।",
    "meaning": "Chaman, get up now."
  },
  {
    "sentence": "अजय कलम पकड़।",
    "meaning": "Ajay, hold the pen."
  },
  {
    "sentence": "पवन टब रख।",
    "meaning": "Pavan, keep the tub."
  },
  {
    "sentence": "नल पर जल भर।",
    "meaning": "Fill water at the tap."
  },
  {
    "sentence": "अमन अब घर चल।",
    "meaning": "Aman, go home now."
  },
  {
    "sentence": "करण अब मत डर।",
    "meaning": "Karan, do not fear now."
  },
  {
    "sentence": "भरत बस पर चढ़।",
    "meaning": "Bharat, get on the bus."
  },
  {
    "sentence": "सड़क पर मत भाग।",
    "meaning": "Do not run on the road."
  },
  {
    "sentence": "कलम रख कर पढ़।",
    "meaning": "Keep the pen down and read."
  },
  {
    "sentence": "अजय बटन मत दबा।",
    "meaning": "Ajay, do not press the button."
  },
  {
    "sentence": "चमन शहद मत चख।",
    "meaning": "Chaman, do not taste honey."
  },
  {
    "sentence": "लखन घर चल कर पढ़।",
    "meaning": "Lakhan, go home and study."
  },
  {
    "sentence": "मदन फल चख कर रख।",
    "meaning": "Madan, taste the fruit and keep it."
  },
  {
    "sentence": "सब सच सच कह।",
    "meaning": "Speak all the truth."
  },
  {
    "sentence": "डर मत, सच कह।",
    "meaning": "Do not be afraid, speak truth."
  },
  {
    "sentence": "अमन कलम पकड़ कर लिख।",
    "meaning": "Aman, hold the pen and write."
  },
  {
    "sentence": "इधर उधर मत चल।",
    "meaning": "Do not walk here and there."
  },
  {
    "sentence": "झटपट घर चल अब।",
    "meaning": "Go home quickly now."
  },
  {
    "sentence": "मदन अब बस कर।",
    "meaning": "Madan, stop it now."
  },
  {
    "sentence": "पवन बतख मत पकड़।",
    "meaning": "Pavan, do not catch the duck."
  },
  {
    "sentence": "करण कलश भर कर रख।",
    "meaning": "Karan, fill the urn and keep it."
  },
  {
    "sentence": "अमन गरम मटर चख।",
    "meaning": "Aman, taste the hot peas."
  },
  {
    "sentence": "लखन अब फल चख।",
    "meaning": "Lakhan, taste the fruit now."
  },
  {
    "sentence": "अजय घर पर रह।",
    "meaning": "Ajay, stay at home."
  },
  {
    "sentence": "मदन सड़क पर मत चल।",
    "meaning": "Madan, do not walk on the road."
  },
  {
    "sentence": "पवन अब खत पढ़।",
    "meaning": "Pavan, read the letter now."
  },
  {
    "sentence": "करण अब फल चख कर रख।",
    "meaning": "Karan, taste the fruit and keep it now."
  },
  {
    "sentence": "अमन अब कलश रख।",
    "meaning": "Aman, keep the urn now."
  },
  {
    "sentence": "भरत अब सबक पढ़।",
    "meaning": "Bharat, read the lesson now."
  },
  {
    "sentence": "चमन अब घर पर रह।",
    "meaning": "Chaman, stay at home now."
  },
  {
    "sentence": "अजय कलम रख कर पढ़।",
    "meaning": "Ajay, keep the pen and read."
  },
  {
    "sentence": "करण अब बटन दबा।",
    "meaning": "Karan, press the button now."
  },
  {
    "sentence": "मदन अब मटर चख।",
    "meaning": "Madan, taste the peas now."
  },
  {
    "sentence": "नयन अब खत पढ़ कर रख।",
    "meaning": "Nayan, read the letter and keep it now."
  },
  {
    "sentence": "लखन अब सड़क पर मत चल।",
    "meaning": "Lakhan, do not walk on the road now."
  },
  {
    "sentence": "पवन अब कलम पकड़ कर लिख।",
    "meaning": "Pavan, hold the pen and write now."
  },
  {
    "sentence": "करण अब गरम गरम मटर चख।",
    "meaning": "Karan, taste the hot hot peas now."
  },
  {
    "sentence": "अमन अब झटपट घर चल।",
    "meaning": "Aman, go home quickly now."
  },
  {
    "sentence": "मदन अब इधर उधर मत चल।",
    "meaning": "Madan, do not walk here and there now."
  },
  {
    "sentence": "भरत अब सच सच कह।",
    "meaning": "Bharat, speak all the truth now."
  },
  {
    "sentence": "अजय अब डर मत, सच कह।",
    "meaning": "Ajay, do not fear now, speak truth."
  },
  {
    "sentence": "चमन अब बस पर चढ़।",
    "meaning": "Chaman, get on the bus now."
  },
  {
    "sentence": "लखन अब कलश भर कर रख।",
    "meaning": "Lakhan, fill the urn and keep it now."
  },
  {
    "sentence": "अमन अब मटर रख कर पढ़।",
    "meaning": "Aman, keep the peas and read now."
  },
  {
    "sentence": "मदन अब गरम शहद चख।",
    "meaning": "Madan, taste the warm honey now."
  },
  {
    "sentence": "पवन अब सड़क पर मत दौड़।",
    "meaning": "Pavan, do not run on the road now."
  },
  {
    "sentence": "करण अब घर चल कर पढ़।",
    "meaning": "Karan, go home and study now."
  },
  {
    "sentence": "अजय अब कलम पकड़ कर लिख।",
    "meaning": "Ajay, hold the pen and write now."
  },
  {
    "sentence": "भरत अब फल रख कर पढ़।",
    "meaning": "Bharat, keep the fruit and read now."
  },
  {
    "sentence": "चमन अब खत रख कर पढ़।",
    "meaning": "Chaman, keep the letter and read now."
  },
  {
    "sentence": "लखन अब सबक पढ़ कर लिख।",
    "meaning": "Lakhan, read the lesson and write now."
  },
  {
    "sentence": "नयन अब इधर आ कर पढ़।",
    "meaning": "Nayan, come here and read now."
  },
  {
    "sentence": "पवन अब गरम मटर चख कर रख।",
    "meaning": "Pavan, taste the hot peas and keep them now."
  },
  {
    "sentence": "अमन अब कलश भर कर घर चल।",
    "meaning": "Aman, fill the urn and go home now."
  },
  {
    "sentence": "मदन अब सड़क पर मत भाग कर चल।",
    "meaning": "Madan, do not run on the road now."
  },
  {
    "sentence": "करण अब डर मत, सब सच कह।",
    "meaning": "Karan, do not fear now, speak all truth."
  },
  {
    "sentence": "अजय अब बटन दबा कर पढ़।",
    "meaning": "Ajay, press the button and read now."
  },
  {
    "sentence": "भरत अब मटर चख कर घर चल।",
    "meaning": "Bharat, taste the peas and go home now."
  },
  {
    "sentence": "चमन अब कलम पकड़ कर सब लिख।",
    "meaning": "Chaman, hold the pen and write everything now."
  },
  {
    "sentence": "लखन अब खत पढ़ कर सब सच कह।",
    "meaning": "Lakhan, read the letter and tell all truth now."
  },
  {
    "sentence": "नयन अब घर पर रह कर सब पढ़।",
    "meaning": "Nayan, stay at home and read everything now."
  },
  {
    "sentence": "पवन अब बस पर चढ़ कर घर चल।",
    "meaning": "Pavan, get on the bus and go home now."
  },
  {
    "sentence": "अमन अब गरम गरम मटर चख कर रह।",
    "meaning": "Aman, taste the hot hot peas and stay now."
  },
  {
    "sentence": "मदन अब कलश रख कर सबक पढ़।",
    "meaning": "Madan, keep the urn and read the lesson now."
  },
  {
    "sentence": "करण अब कलम पकड़ कर घर पर रह।",
    "meaning": "Karan, hold the pen and stay at home now."
  },
  {
    "sentence": "अजय अब फल चख कर बस पर चढ़।",
    "meaning": "Ajay, taste the fruit and get on the bus now."
  },
  {
    "sentence": "भरत अब सड़क पर मत चल कर पढ़।",
    "meaning": "Bharat, do not walk on the road, read now."
  },
  {
    "sentence": "चमन अब गरम शहद चख कर घर चल।",
    "meaning": "Chaman, taste the warm honey and go home now."
  },
  {
    "sentence": "लखन अब बटन दबा कर खत पढ़।",
    "meaning": "Lakhan, press the button and read the letter now."
  },
  {
    "sentence": "नयन अब इधर आ कर मटर चख।",
    "meaning": "Nayan, come here and taste the peas now."
  },
  {
    "sentence": "पवन अब सब सच कह कर घर चल।",
    "meaning": "Pavan, tell all truth and go home now."
  },
  {
    "sentence": "अमन अब डर मत, बस पर चढ़ कर चल।",
    "meaning": "Aman, do not fear, get on the bus and go."
  },
  {
    "sentence": "मदन अब कलम रख कर घर चल कर पढ़।",
    "meaning": "Madan, keep the pen and go home to study now."
  },
  {
    "sentence": "करण अब गरम मटर चख कर सबक पढ़।",
    "meaning": "Karan, taste the hot peas and read the lesson now."
  },
  {
    "sentence": "अजय अब कलश भर कर सड़क पर मत चल।",
    "meaning": "Ajay, fill the urn and do not walk on the road."
  },
  {
    "sentence": "भरत अब फल चख कर सब सच सच कह।",
    "meaning": "Bharat, taste the fruit and tell all the truth now."
  },
  {
    "sentence": "चमन अब इधर आ कर कलम पकड़ कर लिख।",
    "meaning": "Chaman, come here, hold the pen and write now."
  },
  {
    "sentence": "लखन अब घर पर रह कर गरम मटर चख।",
    "meaning": "Lakhan, stay at home and taste the hot peas now."
  },
  {
    "sentence": "नयन अब सबक पढ़ कर बटन मत दबा।",
    "meaning": "Nayan, read the lesson and do not press the button."
  },
  {
    "sentence": "पवन अब खत पढ़ कर इधर उधर मत चल।",
    "meaning": "Pavan, read the letter and do not walk here and there."
  },
  {
    "sentence": "अमन अब बस पर चढ़ कर गरम शहद चख।",
    "meaning": "Aman, get on the bus and taste the warm honey now."
  },
  {
    "sentence": "मदन अब डर मत, सब सच कह कर पढ़।",
    "meaning": "Madan, do not fear, tell all truth and read now."
  },
  {
    "sentence": "करण अब झटपट घर चल कर कलश रख।",
    "meaning": "Karan, go home quickly and keep the urn now."
  }
],
  intermediate: [
  {
    "sentence": "सूरज निकल आया है।",
    "meaning": "The sun has come out."
  },
  {
    "sentence": "तितली फूल पर बैठी है।",
    "meaning": "The butterfly is sitting on the flower."
  },
  {
    "sentence": "रमन पाठशाला जाकर पढ़।",
    "meaning": "Raman, go to school and study."
  },
  {
    "sentence": "मोर बाग में नाच रहा है।",
    "meaning": "The peacock is dancing in the garden."
  },
  {
    "sentence": "चूहा बिल्ली से डर गया।",
    "meaning": "The mouse got scared of the cat."
  },
  {
    "sentence": "राम बाज़ार से आम लाया।",
    "meaning": "Ram brought mangoes from the market."
  },
  {
    "sentence": "सीता मीठा गाना गाती है।",
    "meaning": "Sita sings a sweet song."
  },
  {
    "sentence": "किताब मेज पर रख दो।",
    "meaning": "Keep the book on the table."
  },
  {
    "sentence": "हमें रोज़ पानी पीना चाहिए।",
    "meaning": "We should drink water daily."
  },
  {
    "sentence": "तोता पेड़ पर बैठा है।",
    "meaning": "The parrot is sitting on the tree."
  },
  {
    "sentence": "खिलौना पाकर बच्चा खुश हुआ।",
    "meaning": "The child became happy after getting the toy."
  },
  {
    "sentence": "आज मौसम बहुत सुहावना है।",
    "meaning": "Today the weather is very pleasant."
  },
  {
    "sentence": "चिड़िया आकाश में उड़ रही है।",
    "meaning": "The bird is flying in the sky."
  },
  {
    "sentence": "गाय हमें मीठा दूध देती है।",
    "meaning": "The cow gives us sweet milk."
  },
  {
    "sentence": "तालाब में लाल कमल खिले हैं।",
    "meaning": "Red lotuses are blooming in the pond."
  },
  {
    "sentence": "रमेश कहानी की किताब पढ़ता है।",
    "meaning": "Ramesh reads a storybook."
  },
  {
    "sentence": "लड़का मैदान में फुटबॉल खेल रहा है।",
    "meaning": "The boy is playing football in the playground."
  },
  {
    "sentence": "आओ मिलकर पौधा लगाएं।",
    "meaning": "Come, let's plant a sapling together."
  },
  {
    "sentence": "रीता बाज़ार से सेब खरीदती है।",
    "meaning": "Rita buys apples from the market."
  },
  {
    "sentence": "दादी जी रोज़ कहानी सुनाती हैं।",
    "meaning": "Grandmother tells stories every day."
  },
  {
    "sentence": "नानी जी स्वादिष्ट खीर बनाती हैं।",
    "meaning": "Maternal grandmother makes delicious rice pudding."
  },
  {
    "sentence": "कोयल पेड़ पर मीठा गाती है।",
    "meaning": "The cuckoo sings sweetly on the tree."
  },
  {
    "sentence": "बंदर पेड़ की डाल पर बैठा है।",
    "meaning": "The monkey is sitting on the branch of the tree."
  },
  {
    "sentence": "खरगोश गाजर मजे से खाता है।",
    "meaning": "The rabbit eats carrots with joy."
  },
  {
    "sentence": "नदी का पानी बहुत साफ है।",
    "meaning": "The water of the river is very clean."
  },
  {
    "sentence": "सड़क पर संभल कर चलना चाहिए।",
    "meaning": "One should walk carefully on the road."
  },
  {
    "sentence": "राम और श्याम पक्के मित्र हैं।",
    "meaning": "Ram and Shyam are close friends."
  },
  {
    "sentence": "बगीचे में सुंदर गुलाब खिले हैं।",
    "meaning": "Beautiful roses are blooming in the garden."
  },
  {
    "sentence": "आज मेरी पाठशाला में छुट्टी है।",
    "meaning": "Today is a holiday in my school."
  },
  {
    "sentence": "मां रसोई में खाना बना रही हैं।",
    "meaning": "Mother is cooking food in the kitchen."
  },
  {
    "sentence": "पिताजी बाज़ार से नया बैग लाए।",
    "meaning": "Father brought a new bag from the market."
  },
  {
    "sentence": "आकाश में काले बादल छाए हैं।",
    "meaning": "Black clouds are spread in the sky."
  },
  {
    "sentence": "ठंडी हवा धीरे-धीरे चल रही है।",
    "meaning": "Cold wind is blowing slowly."
  },
  {
    "sentence": "चाय में चीनी बहुत कम है।",
    "meaning": "There is very little sugar in the tea."
  },
  {
    "sentence": "मुझे हरा रंग बहुत पसंद है।",
    "meaning": "I like green color very much."
  },
  {
    "sentence": "बिल्ली दूध पीकर भाग गई।",
    "meaning": "The cat drank the milk and ran away."
  },
  {
    "sentence": "हाथी बहुत भारी जानवर होता है।",
    "meaning": "The elephant is a very heavy animal."
  },
  {
    "sentence": "घोड़ा मैदान में तेज दौड़ता है।",
    "meaning": "The horse runs fast in the field."
  },
  {
    "sentence": "शेर जंगल का राजा कहलाता है।",
    "meaning": "The lion is called the king of the forest."
  },
  {
    "sentence": "भालू नाच दिखाकर खुश करता है।",
    "meaning": "The bear makes people happy by dancing."
  },
  {
    "sentence": "मोर के पंख बहुत सुंदर होते हैं।",
    "meaning": "Peacock's feathers are very beautiful."
  },
  {
    "sentence": "तोता हरी मिर्च मजे से खाता है।",
    "meaning": "The parrot eats green chili with joy."
  },
  {
    "sentence": "मछली पानी में तैरती रहती है।",
    "meaning": "The fish keeps swimming in the water."
  },
  {
    "sentence": "कछुआ धीरे-धीरे आगे बढ़ता है।",
    "meaning": "The tortoise moves forward slowly."
  },
  {
    "sentence": "मेंढक पानी में कूद रहा है।",
    "meaning": "The frog is jumping in the water."
  },
  {
    "sentence": "बगीचे में मीठे आम के पेड़ हैं।",
    "meaning": "There are sweet mango trees in the garden."
  },
  {
    "sentence": "आज हम सब मिलकर खेलेंगे।",
    "meaning": "Today we all will play together."
  },
  {
    "sentence": "रीता अपनी गुड़िया से खेलती है।",
    "meaning": "Rita plays with her doll."
  },
  {
    "sentence": "नीम का पेड़ बहुत बड़ा है।",
    "meaning": "The neem tree is very big."
  },
  {
    "sentence": "तुलसी का पौधा बहुत पवित्र है।",
    "meaning": "The basil plant is very holy."
  },
  {
    "sentence": "गुलाब की खुशबू बहुत अच्छी है।",
    "meaning": "The fragrance of rose is very good."
  },
  {
    "sentence": "सूरज पूरब से उदय होता है।",
    "meaning": "The sun rises from the east."
  },
  {
    "sentence": "रात को तारे चमकते हैं।",
    "meaning": "Stars shine at night."
  },
  {
    "sentence": "आकाश का रंग नीला होता है।",
    "meaning": "The color of the sky is blue."
  },
  {
    "sentence": "पानी की हर बूंद कीमती है।",
    "meaning": "Every drop of water is precious."
  },
  {
    "sentence": "सदा सच बोलना अच्छी आदत है।",
    "meaning": "Always speaking the truth is a good habit."
  },
  {
    "sentence": "हमें बड़ों का आदर करना चाहिए।",
    "meaning": "We should respect our elders."
  },
  {
    "sentence": "मां मुझे बहुत प्यार करती हैं।",
    "meaning": "Mother loves me very much."
  },
  {
    "sentence": "पिताजी रोज़ सैर पर जाते हैं।",
    "meaning": "Father goes for a walk daily."
  },
  {
    "sentence": "दादी जी मंदिर में पूजा करती हैं।",
    "meaning": "Grandmother worships in the temple."
  },
  {
    "sentence": "भाई मुझे खिलौना लाकर देता है।",
    "meaning": "Brother gets me a toy."
  },
  {
    "sentence": "बहन मेरे साथ गृहकार्य करती है।",
    "meaning": "Sister does homework with me."
  },
  {
    "sentence": "आज रात को खीर बनेगी।",
    "meaning": "Rice pudding will be made tonight."
  },
  {
    "sentence": "मुझे समोसा खाना बहुत अच्छा लगता है।",
    "meaning": "I like eating samosas very much."
  },
  {
    "sentence": "जलेबी बहुत मीठी और गोल होती है।",
    "meaning": "Jelebi is very sweet and round."
  },
  {
    "sentence": "गरम रोटी पर घी लगाओ।",
    "meaning": "Put clarified butter on the hot flatbread."
  },
  {
    "sentence": "चावल और दाल सेहत के लिए अच्छे हैं।",
    "meaning": "Rice and lentils are good for health."
  },
  {
    "sentence": "दूध पीने से ताकत मिलती है।",
    "meaning": "Drinking milk gives strength."
  },
  {
    "sentence": "नारियल का पानी मीठा होता है।",
    "meaning": "Coconut water is sweet."
  },
  {
    "sentence": "बगीचे में हरी घास उगी है।",
    "meaning": "Green grass is growing in the garden."
  },
  {
    "sentence": "लाल टमाटर सेहत के लिए अच्छे हैं।",
    "meaning": "Red tomatoes are good for health."
  },
  {
    "sentence": "हरे मटर बहुत मीठे होते हैं।",
    "meaning": "Green peas are very sweet."
  },
  {
    "sentence": "खरगोश गाजर चबाकर खाता है।",
    "meaning": "The rabbit chews and eats carrots."
  },
  {
    "sentence": "गिलहरी पेड़ पर चढ़ रही है।",
    "meaning": "The squirrel is climbing the tree."
  },
  {
    "sentence": "आकाश में इंद्रधनुष दिखाई दिया।",
    "meaning": "A rainbow appeared in the sky."
  },
  {
    "sentence": "सुबह जल्दी उठना अच्छा होता है।",
    "meaning": "It is good to wake up early in the morning."
  },
  {
    "sentence": "रात को समय पर सोना चाहिए।",
    "meaning": "One should sleep on time at night."
  },
  {
    "sentence": "हाथ धोकर खाना खाना चाहिए।",
    "meaning": "One should eat food after washing hands."
  },
  {
    "sentence": "घर को हमेशा साफ रखना चाहिए।",
    "meaning": "One should always keep the house clean."
  },
  {
    "sentence": "कमरे की खिड़की खोल दो।",
    "meaning": "Open the window of the room."
  },
  {
    "sentence": "दरवाजे पर ताला लगा है।",
    "meaning": "The door is locked."
  },
  {
    "sentence": "मेज पर गिलास रखा है।",
    "meaning": "A glass is kept on the table."
  },
  {
    "sentence": "थाली में गरम खाना परोसो।",
    "meaning": "Serve hot food on the plate."
  },
  {
    "sentence": "चाय कप में गरम है।",
    "meaning": "Tea is hot in the cup."
  },
  {
    "sentence": "चमचे से सूप पीना चाहिए।",
    "meaning": "One should drink soup with a spoon."
  },
  {
    "sentence": "अलमारी में कपड़े रख दो।",
    "meaning": "Keep the clothes in the cupboard."
  },
  {
    "sentence": "दीवार पर सुंदर घड़ी लगी है।",
    "meaning": "A beautiful clock is on the wall."
  },
  {
    "sentence": "गर्मी में पंखा ठंडी हवा देता है।",
    "meaning": "In summer, the fan gives cool air."
  },
  {
    "sentence": "साइकिल चलाना एक अच्छा व्यायाम है।",
    "meaning": "Riding a bicycle is a good exercise."
  },
  {
    "sentence": "लाल कार सड़क पर चल रही है।",
    "meaning": "The red car is running on the road."
  },
  {
    "sentence": "मेट्रो से यात्रा आसान होती है।",
    "meaning": "Traveling by metro is easy."
  },
  {
    "sentence": "नाव पानी में तैर रही है।",
    "meaning": "The boat is floating in the water."
  },
  {
    "sentence": "हवाई जहाज बादलों में उड़ता है।",
    "meaning": "The airplane flies in the clouds."
  },
  {
    "sentence": "रेलगाड़ी छुक-छुक करके चलती है।",
    "meaning": "The train runs making chug-chug sound."
  },
  {
    "sentence": "मुझे नीली कमीज पहननी है।",
    "meaning": "I want to wear the blue shirt."
  },
  {
    "sentence": "सिर पर सुंदर टोपी लगाओ।",
    "meaning": "Put a beautiful cap on the head."
  },
  {
    "sentence": "दादी जी लाल साड़ी पहनती हैं।",
    "meaning": "Grandmother wears a red saree."
  },
  {
    "sentence": "भाई नया स्वेटर लाया है।",
    "meaning": "Brother has brought a new sweater."
  },
  {
    "sentence": "सर्दियों में गरम कोट पहनो।",
    "meaning": "Wear a warm coat in winter."
  },
  {
    "sentence": "जूता पहनकर बाहर खेलने जाओ।",
    "meaning": "Go outside to play wearing shoes."
  },
  {
    "sentence": "आज आसमान में धूप खिली है।",
    "meaning": "Today sunshine is bright in the sky."
  }
],
  advanced: [
  {
    "sentence": "हमें प्रतिदिन विद्यालय जाना चाहिए।",
    "meaning": "We should go to school every day."
  },
  {
    "sentence": "पुस्तकों से हमें उत्तम ज्ञान मिलता है।",
    "meaning": "We get excellent knowledge from books."
  },
  {
    "sentence": "सच्चा मित्र हमेशा हमारी सहायता करता है।",
    "meaning": "A true friend always helps us."
  },
  {
    "sentence": "चन्द्रमा रात के अंधकार को दूर करता है।",
    "meaning": "The moon removes the darkness of the night."
  },
  {
    "sentence": "ज्ञान प्राप्त करने के लिए निरंतर अभ्यास आवश्यक है।",
    "meaning": "Continuous practice is necessary to gain knowledge."
  },
  {
    "sentence": "कठिन परिश्रम करने से ही सफलता प्राप्त होती है।",
    "meaning": "Success is achieved only by hard work."
  },
  {
    "sentence": "पेड़ हमें शुद्ध ऑक्सीजन और मीठे फल देते हैं।",
    "meaning": "Trees give us pure oxygen and sweet fruits."
  },
  {
    "sentence": "हवा में रंग-बिरंगे सुंदर गुब्बारे उड़ रहे हैं।",
    "meaning": "Colorful and beautiful balloons are flying in the air."
  },
  {
    "sentence": "शिक्षकों का आदर करना हमारा परम कर्तव्य है।",
    "meaning": "It is our utmost duty to respect our teachers."
  },
  {
    "sentence": "सदा सत्य और मधुर बोलना एक अच्छी आदत है।",
    "meaning": "Always speaking truth and sweet is a good habit."
  },
  {
    "sentence": "डॉक्टर अस्पताल में बीमार मरीजों का इलाज करते हैं।",
    "meaning": "Doctors treat sick patients in the hospital."
  },
  {
    "sentence": "सैनिक देश की सीमाओं की रक्षा बहादुरी से करते हैं।",
    "meaning": "Soldiers defend the borders of the country bravely."
  },
  {
    "sentence": "किसान खेतों में अनाज उगाने के लिए कड़ी मेहनत करता है।",
    "meaning": "The farmer works hard to grow grains in the fields."
  },
  {
    "sentence": "वैज्ञानिक नए-नए आविष्कारों द्वारा दुनिया को बदलते हैं।",
    "meaning": "Scientists change the world with new inventions."
  },
  {
    "sentence": "कंप्यूटर आज के युग का एक महत्वपूर्ण आविष्कार है।",
    "meaning": "Computer is an important invention of today's era."
  },
  {
    "sentence": "इंटरनेट के माध्यम से हम दुनिया भर की जानकारी पा सकते हैं।",
    "meaning": "We can get information worldwide through the internet."
  },
  {
    "sentence": "अंतरिक्ष यात्री अंतरिक्ष में नए ग्रहों की खोज करते हैं।",
    "meaning": "Astronauts explore new planets in space."
  },
  {
    "sentence": "सूर्य हमारे सौरमंडल का केंद्र और ऊर्जा का मुख्य स्रोत है।",
    "meaning": "The sun is the center of our solar system and main source of energy."
  },
  {
    "sentence": "पृथ्वी सूर्य के चारों ओर परिक्रमा करती है।",
    "meaning": "The earth orbits around the sun."
  },
  {
    "sentence": "इंद्रधनुष वर्षा के बाद आकाश में सात रंगों में चमकता है।",
    "meaning": "The rainbow shines in seven colors in the sky after rain."
  },
  {
    "sentence": "बिजली कड़कने से बादलों में तेज आवाज होती है।",
    "meaning": "Lightening creates a loud sound in the clouds."
  },
  {
    "sentence": "हिमालय भारत की उत्तर दिशा में स्थित एक विशाल पर्वत है।",
    "meaning": "Himalaya is a huge mountain situated in the north of India."
  },
  {
    "sentence": "गंगा नदी को भारत में अत्यंत पवित्र माना जाता है।",
    "meaning": "Ganga river is considered very holy in India."
  },
  {
    "sentence": "योग और प्राणायाम करने से हमारा स्वास्थ्य ठीक रहता है।",
    "meaning": "Doing yoga and pranayama keeps our health good."
  },
  {
    "sentence": "प्रतिदिन व्यायाम करने से शरीर स्वस्थ और बलवान बनता है।",
    "meaning": "Daily exercise makes the body healthy and strong."
  },
  {
    "sentence": "संतुलित आहार लेने से कमजोरी दूर होती है और ताकत बढ़ती है।",
    "meaning": "Taking balanced diet removes weakness and increases strength."
  },
  {
    "sentence": "पर्याप्त नींद हमारे मस्तिष्क को विश्राम प्रदान करती है।",
    "meaning": "Adequate sleep provides rest to our brain."
  },
  {
    "sentence": "हमें प्लास्टिक का उपयोग कम करके पर्यावरण को बचाना चाहिए।",
    "meaning": "We should save the environment by reducing the use of plastic."
  },
  {
    "sentence": "स्वतंत्रता हमारा जन्मसिद्ध अधिकार है और हम इसे मनाते हैं।",
    "meaning": "Freedom is our birthright and we celebrate it."
  },
  {
    "sentence": "अहिंसा के मार्ग पर चलकर शांति स्थापित की जा सकती है।",
    "meaning": "Peace can be established by walking on the path of non-violence."
  },
  {
    "sentence": "एकता में बड़ी शक्ति होती है जो हर कठिनाई को हराती है।",
    "meaning": "There is great strength in unity which defeats every difficulty."
  },
  {
    "sentence": "मित्रता का रिश्ता जीवन में बहुत महत्वपूर्ण स्थान रखता है।",
    "meaning": "The relationship of friendship holds a very important place in life."
  },
  {
    "sentence": "ईमानदारी और सच्चाई से जीने वाला व्यक्ति सम्मान पाता है।",
    "meaning": "A person living with honesty and truth gets respect."
  },
  {
    "sentence": "दयालु मनुष्य हमेशा दूसरों के प्रति सहानुभूति रखता है।",
    "meaning": "A kind man always has empathy towards others."
  },
  {
    "sentence": "साहसी बालक ने डूबते हुए बच्चे की जान बचाई।",
    "meaning": "The brave boy saved the life of the drowning child."
  },
  {
    "sentence": "प्राचीन काल के स्मारक हमारी संस्कृति के प्रतीक हैं।",
    "meaning": "Monuments of ancient times are symbols of our culture."
  },
  {
    "sentence": "दीवाली रोशनी का त्योहार है जिसमें दीये जलाए जाते हैं।",
    "meaning": "Diwali is the festival of lights in which lamps are lit."
  },
  {
    "sentence": "होली रंगों का उत्सव है जिसमें सब मिलकर खुशियाँ मनाते हैं।",
    "meaning": "Holi is the festival of colors in which everyone celebrates joy together."
  },
  {
    "sentence": "रक्षाबंधन भाई और बहन के पवित्र प्रेम का त्योहार है।",
    "meaning": "Rakshabandhan is the festival of holy love of brother and sister."
  },
  {
    "sentence": "विद्यालय के वार्षिक उत्सव में छात्रों ने सुंदर नाटक किया।",
    "meaning": "Students performed a beautiful play in the annual function of the school."
  },
  {
    "sentence": "गणित के कठिन प्रश्नों को हल करने के लिए अभ्यास करें।",
    "meaning": "Practice to solve difficult questions of mathematics."
  },
  {
    "sentence": "पुस्तकालय में बैठकर शांत रहकर अध्ययन करना चाहिए।",
    "meaning": "One should sit quietly in the library and study."
  },
  {
    "sentence": "परीक्षा में अच्छे अंक पाने के लिए मन लगाकर पढ़ना होगा।",
    "meaning": "To get good marks in exam, one has to study attentively."
  },
  {
    "sentence": "समय का सदुपयोग करने से हर लक्ष्य प्राप्त किया जा सकता है।",
    "meaning": "Every goal can be achieved by making good use of time."
  },
  {
    "sentence": "जल संरक्षण करना हमारी आने वाली पीढ़ियों के लिए आवश्यक है।",
    "meaning": "Conserving water is necessary for our future generations."
  },
  {
    "sentence": "वृक्षारोपण करने से धरती हरी-भरी और सुंदर बनती है।",
    "meaning": "Planting trees makes the earth green and beautiful."
  },
  {
    "sentence": "सफाई रखने से संक्रामक बीमारियाँ दूर रहती हैं।",
    "meaning": "Keeping clean keeps infectious diseases away."
  },
  {
    "sentence": "पौष्टिक भोजन करने से हमारे शरीर का विकास सही होता है।",
    "meaning": "Eating nutritious food leads to proper development of our body."
  },
  {
    "sentence": "व्याकरण सीखने से हम भाषा को शुद्ध लिखना सीखते हैं।",
    "meaning": "Learning grammar teaches us to write language correctly."
  },
  {
    "sentence": "शब्दों के सही उच्चारण से हमारा आत्मविश्वास बढ़ता है।",
    "meaning": "Correct pronunciation of words increases our self-confidence."
  },
  {
    "sentence": "हमें भोजन का अनादर नहीं करना चाहिए और इसे बचाना चाहिए।",
    "meaning": "We should not disrespect food and should save it."
  },
  {
    "sentence": "माता-पिता की आज्ञा का पालन करना हमारा धर्म है।",
    "meaning": "Obeying our parents is our duty."
  },
  {
    "sentence": "झील का पानी शांत और बहुत गहरा था।",
    "meaning": "The water of the lake was calm and very deep."
  },
  {
    "sentence": "रेगिस्तान की सूखी रेत में ऊँट आसानी से चल सकता है।",
    "meaning": "Camel can walk easily in the dry sand of the desert."
  },
  {
    "sentence": "बिजली की बचत करना देश के विकास में योगदान देना है।",
    "meaning": "Saving electricity is contributing to the development of the country."
  },
  {
    "sentence": "अस्पताल में डॉक्टरों और नर्सों ने मरीजों की खूब सेवा की।",
    "meaning": "Doctors and nurses served the patients very well in the hospital."
  },
  {
    "sentence": "हमें अपने देश की प्रगति पर गर्व होना चाहिए।",
    "meaning": "We should be proud of the progress of our country."
  },
  {
    "sentence": "सड़क सुरक्षा के नियमों का पालन करना अत्यंत आवश्यक है।",
    "meaning": "Following road safety rules is extremely necessary."
  },
  {
    "sentence": "रेलगाड़ी समय पर स्टेशन पर पहुँच गई।",
    "meaning": "The train reached the station on time."
  },
  {
    "sentence": "पुजारी ने मंदिर में भगवान की आरती की और प्रसाद बांटा।",
    "meaning": "The priest performed deity's prayer in the temple and distributed offerings."
  },
  {
    "sentence": "सच्ची कला मनुष्य के मन को शांति और आनंद देती है।",
    "meaning": "True art gives peace and bliss to the human mind."
  },
  {
    "sentence": "कवि ने प्रकृति के सौंदर्य पर एक सुंदर कविता लिखी।",
    "meaning": "The poet wrote a beautiful poem on the beauty of nature."
  },
  {
    "sentence": "पत्रकार ने समाचार पत्र में देश की मुख्य खबर छापी।",
    "meaning": "The journalist published the main news of the country in the newspaper."
  },
  {
    "sentence": "न्यायाधीश ने सत्य को देखकर न्यायपूर्ण फैसला सुनाया।",
    "meaning": "The judge delivered a just decision looking at the truth."
  },
  {
    "sentence": "खिलाड़ियों ने खेल के मैदान में उत्कृष्ट प्रदर्शन किया।",
    "meaning": "Players showed excellent performance in the sports ground."
  },
  {
    "sentence": "दीपावली की रात को पूरा शहर दीयों से जगमगा उठा।",
    "meaning": "On the night of Deepavali, the whole city lit up with lamps."
  },
  {
    "sentence": "मरीजों को समय पर दवा देना नर्स का काम होता है।",
    "meaning": "Giving medicine to patients on time is the nurse's job."
  },
  {
    "sentence": "अंतरिक्ष यान ने सफलतापूर्वक मंगल ग्रह पर कदम रखा।",
    "meaning": "The spacecraft successfully stepped onto the planet Mars."
  },
  {
    "sentence": "कंप्यूटर पर काम करना आज बहुत आसान हो गया है।",
    "meaning": "Working on a computer has become very easy today."
  },
  {
    "sentence": "शिक्षक ने श्यामपट्ट पर सुंदर अक्षरों में वाक्य लिखा।",
    "meaning": "The teacher wrote sentences in beautiful letters on the blackboard."
  },
  {
    "sentence": "हमें कूड़ा हमेशा कूड़ेदान में ही डालना चाहिए।",
    "meaning": "We should always throw garbage in the dustbin only."
  },
  {
    "sentence": "सुबह की ठंडी हवा हमारे फेफड़ों को ताजगी देती है।",
    "meaning": "The cool morning air refreshes our lungs."
  },
  {
    "sentence": "जल ही जीवन है, इसके बिना पृथ्वी पर जीवन असंभव है।",
    "meaning": "Water is life, without it life on earth is impossible."
  },
  {
    "sentence": "क्रोधित होने से हमारी सोचने की शक्ति कम हो जाती है।",
    "meaning": "Being angry reduces our power of thinking."
  },
  {
    "sentence": "हमें हमेशा बुजुर्गों की सहायता के लिए तैयार रहना चाहिए।",
    "meaning": "We should always be ready to help the elderly."
  },
  {
    "sentence": "ईमानदारी सबसे अच्छी नीति है जो हमें सम्मान दिलाती है।",
    "meaning": "Honesty is the best policy which brings us respect."
  },
  {
    "sentence": "सुंदर बगीचे में भाँति-भाँति के फूल खिले हुए हैं।",
    "meaning": "Different kinds of flowers are blooming in the beautiful garden."
  },
  {
    "sentence": "विद्यार्थी ने प्रतियोगिता में प्रथम स्थान प्राप्त किया।",
    "meaning": "The student secured the first position in the competition."
  },
  {
    "sentence": "बाँसुरी की मधुर तान सुनकर सबका मन खुश हो गया।",
    "meaning": "Everyone's mind became happy hearing the sweet tune of the flute."
  },
  {
    "sentence": "नदी के किनारे सुंदर नारियल के पेड़ खड़े हैं।",
    "meaning": "Beautiful coconut trees are standing on the bank of the river."
  },
  {
    "sentence": "सदाचारी व्यक्ति हमेशा दूसरों की भलाई के बारे में सोचता है।",
    "meaning": "A virtuous person always thinks about the welfare of others."
  },
  {
    "sentence": "हमें अपने गृहकार्य को समय पर पूरा करने की आदत डालनी चाहिए।",
    "meaning": "We should make a habit of completing our homework on time."
  },
  {
    "sentence": "हॉकी भारत का राष्ट्रीय खेल है और यह बहुत लोकप्रिय है।",
    "meaning": "Hockey is the national game of India and is very popular."
  },
  {
    "sentence": "व्यापारी ने अपनी दुकान में नया सामान सजा कर रखा है।",
    "meaning": "The merchant has decorated new goods in his shop."
  },
  {
    "sentence": "साहस और धैर्य रखने से हर संकट का सामना किया जा सकता है।",
    "meaning": "Every crisis can be faced by having courage and patience."
  },
  {
    "sentence": "नदियों का जल खेतों की सिंचाई के लिए बहुत उपयोगी होता है।",
    "meaning": "River water is very useful for irrigation of fields."
  },
  {
    "sentence": "इतिहास की कहानियों से हमें बहुत कुछ सीखने को मिलता है।",
    "meaning": "We get to learn a lot from the stories of history."
  },
  {
    "sentence": "स्वच्छता अपनाने से हमारा तन और मन दोनों स्वस्थ रहते हैं।",
    "meaning": "By adopting cleanliness, both our body and mind remain healthy."
  },
  {
    "sentence": "कबूतर शांति का प्रतीक माना जाता है और यह बहुत सीधा होता है।",
    "meaning": "Pigeon is considered a symbol of peace and is very innocent."
  },
  {
    "sentence": "वैज्ञानिकों के कठोर परिश्रम से देश ने अंतरिक्ष क्षेत्र में प्रगति की।",
    "meaning": "Through the hard work of scientists, the country progressed in the space sector."
  },
  {
    "sentence": "सड़क पर वाहन चलाते समय यातायात के संकेतों का ध्यान रखें।",
    "meaning": "Pay attention to traffic signals while driving vehicles on the road."
  },
  {
    "sentence": "सच्चा ज्ञान वही है जो हमें विनम्र और परोपकारी बनाए।",
    "meaning": "True knowledge is that which makes us humble and charitable."
  },
  {
    "sentence": "पुस्तकें हमारी सबसे अच्छी मित्र हैं जो हमेशा हमारा मार्गदर्शन करती हैं।",
    "meaning": "Books are our best friends which always guide us."
  },
  {
    "sentence": "पर्यावरण की रक्षा के लिए हमें अधिक से अधिक पेड़ लगाने चाहिए।",
    "meaning": "To protect the environment, we should plant more and more trees."
  },
  {
    "sentence": "स्वस्थ शरीर में ही स्वस्थ मस्तिष्क का निवास होता है।",
    "meaning": "A healthy mind resides only in a healthy body."
  },
  {
    "sentence": "प्राचीन काल के ऋषियों ने वेदों की रचना की थी।",
    "meaning": "The sages of ancient times had composed the Vedas."
  },
  {
    "sentence": "दूरबीन की सहायता से हम रात के आकाश में ग्रहों को स्पष्ट देख सकते हैं।",
    "meaning": "With the help of a telescope, we can clearly see planets in the night sky."
  },
  {
    "sentence": "विद्युत की बचत करना भविष्य के लिए संसाधन सुरक्षित करना है।",
    "meaning": "Saving electricity is securing resources for the future."
  },
  {
    "sentence": "सदा परोपकार करना और दूसरों की सेवा करना ही सबसे बड़ा धर्म है।",
    "meaning": "Always doing charity and serving others is the greatest duty."
  },
  {
    "sentence": "हमें अपने चारों ओर के वातावरण को साफ और हरा-भरा रखना चाहिए।",
    "meaning": "We should keep our surrounding environment clean and green."
  }
]
};

export const stories = [
  {
    id: 'thirsty-crow',
    title: 'प्यासा कौआ (The Thirsty Crow)',
    level: 'intermediate',
    text: 'एक बार एक कौआ बहुत प्यासा था। वह पानी की खोज में इधर-उधर उड़ रहा था। उसे एक बागीचे में एक घड़ा दिखाई दिया। घड़े में पानी बहुत कम था। कौवे की चोंच पानी तक नहीं पहुँच पा रही थी। उसने एक उपाय सोचा। उसने छोटे-छोटे कंकड़ घड़े में डालने शुरू किए। पानी धीरे-धीरे ऊपर आ गया। कौवे ने खुशी-खुशी पानी पिया और वहां से उड़ गया। सीख: जहाँ चाह वहाँ राह।',
    vocab: {
      'कौआ': 'Crow', 'प्यासा': 'Thirsty', 'खोज': 'Search',
      'बागीचे': 'Garden', 'घड़ा': 'Pitcher', 'चोंच': 'Beak',
      'उपाय': 'Trick', 'कंकड़': 'Pebbles', 'खुशी-खुशी': 'Happily',
      'सीख': 'Moral', 'चाह': 'Will', 'राह': 'Way'
    }
  },
  {
    id: 'greedy-dog',
    title: 'लालची कुत्ता (The Greedy Dog)',
    level: 'intermediate',
    text: 'एक कुत्ते को एक स्वादिष्ट हड्डी मिली। वह उसे अपने मुंह में दबाकर नदी के ऊपर बने एक छोटे पुल से गुजर रहा था। जब उसने नदी के साफ पानी में देखा, तो उसे अपनी ही परछाईं दिखाई दी। उसने सोचा कि पानी में कोई दूसरा कुत्ता खड़ा है जिसके मुंह में भी एक हड्डी है। उसने वह हड्डी भी छीनने की सोची। जैसे ही उसने भौंकने के लिए अपना मुंह खोला, उसके मुंह की हड्डी नदी में गिर गई। सीख: लालच बुरी बला है।',
    vocab: {
      'कुत्ते': 'Dog', 'स्वादिष्ट': 'Delicious', 'हड्डी': 'Bone',
      'पुल': 'Bridge', 'परछाईं': 'Reflection', 'छीनने': 'To Snatch',
      'भौंकने': 'To Bark', 'लालच': 'Greed', 'सीख': 'Moral'
    }
  }
];

export const poems = [
  {
    id: 'fish-queen',
    title: 'मछली जल की रानी है',
    level: 'beginner',
    text: 'मछली जल की रानी है, जीवन उसका पानी है। हाथ लगाओ तो डर जाएगी, बाहर निकालो तो मर जाएगी। दो दिन रखो तो सड़ जाएगी, पानी में डालो तो तैर जाएगी।',
    vocab: {
      'मछली': 'Fish', 'जल': 'Water', 'रानी': 'Queen',
      'जीवन': 'Life', 'डर': 'Fear', 'बाहर': 'Outside', 'तैर': 'Swim'
    }
  },
  {
    id: 'chanda-mama',
    title: 'चंदा मामा दूर के',
    level: 'intermediate',
    text: 'चंदा मामा दूर के, पुए पकाएं बूर के। आप खाएं थाली में, मुन्ने को दें प्याली में। प्याली गई टूट, मुन्ना गया रूठ। लाएंगे नई प्यालियां, बजा बजा के तालियां।',
    vocab: {
      'चंदा मामा': 'Uncle Moon', 'दूर': 'Far away', 'पुए': 'Sweet fritters',
      'थाली': 'Plate', 'प्याली': 'Small bowl', 'टूट': 'Break',
      'रूठ': 'Upset', 'तालियां': 'Claps'
    }
  }
];
