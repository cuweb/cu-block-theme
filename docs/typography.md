# Typography

The Carleton Block Theme uses a single, versatile typeface — **Inter** — for all headings, body copy, and UI elements. The entire type system is configured in `theme.json` and uses WordPress's built-in fluid typography engine to scale smoothly across viewport sizes.

---

## Typeface

**Inter** is a variable-width sans-serif designed for screen readability. The theme self-hosts six weights in `.woff2` format, keeping external requests to zero.

| Weight | Style | File |
| --- | --- | --- |
| 300 (Light) | Normal | `inter-300-normal.woff2` |
| 300 (Light) | Italic | `inter-300-italic.woff2` |
| 400 (Regular) | Normal | `inter-400-normal.woff2` |
| 400 (Regular) | Italic | `inter-400-italic.woff2` |
| 500 (Medium) | Normal | `inter-500-normal.woff2` |
| 500 (Medium) | Italic | `inter-500-italic.woff2` |
| 600 (Semi-Bold) | Normal | `inter-600-normal.woff2` |
| 600 (Semi-Bold) | Italic | `inter-600-italic.woff2` |
| 700 (Bold) | Normal | `inter-700-normal.woff2` |
| 700 (Bold) | Italic | `inter-700-italic.woff2` |

Font files are located in `assets/fonts/inter/` and registered through `theme.json` using the `fontFace` property, allowing WordPress to handle `@font-face` declarations automatically.

**CSS variable:** `var(--wp--preset--font-family--inter)`

---

## Font Size Scale

All font sizes are fluid, meaning they scale between a `min` and `max` value based on the viewport width. WordPress handles the `clamp()` calculation automatically when `fluid: true` is set in `theme.json`.

### Body Sizes

| Slug | Name | Min | Max | Typical Use |
| --- | --- | --- | --- | --- |
| `small` | Small | 0.75rem | 0.9rem | Captions, labels, navigation |
| `medium` | Medium | 0.875rem | 1rem | Default body copy |
| `large` | Large | 1rem | 1.125rem | Lead paragraphs, emphasis |
| `x-large` | X Large | 1.125rem | 1.25rem | Subheadings, intro text |
| `2x-large` | 2X Large | 1.25rem | 1.5rem | Featured text |

### Heading Sizes

| Slug | Name | Min | Max | Typical Use |
| --- | --- | --- | --- | --- |
| `heading-small` | Heading Small | 1.25rem | 1.5rem | H5, H6 |
| `heading-medium` | Heading Medium | 1.75rem | 2rem | H4 |
| `heading-large` | Heading Large | 2rem | 2.5rem | H3 |
| `heading-x-large` | Heading X Large | 2.5rem | 3rem | H2 |
| `heading-primary` | Heading Primary | 3rem | 3.5rem | H1, page titles |

---

## Heading Styles

All headings share these base properties defined on the `heading` element in `theme.json`:

- **Font family:** Inter
- **Font weight:** 600 (Semi-Bold)
- **Font style:** Normal
- **Colour:** `--wp--preset--color--black` (`#191919`)

Individual heading overrides:

| Level | Size | Notes |
| --- | --- | --- |
| H1 | `heading-primary` (fluid) | Page titles |
| H2 | `3rem` (fixed) | Section headings |
| H3 | `2.5rem` (fixed) | Subsection headings |
| H4 | `2rem` (fixed) | Content grouping |
| H5 | `heading-small` (fluid) | Minor headings |
| H6 | `heading-small` (fluid) | Italic style distinguishes from H5 |

---

## Body Text

| Property | Value |
| --- | --- |
| Font family | Inter |
| Font size | `large` (1rem → 1.125rem fluid) |
| Font weight | 300 (Light) |
| Line height | 1.6 |
| Colour | `--wp--preset--color--black` (`#191919`) |

The light weight paired with generous line height ensures comfortable long-form reading.

---

## Links

| State | Colour |
| --- | --- |
| Default | `--wp--preset--color--primary` (Carleton red) |
| Hover | `--wp--preset--color--secondary` (Navy blue) |

Within `.cu-content` areas, links are further styled with `font-weight: 700` and `text-decoration: none`, switching to an underline on hover.

---

## Captions

| Property | Value |
| --- | --- |
| Font size | `small` |
| Font weight | 300 (Light) |
| Font style | Italic |
| Colour | `--wp--preset--color--grey-dark` (`#434343`) |

---

## Navigation

| Property | Value |
| --- | --- |
| Font size | `small` |
| Font weight | 400 (Regular) |
| Font style | Normal |
