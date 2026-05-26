# Tasks: Hindi Reading Companion App (Navigation & Level Selector)

- `[x]` Setup project directories and configurations
- `[x]` Create Curated Hindi Database (`js/data/content.js`)
- `[x]` Implement Native Free Speech Module (`js/modules/speech.js`)
- `[x]` Implement Canvas Tracing Module (`js/modules/tracing.js`)
- `[x]` Create Global Design System & Variables (`css/main.css`)
- `[x]` Create UI Styles & Component Animations (`css/components.css`)
- `[x]` Create Entry HTML File (`index.html`)
- `[x]` Create Core App Router & Interactions (`js/app.js`)
- `[x]` Verify application in browser and test Speech / Canvas features
- `[x]` Generate final Walkthrough and visual assets
- `[x]` Create database generator script (`generate_large_dict.py`)
- `[x]` Run script to generate scaled `words_large.js` (12,000+ words with meanings and syllables)
- `[x]` Update word length labels in `index.html` to (2-4 letters) and (5-10 letters)
- `[x]` Update word length filter logic in `js/app.js` to use syllable count
- `[x]` Verify changes and test functionality in browser/node environment
- `[x]` Create sentence expansion script (`generate_sentences.py`) in scratch
- `[x]` Run script to inject 100+ sentences per category into `content.js` in scratch
- `[x]` Copy updated `content.js` from scratch to `D:\src\HindiMitra\js\data\content.js`
- `[x]` Verify expanded sentences in Node and start local server
- `[x]` Modify `index.html` to relocate level selector and split word/sentence buttons
- `[x]` Modify `css/components.css` to add global level selector styling
- `[x]` Modify `js/app.js` to implement keyboard/click navigation, history stacks, and active level updates
- `[x]` Copy modified files to deployment directory `D:\src\HindiMitra`
- `[x]` Verify changes and test navigation in node/local server environment
- `[x]` Move difficulty level selector to a compact `<select>` dropdown inside `<header>` in `index.html`
- `[x]` Add CSS styles for `.level-dropdown-wrapper` and `.level-dropdown` (custom styled arrows, margins, borders, and light/dark theme responsiveness)
- `[x]` Update event bindings in `js/app.js` to handle `change` on the `#global-level-select` element
- `[x]` Synchronize changes between deployment and scratch directories
- `[x]` Verify level change triggers immediate content update in active views
- `[x]` Attach `ArrowUp` (Up Arrow) to speak button actions and `ArrowDown` (Down Arrow) to listen button actions across reading views
- `[x]` Implement hide/show English translation toggling with `/` shortcut and card-level eye icons `👁️`/`🙈`
- `[x]` Create premium custom CSS tooltips on hover (`[data-tooltip]`) for shortcuts
- `[x]` Relocate translation toggle button next to the difficulty level tag on the top-left of the card
- `[x]` Integrate Vercel Web Analytics tag into `index.html` head
- `[x]` Implement dynamic visitor counter badge in header calling CounterAPI with fallback support
- `[x]` Group header actions (dark mode, reset) inside a unified settings-box pill and set visitor/level text to normal weight







