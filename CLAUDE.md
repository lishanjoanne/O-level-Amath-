# O-Level A-Math Toolkit

Joanne's (MathwithJo) static reference site for O-Level Additional Mathematics: one page per topic,
covering key formulas + notes, searchable from the homepage. Deployed on Vercel from this repo's
`main` branch — every push auto-deploys within ~30-60s. No build step; it's plain HTML/CSS/JS.

## Where things live

- `index.html` — homepage (topic search + grid, grouped by category)
- `topics/` — one HTML file per topic
- `topics/_template.html` — copy this to start a new topic
- `assets/topics-data.js` — the list that drives the homepage grid + search
- `assets/style.css` — all shared styling (cards, tables, diagrams, responsive rules)
- `assets/script.js` — homepage rendering + search logic (not loaded on topic pages)

Math is rendered with [KaTeX](https://katex.org/) via CDN — write `$...$` for inline math and
`$$...$$` for display/block math directly in the HTML. Every topic page's `<head>` already includes
the KaTeX CDN links and an `auto-render` call; copy that boilerplate from `_template.html` or any
existing topic page.

## Adding a new topic

1. Copy `topics/_template.html` to `topics/your-topic-name.html`.
2. Fill in the category tag, title, formula cards, and notes.
3. Add an entry to `TOPICS` in `assets/topics-data.js`:
   ```js
   {
     category: "Geometry and Trigonometry",
     title: "Trig Identities",
     file: "topics/trig-identities.html",
     blurb: "One-line description shown on the homepage card.",
     status: "ready"   // or "pending" while you're still filling it in
   }
   ```
4. `category` must be **exactly** one of these three strings — they're the official 4049 (2026)
   syllabus strands, and the homepage groups by exact match:
   - `"Algebra"`
   - `"Geometry and Trigonometry"`
   - `"Calculus"`
5. Preview and check mobile layout (see Testing below) before committing.
6. `git add -A && git commit -m "..." && git push` — Vercel picks it up automatically.

## Critical gotcha: never use a raw `<` or `>` in page text

Writing `$p < q$` or plain text like `a < b` literally in the HTML is a silent, page-breaking bug:
browsers treat `<` followed by a letter (e.g. `<q`, `<p`, `<a`) as the start of an HTML tag, which
corrupts everything after it on the page. This bit us building the Quadratic Functions page.

**Always use KaTeX's `\lt` and `\gt` macros instead of literal `<` / `>` inside `$...$` or `$$...$$`:**

```
Wrong:  $p < q$              →  breaks the page (parsed as an HTML tag <q...>)
Right:  $p \lt q$
Right:  $a \le b$, $a \ge b$, $a \ne b$   (these were always fine — no raw < or > involved)
```

A lone `>` on its own (not part of `<...>`) is harmless — only `<` immediately followed by a letter
is dangerous. But just always use `\lt`/`\gt` for consistency and to not have to think about it.
If you ever do need a literal angle bracket in plain (non-math) text, use `&lt;` / `&gt;`.

## Mobile-friendliness

Students overwhelmingly view this on phones. A `.formula-card` only has **~298px of usable width**
on a 375px-wide phone screen. `.formula-expr` and `.example-box p` have `overflow-x: auto` as a
safety net (so nothing ever breaks page layout), but a formula that needs horizontal scrolling is a
worse experience than one that just wraps.

**The main offender:** joining 2-3 short formulas on one line with `\qquad`, e.g.
`$$\sin(-\theta) = -\sin\theta \qquad \cos(-\theta) = \cos\theta \qquad \tan(-\theta) = -\tan\theta$$`
renders great on desktop but is way too wide for mobile.

**Fix: stack them instead**, either as separate display blocks or with `\begin{aligned}`:
```
$$\begin{aligned} \sin(-\theta) &= -\sin\theta \\ \cos(-\theta) &= \cos\theta \\ \tan(-\theta) &= -\tan\theta \end{aligned}$$
```
or simply `$$\text{line one}$$ $$\text{line two}$$` for two independent short lines.

Before considering a topic done, check it at mobile width (~375px) and confirm no formula card
needs meaningful horizontal scrolling. `.data-table` (tables) are the one exception allowed to
scroll horizontally — that's expected and fine for tabular data.

## Reusable components (all styled in `assets/style.css`)

- **`.formula-card`** — the standard card: `.formula-label` (heading), `.formula-expr` (the
  math, in `$$...$$`), optional `.formula-condition` (small print below).
- **`.diagram`** — wraps an inline `<svg>`. Use the shared classes so it themes automatically:
  `class="core"` (grey construction lines/points), `class="stroke"` (blue emphasis lines),
  `class="dash"` (dashed), `class="pt"` (small filled circle for a point). See any geometry/trig
  topic for examples.
- **`.property-card`** — like `.formula-card` but for diagram + description content (used for the
  circle theorems). Has `.emath`/`.amath` modifier classes for colour-coding.
- **`.example-box`** — worked examples (`.example-label` + `<p>` steps).
- **`.tip-box`** — a single highlighted exam tip / callout.
- **`.data-table`** inside a **`.table-wrap`** — reference tables (e.g. discriminant conditions,
  sign tables). The wrapper provides horizontal scroll on narrow screens.

## Branding

Every page's `<footer>` must be exactly:
```html
<footer class="site-footer">
  MathwithJo &mdash; Built for O-Level A-Math revision. &middot; <a href="https://wa.me/6591559478">WhatsApp: +65 9155 9478</a>
</footer>
```

## Testing before you commit

Serve the folder with a real static server rather than opening `index.html` via `file://` — some
things (relative asset loading, KaTeX rendering timing) behave inconsistently otherwise:
```
python -m http.server 8123
```
Check the new/changed page at normal width and at a mobile width (~375px) before calling it done.

## Topic roadmap (per the official 4049 (2026) syllabus)

**Algebra**
- [x] Quadratic Functions
- [x] Equations & Inequalities
- [x] Surds
- [x] Polynomials & Partial Fractions
- [x] Binomial Expansions
- [x] Logarithms & Exponentials

**Geometry and Trigonometry**
- [x] Trigonometric Ratios
- [x] Trigonometric Graphs
- [x] Trigonometric Equations & Identities
- [x] Coordinate Geometry
- [x] Circles *(equation of a circle — "Further Coordinate Geometry")*
- [x] Circle Properties *(covers syllabus topic "Proofs in Plane Geometry" — E-Math theorems + the 2
  that carry into A-Math, ported from [circleproperties.vercel.app](https://circleproperties.vercel.app/))*

**Calculus**
- [x] Differentiation Techniques
- [x] Integration Techniques
- [x] Kinematics (displacement/velocity/acceleration via differentiation & integration)

Officially Differentiation, Integration and Kinematics are all one syllabus topic (C1) — kept as
separate pages here since that's easier to navigate for revision.
