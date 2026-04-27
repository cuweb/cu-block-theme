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

	/**
	 * Remove Site Editor access (Appearance → Editor).
	 */
	public function block_site_editing_mode(): void {
		$editor = get_role( 'editor' );
		if ( $editor ) {
			$editor->remove_cap( 'edit_theme_options' );
		}
	}

	/**
	 * Block the "Show Template" panel inside the post/page editor.
	 *
	 * @param array  $settings Editor settings.
	 * @param object $context  Editor context (required by filter signature).
	 * @return array
	 */
	public function block_template_editing_mode( $settings, $context ): array { // phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed -- WP filter signature.
		if ( ! current_user_can( 'manage_options' ) ) {
			$settings['supportsTemplateMode'] = false;
		}
		return $settings;
	}
}
