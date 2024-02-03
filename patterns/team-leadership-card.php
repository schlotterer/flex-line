<?php
/**
 * Title: Leadership Card.
 * Slug: flexline/team-leadership-card
 * Categories: flexline-components, flexline-modules, flexline-misc
 */
?>
<!-- wp:group {"align":"wide","className":"is-style-card-padded","layout":{"type":"default"},"metadata":{"name":"Leadership Card"}} -->
<div class="wp-block-group alignwide is-style-card-padded"><!-- wp:columns {"verticalAlignment":"center","className":"is-style-columns-reverse"} -->
<div class="wp-block-columns are-vertically-aligned-center is-style-columns-reverse"><!-- wp:column {"verticalAlignment":"center","width":""} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|small"}},"layout":{"type":"flex","orientation":"vertical","verticalAlignment":"center"},"metadata":{"name":"Leadership Info"}} -->
<div class="wp-block-group"><!-- wp:group {"style":{"spacing":{"blockGap":"0"}},"layout":{"type":"flex","orientation":"vertical","verticalAlignment":"center"},"metadata":{"name":"Name and Title"}} -->
<div class="wp-block-group"><!-- wp:heading {"className":"wp-block-heading","fontSize":"x-large"} -->
<h2 class="wp-block-heading has-x-large-font-size" id="text-on-left-image-on-right">First Lastname</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"typography":{"textTransform":"uppercase"}},"fontSize":"x-small"} -->
<p class="has-x-small-font-size" style="text-transform:uppercase">Job Title</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:paragraph -->
<p>With its clean, minimal design and powerful feature set, FlexLine enables agencies to build stylish and sophisticated WordPress websites.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":""} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:image {"id":5592,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="<?php echo esc_url( get_theme_file_uri() ) . '/assets/images/featured-6.jpg'; ?>" alt="Sample Image" class="wp-image-5592"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->