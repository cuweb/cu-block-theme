# Colour System

The Carleton Block Theme defines a curated 12-colour palette in `theme.json`. WordPress default colours are disabled — only the brand palette is available in the editor, keeping content on-brand by design.

---

## Palette

### Brand Colours

| Name           | Slug             | Hex       | Usage                                           |
| -------------- | ---------------- | --------- | ----------------------------------------------- |
| Primary Dark   | `primary-dark`   | `#a21218` | Dark red accent, hover states                   |
| Primary        | `primary`        | `#e91c24` | Carleton red — buttons, links, brand highlights |
| Secondary Dark | `secondary-dark` | `#2c3c4e` | Secondary button background                     |
| Secondary      | `secondary`      | `#426587` | Link hover, secondary accents                   |

### Neutrals

| Name         | Slug           | Hex       | Usage                                     |
| ------------ | -------------- | --------- | ----------------------------------------- |
| Black        | `black`        | `#191919` | Body text, headings                       |
| Grey Dark    | `grey-dark`    | `#434343` | Captions, muted text                      |
| Grey         | `grey`         | `#767676` | Borders, disabled states                  |
| Grey Light   | `grey-light`   | `#d6d6d6` | Dividers, subtle borders                  |
| Grey Lighter | `grey-lighter` | `#e6e6e6` | Light backgrounds                         |
| Grey Pale    | `grey-pale`    | `#f5f5f5` | Section backgrounds (e.g. breadcrumb bar) |
| Grey Faint   | `grey-faint`   | `#fafafa` | Hero sections, page title areas           |
| White        | `white`        | `#FFFFFF` | Default page background                   |

---

## Using Colours

### In the Block Editor

Every colour in the palette is available through the standard WordPress colour picker in block settings. Custom hex input and duotone controls are intentionally disabled to enforce brand consistency.

### In theme.json

Reference colours with the WordPress preset syntax:

```
"color": "var:preset|color|primary"
```

### In CSS

Use the WordPress-generated custom property:

```css
color: var(--wp--preset--color--primary);
```

Or the design-token equivalent from `tokens.css`:

```css
color: var(--rds--color--primary);
```

---

## Defaults

| Surface           | Colour                |
| ----------------- | --------------------- |
| Page background   | White (`#FFFFFF`)     |
| Body text         | Black (`#191919`)     |
| Headings          | Black (`#191919`)     |
| Links             | Primary (`#e91c24`)   |
| Link hover        | Secondary (`#426587`) |
| Button background | Primary (`#e91c24`)   |
| Button text       | White (`#FFFFFF`)     |

---

## Gradients

Two gradient presets are available in the editor:

| Name            | Slug                     | Value                                               |
| --------------- | ------------------------ | --------------------------------------------------- |
| Red to Dark Red | `custom-red-to-dark-red` | `linear-gradient(135deg, #e91c24 0%, #191919 100%)` |
| Fade In         | `custom-fade-in`         | `linear-gradient(135deg, #767676 0%, #191919 100%)` |

Custom gradients are disabled — only these presets can be selected.

---

## Feedback Colours (CSS Tokens Only)

These colours are defined in `src/css/tokens.css` for use in custom CSS but are not part of the `theme.json` palette and will not appear in the editor colour picker.

| Token                   | Hex       | Usage                |
| ----------------------- | --------- | -------------------- |
| `--rds--color--success` | `#00a32a` | Success states       |
| `--rds--color--warning` | `#dba617` | Warning states       |
| `--rds--color--error`   | `#d63638` | Error states         |
| `--rds--color--info`    | `#72aee6` | Informational states |

---

## Restrictions

The following editor controls are intentionally turned off in `theme.json`:

| Setting                | Value   | Reason                                 |
| ---------------------- | ------- | -------------------------------------- |
| `color.custom`         | `false` | Prevent arbitrary hex colours          |
| `color.customDuotone`  | `false` | Restrict image tinting to brand values |
| `color.customGradient` | `false` | Only allow preset gradients            |
| `color.defaultPalette` | `false` | Hide WordPress default colours         |
