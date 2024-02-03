<?php
/**
 * Title: Utility Bar with search and nav.
 * Slug: flexline/utility
 * Categories: flexline-utilities
 * Block Types: core/template-part/utility
 * 
 */
?>
<!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"top":"0","bottom":"0"},"padding":{"right":"0","left":"0","top":"0","bottom":"0"}},"dimensions":{"minHeight":"0px"}},"className":"is-position-fixed","layout":{"type":"flex","orientation":"vertical","justifyContent":"right"},"metadata":{"name":"Fixed Nav"}} -->
<div class="wp-block-group is-position-fixed" style="min-height:0px;margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0">
    <!-- wp:search {"label":"Search","showLabel":false,"widthUnit":"%","buttonText":"Search","buttonPosition":"button-only","buttonUseIcon":true,"isSearchFieldHidden":true,"style":{"border":{"radius":"0px"}},"backgroundColor":"primary"} /-->

    <!-- wp:html {"lock":{"move":true,"remove":true}} -->
    <button id="slide-in-menu-button" class="slide-in-menu-button" aria-controls="slide-in-menu" aria-expanded="false">☰</button>
    <!-- /wp:html -->   
</div>
<!-- /wp:group -->

