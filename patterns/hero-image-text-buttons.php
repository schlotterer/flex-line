<?php
/**
 * Title: Hero with image, text, and buttons.
 * Slug: flexline/hero-image-text-buttons
 * Categories: featured
 */
?>
<!-- wp:group {"align":"full","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull"><!-- wp:cover {"url":"<?php echo esc_url( get_theme_file_uri() ) . '/assets/images/placeholder-stringlights.gif'; ?>","dimRatio":70,"overlayColor":"primary","align":"full","style":{"spacing":{"blockGap":"var:preset|spacing|x-small","padding":{"top":"var:preset|spacing|xxx-large","bottom":"var:preset|spacing|xxx-large","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-cover alignfull" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--xxx-large);padding-right:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--xxx-large);padding-left:var(--wp--preset--spacing--medium)"><span aria-hidden="true" class="wp-block-cover__background has-primary-background-color has-background-dim-70 has-background-dim"></span><img class="wp-block-cover__image-background" alt="" src="<?php echo esc_url( get_theme_file_uri() ) . '/assets/images/placeholder-stringlights.gif'; ?>" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:group {"align":"wide","layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group alignwide"><!-- wp:group {"layout":{"type":"constrained","contentSize":"700px","wideSize":"1000px"}} -->
<div class="wp-block-group"><!-- wp:heading {"level":1,"style":{"typography":{"textTransform":"uppercase","fontStyle":"normal","fontWeight":"400"}},"fontSize":"small"} -->
<h1 class="wp-block-heading has-small-font-size" style="font-style:normal;font-weight:400;text-transform:uppercase">H1 - Eyebrow - SEO Headline</h1>
<!-- /wp:heading -->

<!-- wp:heading {"style":{"spacing":{"margin":{"top":"0","bottom":"0"}}},"fontSize":"max-60"} -->
<h2 class="wp-block-heading has-max-60-font-size" style="margin-top:0;margin-bottom:0">H2 - Creative Headline</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"secondary","style":{"typography":{"textTransform":"uppercase"}},"fontSize":"medium"} -->
<div class="wp-block-button has-custom-font-size has-medium-font-size" style="text-transform:uppercase"><a class="wp-block-button__link has-secondary-background-color has-background wp-element-button" href="https://flexline.test/contact/">Contact Us</a></div>
<!-- /wp:button -->

<!-- wp:button {"textColor":"base","style":{"typography":{"textTransform":"uppercase"},"elements":{"link":{"color":{"text":"var:preset|color|base"}}}},"className":"is-style-outline","fontSize":"medium","enablePopup":true,"popupMediaURL":"https://www.youtube.com/watch?v=G1hKzCkywM8"} -->
<div class="wp-block-button has-custom-font-size is-style-outline has-medium-font-size" style="text-transform:uppercase"><a class="wp-block-button__link has-base-color has-text-color has-link-color wp-element-button">Watch video</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover --></div>
<!-- /wp:group -->