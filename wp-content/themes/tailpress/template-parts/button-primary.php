<?php
// Ensure that $link and $text are passed to the component
$link = $args['link'] ?? '#';
$text = $args['text'] ?? 'Learn More';

?>
<a href="<?php echo esc_url( $link ); ?>" class="btn-primary">
    <?php echo esc_html( $text ); ?>
</a>