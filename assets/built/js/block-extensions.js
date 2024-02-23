/*! For license information please see block-extensions.js.LICENSE.txt */
(()=>{"use strict";var e,t={417:(e,t,r)=>{var n=r(893);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){var n;return n=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==o(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=wp.hooks.addFilter,c=wp.compose.createHigherOrderComponent,s=wp.element.Fragment,f=wp.blockEditor.InspectorControls,p=wp.components,y=p.PanelBody,b=p.ToggleControl,d=p.TextControl,v=(p.ToolsPanel,p.SelectControl),h=(p.ToolsPanelItem,{enablePopup:{type:"boolean",default:!1},popupMediaURL:{type:"string",default:""}});var m={enablePosterGallery:{type:"boolean",default:!1}};var g={enableHorizontalScroll:{type:"boolean",default:!1}};var _={enableGroupLink:{type:"boolean",default:!1},groupLinkURL:{type:"string",default:""},groupLinkType:{type:"string",default:"none"}};var k=c((function(e){return function(t){return"core/image"===t.name||"core/button"===t.name?(0,n.jsxs)(s,{children:[(0,n.jsx)(e,i({},t)),(0,n.jsx)(f,{children:(0,n.jsxs)(y,{title:"Mixed Media Popup Settings",children:[(0,n.jsx)(b,{label:"Enable Mixed Media Popup",checked:!!t.attributes.enablePopup,onChange:function(e){return t.setAttributes({enablePopup:e})}}),t.attributes.enablePopup&&(0,n.jsx)(d,{label:"Popup Media URL",value:t.attributes.popupMediaURL,onChange:function(e){return t.setAttributes({popupMediaURL:e})}})]})})]}):"core/gallery"===t.name?(0,n.jsxs)(s,{children:[(0,n.jsx)(e,i({},t)),(0,n.jsx)(f,{children:(0,n.jsx)(y,{title:"Poster Gallery Settings",children:(0,n.jsx)(b,{label:"Enable Poster Gallery",checked:!!t.attributes.enablePosterGallery,onChange:function(e){return t.setAttributes({enablePosterGallery:e})}})})})]}):"core/navigation"===t.name?(0,n.jsxs)(s,{children:[(0,n.jsx)(e,i({},t)),(0,n.jsx)(f,{children:(0,n.jsx)(y,{title:"Horizontal Scroll at Mobile",children:(0,n.jsx)(b,{label:"Enable Horizontal Scroll at Mobile",checked:!!t.attributes.enableHorizontalScroll,onChange:function(e){return t.setAttributes({enableHorizontalScroll:e})}})})})]}):"core/group"===t.name?(0,n.jsxs)(s,{children:[(0,n.jsx)(e,i({},t)),(0,n.jsx)(f,{children:(0,n.jsxs)(y,{title:"Group Link",children:[(0,n.jsx)(b,{label:"Enable Group Link",checked:!!t.attributes.enableGroupLink,onChange:function(e){return t.setAttributes({enableGroupLink:e})}}),t.attributes.enableGroupLink&&(0,n.jsx)(d,{label:"Group Link URL",value:t.attributes.groupLinkURL,onChange:function(e){return t.setAttributes({groupLinkURL:e})}}),t.attributes.enableGroupLink&&(0,n.jsx)(v,{label:"Link Type",value:t.attributes.groupLinkType,options:[{label:"Normal",value:"none"},{label:"New Tab",value:"new_tab"},{label:"Popup Media",value:"popup_media"}],onChange:function(e){return t.setAttributes({groupLinkType:e})}})]})})]}):(0,n.jsx)(e,i({},t))}}),"withCustomControls");l("blocks.registerBlockType","flexline/add-custom-attributes",(function(e,t){return"core/image"!==t&&"core/button"!==t||(e.attributes=i(i({},e.attributes),h)),e})),l("blocks.registerBlockType","flexline/add-custom-attributes",(function(e,t){return"core/gallery"===t&&(e.attributes=i(i({},e.attributes),m)),e})),l("blocks.registerBlockType","flexline/add-custom-attributes",(function(e,t){return"core/navigation"===t&&(e.attributes=i(i({},e.attributes),g)),e})),l("blocks.registerBlockType","flexline/add-custom-attributes",(function(e,t){return"core/group"===t&&(e.attributes=i(i({},e.attributes),_)),e})),l("editor.BlockEdit","flexline/with-custom-controls",k)},366:()=>{},895:()=>{},251:(e,t,r)=>{var n=r(294),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,u={},c=null,s=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(s=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:s,props:u,_owner:a.current}}t.jsx=c,t.jsxs=c},408:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator;var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d=Object.assign,v={};function h(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||b}function m(){}function g(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||b}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var _=g.prototype=new m;_.constructor=g,d(_,h.prototype),_.isPureReactComponent=!0;var k=Array.isArray,j=Object.prototype.hasOwnProperty,S={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var o,u={},i=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,o)&&!x.hasOwnProperty(o)&&(u[o]=t[o]);var l=arguments.length-2;if(1===l)u.children=n;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];u.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===u[o]&&(u[o]=l[o]);return{$$typeof:r,type:e,key:i,ref:a,props:u,_owner:S.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,u,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return i=i(l=e),e=""===u?"."+E(l,0):u,k(i)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),C(i,t,o,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(l=0,u=""===u?".":u+":",k(e))for(var c=0;c<e.length;c++){var s=u+E(a=e[c],c);l+=C(a,t,o,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),c=0;!(a=e.next()).done;)l+=C(a=a.value,t,o,s=u+E(a,c++),i);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function R(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function L(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},T={transition:null},U={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:T,ReactCurrentOwner:S};t.Children={map:R,forEach:function(e,t,r){R(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=h,t.Fragment=o,t.Profiler=i,t.PureComponent=g,t.StrictMode=u,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=d({},e.props),u=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=S.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)j.call(t,c)&&!x.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){l=Array(c);for(var s=0;s<c;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:r,type:e.type,key:u,ref:i,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:L}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,r){return $.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,r){return $.current.useReducer(e,t,r)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},294:(e,t,r)=>{e.exports=r(408)},893:(e,t,r)=>{e.exports=r(251)}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var u=r[e]={exports:{}};return t[e](u,u.exports,n),u.exports}n.m=t,e=[],n.O=(t,r,o,u)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){for(var[r,o,u]=e[s],a=!0,l=0;l<r.length;l++)(!1&u||i>=u)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(a=!1,u<i&&(i=u));if(a){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[r,o,u]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={535:0,533:0,545:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,u,[i,a,l]=r,c=0;if(i.some((t=>0!==e[t]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var s=l(n)}for(t&&t(r);c<i.length;c++)u=i[c],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(s)},r=self.webpackChunkflexline=self.webpackChunkflexline||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.O(void 0,[533,545],(()=>n(417))),n.O(void 0,[533,545],(()=>n(366)));var o=n.O(void 0,[533,545],(()=>n(895)));o=n.O(o)})();