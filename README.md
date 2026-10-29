# Kids Game (משחקי ילדים)

Hebrew-language educational games for ages 3-5: Hebrew / English / Arabic letters,
nikud, numbers and math, plus standalone toddler games (memory cards, drawing,
mazes, brick breaker, runner, balloons, Simon says, sorting, photo words).

React 19 + Vite, React Router, Framer Motion, CSS Modules. No backend -
progress is stored in `localStorage`.

## Scripts

```
npm run dev            # dev server (http://localhost:5173)
npm run build          # production build -> dist/
npm run preview        # serve dist/
npm run lint           # eslint
npm run dump:registry  # dump the resolved game registry as JSON (dev tool)
npm run check:assets   # verify referenced audio/images exist + category ids resolve
```

## Docs

`files.txt` is the project's source of truth: folder structure, naming
conventions, every game, how to add a game, known bugs.

## Deploy

Netlify builds `main` from GitHub (`oribrook/kids`). SPA routing via
`public/_redirects`.
