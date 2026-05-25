"""
Generates words_large.js for Hindi Mitra — curated valid Hindi words only.
Each entry: (hindi_word, english_meaning, level)
  level: 'b'=beginner  'i'=intermediate  'a'=advanced
"""
import json, random

WORDS = [
  # ── BODY PARTS (शरीर के अंग) ──────────────────────────────────────────────
  ("सिर","Head","b"), ("बाल","Hair","b"), ("आँख","Eye","b"), ("कान","Ear","b"),
  ("नाक","Nose","b"), ("मुँह","Mouth","b"), ("होंठ","Lips","b"), ("दाँत","Teeth","b"),
  ("जीभ","Tongue","b"), ("गला","Throat","b"), ("गर्दन","Neck","i"),
  ("कंधा","Shoulder","i"), ("बाँह","Arm","b"), ("हाथ","Hand","b"),
  ("उँगली","Finger","i"), ("नाखून","Fingernail","i"), ("छाती","Chest","i"),
  ("पेट","Stomach","b"), ("पीठ","Back","b"), ("कमर","Waist","b"),
  ("जाँघ","Thigh","i"), ("घुटना","Knee","i"), ("पाँव","Foot","b"),
  ("पैर","Leg","b"), ("एड़ी","Heel","i"), ("अँगूठा","Thumb","i"),
  ("हड्डी","Bone","i"), ("खून","Blood","b"), ("नस","Vein/Nerve","b"),
  ("भौंह","Eyebrow","i"), ("पलक","Eyelid","b"), ("माथा","Forehead","i"),
  ("गाल","Cheek","b"), ("ठोड़ी","Chin","i"), ("दिमाग","Brain","i"),
  ("दिल","Heart","b"), ("फेफड़ा","Lung","i"), ("जिगर","Liver","i"),
  ("गुर्दा","Kidney","i"), ("हथेली","Palm","i"), ("कोहनी","Elbow","i"),

  # ── ANIMALS (जानवर) ──────────────────────────────────────────────────────
  ("शेर","Lion","b"), ("बाघ","Tiger","b"), ("हाथी","Elephant","i"),
  ("घोड़ा","Horse","i"), ("गाय","Cow","b"), ("बैल","Bull","b"),
  ("भैंस","Buffalo","i"), ("बकरी","Goat","i"), ("भेड़","Sheep","b"),
  ("सूअर","Pig","i"), ("कुत्ता","Dog","i"), ("बिल्ली","Cat","i"),
  ("चूहा","Mouse","i"), ("खरगोश","Rabbit","a"), ("गिलहरी","Squirrel","a"),
  ("बंदर","Monkey","i"), ("भालू","Bear","i"), ("हिरण","Deer","i"),
  ("लोमड़ी","Fox","i"), ("भेड़िया","Wolf","a"), ("सियार","Jackal","i"),
  ("गैंडा","Rhinoceros","i"), ("ऊँट","Camel","b"), ("साँप","Snake","b"),
  ("कछुआ","Tortoise","i"), ("मेंढक","Frog","i"), ("छिपकली","Lizard","a"),
  ("नेवला","Mongoose","i"), ("बिच्छू","Scorpion","i"), ("केकड़ा","Crab","i"),
  ("मछली","Fish","i"), ("गधा","Donkey","i"), ("याक","Yak","b"),
  ("नाग","Cobra","b"), ("अजगर","Python","i"), ("चीता","Cheetah","i"),
  ("जिराफ","Giraffe","i"), ("जेब्रा","Zebra","i"), ("चीतल","Spotted deer","i"),
  ("नीलगाय","Nilgai","i"), ("बारहसिंगा","Barasingha","a"),

  # ── BIRDS (पक्षी) ─────────────────────────────────────────────────────────
  ("मोर","Peacock","b"), ("तोता","Parrot","b"), ("मैना","Myna","i"),
  ("कोयल","Cuckoo","i"), ("उल्लू","Owl","b"), ("कबूतर","Pigeon","i"),
  ("कौआ","Crow","i"), ("गरुड़","Eagle","i"), ("हंस","Swan","b"),
  ("बगुला","Heron","i"), ("बतख","Duck","i"), ("मुर्गा","Rooster","i"),
  ("मुर्गी","Hen","i"), ("गौरैया","Sparrow","a"), ("बाज","Falcon","b"),
  ("चील","Kite","b"), ("गिद्ध","Vulture","i"), ("सारस","Crane","i"),
  ("नीलकंठ","Roller bird","a"), ("चकोर","Chukar","i"),

  # ── TREES AND PLANTS (पेड़-पौधे) ─────────────────────────────────────────
  ("आम","Mango","b"), ("नीम","Neem","b"), ("पीपल","Peepal","i"),
  ("बरगद","Banyan","i"), ("अशोक","Ashoka","i"), ("चीड़","Pine","b"),
  ("सागौन","Teak","i"), ("बाँस","Bamboo","b"), ("ताड़","Palm","b"),
  ("गुलाब","Rose","i"), ("कमल","Lotus","b"), ("चमेली","Jasmine","a"),
  ("गेंदा","Marigold","i"), ("सूरजमुखी","Sunflower","a"), ("तुलसी","Basil","a"),
  ("घास","Grass","b"), ("लता","Creeper","b"), ("बबूल","Acacia","i"),
  ("खजूर","Date palm","i"), ("जामुन","Indian plum","i"),

  # ── FRUITS (फल) ──────────────────────────────────────────────────────────
  ("सेब","Apple","b"), ("केला","Banana","i"), ("संतरा","Orange","a"),
  ("नींबू","Lemon","i"), ("अंगूर","Grapes","i"), ("अमरूद","Guava","i"),
  ("पपीता","Papaya","a"), ("तरबूज","Watermelon","a"), ("खरबूजा","Muskmelon","a"),
  ("अनार","Pomegranate","i"), ("लीची","Lychee","i"), ("आड़ू","Peach","i"),
  ("नाशपाती","Pear","a"), ("चीकू","Sapodilla","i"), ("बेर","Jujube","b"),
  ("कटहल","Jackfruit","a"), ("कीवी","Kiwi","i"), ("खजूर","Date","i"),
  ("अंजीर","Fig","i"), ("नारियल","Coconut","a"), ("आँवला","Gooseberry","a"),
  ("शहतूत","Mulberry","a"), ("आलूबुखारा","Plum","a"), ("फालसा","Phalsa","i"),

  # ── VEGETABLES (सब्जियाँ) ─────────────────────────────────────────────────
  ("आलू","Potato","i"), ("प्याज","Onion","i"), ("टमाटर","Tomato","a"),
  ("पालक","Spinach","i"), ("गोभी","Cabbage","i"), ("मटर","Peas","b"),
  ("बैंगन","Eggplant","i"), ("भिंडी","Okra","i"), ("लौकी","Bottle gourd","i"),
  ("करेला","Bitter gourd","a"), ("कद्दू","Pumpkin","i"), ("खीरा","Cucumber","i"),
  ("मूली","Radish","i"), ("गाजर","Carrot","i"), ("शलजम","Turnip","i"),
  ("चुकंदर","Beetroot","a"), ("लहसुन","Garlic","i"), ("अदरक","Ginger","i"),
  ("हल्दी","Turmeric","i"), ("मिर्च","Chili","b"), ("धनिया","Coriander","a"),
  ("मेथी","Fenugreek","i"), ("पुदीना","Mint","i"), ("परवल","Pointed gourd","i"),
  ("शकरकंद","Sweet potato","a"), ("फूलगोभी","Cauliflower","a"),
  ("पत्तागोभी","Cabbage","a"), ("सरसों","Mustard","a"), ("कच्चु","Taro","i"),

  # ── FOOD AND DRINKS (खाना-पीना) ──────────────────────────────────────────
  ("रोटी","Flatbread","i"), ("चावल","Rice","i"), ("दाल","Lentils","b"),
  ("सब्जी","Vegetable dish","i"), ("दूध","Milk","b"), ("दही","Yogurt","i"),
  ("मक्खन","Butter","a"), ("घी","Clarified butter","b"), ("तेल","Oil","b"),
  ("नमक","Salt","b"), ("चीनी","Sugar","i"), ("गुड़","Jaggery","b"),
  ("शहद","Honey","i"), ("चाय","Tea","b"), ("जूस","Juice","b"),
  ("पानी","Water","i"), ("लस्सी","Lassi","i"), ("छाछ","Buttermilk","b"),
  ("खीर","Rice pudding","b"), ("हलवा","Halwa","i"), ("पूरी","Fried bread","i"),
  ("समोसा","Samosa","a"), ("जलेबी","Jalebi","a"), ("रसगुल्ला","Rasgulla","a"),
  ("बर्फी","Burfi","i"), ("लड्डू","Laddu","i"), ("खिचड़ी","Khichdi","a"),
  ("बिरयानी","Biryani","a"), ("पुलाव","Pulao","i"), ("कढ़ी","Kadhi","i"),
  ("अचार","Pickle","i"), ("चटनी","Chutney","i"), ("रायता","Raita","i"),
  ("पापड़","Papad","b"), ("नमकीन","Savory snack","a"), ("मिठाई","Sweets","a"),
  ("पनीर","Cottage cheese","i"), ("अंडा","Egg","i"), ("मांस","Meat","b"),
  ("चिकन","Chicken","i"), ("सूप","Soup","b"), ("सलाद","Salad","i"),
  ("इडली","Idli","i"), ("डोसा","Dosa","i"), ("उपमा","Upma","b"),
  ("पोहा","Poha","b"), ("ढोकला","Dhokla","i"), ("परांठा","Paratha","a"),
  ("माखन","White butter","i"), ("रबड़ी","Rabdi","i"), ("पेड़ा","Peda","i"),

  # ── SPICES (मसाले) ────────────────────────────────────────────────────────
  ("जीरा","Cumin","i"), ("हींग","Asafoetida","b"), ("इलाइची","Cardamom","a"),
  ("लौंग","Clove","b"), ("दालचीनी","Cinnamon","a"), ("राई","Mustard seeds","b"),
  ("सौंफ","Fennel","b"), ("अजवाइन","Carom seeds","a"), ("केसर","Saffron","i"),
  ("जायफल","Nutmeg","a"), ("तेजपत्ता","Bay leaf","a"),

  # ── COLORS (रंग) ──────────────────────────────────────────────────────────
  ("लाल","Red","b"), ("हरा","Green","b"), ("पीला","Yellow","b"),
  ("काला","Black","b"), ("सफेद","White","i"), ("नीला","Blue","i"),
  ("गुलाबी","Pink","a"), ("नारंगी","Orange color","a"), ("भूरा","Brown","i"),
  ("बैंगनी","Purple","a"), ("सुनहरा","Golden","a"), ("चाँदी","Silver","i"),
  ("मरून","Maroon","i"), ("आसमानी","Sky blue","a"), ("गहरा","Dark","i"),
  ("हल्का","Light","i"), ("रंगीन","Colorful","a"), ("सादा","Plain","i"),

  # ── NUMBERS (संख्याएँ) ─────────────────────────────────────────────────────
  ("एक","One","b"), ("दो","Two","b"), ("तीन","Three","b"), ("चार","Four","b"),
  ("पाँच","Five","b"), ("छह","Six","b"), ("सात","Seven","b"), ("आठ","Eight","b"),
  ("नौ","Nine","b"), ("दस","Ten","b"), ("ग्यारह","Eleven","i"),
  ("बारह","Twelve","i"), ("तेरह","Thirteen","i"), ("चौदह","Fourteen","i"),
  ("पंद्रह","Fifteen","i"), ("सोलह","Sixteen","i"), ("सत्रह","Seventeen","i"),
  ("अठारह","Eighteen","i"), ("उन्नीस","Nineteen","i"), ("बीस","Twenty","b"),
  ("तीस","Thirty","b"), ("चालीस","Forty","i"), ("पचास","Fifty","i"),
  ("साठ","Sixty","b"), ("सत्तर","Seventy","a"), ("अस्सी","Eighty","i"),
  ("नब्बे","Ninety","i"), ("सौ","Hundred","b"), ("हजार","Thousand","i"),
  ("लाख","Hundred thousand","b"), ("करोड़","Ten million","i"),
  ("पहला","First","i"), ("दूसरा","Second","i"), ("तीसरा","Third","i"),
  ("आधा","Half","i"), ("दोगुना","Double","a"), ("तिगुना","Triple","a"),

  # ── DAYS AND TIME (दिन/समय) ───────────────────────────────────────────────
  ("सोमवार","Monday","a"), ("मंगलवार","Tuesday","a"), ("बुधवार","Wednesday","a"),
  ("गुरुवार","Thursday","a"), ("शुक्रवार","Friday","a"), ("शनिवार","Saturday","a"),
  ("रविवार","Sunday","a"), ("सुबह","Morning","i"), ("दोपहर","Afternoon","a"),
  ("शाम","Evening","b"), ("रात","Night","b"), ("भोर","Dawn","b"),
  ("दिन","Day","b"), ("सप्ताह","Week","a"), ("महीना","Month","a"),
  ("साल","Year","b"), ("घंटा","Hour","i"), ("मिनट","Minute","i"),
  ("समय","Time","b"), ("कल","Yesterday/Tomorrow","b"),
  ("परसों","Day after tomorrow","a"), ("आज","Today","b"),
  ("जनवरी","January","a"), ("फरवरी","February","a"), ("मार्च","March","b"),
  ("अप्रैल","April","a"), ("मई","May","b"), ("जून","June","b"),
  ("जुलाई","July","a"), ("अगस्त","August","a"), ("सितंबर","September","a"),
  ("अक्तूबर","October","a"), ("नवंबर","November","a"), ("दिसंबर","December","a"),
  ("वसंत","Spring","i"), ("ग्रीष्म","Summer season","a"), ("वर्षा","Monsoon","a"),
  ("शरद","Autumn","b"), ("शीत","Winter (formal)","b"),
  ("गर्मी","Summer/Heat","i"), ("सर्दी","Winter/Cold","i"),
  ("बारिश","Rain","i"), ("बरसात","Rainy season","a"),

  # ── FAMILY (परिवार) ────────────────────────────────────────────────────────
  ("माँ","Mother","b"), ("बाप","Father","b"), ("माता","Mother (formal)","i"),
  ("पिता","Father (formal)","i"), ("भाई","Brother","i"), ("बहन","Sister","i"),
  ("दादा","Paternal grandfather","i"), ("दादी","Paternal grandmother","i"),
  ("नाना","Maternal grandfather","i"), ("नानी","Maternal grandmother","i"),
  ("चाचा","Uncle (paternal)","i"), ("चाची","Aunt (paternal)","i"),
  ("मामा","Uncle (maternal)","i"), ("मामी","Aunt (maternal)","i"),
  ("बुआ","Father's sister","i"), ("मौसी","Mother's sister","i"),
  ("बेटा","Son","i"), ("बेटी","Daughter","i"), ("पोता","Grandson","i"),
  ("पोती","Granddaughter","i"), ("पति","Husband","i"), ("पत्नी","Wife","a"),
  ("भाभी","Brother's wife","i"), ("देवर","Husband's brother","i"),
  ("साला","Wife's brother","i"), ("ससुर","Father-in-law","i"),
  ("सास","Mother-in-law","b"), ("दामाद","Son-in-law","i"),
  ("बहू","Daughter-in-law","b"), ("परिवार","Family","a"),
  ("रिश्तेदार","Relative","a"),

  # ── HOUSE AND ITEMS (घर) ──────────────────────────────────────────────────
  ("घर","House","b"), ("मकान","Building","i"), ("कमरा","Room","i"),
  ("दरवाजा","Door","a"), ("खिड़की","Window","a"), ("दीवार","Wall","i"),
  ("छत","Ceiling","b"), ("फर्श","Floor","b"), ("सीढ़ी","Stairs","i"),
  ("आँगन","Courtyard","i"), ("बरामदा","Veranda","a"), ("रसोई","Kitchen","i"),
  ("बालकनी","Balcony","a"), ("बगीचा","Garden","i"), ("कुर्सी","Chair","a"),
  ("मेज","Table","b"), ("पलंग","Bed","b"), ("तकिया","Pillow","a"),
  ("चादर","Sheet","i"), ("कंबल","Blanket","i"), ("रजाई","Quilt","i"),
  ("अलमारी","Cupboard","a"), ("शीशा","Mirror","i"), ("घड़ी","Clock","i"),
  ("पंखा","Fan","i"), ("फ्रिज","Refrigerator","b"), ("बर्तन","Utensils","i"),
  ("थाली","Plate","i"), ("कटोरी","Bowl","a"), ("गिलास","Glass","i"),
  ("लोटा","Water pot","i"), ("तवा","Griddle","b"), ("कड़ाई","Wok","i"),
  ("चमचा","Spoon","i"), ("झाड़ू","Broom","i"), ("बाल्टी","Bucket","i"),
  ("नल","Tap","b"), ("ताला","Lock","b"), ("चाभी","Key","i"),
  ("रस्सी","Rope","i"), ("धागा","Thread","i"), ("कपड़ा","Cloth","i"),
  ("साबुन","Soap","i"), ("तौलिया","Towel","a"), ("कंघी","Comb","i"),

  # ── CLOTHES (कपड़े) ────────────────────────────────────────────────────────
  ("कमीज","Shirt","i"), ("पैंट","Trousers","b"), ("साड़ी","Saree","i"),
  ("कुर्ता","Kurta","i"), ("पाजामा","Pajama","a"), ("धोती","Dhoti","i"),
  ("दुपट्टा","Dupatta","a"), ("जूता","Shoe","i"), ("चप्पल","Slipper","i"),
  ("जुराब","Sock","i"), ("टोपी","Cap","i"), ("दस्ताना","Glove","a"),
  ("मफलर","Muffler","a"), ("स्वेटर","Sweater","a"), ("जैकेट","Jacket","i"),
  ("कोट","Coat","b"), ("बनियान","Vest","a"), ("हार","Necklace","b"),
  ("बाली","Earring","i"), ("अंगूठी","Ring","a"), ("कंगन","Bracelet","i"),
  ("पायल","Anklet","i"), ("बिंदी","Bindi","i"), ("चश्मा","Spectacles","i"),
  ("घड़ी","Watch","i"),

  # ── NATURE AND GEOGRAPHY (प्रकृति) ───────────────────────────────────────
  ("पहाड़","Mountain","i"), ("नदी","River","i"), ("झील","Lake","b"),
  ("समुद्र","Sea","a"), ("तालाब","Pond","i"), ("कुआँ","Well","b"),
  ("नहर","Canal","i"), ("झरना","Waterfall","i"), ("जंगल","Forest","i"),
  ("मैदान","Plain","i"), ("रेगिस्तान","Desert","a"), ("घाटी","Valley","i"),
  ("पठार","Plateau","i"), ("द्वीप","Island","i"), ("तट","Shore","b"),
  ("मिट्टी","Soil","i"), ("पत्थर","Stone","a"), ("रेत","Sand","b"),
  ("हवा","Air/Wind","b"), ("आग","Fire","b"), ("धूप","Sunshine","b"),
  ("छाँव","Shade","b"), ("अंधेरा","Darkness","a"), ("रोशनी","Light","i"),
  ("बादल","Cloud","i"), ("बारिश","Rain","i"), ("बर्फ","Snow","b"),
  ("ओस","Dew","b"), ("धुंध","Fog","b"), ("तूफान","Storm","i"),
  ("आंधी","Dust storm","i"), ("बाढ़","Flood","b"), ("भूकंप","Earthquake","a"),
  ("ज्वालामुखी","Volcano","a"), ("इंद्रधनुष","Rainbow","a"),
  ("बिजली","Lightning","i"), ("सूरज","Sun","i"), ("चाँद","Moon","b"),
  ("तारा","Star","i"), ("आकाश","Sky","i"), ("गंगा","Ganga river","b"),
  ("यमुना","Yamuna river","a"), ("हिमालय","Himalayas","a"),
  ("उत्तर","North","a"), ("दक्षिण","South","i"), ("पूर्व","East","b"),
  ("पश्चिम","West","a"), ("पर्वत","Mountain","i"), ("शिखर","Peak","i"),
  ("गुफा","Cave","i"), ("खाई","Ravine","i"),

  # ── SCHOOL AND EDUCATION (शिक्षा) ────────────────────────────────────────
  ("किताब","Book","a"), ("कॉपी","Notebook","i"), ("पेंसिल","Pencil","a"),
  ("रबर","Eraser","i"), ("कलम","Pen","b"), ("बस्ता","School bag","i"),
  ("वर्दी","Uniform","i"), ("स्कूल","School","a"), ("कक्षा","Classroom","a"),
  ("चाक","Chalk","b"), ("शिक्षक","Teacher","a"), ("छात्र","Student","i"),
  ("परीक्षा","Exam","a"), ("प्रश्न","Question","a"), ("उत्तर","Answer","a"),
  ("पाठ","Lesson","b"), ("होमवर्क","Homework","a"), ("विषय","Subject","i"),
  ("हिंदी","Hindi","i"), ("गणित","Mathematics","i"), ("विज्ञान","Science","a"),
  ("इतिहास","History","a"), ("भूगोल","Geography","i"), ("अंग्रेजी","English","a"),
  ("संगीत","Music","a"), ("खेल","Sports","b"), ("पुस्तकालय","Library","a"),
  ("अंक","Marks","b"), ("पुरस्कार","Prize","a"), ("कॉलेज","College","i"),
  ("विश्वविद्यालय","University","a"), ("शोध","Research","b"),
  ("अभ्यास","Practice","a"), ("मेहनत","Hard work","i"), ("लगन","Dedication","b"),
  ("ज्ञान","Knowledge","b"), ("शिक्षा","Education","a"), ("पठन","Reading","i"),
  ("लेखन","Writing","i"), ("गणना","Calculation","a"), ("जोड़","Addition","b"),
  ("घटाव","Subtraction","i"), ("गुणा","Multiplication","i"), ("भाग","Division","b"),
  ("कविता","Poem","a"), ("निबंध","Essay","i"), ("व्याकरण","Grammar","a"),
  ("शब्द","Word","b"), ("वाक्य","Sentence","b"), ("अक्षर","Letter","i"),
  ("मात्रा","Vowel mark","i"), ("वर्णमाला","Alphabet","a"),
  ("उच्चारण","Pronunciation","a"),

  # ── PROFESSIONS (पेशे) ────────────────────────────────────────────────────
  ("डॉक्टर","Doctor","i"), ("नर्स","Nurse","b"), ("वकील","Lawyer","i"),
  ("इंजीनियर","Engineer","a"), ("पुलिस","Police","i"), ("सैनिक","Soldier","i"),
  ("किसान","Farmer","i"), ("मजदूर","Laborer","i"), ("व्यापारी","Merchant","a"),
  ("दुकानदार","Shopkeeper","a"), ("नाई","Barber","b"), ("धोबी","Washerman","i"),
  ("दर्जी","Tailor","i"), ("सुनार","Goldsmith","i"), ("लुहार","Blacksmith","i"),
  ("कुम्हार","Potter","i"), ("बढ़ई","Carpenter","i"), ("रसोइया","Cook","a"),
  ("माली","Gardener","i"), ("चालक","Driver","i"), ("पायलट","Pilot","i"),
  ("नाविक","Sailor","i"), ("मछुआरा","Fisherman","a"), ("पुजारी","Priest","a"),
  ("वैज्ञानिक","Scientist","a"), ("लेखक","Writer","i"), ("कवि","Poet","i"),
  ("कलाकार","Artist","a"), ("गायक","Singer","i"), ("नर्तक","Dancer","i"),
  ("अभिनेता","Actor","a"), ("पत्रकार","Journalist","a"), ("नेता","Leader","b"),
  ("राजा","King","b"), ("रानी","Queen","i"), ("मंत्री","Minister","i"),
  ("न्यायाधीश","Judge","a"), ("खिलाड़ी","Player","a"),

  # ── PLACES (स्थान) ────────────────────────────────────────────────────────
  ("गाँव","Village","b"), ("शहर","City","i"), ("नगर","Town","i"),
  ("देश","Country","b"), ("राज्य","State","b"), ("जिला","District","i"),
  ("बाजार","Market","i"), ("दुकान","Shop","i"), ("मंदिर","Temple","i"),
  ("मस्जिद","Mosque","i"), ("गिरजाघर","Church","a"), ("गुरुद्वारा","Gurudwara","a"),
  ("अस्पताल","Hospital","a"), ("बैंक","Bank","b"), ("डाकघर","Post office","i"),
  ("थाना","Police station","i"), ("पार्क","Park","b"), ("बाग","Garden","b"),
  ("किला","Fort","i"), ("महल","Palace","b"), ("मठ","Monastery","b"),
  ("आश्रम","Ashram","i"), ("तीर्थ","Pilgrimage site","b"),
  ("सड़क","Road","i"), ("पुल","Bridge","b"), ("गली","Lane","b"),
  ("चौक","Square","b"), ("चौराहा","Crossroads","a"), ("कारखाना","Factory","a"),
  ("होटल","Hotel","i"), ("सिनेमा","Cinema","a"), ("मॉल","Mall","b"),
  ("राजधानी","Capital","a"), ("सरकार","Government","a"),

  # ── TRANSPORT (यातायात) ───────────────────────────────────────────────────
  ("गाड़ी","Vehicle","i"), ("कार","Car","b"), ("बस","Bus","b"),
  ("ट्रक","Truck","b"), ("रेलगाड़ी","Train","a"), ("मेट्रो","Metro","i"),
  ("साइकिल","Bicycle","a"), ("मोटरसाइकिल","Motorcycle","a"),
  ("स्कूटर","Scooter","a"), ("रिक्शा","Rickshaw","i"), ("टैक्सी","Taxi","i"),
  ("हवाई जहाज","Aeroplane","a"), ("नाव","Boat","b"), ("जहाज","Ship","i"),
  ("राकेट","Rocket","i"), ("टिकट","Ticket","i"), ("यात्रा","Journey","i"),
  ("सफर","Trip","b"), ("रेलवे","Railway","a"),

  # ── SPORTS AND GAMES (खेल) ────────────────────────────────────────────────
  ("क्रिकेट","Cricket","a"), ("फुटबॉल","Football","a"), ("हॉकी","Hockey","i"),
  ("कबड्डी","Kabaddi","a"), ("कुश्ती","Wrestling","a"), ("तैराकी","Swimming","a"),
  ("दौड़","Running","b"), ("कूद","Jump","b"), ("बैडमिंटन","Badminton","a"),
  ("टेनिस","Tennis","i"), ("शतरंज","Chess","a"), ("लूडो","Ludo","i"),
  ("पतंग","Kite","i"), ("गेंद","Ball","b"), ("बल्ला","Bat","b"),
  ("जाल","Net","b"), ("गोल","Goal","b"), ("टीम","Team","b"),
  ("मैच","Match","b"), ("ट्रॉफी","Trophy","a"), ("पदक","Medal","b"),
  ("जीत","Victory","b"), ("हार","Defeat","b"),

  # ── ARTS AND CULTURE (कला-संस्कृति) ─────────────────────────────────────
  ("नृत्य","Dance","b"), ("गायन","Singing","i"), ("चित्रकला","Painting","a"),
  ("मूर्तिकला","Sculpture","a"), ("नाटक","Drama","i"), ("गीत","Song","b"),
  ("राग","Raga","b"), ("ताल","Rhythm","b"), ("फिल्म","Film","b"),
  ("रेडियो","Radio","i"), ("अखबार","Newspaper","i"), ("पत्रिका","Magazine","a"),
  ("तबला","Tabla","i"), ("सितार","Sitar","i"), ("बाँसुरी","Flute","i"),
  ("वीणा","Veena","i"), ("हारमोनियम","Harmonium","a"), ("ढोलक","Dholak","i"),
  ("त्योहार","Festival","a"), ("उत्सव","Celebration","a"), ("पूजा","Worship","i"),
  ("मेला","Fair","b"), ("दीवाली","Diwali","a"), ("होली","Holi","i"),
  ("ईद","Eid","b"), ("क्रिसमस","Christmas","a"), ("नवरात्रि","Navratri","a"),
  ("दशहरा","Dussehra","a"), ("रक्षाबंधन","Rakshabandhan","a"),
  ("बैसाखी","Baisakhi","a"), ("जन्माष्टमी","Janmashtami","a"),

  # ── VERBS – INFINITIVE FORMS (क्रियाएँ) ──────────────────────────────────
  ("खाना","To eat","i"), ("पीना","To drink","i"), ("सोना","To sleep","i"),
  ("जागना","To wake up","i"), ("बोलना","To speak","i"), ("सुनना","To listen","i"),
  ("देखना","To see","i"), ("पढ़ना","To read","i"), ("लिखना","To write","i"),
  ("चलना","To walk","i"), ("दौड़ना","To run","i"), ("उड़ना","To fly","i"),
  ("तैरना","To swim","i"), ("कूदना","To jump","i"), ("नाचना","To dance","i"),
  ("गाना","To sing","i"), ("हँसना","To laugh","i"), ("रोना","To cry","i"),
  ("सीखना","To learn","i"), ("सिखाना","To teach","i"), ("खेलना","To play","i"),
  ("आना","To come","b"), ("जाना","To go","b"), ("बैठना","To sit","i"),
  ("उठना","To rise","i"), ("लेना","To take","b"), ("देना","To give","b"),
  ("बनाना","To make","i"), ("टूटना","To break","i"), ("जोड़ना","To add","i"),
  ("काटना","To cut","i"), ("खोलना","To open","i"), ("ढूँढना","To search","i"),
  ("मिलना","To meet","i"), ("भूलना","To forget","i"), ("समझना","To understand","a"),
  ("सोचना","To think","i"), ("पूछना","To ask","i"), ("बताना","To tell","i"),
  ("खरीदना","To buy","a"), ("बेचना","To sell","i"), ("पहनना","To wear","i"),
  ("धोना","To wash","i"), ("पकाना","To cook","i"), ("भेजना","To send","i"),
  ("पाना","To receive","b"), ("डरना","To fear","i"), ("हारना","To lose","i"),
  ("जीतना","To win","i"), ("थकना","To tire","i"), ("रुकना","To stop","i"),
  ("भागना","To flee","i"), ("फेंकना","To throw","i"), ("पकड़ना","To catch","i"),
  ("छोड़ना","To leave","i"), ("लेटना","To lie down","i"), ("मारना","To hit","i"),
  ("बचाना","To save","i"), ("चुनना","To choose","i"), ("बदलना","To change","i"),
  ("घूमना","To roam","i"), ("चाहना","To want","i"), ("रहना","To stay","i"),
  ("होना","To be/happen","b"), ("करना","To do","b"),

  # ── ADJECTIVES (विशेषण) ───────────────────────────────────────────────────
  ("अच्छा","Good","i"), ("बुरा","Bad","b"), ("बड़ा","Big","b"),
  ("छोटा","Small","i"), ("लंबा","Long/Tall","i"), ("नाटा","Short","i"),
  ("मोटा","Fat","i"), ("पतला","Thin","i"), ("गरम","Hot","b"),
  ("ठंडा","Cold","i"), ("मीठा","Sweet","i"), ("कड़वा","Bitter","i"),
  ("खट्टा","Sour","i"), ("तीखा","Spicy","i"), ("फीका","Bland","i"),
  ("सुंदर","Beautiful","i"), ("बदसूरत","Ugly","a"), ("नया","New","b"),
  ("पुराना","Old","a"), ("ताजा","Fresh","i"), ("बासी","Stale","i"),
  ("साफ","Clean","b"), ("गंदा","Dirty","i"), ("भारी","Heavy","i"),
  ("हल्का","Light","i"), ("कठिन","Difficult","i"), ("आसान","Easy","i"),
  ("सरल","Simple","i"), ("जटिल","Complex","i"), ("तेज","Fast/Sharp","b"),
  ("धीमा","Slow","i"), ("शांत","Calm","b"), ("खुश","Happy","b"),
  ("उदास","Sad","i"), ("क्रोधित","Angry","a"), ("थका हुआ","Tired","a"),
  ("स्वस्थ","Healthy","a"), ("बीमार","Sick","i"), ("अमीर","Rich","i"),
  ("गरीब","Poor","i"), ("चालाक","Clever","i"), ("मूर्ख","Foolish","i"),
  ("बुद्धिमान","Intelligent","a"), ("ईमानदार","Honest","a"),
  ("दयालु","Kind","a"), ("क्रूर","Cruel","i"), ("साहसी","Brave","a"),
  ("कायर","Cowardly","i"), ("सच्चा","Truthful","i"), ("झूठा","Liar","i"),
  ("मेहनती","Hardworking","a"), ("भरा","Full","b"), ("खाली","Empty","i"),
  ("गहरा","Deep","i"), ("उथला","Shallow","i"), ("सीधा","Straight","i"),
  ("टेढ़ा","Crooked","i"), ("गोल","Round","b"), ("ऊँचा","High","b"),
  ("नीचा","Low","i"), ("प्राचीन","Ancient","a"), ("आधुनिक","Modern","a"),
  ("विशेष","Special","i"), ("प्रसिद्ध","Famous","a"), ("साधारण","Ordinary","a"),
  ("महत्वपूर्ण","Important","a"), ("पक्का","Firm/Ripe","i"), ("कच्चा","Raw","i"),
  ("खुला","Open","i"), ("बंद","Closed","b"), ("रोचक","Interesting","a"),
  ("सच","True","b"), ("झूठ","False/Lie","b"),

  # ── ABSTRACT NOUNS (भाव-संज्ञाएँ) ────────────────────────────────────────
  ("प्यार","Love","b"), ("नफरत","Hatred","i"), ("खुशी","Happiness","i"),
  ("दुख","Sorrow","b"), ("गुस्सा","Anger","b"), ("डर","Fear","b"),
  ("शर्म","Shame","b"), ("घमंड","Arrogance","i"), ("दया","Compassion","b"),
  ("करुणा","Mercy","a"), ("श्रद्धा","Reverence","a"), ("विश्वास","Trust","a"),
  ("शक","Doubt","b"), ("उम्मीद","Hope","i"), ("निराशा","Disappointment","a"),
  ("उत्साह","Enthusiasm","a"), ("साहस","Courage","i"), ("धैर्य","Patience","i"),
  ("क्षमा","Forgiveness","i"), ("न्याय","Justice","b"), ("सत्य","Truth","b"),
  ("बुद्धि","Intelligence","i"), ("स्मृति","Memory","a"), ("कल्पना","Imagination","a"),
  ("सपना","Dream","b"), ("लक्ष्य","Goal","b"), ("सफलता","Success","a"),
  ("असफलता","Failure","a"), ("स्वतंत्रता","Freedom","a"), ("शांति","Peace","b"),
  ("युद्ध","War","b"), ("हिंसा","Violence","a"), ("अहिंसा","Non-violence","a"),
  ("एकता","Unity","i"), ("भाईचारा","Brotherhood","a"), ("दोस्ती","Friendship","i"),
  ("परंपरा","Tradition","a"), ("संस्कृति","Culture","a"), ("धर्म","Religion","b"),
  ("कर्म","Action/Karma","b"), ("भाग्य","Fortune","i"), ("जीवन","Life","i"),
  ("मृत्यु","Death","a"), ("जन्म","Birth","b"), ("अनुभव","Experience","a"),
  ("आनंद","Bliss","i"), ("सुख","Happiness","b"), ("पीड़ा","Pain/Anguish","i"),
  ("संतोष","Contentment","a"), ("तनाव","Stress","i"), ("राहत","Relief","i"),
  ("गर्व","Pride","b"), ("ईर्ष्या","Jealousy","a"), ("लालच","Greed","b"),

  # ── HEALTH (स्वास्थ्य) ────────────────────────────────────────────────────
  ("सेहत","Health","i"), ("बुखार","Fever","i"), ("खाँसी","Cough","i"),
  ("जुकाम","Cold illness","i"), ("सिरदर्द","Headache","a"), ("घाव","Wound","b"),
  ("चोट","Injury","b"), ("दर्द","Pain","b"), ("दवा","Medicine","b"),
  ("गोली","Tablet","i"), ("इंजेक्शन","Injection","a"), ("टीका","Vaccine","b"),
  ("बीमारी","Disease","a"), ("इलाज","Treatment","i"), ("योग","Yoga","b"),
  ("व्यायाम","Exercise","a"), ("पोषण","Nutrition","a"), ("नींद","Sleep","b"),
  ("आराम","Rest","i"), ("थकान","Fatigue","i"), ("कमजोरी","Weakness","a"),
  ("ताकत","Strength","b"),

  # ── SCIENCE (विज्ञान) ─────────────────────────────────────────────────────
  ("ऊर्जा","Energy","i"), ("शक्ति","Power","b"), ("चुंबक","Magnet","i"),
  ("विद्युत","Electricity","a"), ("ताप","Heat","b"), ("प्रकाश","Light","i"),
  ("ध्वनि","Sound","i"), ("वायु","Air","b"), ("जल","Water (formal)","b"),
  ("अग्नि","Fire (formal)","b"), ("पृथ्वी","Earth","a"), ("परमाणु","Atom","a"),
  ("कोशिका","Cell","a"), ("जीवाणु","Bacteria","a"), ("विषाणु","Virus","a"),
  ("रासायनिक","Chemical","a"), ("प्रयोग","Experiment","a"), ("आविष्कार","Invention","a"),
  ("खोज","Discovery","b"), ("तकनीक","Technology","a"), ("कंप्यूटर","Computer","a"),
  ("इंटरनेट","Internet","a"), ("रोबोट","Robot","i"), ("अंतरिक्ष","Space","a"),
  ("ग्रह","Planet","b"), ("उपग्रह","Satellite","a"), ("आकाशगंगा","Galaxy","a"),
  ("धूमकेतु","Comet","a"), ("सौरमंडल","Solar system","a"), ("दूरबीन","Telescope","a"),

  # ── RELIGION (धर्म) ────────────────────────────────────────────────────────
  ("भगवान","God","i"), ("ईश्वर","God (formal)","a"), ("आत्मा","Soul","i"),
  ("मोक्ष","Liberation","b"), ("पाप","Sin","b"), ("पुण्य","Virtue","b"),
  ("स्वर्ग","Heaven","i"), ("नरक","Hell","b"), ("प्रार्थना","Prayer","a"),
  ("मंत्र","Mantra","i"), ("व्रत","Fast/Vow","b"), ("दान","Donation","b"),
  ("सेवा","Service","b"), ("तप","Penance","b"), ("गुरु","Guru","b"),
  ("शिष्य","Disciple","i"), ("वेद","Veda","b"), ("गीता","Gita","i"),
  ("रामायण","Ramayana","a"), ("महाभारत","Mahabharata","a"),

  # ── COMMON SIMPLE & FUNCTION WORDS ────────────────────────────────────────
  ("हाँ","Yes","b"), ("नहीं","No","i"), ("ठीक","OK","b"), ("शायद","Maybe","i"),
  ("जरूर","Certainly","i"), ("अब","Now","b"), ("तब","Then","b"),
  ("यहाँ","Here","b"), ("वहाँ","There","i"), ("ऊपर","Above","b"),
  ("नीचे","Below","i"), ("आगे","Forward","i"), ("पीछे","Behind","i"),
  ("अंदर","Inside","i"), ("बाहर","Outside","i"), ("पास","Near","b"),
  ("दूर","Far","b"), ("बीच","Middle","b"), ("साथ","Together","b"),
  ("अलग","Different","b"), ("सब","All","b"), ("कुछ","Some","b"),
  ("कोई","Someone","b"), ("कभी","Sometimes","i"), ("हमेशा","Always","i"),
  ("अक्सर","Often","i"), ("जल्दी","Quickly","i"), ("धीरे","Slowly","i"),
  ("ध्यान","Attention","i"), ("बहुत","Very/Much","b"), ("थोड़ा","A little","i"),
  ("ज्यादा","More","i"), ("कम","Less","b"), ("बात","Talk","b"),
  ("काम","Work","b"), ("जगह","Place","b"), ("रास्ता","Way","a"),
  ("कारण","Reason","i"), ("परिणाम","Result","a"), ("फायदा","Benefit","a"),
  ("नुकसान","Loss","i"), ("पैसा","Money","i"), ("नाम","Name","b"),
  ("जानकारी","Information","a"), ("खबर","News","b"), ("संदेश","Message","i"),
  ("नियम","Rule","b"), ("कानून","Law","i"), ("जरूरत","Need","a"),
  ("इच्छा","Desire","i"), ("आदत","Habit","i"), ("योजना","Plan","i"),
  ("प्रयास","Effort","a"), ("नतीजा","Result","a"), ("मदद","Help","b"),
  ("मैं","I","b"), ("हम","We","b"), ("तुम","You (inf)","b"),
  ("आप","You (formal)","b"), ("वह","He/She","b"), ("यह","This","b"),
  ("क्या","What","b"), ("क्यों","Why","b"), ("कैसे","How","b"),
  ("कहाँ","Where","b"), ("कब","When","b"), ("कौन","Who","b"),
  ("लेकिन","But","a"), ("और","And","b"), ("या","Or","b"), ("भी","Also","b"),
  ("तक","Until","b"), ("से","From","b"), ("में","In","b"), ("पर","On","b"),
  ("का","Of","b"), ("की","Of (f)","b"), ("को","To","b"), ("है","Is","b"),
  ("था","Was","b"), ("गया","Went","b"), ("आया","Came","b"),
  ("करो","Do","b"), ("कहा","Said","b"), ("देखा","Saw","b"), ("मिला","Got","b"),
  ("दुनिया","World","i"), ("इंसान","Human","i"), ("बच्चा","Child","i"),
  ("जवान","Youth","i"), ("बूढ़ा","Old person","b"), ("आदमी","Man","i"),
  ("औरत","Woman","i"), ("लड़का","Boy","i"), ("लड़की","Girl","i"),
  ("दिल","Heart","b"), ("आकाश","Sky","i"), ("जमीन","Ground","i"),
  ("संसार","World","a"), ("जनता","Public","i"), ("नागरिक","Citizen","a"),
  ("सूर्य","Sun (formal)","b"), ("चंद्रमा","Moon","a"), ("पृथ्वी","Earth","a"),
  ("पर्यावरण","Environment","a"), ("प्रकृति","Nature","a"),
  ("अधिकार","Right","a"), ("कर्तव्य","Duty","i"), ("जिम्मेदारी","Responsibility","a"),
  ("रिश्ता","Relationship","a"), ("दोस्त","Friend","b"), ("शत्रु","Enemy","i"),
  ("पड़ोसी","Neighbor","a"), ("मेहमान","Guest","i"), ("घर का","Domestic","a"),
  ("देश भक्ति","Patriotism","a"), ("स्वाभिमान","Self-respect","a"),
  ("ईमान","Honesty/Faith","i"), ("पहचान","Identity","i"),
  ("आजादी","Freedom","a"), ("सम्मान","Respect","i"), ("इज्जत","Honor","i"),
  ("गरिमा","Dignity","a"), ("खुशहाली","Prosperity","a"), ("तरक्की","Progress","a"),
  ("सफर","Journey","b"), ("ख्वाब","Dream","b"), ("जज्बा","Passion","b"),
  ("हौसला","Courage","i"), ("ज़िद","Stubbornness","b"), ("उमंग","Enthusiasm","i"),
  ("अरमान","Aspiration","i"), ("चाहत","Desire","i"), ("रौनक","Liveliness","i"),
  ("चमक","Shine","b"), ("झलक","Glimpse","b"), ("महक","Fragrance","b"),
  ("खुशबू","Fragrance","i"), ("सुगंध","Aroma","i"), ("रंग","Color","b"),
  ("छाप","Impression","b"), ("याद","Memory","b"), ("सोच","Thought","b"),
  ("नज़र","Gaze/View","b"), ("दृष्टि","Vision","i"), ("नजरिया","Perspective","a"),
  ("पहल","Initiative","b"), ("शुरुआत","Beginning","a"), ("अंत","End","b"),
  ("बदलाव","Change","a"), ("सुधार","Improvement","i"), ("विकास","Development","a"),
  ("उन्नति","Progress","a"), ("प्रगति","Progress","a"),
]

# De-duplicate by word
seen = set()
deduped = []
for entry in WORDS:
  word = entry[0]
  if word not in seen:
    seen.add(word)
    deduped.append(entry)

beginner     = [{"word": w, "meaning": m} for w, m, l in deduped if l == 'b']
intermediate = [{"word": w, "meaning": m} for w, m, l in deduped if l == 'i']
advanced     = [{"word": w, "meaning": m} for w, m, l in deduped if l == 'a']

random.seed(42)
random.shuffle(beginner)
random.shuffle(intermediate)
random.shuffle(advanced)

total = len(beginner)+len(intermediate)+len(advanced)
print(f"Beginner     : {len(beginner)}")
print(f"Intermediate : {len(intermediate)}")
print(f"Advanced     : {len(advanced)}")
print(f"Total        : {total}")

output = r"C:\Users\vijay\.gemini\antigravity\scratch\hindi-reading-companion\js\data\words_large.js"
with open(output, "w", encoding="utf-8") as f:
  f.write("// Hindi Mitra — Curated Hindi Word Database\n")
  f.write(f"// {total} verified valid Hindi words\n")
  f.write("// Levels: beginner | intermediate | advanced\n\n")
  f.write("export const largeWords = {\n")
  f.write("  beginner: ")
  json.dump(beginner, f, ensure_ascii=False, indent=2)
  f.write(",\n  intermediate: ")
  json.dump(intermediate, f, ensure_ascii=False, indent=2)
  f.write(",\n  advanced: ")
  json.dump(advanced, f, ensure_ascii=False, indent=2)
  f.write("\n};\n")

print(f"Written: {output}")
