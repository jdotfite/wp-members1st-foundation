<?php
function tailpress_register_hero_pattern() {
    register_block_pattern(
        'tailpress/hero',
        array(
            'title'       => __( 'Hero Section', 'tailpress' ),
            'description' => __( 'A hero section with a title, paragraph, and button.', 'tailpress' ),
            'content'     => '<!-- wp:cover {"url":"","dimRatio":70,"minHeight":100,"minHeightUnit":"vh","className":"tailpress-full-width","style":{"spacing":{"padding":{"top":"0","right":"0","bottom":"0","left":"0"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-cover tailpress-full-width" style="min-height:100vh;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0">
    <span aria-hidden="true" class="wp-block-cover__background has-background-dim-70 has-background-dim"></span>
    <div class="wp-block-cover__inner-container">
        <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
        <div class="wp-block-group">
            <!-- wp:heading {"textAlign":"center","level":2,"className":"mb-4 text-7xl font-bold tracking-tight leading-none uppercase"} -->
            <h2 class="wp-block-heading has-text-align-center mb-4 text-7xl font-bold tracking-tight leading-none uppercase"><span class="text-m1-red">75 Years</span><br><span class="md:text-6xl text-5xl block tracking-wide text-white">in the Making</span></h2>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"align":"center","className":"mt-3 text-white sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 font-opensans"} -->
            <p class="has-text-align-center mt-3 text-white sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 font-opensans">We started the foundation with one goal; give back to the communities that have given us so much.</p>
            <!-- /wp:paragraph -->

            <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
            <div class="wp-block-buttons">
                <!-- wp:button {"className":"btn btn-lg btn-outline-onBackground btn-ripple text-white border-2 border-color-white hover:bg-white hover:text-black"} -->
                <div class="wp-block-button btn btn-lg btn-outline-onBackground btn-ripple text-white border-2 border-color-white hover:bg-white hover:text-black"><a class="wp-block-button__link wp-element-button">Learn More</a></div>
                <!-- /wp:button -->
            </div>
            <!-- /wp:buttons -->
        </div>
        <!-- /wp:group -->
    </div>
</div>
<!-- /wp:cover -->',
            'categories'  => array( 'text' ),
        )
    );
}
add_action( 'init', 'tailpress_register_hero_pattern' );