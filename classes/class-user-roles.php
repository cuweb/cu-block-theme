<?php
/**
 * Enqueue theme assets and register pattern categories.
 *
 * @package CuBlockTheme
 */

namespace CuBlockTheme;

/**
 * Class UserRoles
 */
class UserRoles {

	/**
	 * Initialize the module.
	 */
	public function init(): void {
		add_action( 'init', array( $this, 'block_site_editing_mode' ) );
        add_filter( 'block_editor_settings_all', array( $this, 'block_template_editing_mode' ), 10, 2 );
    }

	// 1. Remove Site Editor access (Appearance → Editor)
    public function block_site_editing_mode(): void {
		$editor = get_role( 'editor' );
        if ( $editor ) {
            $editor->remove_cap( 'edit_theme_options' );
        }
	}

	// 2. Block the "Show Template" panel inside the post/page editor
    public function block_template_editing_mode( $settings, $context ): array {
		if ( ! current_user_can( 'manage_options' ) ) {
            $settings['supportsTemplateMode'] = false;
        }
        return $settings;
	}
}
