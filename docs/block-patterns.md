# Block patterns

The theme registers a single pattern category — `cu-block-theme-patterns`, labelled **Carleton Patterns** — in [`classes/class-enqueues.php`](../classes/class-enqueues.php). Patterns assigned to it appear under that group in the editor's pattern picker.

The `patterns/` directory is currently empty.

## Adding a pattern

1. Create a `.php` file in `patterns/` (e.g. `patterns/hero.php`).
2. Add the standard WordPress pattern header:

```php
<?php
/**
 * Title: Hero
 * Slug: cu-block-theme/hero
 * Categories: cu-block-theme-patterns
 */
?>

<!-- wp:group ... --> ... <!-- /wp:group -->
```

3. WordPress auto-discovers files in `patterns/`. No PHP registration code needed beyond the file.

The `Categories` line links the pattern to the registered category. Use `cu-block-theme-patterns` to keep it grouped under "Carleton Patterns" in the picker.

See the [WordPress block patterns docs](https://developer.wordpress.org/themes/features/block-patterns/) for the full file header reference.
