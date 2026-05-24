// Hindi Reading Companion: Main Application Coordinator
import { vowels, consonants, words, sentences, stories, poems,
         letterGroups, matras, wordBuilderDB } from './data/content.js';
import { largeWords } from './data/words_large.js';
import { speechEngine } from './modules/speech.js';
import { tracingEngine } from './modules/tracing.js';

// Build a quick lookup map: letter → { phonetics, example, meaning }
const letterLookup = {};
[...vowels, ...consonants].forEach(item => {
  letterLookup[item.letter] = item;
});

// ─── Devanagari Unicode helpers ─────────────────────────────────────────────
// Consonants: U+0915 (क) to U+0939 (ह) + nukta forms U+0958–U+095F
// Matras    : U+093E (ा) to U+094C (ौ) + anusvara U+0902 + visarga U+0903
const RE_CONSONANT = /[\u0915-\u0939\u0958-\u095F]/g;
const RE_MATRA     = /[\u093E-\u094C\u0902\u0903]/g;

function extractConsonants(word) {
  return [...new Set(word.match(RE_CONSONANT) || [])];
}
function extractMatras(word) {
  return [...new Set(word.match(RE_MATRA) || [])];
}

const RE_SYLLABLE = /(?:[\u0915-\u0939\u0958-\u095F\u0979-\u097F\u0929\u0931\u0934]\u093C?\u094D)*[\u0915-\u0939\u0958-\u095F\u0979-\u097F\u0929\u0931\u0934]\u093C?[\u093E-\u094C\u0901-\u0903\u0955-\u0957\u0962\u0963]*|[\u0904-\u0914\u0960\u0961\u0972][\u093E-\u094C\u0901-\u0903\u0955-\u0957\u0962\u0963]*/g;

function splitSyllables(word) {
  return word.match(RE_SYLLABLE) || [word];
}

class HindiMitraApp {
  constructor() {
    // App State
    this.state = {
      level: 'beginner',
      xp: 0,
      streak: 0,
      lastActiveDate: '',
      theme: 'light',
      currentTab: 'vowels',
      activeWord: null,
      activeSentence: null,
      activeStory: null,
      storyType: 'stories',
      speedRate: 1.0,
      wordLength: 'all',     // 'all', 'short', 'long' (NEW)
      // Letter Reading Module
      lr: {
        group: null,          // currently selected group object
        letters: [],          // working list (possibly shuffled)
        index: 0,             // current flashcard index
        visitedSet: new Set() // indices that have been seen
      },
      // Word Builder
      wb: {
        selectedConsonants: new Set(),
        selectedMatras: new Set(),
        filteredWords: [],
        useCustom: false
      }
    };

    // Mascot Encouraging Phrases
    this.mascotPhrases = {
      beginner: [
        "तुम बहुत अच्छा कर रहे हो! चलो कुछ और अक्षर सीखते हैं।",
        "अक्षर ज्ञान ही ज्ञान की शुरुआत है! क, ख, ग पर ध्यान दो।",
        "वाह! प्रारंभिक स्तर बहुत मजेदार है। चलो अक्षरों को लिखना सीखते हैं!"
      ],
      intermediate: [
        "बहुत बढ़िया! मात्राओं को समझने से रीडिंग और आसान हो जाएगी।",
        "सूरज की तरह चमकना है तो हर रोज पढ़ने का अभ्यास करो!",
        "चलो एक नई छोटी कहानी पढ़ते हैं और शब्द संग्रह बढ़ाते हैं।"
      ],
      advanced: [
        "कठिन शब्दों से डरो मत! उन्हें धीरे-धीरे जोड़कर पढ़ो।",
        "अरे वाह, तुम तो उन्नत स्तर पर पहुँच गए! बहुत प्रतिभावान हो!",
        "आओ एक पूरी कहानी जोर से पढ़ें और अपना रिकॉर्ड सुधारें।"
      ]
    };

    this.confettiParticles = [];
    this.confettiActive = false;
    this.confettiCanvas = null;
    this.confettiCtx = null;
    this.storyWordsIndexMap = [];
  }

  init() {
    this.loadState();
    this.initTheme();
    this.bindDOM();
    this.initConfetti();
    this.renderDashboard();
    this.updateMascotGreeting("नमस्ते! मैं चिंटू टाइगर हूँ। चलो आज मिलकर हिंदी पढ़ें! 🐯📖");
  }

  // ─── STATE PERSISTENCE ────────────────────────────────────────────────────
  loadState() {
    const saved = localStorage.getItem('hindi_mitra_state');
    if (saved) {
      try {
        const p = JSON.parse(saved);
        this.state.level = p.level || 'beginner';
        this.state.xp    = p.xp    || 0;
        this.state.streak = p.streak || 0;
        this.state.lastActiveDate = p.lastActiveDate || '';
        this.state.theme = p.theme || 'light';
      } catch (e) { /* ignore */ }
    }
    this.checkStreak();
  }

  saveState() {
    localStorage.setItem('hindi_mitra_state', JSON.stringify({
      level: this.state.level,
      xp: this.state.xp,
      streak: this.state.streak,
      lastActiveDate: this.state.lastActiveDate,
      theme: this.state.theme
    }));
    this.updateDashboardStats();
  }

  checkStreak() {
    const today = new Date().toDateString();
    if (this.state.lastActiveDate) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (this.state.lastActiveDate !== today && this.state.lastActiveDate !== yesterday.toDateString()) {
        this.state.streak = 0;
      }
    } else {
      this.state.streak = 0;
    }
  }

  incrementXP(amount) {
    this.state.xp += amount;
    this.triggerConfetti();
    const today = new Date().toDateString();
    if (this.state.lastActiveDate !== today) {
      this.state.streak++;
      this.state.lastActiveDate = today;
    }
    this.saveState();
    this.playSuccessSound();
  }

  // ─── THEME ────────────────────────────────────────────────────────────────
  initTheme() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
  }
  toggleTheme() {
    this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
    this.initTheme();
    this.saveState();
  }
  resetAllProgress() {
    if (confirm("क्या आप अपनी सारी प्रगति और अंक शून्य करना चाहते हैं?")) {
      this.state.xp = 0;
      this.state.streak = 0;
      this.state.lastActiveDate = '';
      this.saveState();
      this.updateMascotGreeting("प्रगति रीसेट कर दी गई है! आओ फिर से शुरू करें! 🌱");
    }
  }

  // ─── DOM BINDINGS ─────────────────────────────────────────────────────────
  bindDOM() {
    document.getElementById('theme-toggle').addEventListener('click', () => this.toggleTheme());
    document.getElementById('reset-progress').addEventListener('click', () => this.resetAllProgress());

    // Navigation
    const navMap = {
      'nav-dashboard':      'view-dashboard',
      'nav-letter-reading': 'view-letter-reading',
      'nav-letters':        'view-letters',
      'nav-words':          'view-words',
      'nav-sentences':      'view-sentences',
      'nav-stories':        'view-stories'
    };
    Object.entries(navMap).forEach(([navId, viewId]) => {
      document.getElementById(navId).addEventListener('click', e =>
        this.switchView(viewId, e.currentTarget));
    });

    // Dashboard shortcut cards
    document.getElementById('card-letter-reading').addEventListener('click', () =>
      this.switchView('view-letter-reading', document.getElementById('nav-letter-reading')));
    document.getElementById('card-letters').addEventListener('click', () =>
      this.switchView('view-letters', document.getElementById('nav-letters')));
    document.getElementById('card-words').addEventListener('click', () =>
      this.switchView('view-words', document.getElementById('nav-words')));
    document.getElementById('card-sentences').addEventListener('click', () =>
      this.switchView('view-sentences', document.getElementById('nav-sentences')));
    document.getElementById('card-stories').addEventListener('click', () =>
      this.switchView('view-stories', document.getElementById('nav-stories')));

    // Level selector
    document.querySelectorAll('.level-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.state.level = e.target.getAttribute('data-level');
        this.saveState();
        const phrases = this.mascotPhrases[this.state.level];
        this.updateMascotGreeting(phrases[Math.floor(Math.random() * phrases.length)]);
      });
    });
    // Sync on load
    document.querySelectorAll('.level-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-level') === this.state.level);
    });

    // Letters Hub tabs
    document.getElementById('tab-vowels').addEventListener('click', e =>
      this.switchLettersTab('vowels', e.target));
    document.getElementById('tab-consonants').addEventListener('click', e =>
      this.switchLettersTab('consonants', e.target));

    // Word Generator
    document.getElementById('word-btn-speak').addEventListener('click', () => this.speakActiveWord());
    document.getElementById('word-btn-mic').addEventListener('click',   () => this.listenWord());
    document.getElementById('word-speed-switch').addEventListener('click', () => this.toggleSpeed('word-speed-switch'));
    document.getElementById('word-btn-next').addEventListener('click',  () => this.generateRandomWord());

    // Word Length Selector (NEW)
    document.querySelectorAll('.wl-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        document.querySelectorAll('.wl-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.state.wordLength = e.target.getAttribute('data-length');
        this.generateRandomWord();
      });
    });

    // Sentence Generator
    document.getElementById('sentence-btn-speak').addEventListener('click', () => this.speakActiveSentence());
    document.getElementById('sentence-btn-mic').addEventListener('click',   () => this.listenSentence());
    document.getElementById('sentence-speed-switch').addEventListener('click', () => this.toggleSpeed('sentence-speed-switch'));
    document.getElementById('sentence-btn-next').addEventListener('click',  () => this.generateRandomSentence());

    // Stories & Poems
    document.getElementById('tab-stories-list').addEventListener('click', e =>
      this.switchStoriesTab('stories', e.target));
    document.getElementById('tab-poems-list').addEventListener('click', e =>
      this.switchStoriesTab('poems', e.target));
    document.getElementById('reader-btn-back').addEventListener('click', () => this.closeStoryReader());
    document.getElementById('story-btn-speak').addEventListener('click', () => this.speakActiveStory());
    document.getElementById('story-btn-mic').addEventListener('click',   () => this.listenStory());
    document.getElementById('story-speed-switch').addEventListener('click', () => this.toggleSpeed('story-speed-switch'));

    // Tracing Modal
    document.getElementById('tracing-btn-close').addEventListener('click',  () => this.closeTracingModal());
    document.getElementById('tracing-btn-clear').addEventListener('click',  () => tracingEngine.clear());
    document.getElementById('tracing-btn-submit').addEventListener('click', () => this.submitTracing());

    // ── Letter Reading Module bindings ──
    this.bindLetterReadingDOM();

    // ── Word Builder bindings ──
    this.bindWordBuilderDOM();
  }

  // ─── ROUTING ──────────────────────────────────────────────────────────────
  switchView(viewId, navElement) {
    speechEngine.cancel();
    speechEngine.stopListening();
    this.resetSpeechMicStyles();

    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    if (navElement) navElement.classList.add('active');

    document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');

    if (viewId === 'view-dashboard')      this.renderDashboard();
    else if (viewId === 'view-letter-reading') this.renderLetterReadingCategories();
    else if (viewId === 'view-letters')   this.renderLetters();
    else if (viewId === 'view-words')     { this.renderWordBuilderTables(); this.generateRandomWord(); }
    else if (viewId === 'view-sentences') this.generateRandomSentence();
    else if (viewId === 'view-stories')   this.renderStoriesCatalog();
  }

  resetSpeechMicStyles() {
    ['word-btn-mic','sentence-btn-mic','story-btn-mic','lr-btn-mic'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.remove('listening');
    });
  }

  // ─── DASHBOARD ────────────────────────────────────────────────────────────
  renderDashboard() { this.updateDashboardStats(); }

  updateDashboardStats() {
    document.getElementById('stats-xp').innerText     = this.state.xp;
    document.getElementById('stats-streak').innerText = this.state.streak;
  }

  updateMascotGreeting(text) {
    const bubble = document.getElementById('mascot-bubble');
    bubble.style.opacity = 0;
    setTimeout(() => { bubble.innerText = text; bubble.style.opacity = 1; }, 200);
  }

  // ─── LETTERS TRACING HUB ─────────────────────────────────────────────────
  switchLettersTab(tab, tabEl) {
    document.querySelectorAll('#view-letters .tab-btn').forEach(b => b.classList.remove('active'));
    tabEl.classList.add('active');
    this.state.currentTab = tab;
    this.renderLetters();
  }

  renderLetters() {
    const container = document.getElementById('letters-container');
    container.innerHTML = '';
    const list = this.state.currentTab === 'vowels' ? vowels : consonants;
    list.forEach(item => {
      const card = document.createElement('div');
      card.className = 'letter-card';
      card.setAttribute('role', 'button');
      card.innerHTML = `
        <span class="letter-card-char">${item.letter}</span>
        <span class="letter-card-phonetics">${item.phonetics}</span>`;
      card.addEventListener('click', () => this.openTracingModal(item));
      container.appendChild(card);
    });
  }

  // ─── TRACING MODAL ────────────────────────────────────────────────────────
  openTracingModal(letterItem) {
    speechEngine.cancel();
    speechEngine.speak(`${letterItem.letter} से ${letterItem.example}`);
    document.getElementById('modal-letter-title').innerText =
      `अक्षर लिखें: "${letterItem.letter}" (${letterItem.example})`;
    const fb = document.getElementById('tracing-feedback');
    fb.style.display = 'none';
    fb.className = 'feedback-box';
    document.getElementById('tracing-overlay').classList.add('active');
    setTimeout(() => {
      tracingEngine.init(document.getElementById('tracing-board-canvas'), letterItem.letter);
    }, 100);
  }

  closeTracingModal() {
    document.getElementById('tracing-overlay').classList.remove('active');
  }

  submitTracing() {
    const report = tracingEngine.evaluate();
    const fb = document.getElementById('tracing-feedback');
    fb.innerText = `${report.rating} ${report.message} (सटीकता: ${report.score}%)`;
    fb.style.display = 'block';
    fb.className = 'feedback-box ' + (report.score >= 60 ? 'match-excellent' : report.score >= 35 ? 'match-good' : 'match-fail');
    if (report.success) {
      const xp = report.score >= 85 ? 15 : 10;
      this.incrementXP(xp);
      this.updateMascotGreeting(`वाह! बहुत सुन्दर लिखा! (+${xp} XP) 🐯🎨`);
      setTimeout(() => this.closeTracingModal(), 2500);
    }
  }

  // ─── SPEED TOGGLE ─────────────────────────────────────────────────────────
  toggleSpeed(elementId) {
    this.state.speedRate = this.state.speedRate === 1.0 ? 0.6 : 1.0;
    document.getElementById(elementId).innerText =
      this.state.speedRate === 1.0 ? 'सामान्य (Normal)' : 'धीमा (Slow 🐢)';
  }

  // ═══════════════════════════════════════════════════════════════════════════
  //  LETTER READING MODULE
  // ═══════════════════════════════════════════════════════════════════════════
  bindLetterReadingDOM() {
    document.getElementById('lr-btn-back').addEventListener('click',    () => this.closeLRReader());
    document.getElementById('lr-btn-prev').addEventListener('click',    () => this.lrNavigate(-1));
    document.getElementById('lr-btn-next').addEventListener('click',    () => this.lrNavigate(+1));
    document.getElementById('lr-btn-speak').addEventListener('click',   () => this.lrSpeak());
    document.getElementById('lr-btn-mic').addEventListener('click',     () => this.lrListen());
    document.getElementById('lr-btn-shuffle').addEventListener('click', () => this.lrShuffle());
    document.getElementById('lr-btn-restart').addEventListener('click', () => this.lrRestart());
    document.getElementById('lr-speed-switch').addEventListener('click',() => this.toggleSpeed('lr-speed-switch'));

    // Tap flashcard itself → speak
    document.getElementById('lr-flashcard').addEventListener('click', () => this.lrSpeak());
  }

  renderLetterReadingCategories() {
    // Always show the category panel first
    document.getElementById('lr-category-panel').style.display = 'block';
    document.getElementById('lr-reader-panel').style.display   = 'none';

    const grid = document.getElementById('lr-category-grid');
    grid.innerHTML = '';

    letterGroups.forEach(group => {
      // For 'random' group compute preview from all letters
      const previewLetters = group.id === 'random'
        ? [...vowels, ...consonants].map(l => l.letter)
        : group.letters;
      const preview = previewLetters.slice(0, 4).join(', ') + (previewLetters.length > 4 ? '...' : '');

      const card = document.createElement('div');
      card.className = 'lr-group-card';
      card.innerHTML = `
        <span class="lr-group-emoji">${group.emoji}</span>
        <span class="lr-group-name">${group.label}</span>
        <span class="lr-group-letters">${preview}</span>`;
      card.addEventListener('click', () => this.openLRReader(group));
      grid.appendChild(card);
    });

    this.updateMascotGreeting("कौन सा अक्षर वर्ग पढ़ना चाहते हो? एक कार्ड चुनो और शुरू करो! 🗣️🐯");
  }

  openLRReader(group) {
    // Build the letter list
    let letters;
    if (group.id === 'random') {
      letters = [...vowels, ...consonants].map(l => l.letter);
      // Shuffle
      for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
      }
    } else {
      letters = [...group.letters];
    }

    this.state.lr.group   = group;
    this.state.lr.letters = letters;
    this.state.lr.index   = 0;
    this.state.lr.visitedSet = new Set([0]);

    // Switch panels
    document.getElementById('lr-category-panel').style.display = 'none';
    document.getElementById('lr-reader-panel').style.display   = 'block';

    // Render
    this.lrRenderCard();
    this.lrRenderDots();

    // Auto-speak the first letter
    setTimeout(() => this.lrSpeak(), 400);

    this.updateMascotGreeting(`"${group.label}" वर्ग खुल गया! हर अक्षर पर क्लिक करके उच्चारण सुनो! 🔊🐯`);
  }

  closeLRReader() {
    speechEngine.cancel();
    speechEngine.stopListening();
    document.getElementById('lr-btn-mic').classList.remove('listening');
    document.getElementById('lr-category-panel').style.display = 'block';
    document.getElementById('lr-reader-panel').style.display   = 'none';
    this.updateMascotGreeting("वापस वर्ग चयन पर आ गए! कोई और वर्ग चुनो। 🐯");
  }

  lrNavigate(delta) {
    speechEngine.cancel();
    const lr = this.state.lr;
    lr.index = (lr.index + delta + lr.letters.length) % lr.letters.length;
    lr.visitedSet.add(lr.index);
    this.lrRenderCard();
    this.lrRenderDots();
    // Auto-speak on navigate
    setTimeout(() => this.lrSpeak(), 250);
    // XP nudge every 5 letters navigated
    if (lr.visitedSet.size % 5 === 0) {
      this.incrementXP(5);
      this.updateMascotGreeting(`शाबाश! ${lr.visitedSet.size} अक्षर पढ़ लिए! (+5 XP) 🎉🐯`);
    }
  }

  lrRenderCard() {
    const lr = this.state.lr;
    const letter = lr.letters[lr.index];
    const info = letterLookup[letter] || { phonetics: '', example: '' };

    // Reset animation by cloning the node
    const fc = document.getElementById('lr-flashcard');
    const clone = fc.cloneNode(true);
    fc.parentNode.replaceChild(clone, fc);
    clone.addEventListener('click', () => this.lrSpeak());

    document.getElementById('lr-current-letter').innerText   = letter;
    document.getElementById('lr-current-phonetics').innerText = info.phonetics || '';
    document.getElementById('lr-current-example').innerText  =
      info.example ? `${letter} से ${info.example}` : '';

    document.getElementById('lr-group-label').innerText =
      this.state.lr.group ? this.state.lr.group.label : '';
    document.getElementById('lr-progress').innerText =
      `${lr.index + 1} / ${lr.letters.length}`;

    // Clear feedback
    const fb = document.getElementById('lr-feedback');
    fb.style.display = 'none';
  }

  lrRenderDots() {
    const lr = this.state.lr;
    const container = document.getElementById('lr-dots');
    container.innerHTML = '';
    // Show max 15 dots to avoid overflow
    const total = Math.min(lr.letters.length, 20);
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('div');
      dot.className = 'lr-dot' +
        (i === lr.index ? ' active' : '') +
        (lr.visitedSet.has(i) && i !== lr.index ? ' visited' : '');
      dot.title = lr.letters[i];
      dot.addEventListener('click', () => {
        lr.index = i;
        lr.visitedSet.add(i);
        this.lrRenderCard();
        this.lrRenderDots();
        setTimeout(() => this.lrSpeak(), 250);
      });
      container.appendChild(dot);
    }
    if (lr.letters.length > 20) {
      const more = document.createElement('span');
      more.style.cssText = 'font-size:11px; color:var(--text-muted); font-weight:700;';
      more.innerText = `+${lr.letters.length - 20} और`;
      container.appendChild(more);
    }
  }

  lrSpeak() {
    const lr = this.state.lr;
    const letter = lr.letters[lr.index];
    const info = letterLookup[letter] || {};
    const text = info.example ? `${letter} से ${info.example}` : letter;
    speechEngine.speak(text, { rate: this.state.speedRate });
  }

  lrListen() {
    const micBtn = document.getElementById('lr-btn-mic');
    const fb     = document.getElementById('lr-feedback');
    const target = this.state.lr.letters[this.state.lr.index];

    if (speechEngine.isListening) {
      speechEngine.stopListening();
      micBtn.classList.remove('listening');
      return;
    }

    fb.style.display = 'none';
    micBtn.classList.add('listening');

    speechEngine.startListening({
      onStart: () => this.updateMascotGreeting(`"${target}" बोलो — मैं सुन रहा हूँ! 🎙️🐯`),
      onResult: (transcript) => {
        micBtn.classList.remove('listening');
        const evaluation = speechEngine.evaluatePronunciation(transcript, target);
        fb.innerText = `सुना: "${transcript}" — ${evaluation.rating}\n${evaluation.message}`;
        fb.className = 'feedback-box ' + evaluation.cssClass;
        fb.style.display = 'block';
        if (evaluation.matches) {
          this.incrementXP(8);
          this.updateMascotGreeting(`"${target}" का सही उच्चारण! (+8 XP) 🌟🐯`);
          // Auto-advance after success
          setTimeout(() => this.lrNavigate(+1), 1800);
        } else {
          this.updateMascotGreeting(`दोबारा कोशिश करो! 🔊 दबाकर सुनो फिर बोलो। 💪`);
        }
      },
      onError: (msg) => {
        micBtn.classList.remove('listening');
        fb.innerText = msg;
        fb.className = 'feedback-box match-fail';
        fb.style.display = 'block';
      },
      onEnd: () => micBtn.classList.remove('listening')
    });
  }

  lrShuffle() {
    const lr = this.state.lr;
    // Fisher-Yates shuffle
    for (let i = lr.letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lr.letters[i], lr.letters[j]] = [lr.letters[j], lr.letters[i]];
    }
    lr.index = 0;
    lr.visitedSet = new Set([0]);
    this.lrRenderCard();
    this.lrRenderDots();
    setTimeout(() => this.lrSpeak(), 250);
    this.updateMascotGreeting("क्रम बदल दिया! अब नए क्रम में पढ़ो। 🔀🐯");
  }

  lrRestart() {
    const lr = this.state.lr;
    lr.index = 0;
    lr.visitedSet = new Set([0]);
    this.lrRenderCard();
    this.lrRenderDots();
    setTimeout(() => this.lrSpeak(), 250);
    this.updateMascotGreeting("शुरू से दोबारा! चलो सब अक्षर फिर से पढ़ें। 🔁🐯");
  }

  // ═══════════════════════════════════════════════════════════════════════════
  //  WORD BUILDER TABLE SELECTOR
  // ═══════════════════════════════════════════════════════════════════════════
  bindWordBuilderDOM() {
    // Toggle panel open/close
    document.getElementById('wb-toggle-btn').addEventListener('click', () => {
      const body = document.getElementById('wb-selector-body');
      const btn  = document.getElementById('wb-toggle-btn');
      const isOpen = body.style.display !== 'none';
      body.style.display = isOpen ? 'none' : 'flex';
      btn.innerText = isOpen
        ? 'अक्षर और मात्रा चुनें ▼'
        : 'बंद करें ▲';
      btn.setAttribute('aria-expanded', String(!isOpen));
    });

    // Select / Clear all consonants
    document.getElementById('wb-select-all-consonants').addEventListener('click', () => {
      const wb = this.state.wb;
      consonants.forEach(c => wb.selectedConsonants.add(c.letter));
      vowels.forEach(v => wb.selectedConsonants.add(v.letter));
      this.wbSyncChips('consonant');
      this.wbUpdateMatchCount();
    });
    document.getElementById('wb-clear-consonants').addEventListener('click', () => {
      this.state.wb.selectedConsonants.clear();
      this.wbSyncChips('consonant');
      this.wbUpdateMatchCount();
    });

    // Select / Clear all matras
    document.getElementById('wb-select-all-matras').addEventListener('click', () => {
      matras.forEach(m => this.state.wb.selectedMatras.add(m.symbol));
      this.wbSyncChips('matra');
      this.wbUpdateMatchCount();
    });
    document.getElementById('wb-clear-matras').addEventListener('click', () => {
      this.state.wb.selectedMatras.clear();
      this.wbSyncChips('matra');
      this.wbUpdateMatchCount();
    });

    // Generate words from selection
    document.getElementById('wb-generate-btn').addEventListener('click', () => this.wbGenerate());
  }

  renderWordBuilderTables() {
    // Render consonant chips (all consonants + vowels as selectable letters)
    const cTable = document.getElementById('wb-consonant-table');
    cTable.innerHTML = '';
    // Show vowels first, then consonants
    const allLetters = [
      ...vowels.map(v => ({ letter: v.letter, phonetics: v.phonetics })),
      ...consonants.map(c => ({ letter: c.letter, phonetics: c.phonetics }))
    ];
    allLetters.forEach(item => {
      const chip = document.createElement('div');
      chip.className = 'wb-chip' + (this.state.wb.selectedConsonants.has(item.letter) ? ' selected' : '');
      chip.dataset.value = item.letter;
      chip.dataset.type  = 'consonant';
      chip.innerHTML     = `${item.letter}<span class="wb-chip-label">${item.phonetics}</span>`;
      chip.addEventListener('click', () => this.wbToggleChip(chip, 'consonant', item.letter));
      cTable.appendChild(chip);
    });

    // Render matra chips
    const mTable = document.getElementById('wb-matra-table');
    mTable.innerHTML = '';
    matras.forEach(m => {
      const chip = document.createElement('div');
      chip.className = 'wb-chip wb-matra-chip' + (this.state.wb.selectedMatras.has(m.symbol) ? ' selected' : '');
      chip.dataset.value = m.symbol;
      chip.dataset.type  = 'matra';
      chip.innerHTML = `<span class="wb-matra-example">${m.display}</span><span class="wb-chip-label">${m.label}</span>`;
      chip.addEventListener('click', () => this.wbToggleChip(chip, 'matra', m.symbol));
      mTable.appendChild(chip);
    });

    this.wbUpdateMatchCount();
  }

  wbToggleChip(chip, type, value) {
    const wb = this.state.wb;
    if (type === 'consonant') {
      if (wb.selectedConsonants.has(value)) wb.selectedConsonants.delete(value);
      else wb.selectedConsonants.add(value);
    } else {
      if (wb.selectedMatras.has(value)) wb.selectedMatras.delete(value);
      else wb.selectedMatras.add(value);
    }
    chip.classList.toggle('selected');
    this.wbUpdateMatchCount();
  }

  wbSyncChips(type) {
    const wb = this.state.wb;
    const chips = document.querySelectorAll(`.wb-chip[data-type="${type}"]`);
    chips.forEach(chip => {
      const val = chip.dataset.value;
      const selected = type === 'consonant'
        ? wb.selectedConsonants.has(val)
        : wb.selectedMatras.has(val);
      chip.classList.toggle('selected', selected);
    });
  }

  wbUpdateMatchCount() {
    const matched = this.wbFindMatchingWords();
    const countEl = document.getElementById('wb-match-count');
    const genBtn  = document.getElementById('wb-generate-btn');
    if (matched.length === 0) {
      countEl.innerText = 'अक्षर और मात्रा चुनें ↑';
      countEl.classList.remove('has-words');
      if (genBtn) genBtn.disabled = true;
    } else {
      countEl.innerText = `${matched.length} सही हिंदी शब्द मिले ✓`;
      countEl.classList.add('has-words');
      if (genBtn) genBtn.disabled = false;
    }
  }

  /**
   * Filter largeWords by selected consonants & matras using Unicode extraction.
   * A word matches if it contains ≥1 selected consonant AND ≥1 selected matra
   * (if no matras selected → match by consonant only; no consonants → by matra only).
   */
  wbFindMatchingWords() {
    const wb = this.state.wb;
    const hasCons   = wb.selectedConsonants.size > 0;
    const hasMatras = wb.selectedMatras.size > 0;
    if (!hasCons && !hasMatras) return [];

    // Flatten all levels
    const allWords = [
      ...(largeWords.beginner     || []),
      ...(largeWords.intermediate || []),
      ...(largeWords.advanced     || [])
    ];

    return allWords.filter(entry => {
      const wCons   = extractConsonants(entry.word);
      const wMatras = extractMatras(entry.word);
      const consMatch  = !hasCons   || wCons.some(c  => wb.selectedConsonants.has(c));
      const matraMatch = !hasMatras || wMatras.some(m => wb.selectedMatras.has(m));
      return consMatch && matraMatch;
    });
  }

  wbGenerate() {
    const matched = this.wbFindMatchingWords();
    if (matched.length === 0) {
      this.updateMascotGreeting('कोई मिलता-जुलता शब्द नहीं मिला। अलग अक्षर या मात्रा चुनो! 🐯🔍');
      return;
    }

    this.state.wb.filteredWords = matched;
    this.state.wb.useCustom = true;

    // Close selector panel
    document.getElementById('wb-selector-body').style.display = 'none';
    document.getElementById('wb-toggle-btn').innerText = 'अक्षर और मात्रा चुनें ▼';
    document.getElementById('wb-toggle-btn').setAttribute('aria-expanded', 'false');

    this.generateRandomWord();

    const selCons   = [...this.state.wb.selectedConsonants].join(', ');
    const selMatras = [...this.state.wb.selectedMatras].filter(m => m !== '').join('') || 'शुद्ध';
    this.updateMascotGreeting(
      `"${selCons}" + "${selMatras}" — ${matched.length} सही शब्द मिले! पढ़ते हैं! 📚🐯`
    );
  }

  // ─── WORDS GENERATOR ─────────────────────────────────────────────────────
  generateRandomWord() {
    speechEngine.cancel();
    document.getElementById('word-feedback').style.display = 'none';

    const wb = this.state.wb;
    let wordList;
    let isCustom = false;

    if (wb.useCustom && wb.filteredWords.length > 0) {
      wordList = wb.filteredWords;
      isCustom = true;
    } else {
      // Use the curated large dictionary; fall back to content.js if needed
      wordList = largeWords[this.state.level] || words[this.state.level] || words.beginner;
    }

    // Filter by word length (Syllable/Akshar count)
    const wl = this.state.wordLength || 'all';
    let filteredList = [...wordList];
    if (wl === 'short') {
      filteredList = wordList.filter(w => {
        const syls = w.syllables || splitSyllables(w.word);
        return syls.length >= 2 && syls.length <= 4;
      });
    } else if (wl === 'long') {
      filteredList = wordList.filter(w => {
        const syls = w.syllables || splitSyllables(w.word);
        return syls.length >= 5 && syls.length <= 10;
      });
    }

    if (filteredList.length === 0) {
      this.updateMascotGreeting('इस लंबाई के शब्द नहीं मिले! सभी शब्द देख रहे हैं। 🐯');
      filteredList = [...wordList];
      document.querySelectorAll('.wl-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-length') === 'all');
      });
      this.state.wordLength = 'all';
    }

    const selected = filteredList[Math.floor(Math.random() * filteredList.length)];
    this.state.activeWord = selected;

    const tag = document.getElementById('word-level-tag');
    if (isCustom) {
      tag.innerText = '🎛️ शब्द निर्माता';
      tag.className = 'story-card-tag custom';
    } else {
      tag.innerText = this.getLevelLabel();
      tag.className = 'story-card-tag ' + this.state.level;
    }

    document.getElementById('target-word').innerText         = selected.word;
    document.getElementById('target-word-meaning').innerText = selected.meaning;

    // Syllables
    const sc = document.getElementById('word-syllables');
    sc.innerHTML = '';
    const syls = selected.syllables || splitSyllables(selected.word);
    syls.forEach((syll, i) => {
      const span = document.createElement('span');
      span.className = 'syllable-item';
      span.innerText = syll;
      span.title = 'क्लिक करें सुनने के लिए';
      span.addEventListener('click', e => { e.stopPropagation(); speechEngine.speak(syll); });
      sc.appendChild(span);
      if (i < syls.length - 1) {
        const joiner = document.createElement('span');
        joiner.style.color = 'var(--text-muted)';
        joiner.innerText = ' + ';
        sc.appendChild(joiner);
      }
    });

    this.updateMascotGreeting(
      `चलो! "${selected.word}" शब्द पढ़ो। अक्षरों को जोड़कर उच्चारण करो! 🐯🧩`
    );
  }

  speakActiveWord() {
    if (!this.state.activeWord) return;
    speechEngine.speak(this.state.activeWord.word, { rate: this.state.speedRate });
  }

  listenWord() {
    if (!this.state.activeWord) return;
    const micBtn = document.getElementById('word-btn-mic');
    const fb     = document.getElementById('word-feedback');
    if (speechEngine.isListening) { speechEngine.stopListening(); micBtn.classList.remove('listening'); return; }
    fb.style.display = 'none';
    micBtn.classList.add('listening');
    speechEngine.startListening({
      onStart: () => this.updateMascotGreeting("सुन रहा हूँ... जोर से और साफ़ बोलें! 🐯🎙️"),
      onResult: (transcript) => {
        micBtn.classList.remove('listening');
        const ev = speechEngine.evaluatePronunciation(transcript, this.state.activeWord.word);
        fb.innerText = `सुनाई दिया: "${transcript}" — ${ev.rating}\n${ev.message}`;
        fb.className = 'feedback-box ' + ev.cssClass;
        fb.style.display = 'block';
        if (ev.matches) {
          const xp = ev.score >= 80 ? 10 : 5;
          this.incrementXP(xp);
          this.updateMascotGreeting(`अद्भुत! बिल्कुल सही उच्चारण! (+${xp} XP) 🎉🐯`);
        } else {
          this.updateMascotGreeting("कोई बात नहीं! '🔊' दबाकर फिर सुनो और दोबारा प्रयास करो। 🧡");
        }
      },
      onError: (msg) => { micBtn.classList.remove('listening'); fb.innerText = msg; fb.className = 'feedback-box match-fail'; fb.style.display = 'block'; },
      onEnd: () => micBtn.classList.remove('listening')
    });
  }

  // ─── SENTENCE GENERATOR ──────────────────────────────────────────────────
  generateRandomSentence() {
    speechEngine.cancel();
    document.getElementById('sentence-feedback').style.display = 'none';
    const list = sentences[this.state.level] || sentences.beginner;
    const sel  = list[Math.floor(Math.random() * list.length)];
    this.state.activeSentence = sel;

    const tag = document.getElementById('sentence-level-tag');
    tag.innerText = this.getLevelLabel();
    tag.className = 'story-card-tag ' + this.state.level;

    const div = document.getElementById('target-sentence');
    div.innerHTML = '';
    sel.sentence.split(' ').forEach(w => {
      const span = document.createElement('span');
      span.className = 'karaoke-word';
      span.style.cssText = 'display:inline-block; margin-right:6px;';
      span.innerText = w;
      div.appendChild(span);
    });
    document.getElementById('target-sentence-meaning').innerText = sel.meaning;
    this.updateMascotGreeting("चलो, अब इस पूरे वाक्य को एक साथ पढ़ते हैं! 💬🦁");
  }

  speakActiveSentence() {
    if (!this.state.activeSentence) return;
    const wEls = document.getElementById('target-sentence').querySelectorAll('.karaoke-word');
    wEls.forEach(el => el.classList.remove('reading-active'));
    const text = this.state.activeSentence.sentence;
    const wordMapping = [];
    let cursor = 0;
    text.split(' ').forEach((w, i) => {
      wordMapping.push({ start: cursor, end: cursor + w.length, element: wEls[i] });
      cursor += w.length + 1;
    });
    speechEngine.speak(text, {
      rate: this.state.speedRate,
      onBoundary: (charIndex) => {
        const m = wordMapping.find(x => charIndex >= x.start && charIndex < x.end);
        if (m) { wEls.forEach(el => el.classList.remove('reading-active')); m.element.classList.add('reading-active'); }
      },
      onEnd: () => wEls.forEach(el => el.classList.remove('reading-active'))
    });
  }

  listenSentence() {
    if (!this.state.activeSentence) return;
    const micBtn = document.getElementById('sentence-btn-mic');
    const fb     = document.getElementById('sentence-feedback');
    if (speechEngine.isListening) { speechEngine.stopListening(); micBtn.classList.remove('listening'); return; }
    fb.style.display = 'none';
    micBtn.classList.add('listening');
    speechEngine.startListening({
      onStart: () => this.updateMascotGreeting("सुन रहा हूँ... वाक्य साफ़-साफ़ पढ़ें! 🎙️🐯"),
      onResult: (transcript) => {
        micBtn.classList.remove('listening');
        const ev = speechEngine.evaluatePronunciation(transcript, this.state.activeSentence.sentence);
        fb.innerText = `सुनाई दिया: "${transcript}" — ${ev.rating}\n${ev.message}`;
        fb.className = 'feedback-box ' + ev.cssClass;
        fb.style.display = 'block';
        if (ev.matches) {
          const xp = ev.score >= 80 ? 20 : 10;
          this.incrementXP(xp);
          this.updateMascotGreeting(`क्या बात है! शानदार रीडिंग! (+${xp} XP) 🏆🐯`);
        } else {
          this.updateMascotGreeting("कोई बात नहीं, अभ्यास करते रहें! दोबारा प्रयास करें। 👍");
        }
      },
      onError: (msg) => { micBtn.classList.remove('listening'); fb.innerText = msg; fb.className = 'feedback-box match-fail'; fb.style.display = 'block'; },
      onEnd: () => micBtn.classList.remove('listening')
    });
  }

  // ─── STORIES & POEMS ──────────────────────────────────────────────────────
  switchStoriesTab(type, tabEl) {
    document.querySelectorAll('#view-stories .tab-btn').forEach(b => b.classList.remove('active'));
    tabEl.classList.add('active');
    this.state.storyType = type;
    this.renderStoriesCatalog();
  }

  renderStoriesCatalog() {
    const container = document.getElementById('stories-cards-container');
    container.innerHTML = '';
    const list = this.state.storyType === 'stories' ? stories : poems;
    list.forEach(item => {
      const card = document.createElement('div');
      card.className = 'story-card';
      card.setAttribute('role', 'button');
      card.innerHTML = `
        <div class="story-card-meta">
          <span class="story-card-title">${item.title}</span>
          <span class="story-card-tag ${item.level}">${item.level === 'beginner' ? '🌱 सरल' : '🌼 मध्यम'}</span>
        </div>
        <span style="font-size:24px;">📖</span>`;
      card.addEventListener('click', () => this.openStoryReader(item));
      container.appendChild(card);
    });
  }

  openStoryReader(item) {
    speechEngine.cancel();
    this.state.activeStory = item;
    document.getElementById('story-selection-panel').style.display = 'none';
    document.getElementById('story-reading-panel').style.display   = 'block';
    document.getElementById('story-feedback').style.display        = 'none';
    document.getElementById('reader-title').innerText = item.title;

    const tc = document.getElementById('reader-text-container');
    tc.innerHTML = '';
    const vocab = item.vocab || {};
    this.storyWordsIndexMap = [];
    let cursor = 0;
    item.text.split(' ').forEach(wordText => {
      const span = document.createElement('span');
      span.className = 'interactive-word';
      const clean = wordText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?।|]/g, '');
      span.innerText = wordText + ' ';
      this.storyWordsIndexMap.push({ start: cursor, end: cursor + wordText.length, element: span });
      cursor += wordText.length + 1;
      if (vocab[clean]) {
        span.style.borderBottom = '2.5px dotted var(--primary)';
        span.addEventListener('click', e => {
          e.stopPropagation();
          this.showVocabTooltip(span, clean, vocab[clean]);
          speechEngine.speak(clean);
        });
      } else {
        span.addEventListener('click', e => { e.stopPropagation(); speechEngine.speak(clean); });
      }
      tc.appendChild(span);
    });
    this.updateMascotGreeting("कहानी खुल गई! 🔊 दबाएं या किसी भी शब्द पर क्लिक करें! 📖✨");
  }

  closeStoryReader() {
    speechEngine.cancel();
    document.getElementById('story-reading-panel').style.display   = 'none';
    document.getElementById('story-selection-panel').style.display = 'block';
    this.state.activeStory = null;
  }

  showVocabTooltip(wordEl, hindi, meaning) {
    const wrapper = document.getElementById('vocab-tooltip-wrapper');
    wrapper.innerHTML = '';
    const tooltip = document.createElement('div');
    tooltip.className = 'vocab-tooltip';
    tooltip.innerHTML = `
      <span style="color:var(--primary);font-size:16px;font-weight:800;">${hindi}</span>
      <span style="color:var(--text-main);font-size:13px;">अर्थ: ${meaning}</span>`;
    const rect = wordEl.getBoundingClientRect();
    const mRect = document.querySelector('main').getBoundingClientRect();
    wrapper.appendChild(tooltip);
    wrapper.style.top  = `${rect.top - mRect.top + document.querySelector('main').scrollTop - 54}px`;
    wrapper.style.left = `${rect.left - mRect.left + rect.width / 2}px`;
    setTimeout(() => { tooltip.style.opacity = 0; setTimeout(() => tooltip.remove(), 250); }, 4000);
  }

  speakActiveStory() {
    if (!this.state.activeStory) return;
    const wEls = document.getElementById('reader-text-container').querySelectorAll('.interactive-word');
    wEls.forEach(el => el.classList.remove('reading-active'));
    speechEngine.speak(this.state.activeStory.text, {
      rate: this.state.speedRate,
      onBoundary: (charIndex) => {
        const m = this.storyWordsIndexMap.find(x => charIndex >= x.start && charIndex < x.end);
        if (m) { wEls.forEach(el => el.classList.remove('reading-active')); m.element.classList.add('reading-active'); }
      },
      onEnd: () => wEls.forEach(el => el.classList.remove('reading-active'))
    });
  }

  listenStory() {
    if (!this.state.activeStory) return;
    const micBtn = document.getElementById('story-btn-mic');
    const fb     = document.getElementById('story-feedback');
    if (speechEngine.isListening) { speechEngine.stopListening(); micBtn.classList.remove('listening'); return; }
    fb.style.display = 'none';
    micBtn.classList.add('listening');
    speechEngine.startListening({
      onStart: () => this.updateMascotGreeting("सुन रहा हूँ... कहानी जोर से पढ़ें! 🎙️🐯"),
      onResult: (transcript) => {
        micBtn.classList.remove('listening');
        const ev = speechEngine.evaluatePronunciation(transcript, this.state.activeStory.text);
        fb.innerText = `सुना: "${transcript.substring(0,60)}..." — ${ev.rating}\n${ev.message}`;
        fb.className = 'feedback-box ' + ev.cssClass;
        fb.style.display = 'block';
        if (ev.matches) {
          this.incrementXP(30);
          this.updateMascotGreeting("गजब! पूरी कहानी बहुत अच्छी तरह पढ़ी! (+30 XP) 🏆🐯👑");
        } else {
          this.updateMascotGreeting("सराहनीय प्रयास! शब्दों पर क्लिक करके अभ्यास करें। 💖");
        }
      },
      onError: (msg) => { micBtn.classList.remove('listening'); fb.innerText = msg; fb.className = 'feedback-box match-fail'; fb.style.display = 'block'; },
      onEnd: () => micBtn.classList.remove('listening')
    });
  }

  // ─── AUDIO FEEDBACK ───────────────────────────────────────────────────────
  playSuccessSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      [[523.25,0],[659.25,0.1],[783.99,0.2],[1046.5,0.3]].forEach(([freq, delay]) => {
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
        gain.gain.setValueAtTime(0, ctx.currentTime + delay);
        gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + delay + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.4);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + 0.5);
      });
    } catch (e) { /* silent fail */ }
  }

  // ─── CONFETTI ─────────────────────────────────────────────────────────────
  initConfetti() {
    this.confettiCanvas = document.getElementById('celebration-confetti');
    this.confettiCtx    = this.confettiCanvas.getContext('2d');
    this.resizeConfettiCanvas();
    window.addEventListener('resize', () => this.resizeConfettiCanvas());
  }
  resizeConfettiCanvas() {
    if (this.confettiCanvas) {
      this.confettiCanvas.width  = window.innerWidth;
      this.confettiCanvas.height = window.innerHeight;
    }
  }
  triggerConfetti() {
    if (this.confettiActive) return;
    this.confettiActive = true;
    this.confettiParticles = [];
    const colors = ['#f43f5e','#3b82f6','#10b981','#f59e0b','#8b5cf6','#ec4899'];
    for (let i = 0; i < 75; i++) {
      this.confettiParticles.push({
        x: Math.random() * this.confettiCanvas.width,
        y: -10 - Math.random() * 100,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 4 - 2,
        speedY: Math.random() * 5 + 4,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 5 - 2.5
      });
    }
    this.animateConfetti();
  }
  animateConfetti() {
    if (!this.confettiActive) return;
    const ctx = this.confettiCtx;
    const w = this.confettiCanvas.width, h = this.confettiCanvas.height;
    ctx.clearRect(0, 0, w, h);
    let active = 0;
    this.confettiParticles.forEach(p => {
      p.y += p.speedY; p.x += p.speedX; p.rotation += p.rotationSpeed;
      if (p.y < h) {
        active++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.fillStyle = p.color;
        if (p.size % 2 === 0) ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
        else { ctx.beginPath(); ctx.arc(0,0,p.size/2,0,Math.PI*2); ctx.fill(); }
        ctx.restore();
      }
    });
    if (active > 0) requestAnimationFrame(() => this.animateConfetti());
    else { ctx.clearRect(0,0,w,h); this.confettiActive = false; }
  }

  // ─── HELPERS ──────────────────────────────────────────────────────────────
  getLevelLabel() {
    return { beginner: '🌱 प्रारंभिक', intermediate: '🌼 मध्यम', advanced: '🚀 उन्नत' }[this.state.level] || 'स्तर';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const app = new HindiMitraApp();
  app.init();
});
