# Block Styles & Shadows

The theme customizes the appearance of core WordPress blocks through `theme.json` styles and JSON-based block style variations. It also provides a set of shadow presets available across any block that supports shadows.

---

## Button Block (`core/button`)

### Default Appearance

| Property | Value |
| --- | --- |
| Background | Primary red (`#e91c24`) |
| Text | White (`#FFFFFF`) |
| Border radius | `4px` (all corners) |
| Font size | `small` |
| Padding | `0.25rem` top/bottom, `min(0.75rem, 1vw)` left/right |

### Button Group Spacing (`core/buttons`)

The `core/buttons` block uses a gap of `0.5rem` between buttons, both horizontally and vertically.

### Secondary Button Variation

A "Secondary" style variation is registered via `styles/buttons/secondary.json`:

| Property | Value |
| --- | --- |
| Background | Secondary Dark (`#2c3c4e`) |
| Text | White (`#FFFFFF`) |

This variation appears in the block editor's Styles panel when a Button block is selected. Apply it by choosing **Secondary** from the style options.

### Creating New Button Variations

Add a new JSON file in `styles/buttons/` following this structure:

```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "slug": "your-slug",
  "title": "Your Label",
  "blockTypes": ["core/button"],
  "styles": {
    "color": {
      "background": "var:preset|color|your-color",
      "text": "var:preset|color|white"
    }
  }
}
```

---

## Navigation Block (`core/navigation`)

| Property | Value |
| --- | --- |
| Font size | `small` |
| Font weight | 400 (Regular) |
| Font style | Normal |

---

## Per-Block Stylesheets

The theme supports per-block CSS files in `src/css/blocks/`. Each file is named using the pattern `core-blockname.css` (e.g. `core-button.css`, `core-table.css`).

These files are:

1. Compiled by PostCSS into `assets/css/blocks/`
2. Auto-registered by the `Enqueues` class using `wp_enqueue_block_style()`
3. Only loaded on pages where the corresponding block is used

This approach keeps the main stylesheet lean and avoids loading unnecessary CSS.

### Current Block Stylesheets

| File | Block |
| --- | --- |
| `core-button.css` | `core/button` |
| `core-table.css` | `core/table` |

To add styles for a new block, create a CSS file in `src/css/blocks/` named `core-blockname.css`. It will be picked up automatically on the next build.

---

## Shadow Presets

Five shadow presets are available in the editor for any block that supports the shadow control:

| Name | Slug | Value | Character |
| --- | --- | --- | --- |
| Natural | `natural` | `6px 6px 9px rgba(0, 0, 0, 0.2)` | Soft, realistic |
| Deep | `deep` | `12px 12px 50px rgba(0, 0, 0, 0.4)` | Dramatic, elevated |
| Sharp | `sharp` | `6px 6px 0px rgba(0, 0, 0, 0.2)` | Flat, offset |
| Outlined | `outlined` | `6px 6px 0px -3px #fff, 6px 6px #000` | Retro, outlined |
| Crisp | `crisp` | `6px 6px 0px #000` | Bold, graphic |

### Using Shadows in CSS

```css
box-shadow: var(--wp--preset--shadow--natural);
```

Or the design-token equivalent:

```css
box-shadow: var(--rds--shadow-natural);
```
