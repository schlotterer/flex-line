/*! For license information please see block-extensions.js.LICENSE.txt */
!function(){"use strict";var e,t={305:function(e,t,n){var l={enableModal:{type:"boolean",default:!1},modalMediaURL:{type:"string",default:""}},o={enablePosterGallery:{type:"boolean",default:!1}},r={enableLazyLoad:{type:"boolean",default:!0}},i={enableHorizontalScroll:{type:"boolean",default:!1}},a={enableHorizontalScroller:{type:"boolean",default:!1},scrollNav:{type:"boolean",default:!0},scrollAuto:{type:"boolean",default:!1},scrollSpeed:{type:"number",default:4e3},scrollLoop:{type:"boolean",default:!0},hideScrollbar:{type:"boolean",default:!1},hidePauseButton:{type:"boolean",default:!1},positionButtonsHorizontal:{type:"select",default:"left"},positionButtonsVertical:{type:"select",default:"bottom"},positionButtonsOver:{type:"boolean",default:!1}},s={enableGroupLink:{type:"boolean",default:!1},groupLinkURL:{type:"string",default:""},groupLinkType:{type:"string",default:"none"}},u={stackAtTablet:{type:"boolean",default:!1},hideOnDesktop:{type:"boolean",default:!1},hideOnTablet:{type:"boolean",default:!1},hideOnMobile:{type:"boolean",default:!1}},b={iconType:{type:"string",default:"none"}},c={useContentShift:{type:"boolean",default:!1},shiftLeft:{type:"string",default:"0px"},shiftRight:{type:"string",default:"0px"},shiftUp:{type:"string",default:"0px"},shiftDown:{type:"string",default:"0px"},shiftToTop:{type:"boolean",default:!1},slideHorizontal:{type:"string",default:"0px"},slideVertical:{type:"string",default:"0px"},resetMobile:{type:"boolean",default:!1}};function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=h(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!=h(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==h(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=wp.hooks.addFilter;g("blocks.registerBlockType","flexline/add-custom-button-attributes",(function(e,t){return"core/button"===t&&(e.attributes=f(f(f(f({},e.attributes),b),l),u)),e})),g("blocks.registerBlockType","flexline/add-custom-buttons-attributes",(function(e,t){return"core/buttons"===t&&(e.attributes=f(f({},e.attributes),u)),e})),g("blocks.registerBlockType","flexline/add-custom-column-attributes",(function(e,t){return"core/column"===t&&(e.attributes=f(f({},e.attributes),u)),e})),g("blocks.registerBlockType","flexline/add-custom-cover-attributes",(function(e,t){return"core/cover"===t&&(e.attributes=f(f(f({},e.attributes),r),u)),e})),g("blocks.registerBlockType","flexline/add-custom-gallery-attributes",(function(e,t){return"core/gallery"===t&&(e.attributes=f(f({},e.attributes),o)),e})),g("blocks.registerBlockType","flexline/add-custom-group-attributes",(function(e,t){return"core/group"===t&&(e.attributes=f(f(f(f({},e.attributes),s),u),c)),e})),g("blocks.registerBlockType","flexline/add-custom-image-attributes",(function(e,t){return"core/image"===t&&(e.attributes=f(f(f(f(f({},e.attributes),l),r),u),c)),e})),g("blocks.registerBlockType","flexline/add-custom-navigation-attributes",(function(e,t){return"core/navigation"===t&&(e.attributes=f(f(f({},e.attributes),i),u)),e})),g("blocks.registerBlockType","flexline/add-columns-attributes",(function(e,t){return"core/columns"===t&&(e.attributes=f(f(f({},e.attributes),a),u)),e})),g("blocks.registerBlockType","flexline/add-post-template-attributes",(function(e,t){return"core/post-template"===t&&(e.attributes=f(f({},e.attributes),a)),e})),g("blocks.registerBlockType","flexline/add-custom-visibility-attributes",(function(e,t){return["core/spacer","core/paragraph","core/heading","core/video","core/site-logo","core/post-featured-image","core/embed","core/html","core/social-link","core/social-links"].includes(t)&&(e.attributes=f(f({},e.attributes),u)),e}));var v=wp.hooks,m=wp.compose,x=wp.element,y=wp.blockEditor,C=wp.components,j=n(848);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=k(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!=k(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==k(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var w=(0,m.createHigherOrderComponent)((function(e){return function(t){var n=t.attributes,l=t.clientId,o="block-".concat(l),r=(0,x.useRef)(null);return(0,x.useEffect)((function(){var e=[];t.attributes.hideOnMobile||e.push("flexline-hide-on-mobile"),t.attributes.hideOnTablet||e.push("flexline-hide-on-tablet"),t.attributes.hideOnDesktop||e.push("flexline-hide-on-desktop"),t.attributes.enableModal||e.push("enable-modal"),t.attributes.enableLazyLoad||e.push("no-lazy-load"),t.attributes.enablePosterGallery||e.push("poster-gallery"),t.attributes.enableHorizontalScroll||e.push("is-style-horizontal-scroll-at-mobile"),t.attributes.enableHorizontalScroller||(e.push("is-style-horizontal-scroll"),e.push("horizontal-scroller-navigation"),e.push("horizontal-scroller-loop"),e.push("horizontal-scroller-auto"),e.push("horizontal-scroller-hide-scrollbar"),e.push("horizontal-scroller-hide-pause-button"),e.push("horizontal-scroller-buttons-horizontal-left"),e.push("horizontal-scroller-buttons-horizontal-center"),e.push("horizontal-scroller-buttons-horizontal-right"),e.push("horizontal-scroller-buttons-vertical-top"),e.push("horizontal-scroller-buttons-vertical-bottom"),e.push("horizontal-scroller-buttons-over")),t.attributes.scrollNav||e.push("horizontal-scroller-navigation"),t.attributes.scrollLoop||e.push("horizontal-scroller-loop"),t.attributes.scrollAuto||e.push("horizontal-scroller-auto"),t.attributes.hideScrollbar||e.push("horizontal-scroller-hide-scrollbar"),t.attributes.hidePauseButton||e.push("horizontal-scroller-hide-pause-button"),t.attributes.positionButtonsOver||e.push("horizontal-scroller-buttons-over"),"left"!==t.attributes.positionButtonsHorizontal&&e.push("horizontal-scroller-buttons-horizontal-left"),"right"!==t.attributes.positionButtonsHorizontal&&e.push("horizontal-scroller-buttons-horizontal-right"),"center"!==t.attributes.positionButtonsHorizontal&&e.push("horizontal-scroller-buttons-horizontal-center"),"top"!==t.attributes.positionButtonsVertical&&e.push("horizontal-scroller-buttons-vertical-top"),"bottom"!==t.attributes.positionButtonsVertical&&e.push("horizontal-scroller-buttons-vertical-bottom"),t.attributes.enableGroupLink||e.push("group-link"),t.attributes.useContentShift||(e.push("flexline-content-shift"),e.push("flexline-content-shift-above"),e.push("flexline-content-shift-revert-mobile"),e.push("flexline-content-shift-left"),e.push("flexline-content-shift-right"),e.push("flexline-content-shift-up"),e.push("flexline-content-shift-down"),e.push("flexline-content-slide-x"),e.push("flexline-content-slide-y")),t.attributes.useContentShift&&("0px"===t.attributes.shiftLeft&&e.push("flexline-content-shift-left"),"0px"===t.attributes.shiftRight&&e.push("flexline-content-shift-right"),"0px"===t.attributes.shiftUp&&e.push("flexline-content-shift-up"),"0px"===t.attributes.shiftDown&&e.push("flexline-content-shift-down"),"0px"===t.attributes.slideHorizontal&&e.push("flexline-content-slide-x"),"0px"===t.attributes.slideVertical&&e.push("flexline-content-slide-y"),t.attributes.shiftToTop||e.push("flexline-content-shift-above"),t.attributes.resetMobile||e.push("flexline-content-shift-revert-mobile")),"core/button"===t.name&&e.push("flexline-icon");var l,i,a=(l=t.attributes,i="",l.hideOnMobile&&(i+="flexline-hide-on-mobile "),l.hideOnTablet&&(i+="flexline-hide-on-tablet "),l.hideOnDesktop&&(i+="flexline-hide-on-desktop "),i.trim());(t.attributes.useContentShift&&(a+=" flexline-content-shift","0px"!==t.attributes.shiftLeft&&(a+=" flexline-content-shift-left"),"0px"!==t.attributes.shiftRight&&(a+=" flexline-content-shift-right"),"0px"!==t.attributes.shiftUp&&(a+=" flexline-content-shift-up"),"0px"!==t.attributes.shiftDown&&(a+=" flexline-content-shift-down"),"0px"!==t.attributes.slideHorizontal&&(a+=" flexline-content-slide-x"),"0px"!==t.attributes.slideVertical&&(a+=" flexline-content-slide-y"),t.attributes.shiftToTop&&(a+=" flexline-content-shift-above"),t.attributes.resetMobile&&(a+=" flexline-content-shift-revert-mobile")),"core/button"!==t.name&&"core/image"!==t.name||t.attributes.enableModal&&(a+=" enable-modal"),"core/button"===t.name&&t.attributes.iconType&&(a+=" flexline-icon-".concat(t.attributes.iconType)),"core/image"!==t.name&&"core/cover"!==t.name||!1===t.attributes.enableLazyLoad&&(a+=" no-lazy-load"),"core/gallery"===t.name&&t.attributes.enablePosterGallery&&(a+=" poster-gallery"),"core/navigation"===t.name&&t.attributes.enableHorizontalScroll&&(a+=" is-style-horizontal-scroll-at-mobile"),["core/columns","core/post-template"].includes(t.name)&&t.attributes.enableHorizontalScroller&&(a+=" is-style-horizontal-scroll"),["core/columns","core/post-template"].includes(t.name)&&t.attributes.scrollNav&&t.attributes.enableHorizontalScroller&&(a+=" horizontal-scroller-navigation"),["core/columns","core/post-template"].includes(t.name)&&t.attributes.scrollAuto&&t.attributes.enableHorizontalScroller&&(a+=" horizontal-scroller-auto"),["core/columns","core/post-template"].includes(t.name)&&t.attributes.scrollLoop&&t.attributes.enableHorizontalScroller&&(a+=" horizontal-scroller-loop"),["core/columns","core/post-template"].includes(t.name)&&t.attributes.hideScrollbar&&t.attributes.enableHorizontalScroller&&(a+=" horizontal-scroller-hide-scrollbar"),["core/columns","core/post-template"].includes(t.name)&&t.attributes.hidePauseButton&&t.attributes.enableHorizontalScroller&&(a+=" horizontal-scroller-hide-pause-button"),["core/columns","core/post-template"].includes(t.name)&&t.attributes.positionButtonsHorizontal&&t.attributes.enableHorizontalScroller)&&(a+=" horizontal-scroller-buttons-horizontal-"+t.attributes.positionButtonsHorizontal);["core/columns","core/post-template"].includes(t.name)&&t.attributes.positionButtonsVertical&&t.attributes.enableHorizontalScroller&&(a+=" horizontal-scroller-buttons-vertical-"+t.attributes.positionButtonsVertical);(["core/columns","core/post-template"].includes(t.name)&&t.attributes.positionButtonsOver&&t.attributes.enableHorizontalScroller&&(a+=" horizontal-scroller-buttons-over"),["core/group","core/stack","core/row","core/grid"].includes(t.name))&&(t.attributes.enableGroupLink&&(a+=" group-link group-link-type-"+(t.attributes.groupLinkType||"self")));"core/columns"===t.name&&t.attributes.stackAtTablet&&(a+=" flexline-stack-at-tablet");var s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],l=e.split(" ").filter(Boolean);return n.forEach((function(e){l="flexline-icon"===e?l.filter((function(e){return!e.startsWith("flexline-icon-")})):l.filter((function(t){return t!==e}))})),t.split(" ").forEach((function(e){l.push(e.trim())})),z(new Set(l)).join(" ").trim()}(t.attributes.className||"",a,e);if(t.setAttributes({className:s}),t.wrapperProps||(t.wrapperProps={}),t.attributes.useContentShift){var u="0",b="0",c="0",h="0",p="0",f="0";n.shiftLeft&&(u="-"+n.shiftLeft),n.shiftRight&&(b="-"+n.shiftRight),n.shiftUp&&(c="-"+n.shiftUp),n.shiftDown&&(h="-"+n.shiftDown),n.slideHorizontal&&(p=n.slideHorizontal),n.slideVertical&&(f=n.slideVertical);var d="\n\t\t\t\t  #".concat(o," {\n\t\t\t\t\t--flexline-shift-left: ").concat(u,";\n\t\t\t\t\t--flexline-shift-right: ").concat(b,";\n\t\t\t\t\t--flexline-shift-up: ").concat(c,";\n\t\t\t\t\t--flexline-shift-down: ").concat(h,";\n\t\t\t\t\t--flexline-slide-x: ").concat(p,";\n\t\t\t\t\t--flexline-slide-y: ").concat(f,";\n\t\t\t\t  }\n\t\t\t\t");r.current||(r.current=document.createElement("style"),r.current.setAttribute("type","text/css"),document.head.appendChild(r.current)),r.current.textContent=d}else!1===n.useContentShift&&r.current&&(r.current.parentNode.removeChild(r.current),r.current=null);return function(){r.current&&(r.current.parentNode.removeChild(r.current),r.current=null)}}),[n,t.attributes,t.name,t,o]),"core/image"===t.name?(0,j.jsxs)(x.Fragment,{children:[(0,j.jsx)(e,S({},t)),(0,j.jsxs)(y.InspectorControls,{children:[(0,j.jsxs)(C.PanelBody,{title:"Flexline Options",children:[(0,j.jsx)(C.ToggleControl,{label:"Enable Lazy Load",checked:!!t.attributes.enableLazyLoad,onChange:function(e){return t.setAttributes({enableLazyLoad:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Open a Modal",checked:!!t.attributes.enableModal,onChange:function(e){return t.setAttributes({enableModal:e})}}),t.attributes.enableModal&&(0,j.jsx)(y.URLInput,{label:"Modal Media URL",value:t.attributes.modalMediaURL,onChange:function(e){return t.setAttributes({modalMediaURL:e})}})]}),(0,j.jsxs)(C.PanelBody,{title:"Flexline Visibility",children:[(0,j.jsx)(C.ToggleControl,{label:"Hide on Desktop",checked:!!t.attributes.hideOnDesktop,onChange:function(e){return t.setAttributes({hideOnDesktop:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Tablet",checked:!!t.attributes.hideOnTablet,onChange:function(e){return t.setAttributes({hideOnTablet:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Mobile",checked:!!t.attributes.hideOnMobile,onChange:function(e){return t.setAttributes({hideOnMobile:e})}})]})]}),(0,j.jsx)(y.InspectorControls,{group:"styles",children:(0,j.jsxs)(C.PanelBody,{title:"Flexline Content Shift",children:[(0,j.jsx)(C.ToggleControl,{label:"Use Content Shift",checked:!!t.attributes.useContentShift,onChange:function(e){return t.setAttributes({useContentShift:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Shift Above (z-index)",checked:!!t.attributes.shiftToTop,onChange:function(e){return t.setAttributes({shiftToTop:e})}}),t.attributes.useContentShift&&(0,j.jsx)(C.ToggleControl,{label:"Restore Normal on Mobile",checked:!!t.attributes.resetMobile,onChange:function(e){return t.setAttributes({resetMobile:e})}}),t.attributes.useContentShift&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("hr",{}),(0,j.jsxs)("p",{children:["SHIFT - NEGATIVE MARGINS ",(0,j.jsx)("br",{}),(0,j.jsx)("small",{children:"Enter positive numbers only."})]})]}),t.attributes.useContentShift&&(0,j.jsx)(C.__experimentalUnitControl,{label:"Shift Left",type:"number",min:0,value:t.attributes.shiftLeft,onChange:function(e){return t.setAttributes({shiftLeft:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),t.attributes.useContentShift&&(0,j.jsx)(C.__experimentalUnitControl,{label:"Shift Right",type:"number",min:0,value:t.attributes.shiftRight,onChange:function(e){return t.setAttributes({shiftRight:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),t.attributes.useContentShift&&(0,j.jsx)(C.__experimentalUnitControl,{label:"Shift Up",type:"number",min:0,value:t.attributes.shiftUp,onChange:function(e){return t.setAttributes({shiftUp:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),t.attributes.useContentShift&&(0,j.jsx)(C.__experimentalUnitControl,{label:"Shift Down",type:"number",min:0,value:t.attributes.shiftDown,onChange:function(e){return t.setAttributes({shiftDown:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),t.attributes.useContentShift&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("hr",{}),(0,j.jsxs)("p",{children:["SLIDE - TRANSLATE ",(0,j.jsx)("br",{}),(0,j.jsx)("small",{children:"Positive or negative numbers"})]})]}),t.attributes.useContentShift&&(0,j.jsx)(C.__experimentalUnitControl,{label:"Slide Horizontal ( - to left, + to right )",value:t.attributes.slideHorizontal,onChange:function(e){return t.setAttributes({slideHorizontal:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),t.attributes.useContentShift&&(0,j.jsx)(C.__experimentalUnitControl,{label:"Slide Vertical ( - to top, + to bottom )",value:t.attributes.slideVertical,onChange:function(e){return t.setAttributes({slideVertical:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}],help:"Enter positive or negative values."})]})})]}):"core/cover"===t.name?(0,j.jsxs)(x.Fragment,{children:[(0,j.jsx)(e,S({},t)),(0,j.jsx)(y.InspectorControls,{children:(0,j.jsxs)(C.PanelBody,{title:"Flexline Options",children:[(0,j.jsx)(C.ToggleControl,{label:"Enable Lazy Load",checked:!!t.attributes.enableLazyLoad,onChange:function(e){return t.setAttributes({enableLazyLoad:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Desktop",checked:!!t.attributes.hideOnDesktop,onChange:function(e){return t.setAttributes({hideOnDesktop:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Tablet",checked:!!t.attributes.hideOnTablet,onChange:function(e){return t.setAttributes({hideOnTablet:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Mobile",checked:!!t.attributes.hideOnMobile,onChange:function(e){return t.setAttributes({hideOnMobile:e})}})]})})]}):"core/buttons"===t.name?(0,j.jsxs)(x.Fragment,{children:[(0,j.jsx)(e,S({},t)),(0,j.jsx)(y.InspectorControls,{children:(0,j.jsxs)(C.PanelBody,{title:"Flexline Options",children:[(0,j.jsx)(C.ToggleControl,{label:"Hide on Desktop",checked:!!t.attributes.hideOnDesktop,onChange:function(e){return t.setAttributes({hideOnDesktop:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Tablet",checked:!!t.attributes.hideOnTablet,onChange:function(e){return t.setAttributes({hideOnTablet:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Mobile",checked:!!t.attributes.hideOnMobile,onChange:function(e){return t.setAttributes({hideOnMobile:e})}})]})})]}):"core/button"===t.name?(0,j.jsxs)(x.Fragment,{children:[(0,j.jsx)(e,S({},t)),(0,j.jsx)(y.InspectorControls,{children:(0,j.jsxs)(C.PanelBody,{title:"Flexline Options",children:[(0,j.jsx)(C.SelectControl,{label:"Icon Type",value:t.attributes.iconType,options:[{label:"None",value:"none"},{label:"Internal Link →",value:"internal-link"},{label:"Download ⤓",value:"download"},{label:"Play Video ►",value:"video-play"},{label:"Open Modal ⤢",value:"open-modal"},{label:"Link Out ↗",value:"link-out"}],onChange:function(e){return t.setAttributes({iconType:e})},__nextHasNoMarginBottom:!0}),(0,j.jsx)(C.ToggleControl,{label:"Open Link in a Modal",checked:!!t.attributes.enableModal,onChange:function(e){return t.setAttributes({enableModal:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Desktop",checked:!!t.attributes.hideOnDesktop,onChange:function(e){return t.setAttributes({hideOnDesktop:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Tablet",checked:!!t.attributes.hideOnTablet,onChange:function(e){return t.setAttributes({hideOnTablet:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Mobile",checked:!!t.attributes.hideOnMobile,onChange:function(e){return t.setAttributes({hideOnMobile:e})}})]})})]}):"core/gallery"===t.name?(0,j.jsxs)(x.Fragment,{children:[(0,j.jsx)(e,S({},t)),(0,j.jsx)(y.InspectorControls,{children:(0,j.jsx)(C.PanelBody,{title:"Flexline Options",children:(0,j.jsx)(C.ToggleControl,{label:"Enable Poster Gallery",checked:!!t.attributes.enablePosterGallery,onChange:function(e){return t.setAttributes({enablePosterGallery:e})}})})})]}):"core/navigation"===t.name?(0,j.jsxs)(x.Fragment,{children:[(0,j.jsx)(e,S({},t)),(0,j.jsx)(y.InspectorControls,{children:(0,j.jsxs)(C.PanelBody,{title:"Flexline Options",children:[(0,j.jsx)(C.ToggleControl,{label:"Enable Horizontal Scroll at Mobile",checked:!!t.attributes.enableHorizontalScroll,onChange:function(e){return t.setAttributes({enableHorizontalScroll:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Desktop",checked:!!t.attributes.hideOnDesktop,onChange:function(e){return t.setAttributes({hideOnDesktop:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Tablet",checked:!!t.attributes.hideOnTablet,onChange:function(e){return t.setAttributes({hideOnTablet:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Mobile",checked:!!t.attributes.hideOnMobile,onChange:function(e){return t.setAttributes({hideOnMobile:e})}})]})})]}):"core/group"===t.name?(0,j.jsxs)(x.Fragment,{children:[(0,j.jsx)(e,S({},t)),(0,j.jsxs)(y.InspectorControls,{children:[(0,j.jsxs)(C.PanelBody,{title:"Flexline Group Link Options",children:[(0,j.jsx)(C.ToggleControl,{label:"Enable Group Link",checked:!!t.attributes.enableGroupLink,onChange:function(e){return t.setAttributes({enableGroupLink:e})}}),t.attributes.enableGroupLink&&(0,j.jsx)(y.URLInput,{label:"Group Link URL",value:t.attributes.groupLinkURL,onChange:function(e){return t.setAttributes({groupLinkURL:e})}}),t.attributes.enableGroupLink&&(0,j.jsx)(C.SelectControl,{label:"Link Type",value:t.attributes.groupLinkType,options:[{label:"Normal",value:"none"},{label:"New Tab",value:"new_tab"},{label:"Modal Media",value:"modal_media"}],onChange:function(e){return t.setAttributes({groupLinkType:e})},__nextHasNoMarginBottom:!0})]}),(0,j.jsxs)(C.PanelBody,{title:"Flexline Visibility",children:[(0,j.jsx)(C.ToggleControl,{label:"Hide on Desktop",checked:!!t.attributes.hideOnDesktop,onChange:function(e){return t.setAttributes({hideOnDesktop:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Tablet",checked:!!t.attributes.hideOnTablet,onChange:function(e){return t.setAttributes({hideOnTablet:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Mobile",checked:!!t.attributes.hideOnMobile,onChange:function(e){return t.setAttributes({hideOnMobile:e})}})]})]}),(0,j.jsx)(y.InspectorControls,{group:"styles",children:(0,j.jsxs)(C.PanelBody,{title:"Flexline Content Shift",children:[(0,j.jsx)(C.ToggleControl,{label:"Use Content Shift",checked:!!t.attributes.useContentShift,onChange:function(e){return t.setAttributes({useContentShift:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Shift Above (z-index)",checked:!!t.attributes.shiftToTop,onChange:function(e){return t.setAttributes({shiftToTop:e})}}),t.attributes.useContentShift&&(0,j.jsx)(C.ToggleControl,{label:"Restore Normal on Mobile",checked:!!t.attributes.resetMobile,onChange:function(e){return t.setAttributes({resetMobile:e})}}),t.attributes.useContentShift&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("hr",{}),(0,j.jsxs)("p",{children:["SHIFT - NEGATIVE MARGINS ",(0,j.jsx)("br",{}),(0,j.jsx)("small",{children:"Enter positive numbers only."})]})]}),t.attributes.useContentShift&&(0,j.jsx)(C.__experimentalUnitControl,{label:"Shift Left",type:"number",min:0,value:t.attributes.shiftLeft,onChange:function(e){return t.setAttributes({shiftLeft:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),t.attributes.useContentShift&&(0,j.jsx)(C.__experimentalUnitControl,{label:"Shift Right",type:"number",min:0,value:t.attributes.shiftRight,onChange:function(e){return t.setAttributes({shiftRight:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),t.attributes.useContentShift&&(0,j.jsx)(C.__experimentalUnitControl,{label:"Shift Up",type:"number",min:0,value:t.attributes.shiftUp,onChange:function(e){return t.setAttributes({shiftUp:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),t.attributes.useContentShift&&(0,j.jsx)(C.__experimentalUnitControl,{label:"Shift Down",type:"number",min:0,value:t.attributes.shiftDown,onChange:function(e){return t.setAttributes({shiftDown:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),t.attributes.useContentShift&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("hr",{}),(0,j.jsxs)("p",{children:["SLIDE - TRANSLATE ",(0,j.jsx)("br",{}),(0,j.jsx)("small",{children:"Positive or negative numbers"})]})]}),t.attributes.useContentShift&&(0,j.jsx)(C.__experimentalUnitControl,{label:"Slide Horizontal ( - to left, + to right )",value:t.attributes.slideHorizontal,onChange:function(e){return t.setAttributes({slideHorizontal:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),t.attributes.useContentShift&&(0,j.jsx)(C.__experimentalUnitControl,{label:"Slide Vertical ( - to top, + to bottom )",value:t.attributes.slideVertical,onChange:function(e){return t.setAttributes({slideVertical:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}],help:"Enter positive or negative values."})]})})]}):"core/columns"===t.name?(0,j.jsxs)(x.Fragment,{children:[(0,j.jsx)(e,S({},t)),(0,j.jsxs)(y.InspectorControls,{children:[(0,j.jsxs)(C.PanelBody,{title:"Flexline Scroller Options",children:[(0,j.jsx)(C.ToggleControl,{label:"Enable Horizontal Scroller",checked:!!t.attributes.enableHorizontalScroller,onChange:function(e){return t.setAttributes({enableHorizontalScroller:e})}}),t.attributes.enableHorizontalScroller&&(0,j.jsx)(C.ToggleControl,{label:"Show Arrow Navigation",checked:!!t.attributes.scrollNav,onChange:function(e){return t.setAttributes({scrollNav:e})}}),t.attributes.enableHorizontalScroller&&(0,j.jsx)(C.ToggleControl,{label:"Hide Scrollbar",checked:!!t.attributes.hideScrollbar,onChange:function(e){return t.setAttributes({hideScrollbar:e})}}),t.attributes.enableHorizontalScroller&&(0,j.jsx)(C.ToggleControl,{label:"Loop Scrolling",checked:!!t.attributes.scrollLoop,onChange:function(e){return t.setAttributes({scrollLoop:e})}}),t.attributes.enableHorizontalScroller&&(0,j.jsx)(C.SelectControl,{label:"Buttons Horizontal Position",value:t.attributes.positionButtonsHorizontal,options:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}],onChange:function(e){return t.setAttributes({positionButtonsHorizontal:e})}}),t.attributes.enableHorizontalScroller&&(0,j.jsx)(C.SelectControl,{label:"Buttons Vertical Position",value:t.attributes.positionButtonsVertical,options:[{value:"top",label:"Top"},{value:"bottom",label:"Bottom"}],onChange:function(e){return t.setAttributes({positionButtonsVertical:e})}}),t.attributes.enableHorizontalScroller&&(0,j.jsx)(C.ToggleControl,{label:"Auto Scroll",checked:!!t.attributes.scrollAuto,onChange:function(e){return t.setAttributes({scrollAuto:e})}}),t.attributes.enableHorizontalScroller&&(0,j.jsx)(C.ToggleControl,{label:"Position Buttons Over Scroller",checked:!!t.attributes.positionButtonsOver,onChange:function(e){return t.setAttributes({positionButtonsOver:e})}}),t.attributes.enableHorizontalScroller&&t.attributes.scrollAuto&&(0,j.jsx)(C.ToggleControl,{label:"Hide Pause Button",checked:!!t.attributes.hidePauseButton,onChange:function(e){return t.setAttributes({hidePauseButton:e})}}),t.attributes.enableHorizontalScroller&&t.attributes.scrollAuto&&(0,j.jsx)(C.RangeControl,{label:"Scroll Interval in Milliseconds",value:t.attributes.scrollSpeed,onChange:function(e){return t.setAttributes({scrollSpeed:e})},defaultValue:5e3,min:1e3,max:1e4,step:500})]}),(0,j.jsxs)(C.PanelBody,{title:"Flexline Visibility",children:[(0,j.jsx)(C.ToggleControl,{label:"Stack at Tablet",checked:!!t.attributes.stackAtTablet,onChange:function(e){return t.setAttributes({stackAtTablet:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Desktop",checked:!!t.attributes.hideOnDesktop,onChange:function(e){return t.setAttributes({hideOnDesktop:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Tablet",checked:!!t.attributes.hideOnTablet,onChange:function(e){return t.setAttributes({hideOnTablet:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Mobile",checked:!!t.attributes.hideOnMobile,onChange:function(e){return t.setAttributes({hideOnMobile:e})}})]})]})]}):["core/column","core/spacer","core/paragraph","core/heading","core/video","core/site-logo","core/post-featured-image","core/embed","core/navigation-submenu","core/navigation-link","core/html","core/social-link","core/social-links"].includes(t.name)?(0,j.jsxs)(x.Fragment,{children:[(0,j.jsx)(e,S({},t)),(0,j.jsx)(y.InspectorControls,{children:(0,j.jsxs)(C.PanelBody,{title:"Flexline Visibility",children:[(0,j.jsx)(C.ToggleControl,{label:"Hide on Desktop",checked:!!t.attributes.hideOnDesktop,onChange:function(e){return t.setAttributes({hideOnDesktop:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Tablet",checked:!!t.attributes.hideOnTablet,onChange:function(e){return t.setAttributes({hideOnTablet:e})}}),(0,j.jsx)(C.ToggleControl,{label:"Hide on Mobile",checked:!!t.attributes.hideOnMobile,onChange:function(e){return t.setAttributes({hideOnMobile:e})}})]})})]}):(0,j.jsx)(e,S({},t))}}),"withCustomControls");(0,v.addFilter)("editor.BlockEdit","flexline/with-custom-controls",w)},154:function(){},295:function(){},20:function(e,t,n){var l=n(594),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var l,r={},u=null,b=null;for(l in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(b=t.ref),t)i.call(t,l)&&!s.hasOwnProperty(l)&&(r[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===r[l]&&(r[l]=t[l]);return{$$typeof:o,type:e,key:u,ref:b,props:r,_owner:a.current}}t.Fragment=r,t.jsx=u,t.jsxs=u},848:function(e,t,n){e.exports=n(20)},594:function(e){e.exports=React}},n={};function l(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=function(t,n,o,r){if(!n){var i=1/0;for(b=0;b<e.length;b++){n=e[b][0],o=e[b][1],r=e[b][2];for(var a=!0,s=0;s<n.length;s++)(!1&r||i>=r)&&Object.keys(l.O).every((function(e){return l.O[e](n[s])}))?n.splice(s--,1):(a=!1,r<i&&(i=r));if(a){e.splice(b--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var b=e.length;b>0&&e[b-1][2]>r;b--)e[b]=e[b-1];e[b]=[n,o,r]},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={608:0,698:0,252:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,i=n[0],a=n[1],s=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)l.o(a,o)&&(l.m[o]=a[o]);if(s)var b=s(l)}for(t&&t(n);u<i.length;u++)r=i[u],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(b)},n=self.webpackChunkflexline=self.webpackChunkflexline||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),l.O(void 0,[698,252],(function(){return l(305)})),l.O(void 0,[698,252],(function(){return l(154)}));var o=l.O(void 0,[698,252],(function(){return l(295)}));o=l.O(o)}();