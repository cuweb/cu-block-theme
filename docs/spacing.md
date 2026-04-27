# Spacing

A 7-step responsive scale plus constrained layout widths. Defined in [`theme-rds.json`](../theme-rds.json).

## Scale

Smaller values are fixed; larger values use `min(rem, vw)` to scale fluidly.

| Slug | Name     | Value               |
| ---- | -------- | ------------------- |
| `20` | 2x Small | `0.44rem`           |
| `30` | X Small  | `0.67rem`           |
| `40` | Small    | `min(1rem, 1vw)`    |
| `50` | Medium   | `min(1.5rem, 2vw)`  |
| `60` | Large    | `min(2.25rem, 3vw)` |
| `70` | X Large  | `min(3.38rem, 4vw)` |
| `80` | 2x Large | `min(5.06rem, 6vw)` |

Custom spacing input is disabled (`customSpacingSize: false`).

## Layout widths

| Width   | Value    | Used for            |
| ------- | -------- | ------------------- |
| Content | `1024px` | Default block width |
| Wide    | `1280px` | Wide-aligned blocks |

`useRootPaddingAwareAlignments: true` lets full-width blocks break out of body padding while content/wide blocks respect it.

## Global spacing defaults

| Property                  | Value                                              |
| ------------------------- | -------------------------------------------------- |
| Block gap                 | `0` (templates control vertical rhythm explicitly) |
| Body padding (top/bottom) | `0`                                                |
| Body padding (left/right) | `var(--wp--preset--spacing--60)` (Large)           |

## How to reference

| Context               | Syntax                           |
| --------------------- | -------------------------------- |
| `theme.json` / editor | `"var:preset\|spacing\|50"`      |
| CSS / SCSS            | `var(--wp--preset--spacing--50)` |
| CSS via design token  | `var(--rds--spacing-medium)`     |

## Appearance tools

`appearanceTools: true` is set, so blocks expose:

- Border (color, width, radius, style)
- Color (link color)
- Spacing (margin, padding, block gap)
- Typography (line height, weight, letter spacing, decoration, transform)
- Dimensions (min height, aspect ratio)
- Position (sticky)
