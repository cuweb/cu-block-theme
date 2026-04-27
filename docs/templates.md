# Templates

Three block templates in `templates/`. All include the header and footer template parts.

## index.html

Fallback template — used when no more specific template matches.

| Section | Block                                                       | Notes                                                       |
| ------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| Header  | `wp:template-part {"slug":"header"}`                        |                                                             |
| Main    | `wp:group` (`<main>` tag, `#main` anchor, `.cu-main` class) | `margin-bottom: 0`                                          |
| Content | `wp:post-content` (full-align, `.cu-content`)               | Constrained inner layout, blockGap = Medium (`spacing--50`) |
| Footer  | `wp:template-part {"slug":"footer"}`                        |                                                             |

## page.html

Static page template. Adds a hero section with the page title.

| Section | Block                                                   | Notes                                                                                                            |
| ------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Header  | header part                                             |                                                                                                                  |
| Hero    | `<header>` group, `.cu-hero` class, `#page-hero` anchor | `custom-white-to-grey-bottom` gradient bg, 1px grey-pale bottom border, X Large vertical padding (`spacing--70`) |
| Title   | `wp:post-title` (level 1, left-aligned)                 | Inside the hero                                                                                                  |
| Main    | `<main>`, `.cu-main`, `#main`                           | X Large vertical padding                                                                                         |
| Content | `wp:post-content` (full, `.cu-content`)                 |                                                                                                                  |
| Footer  | footer part                                             |                                                                                                                  |

## single.html

Single post template. Same hero shape as `page.html`, plus post metadata.

| Section | Block                                     | Notes                            |
| ------- | ----------------------------------------- | -------------------------------- |
| Header  | header part                               |                                  |
| Hero    | `<header>` group, `.cu-hero`              | Same as `page.html`              |
| Title   | `wp:post-title`                           |                                  |
| Meta    | flex group with date and read-time blocks | grey-dark text, medium font size |
| Main    | `<main>`, `.cu-main`                      |                                  |
| Content | `wp:post-content`                         |                                  |
| Footer  | footer part                               |                                  |

## Custom CSS classes (used in templates and parts)

| Class                      | Where                 | Purpose                                              |
| -------------------------- | --------------------- | ---------------------------------------------------- |
| `.cu-site-header`          | Header part wrapper   | Header-specific styles                               |
| `.cu-site-header__section` | Header inner section  | Flex layout container                                |
| `.cu-site-header__logo`    | Logo + title group    | Logo area layout                                     |
| `.cu-site-title`           | Site title block      | Title-specific overrides                             |
| `.cu-hero`                 | Page hero group       | Hero section styles                                  |
| `.cu-main`                 | Main content group    | Main area styles                                     |
| `.cu-content`              | Post content block    | Custom link styles (see [typography](typography.md)) |
| `.cu-footer`               | Footer part wrapper   | Footer-specific styles                               |
| `.cu-footer__section`      | Footer inner sections | Footer section layout                                |

## Adding a new template

1. Create a new `.html` file in `templates/` (e.g. `archive.html`).
2. Use block markup; include the header/footer with `<!-- wp:template-part {"slug":"header","area":"header"} /-->` etc.
3. WordPress auto-detects the file. No registration needed.
