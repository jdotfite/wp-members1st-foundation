<?php
function tailpress_register_text_left_image_right_pattern() {
    register_block_pattern(
        'tailpress/text-left-image-right',
        array(
            'title'       => __( 'Text Left Image Right', 'tailpress' ),
            'description' => __( 'A full-width two-column layout with text on the left and an image on the right.', 'tailpress' ),
            'content'     => '<!-- wp:group {"align":"full","className":"section-py bg-brand-yellow","layout":{"type":"constrained"},"id":"donate"} -->
<div class="wp-block-group alignfull section-py bg-brand-yellow" id="donate">
    <!-- wp:group {"align":"wide","className":"container","layout":{"type":"default"}} -->
    <div class="wp-block-group alignwide container">
        <!-- wp:columns {"verticalAlignment":"center","align":"wide"} -->
        <div class="wp-block-columns alignwide are-vertically-aligned-center">
            <!-- wp:column {"verticalAlignment":"center"} -->
            <div class="wp-block-column is-vertically-aligned-center">
                <!-- wp:heading {"level":2,"className":"text-5xl font-bold uppercase mb-6 tracking-tight"} -->
                <h2 class="wp-block-heading text-5xl font-bold uppercase mb-6 tracking-tight">Donate Today</h2>
                <!-- /wp:heading -->

                <!-- wp:paragraph {"className":"mb-8"} -->
                <p class="mb-8">We learned a long time ago that the more we all share, the more we all have. And the more you think about it, the more it makes sense.<br><br>Donate now, and let\'s do great things together.</p>
                <!-- /wp:paragraph -->

                <!-- wp:buttons -->
                <div class="wp-block-buttons">
                    <!-- wp:button {"className":"btn btn-md btn-outline btn-ripple"} -->
                    <div class="wp-block-button btn btn-md btn-outline btn-ripple"><a class="wp-block-button__link wp-element-button">Donate</a></div>
                    <!-- /wp:button -->
                </div>
                <!-- /wp:buttons -->
            </div>
            <!-- /wp:column -->

            <!-- wp:column {"verticalAlignment":"center"} -->
            <div class="wp-block-column is-vertically-aligned-center">
                <!-- wp:image {"align":"center","sizeSlug":"large","className":"w-full rounded-sm shadow-sm"} -->
                <figure class="wp-block-image aligncenter size-large w-full rounded-sm shadow-sm"><img src="https://cdn.buttercms.com/RHIZzklLQMGAiqqTC4Tx" alt="Two girls at desk in classroom"/></figure>
                <!-- /wp:image -->
            </div>
            <!-- /wp:column -->
        </div>
        <!-- /wp:columns -->
    </div>
    <!-- /wp:group -->
</div>
<!-- /wp:group -->',
            'categories'  => array( 'text' ),
        )
    );
}
add_action( 'init', 'tailpress_register_text_left_image_right_pattern' );