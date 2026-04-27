# Block styles

Core blocks are styled three ways: `theme.json` block-level defaults, JSON style variations, and per-block SCSS files.

## 1. theme.json block defaults

Set in [`theme.json`](../theme.json) under `styles.blocks`.

### `core/button`

| Property             | Value                                      |
| -------------------- | ------------------------------------------ |
| Border radius        | 4px (all corners)                          |
| Padding (vertical)   | `spacing--20`                              |
| Padding (horizontal) | `spacing--40`                              |
| Font size            | `small`                                    |
| Background           | Primary (default, set in `theme-rds.json`) |
| Text                 | White (default, set in `theme-rds.json`)   |

### `core/buttons`

| Property  | Value                   |
| --------- | ----------------------- |
| Block gap | `spacing--30` (X Small) |

### `core/navigation`

| Property    | Value   |
| ----------- | ------- |
| Font size   | `small` |
| Font style  | Normal  |
| Font weight | 400     |

## 2. Style variations (JSON)

Files in `styles/` register named variations that show up in the block's Styles panel.

### `styles/buttons/secondary.json`

A "Secondary" style for `core/button`:

| Property   | Value                      |
| ---------- | -------------------------- |
| Background | Secondary Dark (`#2c3c4e`) |
| Text       | White                      |

WordPress auto-discovers anything in `styles/`. No PHP registration needed.

### Adding a new variation

Drop a file in `styles/<block-area>/<slug>.json`:

```json
{
	"$schema": "https://schemas.wp.org/trunk/theme.json",
	"version": 3,
	"slug": "your-slug",
	"title": "Your Label",
	"blockTypes": ["core/button"],
	"styles": {
		"color": {
			"background": "var:preset|color|primary-dark",
			"text": "var:preset|color|white"
		}
	}
}
```

## 3. Per-block SCSS

Files in `src/css/blocks/` named `core-blockname.scss` compile to `assets/css/blocks/core-blockname.css`. The `Enqueues` class scans that output directory and registers each via `wp_enqueue_block_style()` — so the CSS only ships when the block is on the page.

| File               | Block         |
| ------------------ | ------------- |
| `core-button.scss` | `core/button` |
| `core-table.scss`  | `core/table`  |

Both files are currently empty stubs — placeholders for block-specific style additions.

### Adding styles for a new block

1. Create `src/css/blocks/core-<blockname>.scss`.
2. `pnpm run build:blocks` (or let `pnpm run start` rebuild on save).
3. The auto-registration handles the rest.
