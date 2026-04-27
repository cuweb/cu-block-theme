# Template parts

Two parts in `parts/`, registered in [`theme.json`](../theme.json) under `templateParts`.

## header.html

```
┌────────────────────────────────────────────┐
│  ═══ 5px red top border ═══                │
│  [Logo] [Site Title]      [Apply] [Donate] │
│  ─── 1px grey-light bottom border ───      │
├────────────────────────────────────────────┤
│  Grey container (grey-pale bg)             │
│  └─ Navigation (wide-aligned)              │
└────────────────────────────────────────────┘
```

| Detail          | Value                                                           |
| --------------- | --------------------------------------------------------------- |
| Wrapper class   | `.cu-site-header` (white background)                            |
| Top border      | 5px Primary (Carleton red)                                      |
| Bottom border   | 1px Grey Light                                                  |
| Container width | 1536px (overrides default content size for the header)          |
| Logo            | `wp:site-logo` with `.is-style-rounded`                         |
| Site title      | X Large, weight 600, Inter; black text turning Primary on hover |
| Buttons         | Apply (default style) and Donate (`.is-style-secondary`)        |
| Below the bar   | Pale-grey container with a wide-aligned navigation              |

## footer.html

```
┌────────────────────────────────────────────┐
│  ═══ 5px red top border ═══                │
│  Footer top section                        │
│  ─── 1px white-10 divider ───              │
│  Footer bottom section                     │
└────────────────────────────────────────────┘
```

| Detail                     | Value                            |
| -------------------------- | -------------------------------- |
| Wrapper class              | `.cu-footer` (black background)  |
| Top border                 | 5px Primary                      |
| Inner sections             | Two `.cu-footer__section` groups |
| Section padding            | X Large (`spacing--70`)          |
| Block gap between sections | X Large                          |
| Text color                 | White, centered                  |
| Section font size          | X Small                          |

## Adding a new part

1. Create the `.html` file in `parts/`.
2. Register it in `theme.json`:

```json
{
	"templateParts": [
		{ "area": "uncategorized", "name": "sidebar", "title": "Sidebar" }
	]
}
```

3. Reference from a template: `<!-- wp:template-part {"slug":"sidebar"} /-->`.
