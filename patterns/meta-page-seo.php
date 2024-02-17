<?php

/**
 * Title: Page Meta for custom SEO
 * Slug: flexline/page-meta-seo
 * Categories: flexline-heroes, flexline-sections
 */
?>
<!-- wp:group {"align":"full","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"blockGap":"0"}},"layout":{"type":"constrained"},"metadata":{"name":"Page Meta Bar SEO"}} -->
<div class="wp-block-group alignfull" style="margin-top:0;margin-bottom:0"><!-- wp:cover {"url":"<?php echo esc_url(get_theme_file_uri()) . '/assets/images/fallback.jpg'; ?>","id":509,"dimRatio":80,"overlayColor":"primary","focalPoint":{"x":0.47,"y":0.91},"minHeight":50,"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|xx-large","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"},"blockGap":"0","margin":{"top":"0","bottom":"0"}},"color":{"duotone":"var:preset|duotone|primary"}},"layout":{"type":"constrained"}} -->
    <div class="wp-block-cover alignfull" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--x-small);padding-right:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--xx-large);padding-left:var(--wp--preset--spacing--medium);min-height:50px"><span aria-hidden="true" class="wp-block-cover__background has-primary-background-color has-background-dim-80 has-background-dim"></span><img class="wp-block-cover__image-background wp-image-509" alt="" src="<?php echo esc_url(get_theme_file_uri()) . '/assets/images/fallback.jpg'; ?>" style="object-position:47% 91%" data-object-fit="cover" data-object-position="47% 91%" />
        <div class="wp-block-cover__inner-container"><!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"right":"0","left":"0"},"margin":{"bottom":"var:preset|spacing|large"}},"elements":{"link":{"color":{"text":"var:preset|color|base"}}}},"textColor":"base","layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"left"},"fontSize":"x-small"} -->
            <div class="wp-block-group alignwide has-base-color has-text-color has-link-color has-x-small-font-size" style="margin-bottom:var(--wp--preset--spacing--large);padding-right:0;padding-left:0"><!-- wp:yoast-seo/breadcrumbs /--></div>
            <!-- /wp:group -->

            <!-- wp:heading {"textAlign":"center","level":1,"style":{"typography":{"textTransform":"uppercase","fontStyle":"normal","fontWeight":"300"}},"className":"is-style-text-shadow","fontSize":"small","fontFamily":"display"} -->
            <h1 class="wp-block-heading has-text-align-center is-style-text-shadow has-display-font-family has-small-font-size" style="font-style:normal;font-weight:300;text-transform:uppercase">H1 SEO Headline</h1>
            <!-- /wp:heading -->

            <!-- wp:heading {"textAlign":"center","className":"is-style-text-shadow","fontSize":"max-36"} -->
            <h2 class="wp-block-heading has-text-align-center is-style-text-shadow has-max-36-font-size">H2 Creative Headline</h2>
            <!-- /wp:heading -->
        </div>
    </div>
    <!-- /wp:cover -->
</div>
<!-- /wp:group -->