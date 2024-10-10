<?php
if ( ! isset( $block ) ) {
    return;
}

$heading = $block->attributes['heading'] ?? 'Your Heading Here';
?>

<div class="hero-block">
    <h2><?php echo esc_html( $heading ); ?></h2>
</div>