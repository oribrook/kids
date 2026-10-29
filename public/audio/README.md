# Audio files

Folders:
- `audio/` (root) - Hebrew instructions and Hebrew word audio
- `audio/ar/` - Arabic games (Hebrew instructions + Arabic word audio)
- `audio/en/` - English games (Hebrew instructions + English word audio)
- `audio/numbers/` - number games
- `audio/letters/he/` - Hebrew letter names (memory cards, photo words)
- `sounds/` (sibling folder) - voice feedback (correct/wrong/complete/encourage) + background music

File-name patterns: `intro-X`, `find-X`, `select-all-X`, `word-starts-X`,
`mark-all-A-to-B`, `word-X`, `quiz-*`, `which-letters-X`, `photo-*`.

TTS: edge-tts, voices `he-IL-HilaNeural` (Hebrew), `ar-SA-ZariyahNeural` (Arabic).
Always add nikud to Hebrew text before generating.

Full details (per-game audio lists, generation commands): see `files.txt`
in the project root. `npm run check:assets` lists missing / orphan files.
