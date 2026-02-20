# Style Guide - FlowPage

Reference concise des styles recurrents du site.

- Source de verite principale: `tailwind.config.mjs`
- Date: 2026-02-20

## Couleurs principales

### Palette brand (Tailwind)
- `brand.orange`: `#D46A4C` (CTA, accents)
- `brand.dark`: `#2A2A2A` (texte principal, sections sombres)
- `brand.green`: `#829175` (accent secondaire)
- `brand.cream`: `#FDFCF8` (fond principal clair)
- `brand.beige`: `#FAF9F6` (surfaces claires secondaires)
- `brand.lightdark`: `#F6F4EF` (fond clair contraste doux)
- `brand.text-muted`: `#6B6B6B` (texte secondaire)
- `brand.soft-border`: `#E6E6E2` (bordures globales)
- `brand.panel`: `#323230` (cards sombres FAQ/constat)
- `brand.panel-hover`: `#343432` (hover cards sombres)

### Couleurs arbitraires conservees (legacy visuel)
- `#262626` (fonds cards existantes)
- `#303030` (hover cards existantes)
- `#374151` (bordure icones section constat)
- `#C56045` (hover des boutons orange)
- `#E6E6E229` (bordure cards FAQ)
- `#F3F1EC`, `#FAF9F5` (fonds section impact)

## Typographie

### Font families
- `font-sans`: `Manrope, sans-serif` (texte courant)
- `font-heading`: `Clash Grotesk, Manrope, sans-serif` (titres)

### Regles recurrentes
- Titres (`h1`, `h2`, `h3`, `.font-heading`):
  - `letter-spacing: -0.018em`
  - `font-weight: 600`
- Texte secondaire harmonise via:
  - `.text-gray-400/.500/.600 -> text-brand-text-muted`
- Texte principal harmonise via:
  - `.text-gray-700/.800/.900 -> text-brand-dark`

## Espacements et structure recurrents

- Sections principales: `main > section[id]`
  - `padding-top` et `padding-bottom`: `clamp(4.5rem, 7vw, 9rem)`
- Layout global:
  - `body`: `bg-brand-cream text-brand-dark font-sans`
  - Header fixe avec fond creme translucide (`88%`) + bordure douce

## Effets visuels recurrents

- Ombres harmonisees sur `main`/`footer`:
  - `box-shadow: 0 10px 24px rgb(42 42 42 / 5%)`
- Transitions interaction:
  - `duration: 320ms`
  - `timing: cubic-bezier(0.22, 0.61, 0.36, 1)`
- `group-hover:scale-105` ajuste a `scale(1.02)`
- `blur-3xl` attenue a `opacity: 0.45`

## Exceptions ciblees

- FAQ / Constat (cards sombres)
  - Fond normal: `brand.panel`
  - Fond hover: `brand.panel-hover`
- Bordure FAQ forcee: `#e6e6e229`
- Texte en sections sombres (`#constat`, `#faq`): `rgb(253 252 248 / 72%)`

## Regle de maintenance

- Ajouter une couleur/typo d'abord dans `tailwind.config.mjs`.
- Garder `assets/css/styles.css` pour les exceptions scopees, pas pour redefinir globalement Tailwind.
