<?php
/**
 * Set up the block customizations for media popups.
 *
 * @package flexline
 */

namespace FlexLine\flexline;

/**
 * Enqueue block editor assets for Flexline theme.
 *
 * @throws Some_Exception_Class description of exception
 * @return Some_Return_Value
 */
function flexline_enqueue_block_editor_assets() {
    // Popup addons to core button and image blocks.
    wp_enqueue_script(
        'flexline-block-extensions',
        get_theme_file_uri('/assets/built/js/block-extensions.js'),
        array('wp-blocks', 'wp-element', 'wp-editor'),
        filemtime(get_theme_file_path('/assets/built/js/block-extensions.js'))
    );
}
add_action('enqueue_block_editor_assets', __NAMESPACE__ . '\flexline_enqueue_block_editor_assets');


/**
 * Renders the flexline block popup.
 *
 * @param mixed $block_content The content of the block.
 * @param array $block The block settings.
 * @return mixed The modified block content.
 */
function flexline_block_popup_render($block_content, $block) {
    if ($block['blockName'] === 'core/image' || $block['blockName'] === 'core/button') {
        // Check if your custom attributes are set and not empty
        if (isset($block['attrs']['enablePopup']) && $block['attrs']['enablePopup']) {
            // Add a class
            // $block_content = str_replace('class="', 'class="enable-lightbox ', $block_content);
            $searchString = 'class="';
            $replaceString = 'class="enable-lightbox ';
            $block_content = str_replace_first($searchString, $replaceString, $block_content);
            // Add the media URL as a data attribute if it exists
            if (!empty($block['attrs']['popupMediaURL'])) {
                // Insert your data attribute just before the closing tag of the element.
                // This is a basic string replacement and might need to be adjusted based on the block markup.
                //$block_content = str_replace('>', ' data-popup-media-url="' . esc_attr($block['attrs']['popupMediaURL']) . '">', $block_content);
                $searchString = '>';
                $replaceString = ' data-popup-media-url="' . esc_attr($block['attrs']['popupMediaURL']) . '">';
                $block_content = str_replace_first($searchString, $replaceString, $block_content);
            }
        }
    }
    if ($block['blockName'] === 'core/image' || $block['blockName'] === 'core/cover') {
        // Check if your custom attributes are set and not empty

        if (isset($block['attrs']['enableLazyLoad']) && $block['attrs']['enableLazyLoad']) {
            // Add a loading attribute
            $searchString = '<img "';
            $replaceString = '<img loading="lazy" ';
            $block_content = str_replace_first($searchString, $replaceString, $block_content);
        }
    }
    if ($block['blockName'] === 'core/gallery') {
        // Check if your custom attributes are set and not empty
        if (isset($block['attrs']['enablePosterGallery']) && $block['attrs']['enablePosterGallery']) {
            // Add a class
            $searchString = 'class="';
            $replaceString = 'class="poster-gallery ';
            $block_content = str_replace_first($searchString, $replaceString, $block_content);
        }
    }
    if ($block['blockName'] === 'core/navigation') {
        // Check if your custom attributes are set and not empty
        if (isset($block['attrs']['enableHorizontalScroll']) && $block['attrs']['enableHorizontalScroll']) {
            // Add a class
            $searchString = 'class="';
            $replaceString = 'class="is-style-horizontal-scroll-at-mobile ';
            $block_content = str_replace_first($searchString, $replaceString, $block_content);
        }
    }
    if ($block['blockName'] === 'core/group' || $block['blockName'] === 'core/stack' || $block['blockName'] === 'core/row') {
    // Check if your custom attributes are set and not empty
    
        if (isset($block['attrs']['enableGroupLink']) && $block['attrs']['enableGroupLink']) {
            
            $linkType = isset($block['attrs']['groupLinkType']) ? $block['attrs']['groupLinkType'] : 'self';
            $ariaLabel = !empty($block['attrs']['ariaLabel']) ? esc_attr($block['attrs']['ariaLabel']) : "Open link";
            $searchString = 'class="';
            $replaceString = 'class="group-link group-link-type-' . esc_attr($linkType) . ' ';
            $block_content = str_replace_first($searchString, $replaceString, $block_content);

            // Add a class
            //$block_content = str_replace('class="', 'class="group-link group-link-type-' . esc_attr($linkType) . ' ', $block_content);
            if (!empty($block['attrs']['groupLinkURL'])) {
                // Insert your data attribute just before the closing tag of the element.
                // This is a basic string replacement and might need to be adjusted based on the block markup.
                $searchString = '>';
                $replaceString = ' data-group-link-url="' . esc_attr($block['attrs']['groupLinkURL']) . '" tabindex="0" aria-label="'.$ariaLabel.'">';
                $block_content = str_replace_first($searchString, $replaceString, $block_content);
            }
        }
    }
    if ($block['blockName'] === 'core/group' || $block['blockName'] === 'core/columns') {
        if (isset($block['attrs']['enableHorizontalScroll']) && $block['attrs']['enableHorizontalScroll']) {
            // Add a class
            $searchString = 'class="';
            $replaceString = 'class="is-style-horizontal-scroll ';
            $block_content = str_replace_first($searchString, $replaceString, $block_content);
        }
    }


    return $block_content;
}
add_filter('render_block', __NAMESPACE__ . '\flexline_block_popup_render', 10, 2);
