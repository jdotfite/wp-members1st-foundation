</main>

<?php do_action('tailpress_content_end'); ?>

</div>

<footer class="bg-gray-lightest py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
    <div class="container">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div class="sm:col-span-2">
                <h2 class="text-lg font-semibold">Subscribe to receive updates.</h2>
                <form action="#" method="post">
                    <div class="flex flex-col sm:flex-row">
                        <input class="flex-1 p-3 border" placeholder="Enter your email" type="email" id="email" required />
                        <button type="submit" class="btn btn-outline">Subscribe</button>
                    </div>
                </form>
            </div>
            <div>
                <p class="font-semibold">Learn More</p>
                <?php
                wp_nav_menu([
                    'theme_location' => 'footer-menu',
                    'container' => false,
                    'menu_class' => 'mt-5 space-y-2',
                ]);
                ?>
            </div>
            <div>
                <p class="font-semibold">Make a Difference</p>
                <div class="space-y-2">
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('donate'))); ?>">Donate</a>
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>">Contact Us</a>
                </div>
            </div>
        </div>
        <hr class="my-6" />
        <p><?php echo get_theme_mod('footer_text', 'Your default footer text here.'); ?></p>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
