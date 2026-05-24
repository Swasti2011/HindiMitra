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
    { sentence: 'नल पर जल भर।', meaning: 'Fill water at the tap.' },
    { sentence: 'घर चल कर पढ़।', meaning: 'Go home and study.' },
    { sentence: 'कमल बटन दबा।', meaning: 'Kamal, press the button.' },
    { sentence: 'फल चख कर रख।', meaning: 'Taste the fruit and keep it.' },
    { sentence: 'अब बस पर चढ़।', meaning: 'Now get on the bus.' }
  ],
  intermediate: [
    { sentence: 'सूरज निकल आया है।', meaning: 'The sun has come out.' },
    { sentence: 'तितली फूल पर बैठी है।', meaning: 'The butterfly is sitting on the flower.' },
    { sentence: 'रमन पाठशाला जाकर पढ़।', meaning: 'Raman, go to school and study.' },
    { sentence: 'मोर बाग में नाच रहा है।', meaning: 'The peacock is dancing in the garden.' },
    { sentence: 'चूहा बिल्ली से डर गया।', meaning: 'The mouse got scared of the cat.' }
  ],
  advanced: [
    { sentence: 'हमें प्रतिदिन विद्यालय जाना चाहिए।', meaning: 'We should go to school every day.' },
    { sentence: 'पुस्तकों से हमें ज्ञान मिलता है।', meaning: 'We get knowledge from books.' },
    { sentence: 'सच्चा मित्र हमेशा सहायता करता है।', meaning: 'A true friend always helps.' },
    { sentence: 'चन्द्रमा रात को चमकता है।', meaning: 'The moon shines at night.' },
    { sentence: 'ज्ञान प्राप्त करने के लिए अभ्यास आवश्यक है।', meaning: 'Practice is necessary to gain knowledge.' }
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
