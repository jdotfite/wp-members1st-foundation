<?php

// Theme setup: Add support for various features
function tailpress_setup() {
    add_theme_support('title-tag');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption']);
    add_theme_support('custom-logo');
    add_theme_support('post-thumbnails');
    add_theme_support('align-wide');
    add_theme_support('wp-block-styles');
    add_theme_support('responsive-embeds');
    add_theme_support('editor-styles');
    add_editor_style('css/editor-style.css');
    add_theme_support('block-patterns');
}
add_action('after_setup_theme', 'tailpress_setup');

// Enqueue theme assets (CSS and JS)
function tailpress_enqueue_scripts() {
    $theme = wp_get_theme();
    wp_enqueue_style('tailpress', tailpress_asset('css/app.css'), [], $theme->get('Version'));
    wp_enqueue_script('tailpress', tailpress_asset('js/app.js'), [], $theme->get('Version'));
}
add_action('wp_enqueue_scripts', 'tailpress_enqueue_scripts');

// Get asset path, with cache-busting in development
function tailpress_asset($path) {
    return wp_get_environment_type() === 'production' ? 
           get_stylesheet_directory_uri() . '/' . $path : 
           add_query_arg('time', time(), get_stylesheet_directory_uri() . '/' . $path);
}

// Include custom patterns
require get_template_directory() . '/patterns/hero.php';
require get_template_directory() . '/patterns/text-left-image-right.php';

// Add custom classes to menu items
function tailpress_nav_menu_add_classes($classes, $item, $args) {
    if (isset($args->li_class)) {
        $classes[] = $args->li_class;
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'tailpress_nav_menu_add_classes', 10, 3);

// Register navigation menus
function tailpress_register_menus() {
    register_nav_menus([
        'primary' => __('Primary Menu', 'tailpress'),
        'footer-menu' => __('Footer Menu', 'tailpress'),
    ]);
}
add_action('after_setup_theme', 'tailpress_register_menus');

// Add a custom footer text section to the Customizer
function theme_customize_register($wp_customize) {
    $wp_customize->add_section('footer_section', [
        'title' => __('Footer', 'tailpress'),
        'priority' => 30,
    ]);
    $wp_customize->add_setting('footer_text', [
        'default' => 'Your default footer text here.',
        'sanitize_callback' => 'wp_kses_post',
    ]);
    $wp_customize->add_control('footer_text', [
        'label' => __('Footer Text', 'tailpress'),
        'section' => 'footer_section',
        'type' => 'textarea',
    ]);
}
add_action('customize_register', 'theme_customize_register');

// Add custom classes to menu link items
function tailpress_nav_menu_link_attributes($atts, $item, $args) {
    if (isset($args->link_class)) {
        $atts['class'] = $args->link_class;
    }
    return $atts;
}
add_filter('nav_menu_link_attributes', 'tailpress_nav_menu_link_attributes', 10, 3);


function tailpress_enqueue_block_editor_assets() {
    wp_enqueue_script(
        'tailpress-custom-button',
        get_template_directory_uri() . '/build/blocks/custom-button/index.js',
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
        filemtime(get_stylesheet_directory() . '/build/blocks/custom-button/index.js')
    );
}
add_action('enqueue_block_editor_assets', 'tailpress_enqueue_block_editor_assets');

function tailpress_register_custom_blocks() {
    if (function_exists('register_block_type')) {
        register_block_type('tailpress/custom-button', array(
            'editor_script' => 'tailpress-custom-button',
        ));
    }
}
add_action('init', 'tailpress_register_custom_blocks');

// Adding Dark Theme Switch to Editor via plugin
function enqueue_editor_theme_toggle() {
    wp_enqueue_script(
        'editor-theme-toggle',
        get_template_directory_uri() . '/inc/editor-plugins/theme-toggle.js',
        array('wp-plugins', 'wp-edit-post', 'wp-element', 'wp-components', 'wp-i18n'),
        filemtime(get_template_directory() . '/inc/editor-plugins/theme-toggle.js'),
        true
    );
}
add_action('enqueue_block_editor_assets', 'enqueue_editor_theme_toggle');
