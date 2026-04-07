<?php
/**
 * Enqueue theme assets and register pattern categories.
 *
 * @package CuBlockTheme
 */

namespace CuBlockTheme;

/**
 * Class Enqueues
 */
class Enqueues {

	/**
	 * Initialize the module.
	 */
	public function init(): void {
		add_action( 'after_setup_theme', array( $this, 'setup' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styles' ), 20 );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_action( 'init', array( $this, 'enqueue_block_styles' ) );
		add_action( 'init', array( $this, 'register_pattern_categories' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_editor_scripts' ) );
	}

	/**
	 * Set up theme support for editor styles.
	 */
	public function setup(): void {
		add_theme_support( 'editor-styles' );
		add_editor_style( 'assets/css/styles.css' );
		add_editor_style( 'assets/css/editor.css' );
	}

	/**
	 * Enqueue the frontend stylesheet with cache-busting.
	 */
	public function enqueue_styles(): void {
		$path    = get_theme_file_path( 'assets/css/styles.css' );
		$version = file_exists( $path ) ? filemtime( $path ) : wp_get_theme()->get( 'Version' );

		wp_enqueue_style(
			'cu-block-theme-style',
			get_theme_file_uri( 'assets/css/styles.css' ),
			array(),
			$version
		);
	}

	/**
	 * Enqueue the frontend script when it exists.
	 */
	public function enqueue_scripts(): void {
		$path    = get_theme_file_path( 'assets/js/script.js' );
		$version = file_exists( $path ) ? filemtime( $path ) : wp_get_theme()->get( 'Version' );

		if ( file_exists( $path ) ) {
			wp_enqueue_script(
				'cu-block-theme-script',
				get_theme_file_uri( 'assets/js/script.js' ),
				array(),
				$version,
				true
			);
		}
	}

	/**
	 * Auto-register block stylesheets from the blocks/ directory.
	 */
	public function enqueue_block_styles(): void {
		$blocks_dir = get_theme_file_path( 'assets/css/blocks' );

		foreach ( glob( $blocks_dir . '/*.css' ) ?: array() as $file ) {
			$filename   = basename( $file, '.css' );
			$block_name = str_replace( '-', '/', $filename );
			$version    = filemtime( $file );

			wp_enqueue_block_style(
				$block_name,
				array(
					'handle' => 'cu-block-theme-' . $filename,
					'src'    => get_theme_file_uri( 'assets/css/blocks/' . $filename . '.css' ),
					'path'   => $file,
					'deps'   => array( 'cu-block-theme-style' ),
					'ver'    => $version,
				)
			);
		}
	}

	/**
	 * Register a custom block pattern category for the theme.
	 */
	public function register_pattern_categories(): void {
		register_block_pattern_category(
			'cu-block-theme-patterns',
			array( 'label' => __( 'Carleton Patterns', 'cu-block-theme' ) )
		);
	}

	public function enqueue_editor_scripts(): void {
		$path    = get_theme_file_path( 'assets/js/editor.js' );
		$version = file_exists( $path ) ? filemtime( $path ) : wp_get_theme()->get( 'Version' );

		if ( file_exists( $path ) ) {
			wp_enqueue_script(
				'cu-block-theme-editor',
				get_theme_file_uri( 'assets/js/editor.js' ),
				array( 'wp-blocks', 'wp-dom-ready' ),
				$version,
				true
			);
		}
	}
}
