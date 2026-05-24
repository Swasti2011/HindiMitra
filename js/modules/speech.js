// Native Free Speech Synthesis and Recognition Module for Hindi Learning App

class SpeechEngine {
  constructor() {
    this.synth = window.speechSynthesis;
    this.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = null;
    this.hindiVoice = null;
    this.isListening = false;

    // Load Hindi Voice as soon as voices are loaded
    if (this.synth) {
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Try to find a Hindi voice (hi-IN)
    this.hindiVoice = voices.find(voice => voice.lang === 'hi-IN' || voice.lang.startsWith('hi'));
    if (!this.hindiVoice) {
      // Fallback: look for Google Hindi or any voice matching 'hi'
      this.hindiVoice = voices.find(voice => voice.name.toLowerCase().includes('hindi') || voice.lang.includes('hi'));
    }
  }

  /**
   * Speak a given Hindi text using browser synthesis.
   * @param {string} text - The Hindi text to speak.
   * @param {object} options - Options containing rate (speed), onBoundary (word highlights), onEnd, onError.
   */
  speak(text, options = {}) {
    if (!this.synth) {
      if (options.onError) options.onError('Speech synthesis not supported in this browser.');
      return;
    }

    // Cancel any ongoing speech first
    this.synth.cancel();

    // Clean text: strip out english phonetic text in parentheses for clean Hindi pronunciation
    const cleanText = text.replace(/\([^)]*\)/g, '').trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'hi-IN';
    
    if (this.hindiVoice) {
      utterance.voice = this.hindiVoice;
    }

    // Adjust speed: normal is 1.0, slow is 0.55 - 0.65
    utterance.rate = options.rate || 1.0;
    utterance.pitch = 1.1; // Slightly child-friendly pitch

    // Handle cursor tracking (word by word highlights)
    if (options.onBoundary) {
      utterance.addEventListener('boundary', (event) => {
        if (event.name === 'word') {
          options.onBoundary(event.charIndex, event.charLength);
        }
      });
    }

    if (options.onEnd) {
      utterance.onend = () => {
        options.onEnd();
      };
    }

    if (options.onError) {
      utterance.onerror = (err) => {
        console.error('Speech synthesis error:', err);
        options.onError(err);
      };
    }

    this.synth.speak(utterance);
  }

  /**
   * Cancel any active speaking.
   */
  cancel() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  /**
   * Check if speech recognition is available in the user's browser.
   */
  isRecognitionAvailable() {
    return !!this.SpeechRecognition;
  }

  /**
   * Start listening to the child reading a Hindi text.
   * @param {object} options - Callbacks: onStart, onResult, onError, onEnd.
   */
  startListening(options = {}) {
    if (!this.isRecognitionAvailable()) {
      if (options.onError) options.onError('आपका ब्राउज़र आवाज़ पहचान (Voice Recognition) का समर्थन नहीं करता है। कृपया Google Chrome का उपयोग करें।');
      return;
    }

    if (this.isListening) {
      this.stopListening();
    }

    try {
      this.recognition = new this.SpeechRecognition();
      this.recognition.lang = 'hi-IN';
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;

      this.recognition.onstart = () => {
        this.isListening = true;
        if (options.onStart) options.onStart();
      };

      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const confidence = event.results[0][0].confidence;
        if (options.onResult) {
          options.onResult(transcript, confidence);
        }
      };

      this.recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        if (options.onError) {
          let errorMsg = 'समझने में परेशानी हुई। फिर से प्रयास करें!';
          if (event.error === 'not-allowed') {
            errorMsg = 'कृपया माइक्रोफ़ोन अनुमति (Microphone Permission) सक्षम करें!';
          } else if (event.error === 'no-speech') {
            errorMsg = 'कोई आवाज़ नहीं सुनी गई। कृपया जोर से बोलें!';
          }
          options.onError(errorMsg);
        }
      };

      this.recognition.onend = () => {
        this.isListening = false;
        if (options.onEnd) options.onEnd();
      };

      this.recognition.start();
    } catch (e) {
      console.error(e);
      if (options.onError) options.onError('आवाज़ पहचान शुरू करने में विफल।');
    }
  }

  /**
   * Stop the current speech recognition session.
   */
  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  /**
   * Helper to evaluate how closely the spoken text matches the target Hindi text.
   * Handles cleaning of punctuation, common vocal pauses, and basic matching.
   * @param {string} spoken - Text heard by recognition.
   * @param {string} target - The exact Hindi text displayed.
   * @returns {object} result - { score: 0-100, matches: bool, rating: string, cssClass: string }
   */
  evaluatePronunciation(spoken, target) {
    // Normalization helper
    const normalize = (str) => {
      if (!str) return '';
      return str
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?।|]/g, '') // remove punctuation & Hindi danda
        .replace(/\s+/g, ' ') // normalize spaces
        .trim();
    };

    const cleanSpoken = normalize(spoken);
    const cleanTarget = normalize(target);

    if (cleanSpoken === cleanTarget) {
      return {
        score: 100,
        matches: true,
        rating: 'शानदार! (Perfect Pronunciation!)',
        message: 'आपने बिल्कुल सही पढ़ा!',
        cssClass: 'match-perfect'
      };
    }

    // Split into words for comparison
    const spokenWords = cleanSpoken.split(' ').filter(Boolean);
    const targetWords = cleanTarget.split(' ').filter(Boolean);

    if (targetWords.length === 0) return { score: 0, matches: false, rating: 'प्रयास करें', message: 'कृपया बोलें!', cssClass: 'match-fail' };

    // Calculate match score
    let matchingWordCount = 0;
    targetWords.forEach(word => {
      if (spokenWords.includes(word)) {
        matchingWordCount++;
      }
    });

    const overlapRatio = matchingWordCount / targetWords.length;
    const percentage = Math.round(overlapRatio * 100);

    if (percentage >= 80) {
      return {
        score: percentage,
        matches: true,
        rating: 'बहुत बढ़िया! (Excellent!)',
        message: `बहुत अच्छी रीडिंग! (${matchingWordCount}/${targetWords.length} शब्द सही)`,
        cssClass: 'match-excellent'
      };
    } else if (percentage >= 50) {
      return {
        score: percentage,
        matches: true,
        rating: 'अच्छा प्रयास! (Good Try!)',
        message: `काफी अच्छा! थोड़े और अभ्यास की जरूरत है। (${matchingWordCount}/${targetWords.length} शब्द सही)`,
        cssClass: 'match-good'
      };
    } else {
      return {
        score: percentage,
        matches: false,
        rating: 'फिर से कोशिश करें (Try Again)',
        message: 'शब्दों को ध्यान से देखें और जोर से बोलें।',
        cssClass: 'match-fail'
      };
    }
  }
}

export const speechEngine = new SpeechEngine();
export default speechEngine;
