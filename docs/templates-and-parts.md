# Templates & Template Parts

Templates define the full-page structure for different content types, while template parts are reusable sections (header, footer) shared across templates. Both are built entirely with block markup — no PHP template files.

---

## Templates

### Index (`templates/index.html`)

The fallback template used when no more specific template matches. It provides a minimal structure:

```
┌──────────────────────────────┐
│         Header (part)        │
├──────────────────────────────┤
│                              │
│   Main Content               │
│   └─ Post Content (full)     │
│      constrained layout      │
│      block gap: Medium       │
│                              │
├──────────────────────────────┤
│         Footer (part)        │
└──────────────────────────────┘
```

**Key details:**

- The main content area uses `tagName: main` with the anchor `#main` for accessibility.
- Post Content is set to `align: full` with a constrained inner layout.
- The `.cu-content` class is applied to Post Content, activating custom link styles.
- Block gap within the content area is set to `--wp--preset--spacing--50` (Medium).

---

### Page (`templates/page.html`)

A richer template for static pages, adding a breadcrumb-style navigation bar and a hero section with the page title.

```
┌──────────────────────────────┐
│         Header (part)        │
├──────────────────────────────┤
│   Grey Bar (grey-pale bg)    │
│   └─ Navigation (wide)       │
│      border-bottom: 1px      │
├──────────────────────────────┤
│   Page Hero (grey-faint bg)  │
│   └─ Post Title (H1)         │
│      padding: X Large        │
│      margin-bottom: Large    │
├──────────────────────────────┤
│                              │
│   Main Content               │
│   └─ Post Content (full)     │
│      constrained layout      │
│      block gap: Medium       │
│      margin-bottom: Large    │
│                              │
├──────────────────────────────┤
│         Footer (part)        │
└──────────────────────────────┘
```

**Key details:**

- A secondary navigation bar sits between the header and hero, using a pale grey background and a subtle bottom border.
- The hero section is a full-width group with a faint grey background and generous vertical padding.
- The Post Title block renders as an H1 left-aligned within the hero.
- The `.cu-hero` class is applied to the hero group for potential custom styling.

---

## Template Parts

### Header (`parts/header.html`)

```
┌──────────────────────────────────────────┐
│  ═══ 5px red top border ═══             │
│                                          │
│  [Logo] [Site Title]     [Apply] [Donate]│
│                                          │
│  ─── 1px grey bottom border ───         │
└──────────────────────────────────────────┘
```

**Structure:**

- Outer group with a constrained layout and white background.
- A 5px red top border (`--wp--preset--color--primary`) provides the signature Carleton brand stripe.
- A 1px grey bottom border separates the header from page content.
- Inner flex layout with two groups:
    - **Left:** Site Logo (38px) + Site Title (Semi-Bold, X Large, fixed 100px width). The title links to the homepage and turns red on hover.
    - **Right:** Two buttons — "Apply" (primary) and "Donate" (secondary style variation).

### Footer (`parts/footer.html`)

```
┌──────────────────────────────────────────┐
│  ═══ 5px red top border ═══             │
│                                          │
│  Footer Top Section                      │
│  ─── 1px white/10% divider ───          │
│  Footer Bottom Section                   │
│                                          │
└──────────────────────────────────────────┘
```

**Structure:**

- Full-width group with a black background and the same 5px red top border as the header.
- Two stacked sections separated by a semi-transparent white divider.
- Both sections use constrained layouts with centred white text.
- Generous vertical padding (`--wp--preset--spacing--70` / X Large) gives the footer visual weight.
- Inner spacing matches the X Large preset.

---

## Custom CSS Classes

Templates and parts use several custom classes for targeted styling:

| Class                      | Applied To            | Purpose                  |
| -------------------------- | --------------------- | ------------------------ |
| `.cu-site-header`          | Header wrapper        | Header-specific styles   |
| `.cu-site-header__section` | Header inner section  | Flex layout container    |
| `.cu-site-header__logo`    | Logo + title group    | Logo area layout         |
| `.cu-site-title`           | Site title block      | Title-specific overrides |
| `.cu-hero`                 | Page hero group       | Hero section styles      |
| `.cu-main`                 | Main content group    | Main area styles         |
| `.cu-content`              | Post content block    | Custom link styles       |
| `.cu-footer`               | Footer wrapper        | Footer-specific styles   |
| `.cu-footer__section`      | Footer inner sections | Footer section layout    |

---

## Adding New Templates

1. Create a new `.html` file in `templates/` (e.g. `templates/single.html`).
2. Use block markup with `<!-- wp:template-part -->` to include the header and footer.
3. WordPress will automatically detect the template and make it available in the editor.

## Adding New Template Parts

1. Create a new `.html` file in `parts/` (e.g. `parts/sidebar.html`).
2. Register it in `theme.json` under `templateParts`:

```json
{
	"area": "uncategorized",
	"name": "sidebar",
	"title": "Sidebar"
}
```
