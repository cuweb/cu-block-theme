# Design Tokens

Design tokens are the foundational variables that drive the visual language of the Carleton Block Theme. They are defined as CSS custom properties in `src/css/tokens.css` and compiled into both the front-end and editor stylesheets, ensuring a single source of truth across every context.

All tokens use the `--rds--` namespace.

---

## Colour Tokens

### Brand

| Token | Value | Usage |
| --- | --- | --- |
| `--rds--color--primary-dark` | `#a21218` | Dark red accent, hover states |
| `--rds--color--primary` | `#e91c24` | Carleton red — primary actions, links, brand highlights |
| `--rds--color--secondary-dark` | `#2c3c4e` | Dark navy — secondary button backgrounds |
| `--rds--color--secondary` | `#426587` | Navy blue — secondary accents, link hover states |

### Neutrals

| Token | Value | Usage |
| --- | --- | --- |
| `--rds--color--black` | `#191919` | Body text, headings |
| `--rds--color--grey-dark` | `#434343` | Captions, muted text |
| `--rds--color--grey` | `#767676` | Borders, disabled states |
| `--rds--color--grey-light` | `#d6d6d6` | Subtle borders, dividers |
| `--rds--color--grey-lighter` | `#e6e6e6` | Light backgrounds |
| `--rds--color--grey-pale` | `#f5f5f5` | Section backgrounds |
| `--rds--color--grey-faint` | `#fafafa` | Hero / page-title backgrounds |
| `--rds--color--white` | `#FFFFFF` | Default page background |

### Feedback

| Token | Value | Usage |
| --- | --- | --- |
| `--rds--color--success` | `#00a32a` | Success messages |
| `--rds--color--warning` | `#dba617` | Warning messages |
| `--rds--color--error` | `#d63638` | Error messages |
| `--rds--color--info` | `#72aee6` | Informational messages |

---

## Spacing Tokens

All spacing values use `min()` to cap their size at a viewport-relative maximum, creating a fluid scale that works across breakpoints.

| Token | Value |
| --- | --- |
| `--rds--spacing-2x-small` | `0.25rem` |
| `--rds--spacing-x-small` | `0.5rem` |
| `--rds--spacing-small` | `min(0.75rem, 1vw)` |
| `--rds--spacing-medium` | `min(1.5rem, 2vw)` |
| `--rds--spacing-large` | `min(2.25rem, 3vw)` |
| `--rds--spacing-x-large` | `min(3rem, 4vw)` |
| `--rds--spacing-2x-large` | `min(4.5rem, 6vw)` |

---

## Typography Tokens

### Font Families

| Token | Value |
| --- | --- |
| `--rds--font-family-inter` | `Inter, sans-serif` |
| `--rds--font-family-system` | `-apple-system, BlinkMacSystemFont, sans-serif` |

### Font Sizes (Fluid)

Font sizes use `clamp()` to scale smoothly between a minimum and maximum value.

| Token | Range |
| --- | --- |
| `--rds--font-size-small` | `0.875rem` → `1rem` |
| `--rds--font-size-medium` | `1rem` → `1.125rem` |
| `--rds--font-size-large` | `1.125rem` → `1.25rem` |
| `--rds--font-size-x-large` | `1.25rem` → `1.5rem` |

### Font Weights

| Token | Value |
| --- | --- |
| `--rds--font-weight-normal` | `400` |
| `--rds--font-weight-bold` | `700` |

---

## Shadow Tokens

| Token | Value |
| --- | --- |
| `--rds--shadow-natural` | `6px 6px 9px rgba(0, 0, 0, 0.2)` |
| `--rds--shadow-deep` | `12px 12px 50px rgba(0, 0, 0, 0.4)` |
| `--rds--shadow-sharp` | `6px 6px 0px rgba(0, 0, 0, 0.2)` |
| `--rds--shadow-outlined` | `6px 6px 0px -3px #fff, 6px 6px #000` |
| `--rds--shadow-crisp` | `6px 6px 0px #000` |

---

## Border Radius Tokens

| Token | Value |
| --- | --- |
| `--rds--radius-sm` | `2px` |
| `--rds--radius-md` | `4px` |
| `--rds--radius-lg` | `8px` |

---

## Layout Tokens

| Token | Value |
| --- | --- |
| `--rds--layout-content-size` | `768px` |
| `--rds--layout-wide-size` | `1280px` |

> **Note:** The `theme.json` layout sizes (`contentSize: 1024px`, `wideSize: 1280px`) govern WordPress block alignment widths. The CSS tokens above are available for custom layout work outside of the block system.

---

## Token / theme.json Relationship

The same colour and spacing values appear in both `theme.json` (as WordPress presets) and in the CSS tokens file. WordPress generates its own custom properties from `theme.json` (e.g. `--wp--preset--color--primary`), while the `--rds--` tokens provide a parallel set for use in custom CSS where WordPress preset variables may not be available.

When writing custom CSS, prefer the `--rds--` tokens. When configuring blocks through `theme.json` or the editor UI, the WordPress preset values are used automatically.
