/*! For license information please see block-extensions.js.LICENSE.txt */
!function(){"use strict";var e,t={305:function(e,t,n){var l={enableModal:{type:"boolean",default:!1},modalMediaURL:{type:"string",default:""}},o={enablePosterGallery:{type:"boolean",default:!1}},r={enableLazyLoad:{type:"boolean",default:!0}},i={enableHorizontalScroll:{type:"boolean",default:!1}},a={enableGroupLink:{type:"boolean",default:!1},groupLinkURL:{type:"string",default:""},groupLinkType:{type:"string",default:"none"}},s={stackAtTablet:{type:"boolean",default:!1},hideOnDesktop:{type:"boolean",default:!1},hideOnTablet:{type:"boolean",default:!1},hideOnMobile:{type:"boolean",default:!1}},u={iconType:{type:"string",default:"none"}},b={useContentShift:{type:"boolean",default:!1},shiftLeft:{type:"string",default:"0px"},shiftRight:{type:"string",default:"0px"},shiftUp:{type:"string",default:"0px"},shiftDown:{type:"string",default:"0px"},shiftToTop:{type:"boolean",default:!1},slideHorizontal:{type:"string",default:"0px"},slideVertical:{type:"string",default:"0px"},resetMobile:{type:"boolean",default:!1}};function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!=c(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==c(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=wp.hooks.addFilter;d("blocks.registerBlockType","flexline/add-custom-button-attributes",(function(e,t){return"core/button"===t&&(e.attributes=f(f(f(f({},e.attributes),u),l),s)),e})),d("blocks.registerBlockType","flexline/add-custom-buttons-attributes",(function(e,t){return"core/buttons"===t&&(e.attributes=f(f({},e.attributes),s)),e})),d("blocks.registerBlockType","flexline/add-custom-column-attributes",(function(e,t){return"core/column"===t&&(e.attributes=f(f(f({},e.attributes),s),b)),e})),d("blocks.registerBlockType","flexline/add-custom-cover-attributes",(function(e,t){return"core/cover"===t&&(e.attributes=f(f(f({},e.attributes),r),s)),e})),d("blocks.registerBlockType","flexline/add-custom-gallery-attributes",(function(e,t){return"core/gallery"===t&&(e.attributes=f(f({},e.attributes),o)),e})),d("blocks.registerBlockType","flexline/add-custom-group-attributes",(function(e,t){return"core/group"===t&&(e.attributes=f(f(f(f({},e.attributes),a),s),b)),e})),d("blocks.registerBlockType","flexline/add-custom-image-attributes",(function(e,t){return"core/image"===t&&(e.attributes=f(f(f(f({},e.attributes),l),r),s)),e})),d("blocks.registerBlockType","flexline/add-custom-navigation-attributes",(function(e,t){return"core/navigation"===t&&(e.attributes=f(f(f({},e.attributes),i),s)),e})),d("blocks.registerBlockType","flexline/add-custom-visibility-attributes",(function(e,t){return["core/columns","core/spacer","core/paragraph","core/heading","core/video","core/site-logo","core/post-featured-image","core/embed","core/html","core/social-link","core/social-links"].includes(t)&&(e.attributes=f(f({},e.attributes),s)),e}));var v=wp.hooks,g=wp.compose,x=wp.element,m=wp.blockEditor,y=wp.components,C=n(848);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=j(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!=j(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==j(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var S=(0,g.createHigherOrderComponent)((function(e){return function(t){var n=t.attributes,l=t.clientId,o="block-".concat(l),r=(0,x.useRef)(null);return(0,x.useEffect)((function(){var e=[];t.attributes.hideOnMobile||e.push("flexline-hide-on-mobile"),t.attributes.hideOnTablet||e.push("flexline-hide-on-tablet"),t.attributes.hideOnDesktop||e.push("flexline-hide-on-desktop"),t.attributes.enableModal||e.push("enable-modal"),t.attributes.enableLazyLoad||e.push("no-lazy-load"),t.attributes.enablePosterGallery||e.push("poster-gallery"),t.attributes.enableHorizontalScroll||e.push("is-style-horizontal-scroll-at-mobile"),t.attributes.enableGroupLink||e.push("group-link"),t.attributes.useContentShift?("0px"===t.attributes.shiftLeft&&e.push("flexline-content-shift-left"),"0px"===t.attributes.shiftRight&&e.push("flexline-content-shift-right"),"0px"===t.attributes.shiftUp&&e.push("flexline-content-shift-up"),"0px"===t.attributes.shiftDown&&e.push("flexline-content-shift-down"),"0px"===t.attributes.slideX&&e.push("flexline-content-slide-x"),"0px"===t.attributes.slideY&&e.push("flexline-content-slide-y"),t.attributes.shiftToTop||e.push("flexline-content-shift-above"),t.attributes.resetMobile||e.push("flexline-content-shift-revert-mobile")):(e.push("flexline-content-shift"),e.push("flexline-content-shift-above"),e.push("flexline-content-shift-revert-mobile"),e.push("flexline-content-shift-left"),e.push("flexline-content-shift-right"),e.push("flexline-content-shift-up"),e.push("flexline-content-shift-down"),e.push("flexline-content-slide-x"),e.push("flexline-content-slide-y")),"core/button"===t.name&&e.push("flexline-icon");var l,i,a=(l=t.attributes,i="",l.hideOnMobile&&(i+="flexline-hide-on-mobile "),l.hideOnTablet&&(i+="flexline-hide-on-tablet "),l.hideOnDesktop&&(i+="flexline-hide-on-desktop "),i.trim());if(t.attributes.useContentShift&&(a+=" flexline-content-shift","0px"!==t.attributes.shiftLeft&&(a+=" flexline-content-shift-left"),"0px"!==t.attributes.shiftRight&&(a+=" flexline-content-shift-right"),"0px"!==t.attributes.shiftUp&&(a+=" flexline-content-shift-up"),"0px"!==t.attributes.shiftDown&&(a+=" flexline-content-shift-down"),"0px"!==t.attributes.slideX&&(a+=" flexline-content-slide-x"),"0px"!==t.attributes.slideY&&(a+=" flexline-content-slide-y"),t.attributes.shiftToTop&&(a+=" flexline-content-shift-above"),t.attributes.resetMobile&&(a+=" flexline-content-shift-revert-mobile")),"core/button"!==t.name&&"core/image"!==t.name||t.attributes.enableModal&&(a+=" enable-modal"),"core/button"===t.name&&t.attributes.iconType&&(a+=" flexline-icon-".concat(t.attributes.iconType)),"core/image"!==t.name&&"core/cover"!==t.name||!1===t.attributes.enableLazyLoad&&(a+=" no-lazy-load"),"core/gallery"===t.name&&t.attributes.enablePosterGallery&&(a+=" poster-gallery"),"core/navigation"===t.name&&t.attributes.enableHorizontalScroll&&(a+=" is-style-horizontal-scroll-at-mobile"),["core/group","core/stack","core/row","core/grid"].includes(t.name)&&t.attributes.enableGroupLink){var s=t.attributes.groupLinkType||"self";a+=" group-link group-link-type-".concat(s)}"core/columns"===t.name&&t.attributes.stackAtTablet&&(a+=" flexline-stack-at-tablet");var u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],l=e.split(" ").filter(Boolean);return n.forEach((function(e){l="flexline-icon"===e?l.filter((function(e){return!e.startsWith("flexline-icon-")})):l.filter((function(t){return t!==e}))})),t.split(" ").forEach((function(e){l.push(e.trim())})),w(new Set(l)).join(" ").trim()}(t.attributes.className||"",a,e);if(t.setAttributes({className:u}),t.wrapperProps||(t.wrapperProps={}),n.useContentShift){var b="0",c="0",h="0",f="0",p="0",d="0";n.shiftLeft&&(b="-"+n.shiftLeft),n.shiftRight&&(c="-"+n.shiftRight),n.shiftUp&&(h="-"+n.shiftUp),n.shiftDown&&(f="-"+n.shiftDown),n.slideHorizontal&&(p=n.slideHorizontal),n.slideVertical&&(d=n.slideVertical);var v="\n\t\t\t\t  #".concat(o," {\n\t\t\t\t\t--flexline-shift-left: ").concat(b,";\n\t\t\t\t\t--flexline-shift-right: ").concat(c,";\n\t\t\t\t\t--flexline-shift-up: ").concat(h,";\n\t\t\t\t\t--flexline-shift-down: ").concat(f,";\n\t\t\t\t\t--flexline-slide-x: ").concat(p,";\n\t\t\t\t\t--flexline-slide-y: ").concat(d,";\n\t\t\t\t  }\n\t\t\t\t");r.current||(r.current=document.createElement("style"),r.current.setAttribute("type","text/css"),document.head.appendChild(r.current)),r.current.textContent=v}else!1===n.useContentShift&&r.current&&(r.current.parentNode.removeChild(r.current),r.current=null);return function(){r.current&&(r.current.parentNode.removeChild(r.current),r.current=null)}}),[n,t.attributes,t.name,t,o]),"core/image"===t.name?(0,C.jsxs)(x.Fragment,{children:[(0,C.jsx)(e,O({},t)),(0,C.jsxs)(m.InspectorControls,{children:[(0,C.jsxs)(y.PanelBody,{title:"Flexline Options",children:[(0,C.jsx)(y.ToggleControl,{label:"Enable Lazy Load",checked:!!t.attributes.enableLazyLoad,onChange:function(e){return t.setAttributes({enableLazyLoad:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Open a Modal",checked:!!t.attributes.enableModal,onChange:function(e){return t.setAttributes({enableModal:e})}}),t.attributes.enableModal&&(0,C.jsx)(m.URLInput,{label:"Modal Media URL",value:t.attributes.modalMediaURL,onChange:function(e){return t.setAttributes({modalMediaURL:e})}})]}),(0,C.jsxs)(y.PanelBody,{title:"Flexline Visibility",children:[(0,C.jsx)(y.ToggleControl,{label:"Hide on Desktop",checked:!!t.attributes.hideOnDesktop,onChange:function(e){return t.setAttributes({hideOnDesktop:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Tablet",checked:!!t.attributes.hideOnTablet,onChange:function(e){return t.setAttributes({hideOnTablet:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Mobile",checked:!!t.attributes.hideOnMobile,onChange:function(e){return t.setAttributes({hideOnMobile:e})}})]})]}),(0,C.jsx)(m.InspectorControls,{group:"styles",children:(0,C.jsxs)(y.PanelBody,{title:"Flexline Content Shift",children:[(0,C.jsx)(y.ToggleControl,{label:"Use Content Shift",checked:!!t.attributes.useContentShift,onChange:function(e){return t.setAttributes({useContentShift:e})}}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Shift Left",value:t.attributes.shiftLeft,onChange:function(e){return t.setAttributes({shiftLeft:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Shift Right",value:t.attributes.shiftRight,onChange:function(e){return t.setAttributes({shiftRight:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Shift Up",value:t.attributes.shiftUp,onChange:function(e){return t.setAttributes({shiftUp:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Shift Down",value:t.attributes.shiftDown,onChange:function(e){return t.setAttributes({shiftDown:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.ToggleControl,{label:"Shift Above (z-index)",checked:t.attributes.shiftToTop,onChange:function(e){return t.setAttributes({shiftToTop:e})}}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Slide Horizontal ( - to left, + to right )",value:t.attributes.slideHorizontal,onChange:function(e){return t.setAttributes({slideHorizontal:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Slide Vertical ( - to top, + to bottom )",value:t.attributes.slideVertical,onChange:function(e){return t.setAttributes({slideVertical:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.ToggleControl,{label:"Restore Normal on Mobile",checked:t.attributes.resetMobile,onChange:function(e){return t.setAttributes({resetMobile:e})}})]})})]}):"core/cover"===t.name?(0,C.jsxs)(x.Fragment,{children:[(0,C.jsx)(e,O({},t)),(0,C.jsx)(m.InspectorControls,{children:(0,C.jsxs)(y.PanelBody,{title:"Flexline Options",children:[(0,C.jsx)(y.ToggleControl,{label:"Enable Lazy Load",checked:!!t.attributes.enableLazyLoad,onChange:function(e){return t.setAttributes({enableLazyLoad:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Desktop",checked:!!t.attributes.hideOnDesktop,onChange:function(e){return t.setAttributes({hideOnDesktop:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Tablet",checked:!!t.attributes.hideOnTablet,onChange:function(e){return t.setAttributes({hideOnTablet:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Mobile",checked:!!t.attributes.hideOnMobile,onChange:function(e){return t.setAttributes({hideOnMobile:e})}})]})})]}):"core/buttons"===t.name?(0,C.jsxs)(x.Fragment,{children:[(0,C.jsx)(e,O({},t)),(0,C.jsx)(m.InspectorControls,{children:(0,C.jsxs)(y.PanelBody,{title:"Flexline Options",children:[(0,C.jsx)(y.ToggleControl,{label:"Hide on Desktop",checked:!!t.attributes.hideOnDesktop,onChange:function(e){return t.setAttributes({hideOnDesktop:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Tablet",checked:!!t.attributes.hideOnTablet,onChange:function(e){return t.setAttributes({hideOnTablet:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Mobile",checked:!!t.attributes.hideOnMobile,onChange:function(e){return t.setAttributes({hideOnMobile:e})}})]})})]}):"core/button"===t.name?(0,C.jsxs)(x.Fragment,{children:[(0,C.jsx)(e,O({},t)),(0,C.jsx)(m.InspectorControls,{children:(0,C.jsxs)(y.PanelBody,{title:"Flexline Options",children:[(0,C.jsx)(y.SelectControl,{label:"Icon Type",value:t.attributes.iconType,options:[{label:"None",value:"none"},{label:"Internal Link →",value:"internal-link"},{label:"Download ⤓",value:"download"},{label:"Play Video ►",value:"video-play"},{label:"Open Modal ⤢",value:"open-modal"},{label:"Link Out ↗",value:"link-out"}],onChange:function(e){return t.setAttributes({iconType:e})},__nextHasNoMarginBottom:!0}),(0,C.jsx)(y.ToggleControl,{label:"Open Link in a Modal",checked:!!t.attributes.enableModal,onChange:function(e){return t.setAttributes({enableModal:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Desktop",checked:!!t.attributes.hideOnDesktop,onChange:function(e){return t.setAttributes({hideOnDesktop:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Tablet",checked:!!t.attributes.hideOnTablet,onChange:function(e){return t.setAttributes({hideOnTablet:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Mobile",checked:!!t.attributes.hideOnMobile,onChange:function(e){return t.setAttributes({hideOnMobile:e})}})]})})]}):"core/gallery"===t.name?(0,C.jsxs)(x.Fragment,{children:[(0,C.jsx)(e,O({},t)),(0,C.jsx)(m.InspectorControls,{children:(0,C.jsx)(y.PanelBody,{title:"Flexline Options",children:(0,C.jsx)(y.ToggleControl,{label:"Enable Poster Gallery",checked:!!t.attributes.enablePosterGallery,onChange:function(e){return t.setAttributes({enablePosterGallery:e})}})})})]}):"core/navigation"===t.name?(0,C.jsxs)(x.Fragment,{children:[(0,C.jsx)(e,O({},t)),(0,C.jsx)(m.InspectorControls,{children:(0,C.jsxs)(y.PanelBody,{title:"Flexline Options",children:[(0,C.jsx)(y.ToggleControl,{label:"Enable Horizontal Scroll at Mobile",checked:!!t.attributes.enableHorizontalScroll,onChange:function(e){return t.setAttributes({enableHorizontalScroll:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Desktop",checked:!!t.attributes.hideOnDesktop,onChange:function(e){return t.setAttributes({hideOnDesktop:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Tablet",checked:!!t.attributes.hideOnTablet,onChange:function(e){return t.setAttributes({hideOnTablet:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Mobile",checked:!!t.attributes.hideOnMobile,onChange:function(e){return t.setAttributes({hideOnMobile:e})}})]})})]}):"core/group"===t.name?(0,C.jsxs)(x.Fragment,{children:[(0,C.jsx)(e,O({},t)),(0,C.jsxs)(m.InspectorControls,{children:[(0,C.jsxs)(y.PanelBody,{title:"Flexline Group Link Options",children:[(0,C.jsx)(y.ToggleControl,{label:"Enable Group Link",checked:!!t.attributes.enableGroupLink,onChange:function(e){return t.setAttributes({enableGroupLink:e})}}),t.attributes.enableGroupLink&&(0,C.jsx)(m.URLInput,{label:"Group Link URL",value:t.attributes.groupLinkURL,onChange:function(e){return t.setAttributes({groupLinkURL:e})}}),t.attributes.enableGroupLink&&(0,C.jsx)(y.SelectControl,{label:"Link Type",value:t.attributes.groupLinkType,options:[{label:"Normal",value:"none"},{label:"New Tab",value:"new_tab"},{label:"Modal Media",value:"modal_media"}],onChange:function(e){return t.setAttributes({groupLinkType:e})},__nextHasNoMarginBottom:!0})]}),(0,C.jsxs)(y.PanelBody,{title:"Flexline Visibility",children:[(0,C.jsx)(y.ToggleControl,{label:"Hide on Desktop",checked:!!t.attributes.hideOnDesktop,onChange:function(e){return t.setAttributes({hideOnDesktop:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Tablet",checked:!!t.attributes.hideOnTablet,onChange:function(e){return t.setAttributes({hideOnTablet:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Mobile",checked:!!t.attributes.hideOnMobile,onChange:function(e){return t.setAttributes({hideOnMobile:e})}})]})]}),(0,C.jsx)(m.InspectorControls,{group:"styles",children:(0,C.jsxs)(y.PanelBody,{title:"Flexline Content Shift",children:[(0,C.jsx)(y.ToggleControl,{label:"Use Content Shift",checked:!!t.attributes.useContentShift,onChange:function(e){return t.setAttributes({useContentShift:e})}}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Shift Left",value:t.attributes.shiftLeft,onChange:function(e){return t.setAttributes({shiftLeft:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Shift Right",value:t.attributes.shiftRight,onChange:function(e){return t.setAttributes({shiftRight:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Shift Up",value:t.attributes.shiftUp,onChange:function(e){return t.setAttributes({shiftUp:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Shift Down",value:t.attributes.shiftDown,onChange:function(e){return t.setAttributes({shiftDown:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.ToggleControl,{label:"Shift Above (z-index)",checked:t.attributes.shiftToTop,onChange:function(e){return t.setAttributes({shiftToTop:e})}}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Slide Horizontal ( - to left, + to right )",value:t.attributes.slideHorizontal,onChange:function(e){return t.setAttributes({slideHorizontal:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Slide Vertical ( - to top, + to bottom )",value:t.attributes.slideVertical,onChange:function(e){return t.setAttributes({slideVertical:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.ToggleControl,{label:"Restore Normal on Mobile",checked:t.attributes.resetMobile,onChange:function(e){return t.setAttributes({resetMobile:e})}})]})})]}):"core/column"===t.name?(0,C.jsxs)(x.Fragment,{children:[(0,C.jsx)(e,O({},t)),(0,C.jsx)(m.InspectorControls,{children:(0,C.jsxs)(y.PanelBody,{title:"Flexline Visibility",children:[(0,C.jsx)(y.ToggleControl,{label:"Hide on Desktop",checked:!!t.attributes.hideOnDesktop,onChange:function(e){return t.setAttributes({hideOnDesktop:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Tablet",checked:!!t.attributes.hideOnTablet,onChange:function(e){return t.setAttributes({hideOnTablet:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Mobile",checked:!!t.attributes.hideOnMobile,onChange:function(e){return t.setAttributes({hideOnMobile:e})}})]})}),(0,C.jsx)(m.InspectorControls,{group:"styles",children:(0,C.jsxs)(y.PanelBody,{title:"Flexline Content Shift",children:[(0,C.jsx)(y.ToggleControl,{label:"Use Content Shift",checked:!!t.attributes.useContentShift,onChange:function(e){return t.setAttributes({useContentShift:e})}}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Shift Left",value:t.attributes.shiftLeft,onChange:function(e){return t.setAttributes({shiftLeft:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Shift Right",value:t.attributes.shiftRight,onChange:function(e){return t.setAttributes({shiftRight:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Shift Up",value:t.attributes.shiftUp,onChange:function(e){return t.setAttributes({shiftUp:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Shift Down",value:t.attributes.shiftDown,onChange:function(e){return t.setAttributes({shiftDown:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.ToggleControl,{label:"Shift Above (z-index)",checked:t.attributes.shiftToTop,onChange:function(e){return t.setAttributes({shiftToTop:e})}}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Slide Horizontal ( - to left, + to right )",value:t.attributes.slideHorizontal,onChange:function(e){return t.setAttributes({slideHorizontal:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.__experimentalUnitControl,{label:"Slide Vertical ( - to top, + to bottom )",value:t.attributes.slideVertical,onChange:function(e){return t.setAttributes({slideVertical:e})},units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}]}),(0,C.jsx)(y.ToggleControl,{label:"Restore Normal on Mobile",checked:t.attributes.resetMobile,onChange:function(e){return t.setAttributes({resetMobile:e})}})]})})]}):["core/columns","core/spacer","core/paragraph","core/heading","core/video","core/site-logo","core/post-featured-image","core/embed","core/navigation-submenu","core/navigation-link","core/html","core/social-link","core/social-links"].includes(t.name)?(0,C.jsxs)(x.Fragment,{children:[(0,C.jsx)(e,O({},t)),(0,C.jsx)(m.InspectorControls,{children:(0,C.jsxs)(y.PanelBody,{title:"Flexline Visibility",children:["core/columns"===t.name&&(0,C.jsx)(y.ToggleControl,{label:"Stack at Tablet",checked:!!t.attributes.stackAtTablet,onChange:function(e){return t.setAttributes({stackAtTablet:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Desktop",checked:!!t.attributes.hideOnDesktop,onChange:function(e){return t.setAttributes({hideOnDesktop:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Tablet",checked:!!t.attributes.hideOnTablet,onChange:function(e){return t.setAttributes({hideOnTablet:e})}}),(0,C.jsx)(y.ToggleControl,{label:"Hide on Mobile",checked:!!t.attributes.hideOnMobile,onChange:function(e){return t.setAttributes({hideOnMobile:e})}})]})})]}):(0,C.jsx)(e,O({},t))}}),"withCustomControls");(0,v.addFilter)("editor.BlockEdit","flexline/with-custom-controls",S)},154:function(){},295:function(){},20:function(e,t,n){var l=n(594),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var l,r={},u=null,b=null;for(l in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(b=t.ref),t)i.call(t,l)&&!s.hasOwnProperty(l)&&(r[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===r[l]&&(r[l]=t[l]);return{$$typeof:o,type:e,key:u,ref:b,props:r,_owner:a.current}}t.jsx=u,t.jsxs=u},848:function(e,t,n){e.exports=n(20)},594:function(e){e.exports=React}},n={};function l(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=function(t,n,o,r){if(!n){var i=1/0;for(b=0;b<e.length;b++){n=e[b][0],o=e[b][1],r=e[b][2];for(var a=!0,s=0;s<n.length;s++)(!1&r||i>=r)&&Object.keys(l.O).every((function(e){return l.O[e](n[s])}))?n.splice(s--,1):(a=!1,r<i&&(i=r));if(a){e.splice(b--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var b=e.length;b>0&&e[b-1][2]>r;b--)e[b]=e[b-1];e[b]=[n,o,r]},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={608:0,698:0,252:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,i=n[0],a=n[1],s=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)l.o(a,o)&&(l.m[o]=a[o]);if(s)var b=s(l)}for(t&&t(n);u<i.length;u++)r=i[u],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(b)},n=self.webpackChunkflexline=self.webpackChunkflexline||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),l.O(void 0,[698,252],(function(){return l(305)})),l.O(void 0,[698,252],(function(){return l(154)}));var o=l.O(void 0,[698,252],(function(){return l(295)}));o=l.O(o)}();