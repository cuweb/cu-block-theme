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

// Instantiate our modules.
$cu_block_theme_modules = array(
	new CuBlockTheme\Enqueues(),
	// new CuBlockTheme\UserRoles(),
);

foreach ( $cu_block_theme_modules as $cu_block_theme_module ) {
	$cu_block_theme_module->init();
}
