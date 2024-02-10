<?php

/**
 * Title: Section with cover boxes to highlight content and provide links.
 * Slug: flexline/section-cover-boxes
 * Categories: flexline-sections
 */
?>
<!-- wp:group {"align":"full","layout":{"type":"constrained"},"metadata":{"name":"Featured Section"}} -->
<div class="wp-block-group alignfull"><!-- wp:cover {"url":"<?php echo esc_url(get_theme_file_uri()) . '/assets/images/fallback.jpg'; ?>","id":356,"hasParallax":true,"dimRatio":90,"overlayColor":"primary","align":"full","style":{"color":{"duotone":["#000000","#ffffff"]},"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|x-large"}}},"layout":{"type":"constrained"}} -->
    <div class="wp-block-cover alignfull has-parallax" style="padding-top:var(--wp--preset--spacing--x-large);padding-bottom:var(--wp--preset--spacing--x-large)"><span aria-hidden="true" class="wp-block-cover__background has-primary-background-color has-background-dim-90 has-background-dim"></span>
        <div role="img" class="wp-block-cover__image-background wp-image-356 has-parallax" style="background-position:50% 50%;background-image:url(<?php echo esc_url(get_theme_file_uri()) . '/assets/images/fallback.jpg'; ?>)"></div>
        <div class="wp-block-cover__inner-container"><!-- wp:heading {"textAlign":"center","className":"is-style-text-shadow","fontSize":"max-48"} -->
            <h2 class="wp-block-heading has-text-align-center is-style-text-shadow has-max-48-font-size">Feature Section</h2>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"align":"center","className":"is-style-text-shadow"} -->
            <p class="has-text-align-center is-style-text-shadow">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            <!-- /wp:paragraph -->

            <!-- wp:pattern {"slug":"flexline/feature-cover-right"} /-->
            <!-- wp:pattern {"slug":"flexline/feature-cover-left"} /-->

        </div>
    </div>
    <!-- /wp:cover -->
</div>
<!-- /wp:group -->