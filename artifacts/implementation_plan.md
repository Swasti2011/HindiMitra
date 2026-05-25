# Implementation Plan: Hindi Reading Companion App ("हिंदी मित्र" - Hindi Mitra) — Keyboard Navigation & Global Level Selector

We are adding keyboard arrow key navigation (Left/Right) for flashcards, words, and sentences; adding history stacks and click-to-previous buttons for words and sentences; and moving the level selector to the global header area so it is always visible.

---

## User Review Required

> [!IMPORTANT]
> **Key Navigation & Layout Enhancements:**
> 1. **Global Level Selector:** We will extract the Level Selector from the Dashboard view and place it globally just below the `<header>`, making it visible on all screens. Changing the level will immediately refresh the active view (e.g., loading a word or sentence of the new level instantly).
> 2. **Previous / Next Word & Sentence History:** 
>    * We will introduce history stacks for generated words and sentences so the child can navigate back and forth.
>    * We will split the wide "Next" button in the Words and Sentences screens into a two-button row: `⬅️ पिछला (Prev)` and `अगला (Next) ➡️`.
> 3. **Left/Right Arrow Key Support:**
>    * Pressing `ArrowLeft` will navigate back (previous card, previous word, or previous sentence).
>    * Pressing `ArrowRight` will navigate forward (next card, next word, or next sentence).
>    * Inputs/editable fields will be ignored to prevent key clashes.

---

## Proposed Changes

### UI & Layout

#### [MODIFY] [index.html](file:///C:/Users/vijay/.gemini/antigravity/scratch/hindi-reading-companion/index.html)
* Cut the `<div class="level-selector-wrapper">...</div>` block from the Dashboard view section and paste it globally, right below the `<header>` element (wrapped in a `.global-level-selector` container).
* Replace the next word button (`word-btn-next`) with a split-button row including `word-btn-prev` and `word-btn-next`.
* Replace the next sentence button (`sentence-btn-next`) with a split-button row including `sentence-btn-prev` and `sentence-btn-next`.

#### [MODIFY] [components.css](file:///C:/Users/vijay/.gemini/antigravity/scratch/hindi-reading-companion/css/components.css)
* Add styling for `.global-level-selector` to make it fit beautifully at the top of all views:
  * Remove borders, set compact padding, and position it directly below the header.

### Application Logic

#### [MODIFY] [app.js](file:///C:/Users/vijay/.gemini/antigravity/scratch/hindi-reading-companion/js/app.js)
* Add `wordHistory`, `wordHistoryIndex`, `sentenceHistory`, and `sentenceHistoryIndex` to the app state inside the constructor.
* Bind listeners for `#word-btn-prev` and `#sentence-btn-prev` in `bindDOM()`.
* Update level button listener: check the currently active view section and immediately call `generateRandomWord()` or `generateRandomSentence()` to refresh the content dynamically when switching levels.
* Add global `keydown` event listener in `init()` to handle `ArrowLeft` and `ArrowRight` key presses.
* Implement `handleGlobalBack()` and `handleGlobalForward()` methods to map arrow keys to the active view's navigation (letters, words, sentences).
* Refactor `generateRandomWord(direction)` and `generateRandomSentence(direction)` to support history backtracking/forwarding and on-the-fly random generation.

---

## Verification Plan

### Automated & Manual Tests
1. **Layout Check:** Verify that the Level Selector displays at the top of all navigation tabs (Letters, Words, Sentences, Stories, Tracing).
2. **Interactive Tab Updating:** Go to the **Words** tab, click "Intermediate" level, verify that a new intermediate word is immediately generated.
3. **Previous / Next History Tests:** Click **Next** on the Words tab 3 times (generating 3 different words). Click **Prev** 2 times and verify it goes back to the correct previous words. Click **Next** again and verify it moves forward in the history.
4. **Keyboard Arrow Key Verification:** Press the Left Arrow and Right Arrow keys in the Letters, Words, and Sentences screens. Verify that the cards navigate backwards and forwards respectively.
