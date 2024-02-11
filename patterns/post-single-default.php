<?php

/**
 * Title: Post Single Default.
 * Slug: flexline/post-single-default
 * Categories: flexline-posts, flexline-pages
 * Block Types: core/query
 */
?>
<!-- wp:group {"tagName":"main","style":{"spacing":{"margin":{"top":"0"},"blockGap":"var:preset|spacing|x-large"}},"className":"site-content","metadata":{"name":"Post Single Template Group"}} -->
<main class="wp-block-group site-content" style="margin-top:0">

    <!-- wp:pattern {"slug":"flexline/post-meta"} /-->

    <!-- wp:post-content {"style":{"spacing":{"blockGap":"var:preset|spacing|medium"}},"layout":{"type":"constrained"}} /-->

    <!-- wp:group {"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}},"layout":{"type":"constrained"},"metadata":{"name":"Previous / Next"}} -->
    <div class="wp-block-group" style="margin-top:var(--wp--preset--spacing--medium);margin-bottom:var(--wp--preset--spacing--medium)"><!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
        <div class="wp-block-group"><!-- wp:post-navigation-link {"type":"previous"} /-->
            <!-- wp:post-navigation-link /-->
        </div>
        <!-- /wp:group -->
    </div>
    <!-- /wp:group -->

    <!-- wp:pattern {"slug":"flexline/section-latest-posts"} /-->

    <!-- wp:pattern {"slug":"flexline/cta-footer-large"} /-->

</main>
<!-- /wp:group -->