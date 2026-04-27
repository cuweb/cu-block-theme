# Typography

A single typeface — **Inter** — for everything. Defined in [`theme-rds.json`](../theme-rds.json) using WordPress fluid typography (`clamp()` between min and max).

## Inter

Self-hosted in `assets/fonts/inter/` as `.woff2`.

| Weight          | Style  | File                     |
| --------------- | ------ | ------------------------ |
| 300 (Light)     | Normal | `inter-300-normal.woff2` |
| 300 (Light)     | Italic | `inter-300-italic.woff2` |
| 400 (Regular)   | Normal | `inter-400-normal.woff2` |
| 400 (Regular)   | Italic | `inter-400-italic.woff2` |
| 600 (Semi-Bold) | Normal | `inter-600-normal.woff2` |
| 600 (Semi-Bold) | Italic | `inter-600-italic.woff2` |

> Other files (500 Medium, 700 Bold) sit in `assets/fonts/inter/` but are **not registered** as `@font-face` in `theme-rds.json`. Setting `font-weight: 500` or `700` will fall back to browser faux-bolden of 400.

CSS reference: `var(--wp--preset--font-family--inter)`

## Font size scale

All sizes are fluid. Range = min at 320px → max at 1280px viewport.

### Body

| Slug       | Min      | Max      |
| ---------- | -------- | -------- |
| `small`    | 0.75rem  | 0.9rem   |
| `medium`   | 0.875rem | 1rem     |
| `large`    | 1rem     | 1.125rem |
| `x-large`  | 1.125rem | 1.25rem  |
| `2x-large` | 1.25rem  | 1.5rem   |

### Heading

| Slug              | Min     | Max    |
| ----------------- | ------- | ------ |
| `heading-small`   | 1.25rem | 1.5rem |
| `heading-medium`  | 1.75rem | 2rem   |
| `heading-large`   | 2rem    | 2.5rem |
| `heading-x-large` | 2.5rem  | 3rem   |
| `heading-primary` | 3rem    | 3.5rem |

## Element defaults

All headings: Inter, weight 600, color black.

| Element | Size slug         | Style  |
| ------- | ----------------- | ------ |
| `h1`    | `heading-primary` | Normal |
| `h2`    | `heading-x-large` | Normal |
| `h3`    | `heading-large`   | Normal |
| `h4`    | `heading-medium`  | Normal |
| `h5`    | `heading-small`   | Normal |
| `h6`    | `heading-small`   | Italic |

## Body text

| Property    | Value                           |
| ----------- | ------------------------------- |
| Font        | Inter                           |
| Size        | `large` (1rem → 1.125rem fluid) |
| Weight      | 300 (Light)                     |
| Line height | 1.6                             |
| Color       | Black                           |

## Caption

| Property | Value                                                                               |
| -------- | ----------------------------------------------------------------------------------- |
| Size     | `small`                                                                             |
| Style    | Italic                                                                              |
| Weight   | 300                                                                                 |
| Color    | `#dba617` (warning yellow — note this is unusual, may be intentional brand styling) |

## Links

| State   | Color                                                               |
| ------- | ------------------------------------------------------------------- |
| Default | Primary (`#e91c24`)                                                 |
| Hover   | `#e91c24` (same — defined in `theme-rds.json` styles.elements.link) |

Within `.cu-content` blocks, links additionally get `font-weight: 700` and lose underline by default ([`src/css/base.scss`](../src/css/base.scss)); they re-add underline on hover and switch to `var(--wp--preset--color--secondary)`.
