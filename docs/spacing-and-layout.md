# Spacing & Layout

The theme uses a responsive spacing scale and constrained layout system defined in `theme.json`, giving content editors consistent spacing options while keeping pages well-proportioned across all screen sizes.

---

## Layout Widths

Two layout widths are set globally and control how blocks align on the page:

| Width   | Value    | Usage                                                   |
| ------- | -------- | ------------------------------------------------------- |
| Content | `1024px` | Default width for paragraphs, headings, and most blocks |
| Wide    | `1280px` | Wide-aligned blocks like images, groups, and covers     |

These values are applied through WordPress's constrained layout system. Blocks set to "Wide width" alignment will stretch to `1280px`, while default blocks stay within `1024px`.

### Root Padding-Aware Alignments

The theme enables `useRootPaddingAwareAlignments`, which means:

- The `<body>` element receives horizontal padding (`--wp--preset--spacing--50` on left and right).
- Full-width blocks can break out of that padding to span the entire viewport.
- Content-width and wide-width blocks respect the padding, keeping text away from screen edges.

---

## Spacing Scale

The theme replaces the default WordPress spacing presets with a 7-step scale. Smaller values are fixed; larger values use `min()` to cap at a viewport-relative maximum, creating a fluid feel on wide screens without over-spacing on small ones.

| Name     | Slug | Value               | Approx. at 1440px |
| -------- | ---- | ------------------- | ----------------- |
| 2x Small | `20` | `0.25rem`           | 4px               |
| X Small  | `30` | `0.5rem`            | 8px               |
| Small    | `40` | `min(0.75rem, 1vw)` | ~12px             |
| Medium   | `50` | `min(1.5rem, 2vw)`  | ~24px             |
| Large    | `60` | `min(2.25rem, 3vw)` | ~36px             |
| X Large  | `70` | `min(3rem, 4vw)`    | ~48px             |
| 2x Large | `80` | `min(4.5rem, 6vw)`  | ~72px             |

### Using Spacing in the Editor

In the block editor, these values appear in the spacing controls (padding, margin, block gap) as named options. Use the slug-based preset variable:

```
var:preset|spacing|50
```

### Using Spacing in CSS

```css
padding: var(--wp--preset--spacing--50);
```

Or the design-token equivalent:

```css
padding: var(--rds--spacing-medium);
```

---

## Global Spacing

Defaults applied at the root level via `theme.json`:

| Property       | Value                                | Notes                                                                         |
| -------------- | ------------------------------------ | ----------------------------------------------------------------------------- |
| Block gap      | `0`                                  | No default vertical space between blocks — spacing is controlled per-template |
| Padding top    | `0`                                  | —                                                                             |
| Padding bottom | `0`                                  | —                                                                             |
| Padding left   | `--wp--preset--spacing--50` (Medium) | Horizontal body padding                                                       |
| Padding right  | `--wp--preset--spacing--50` (Medium) | Horizontal body padding                                                       |

Setting `blockGap` to `0` means templates and groups explicitly control vertical rhythm rather than relying on a global default. This gives editors and template authors precise control over section spacing.

---

## Appearance Tools

The theme enables `appearanceTools: true` in `theme.json`, which unlocks the following editor controls:

- Border (colour, width, radius, style)
- Colour (link colour)
- Spacing (margin, padding, block gap)
- Typography (line height, font weight, letter spacing, text decoration, text transform)
- Dimensions (min height, aspect ratio)
- Position (sticky)

These controls are available on supported blocks without needing to opt in individually.
