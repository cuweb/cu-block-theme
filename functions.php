<?php
/**
 * Carleton Block Theme Functions
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Include our bundled autoload if not loaded globally.
if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once __DIR__ . '/vendor/autoload.php';
}

/**
 * Inject the library's theme.json as a WordPress default base layer.
 *
 * This registers design tokens (colors, spacing, fonts, etc.) as
 * WordPress presets. The active theme's theme.json overrides any
 * values defined here.
 */
add_filter( 'wp_theme_json_data_default', function ( $theme_json ) {
	$library_json_path = __DIR__ . '/theme-rds.json';

	if ( ! file_exists( $library_json_path ) ) {
		return $theme_json;
	}

	$library_data = json_decode(
		file_get_contents( $library_json_path ),
		true
	);

	if ( ! is_array( $library_data ) ) {
		return $theme_json;
	}

	return $theme_json->update_with( $library_data );
} );

// Instantiate our modules.
$cu_block_theme_modules = array(
	new CuBlockTheme\Enqueues(),
	// new CuBlockTheme\UserRoles(),
);

foreach ( $cu_block_theme_modules as $cu_block_theme_module ) {
	$cu_block_theme_module->init();
}
