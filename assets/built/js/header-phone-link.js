(()=>{function e(){var e=document.querySelector(".site-header"),t=document.getElementById("flexline-call-button");if(e&&t){var i=(e.offsetHeight-t.offsetHeight)/2;t.style.position=window.scrollY>0?"fixed":"absolute",t.style.top=window.scrollY>0?window.matchMedia("(max-width: 781.98px)").matches?"12px":"8px":"".concat(i,"px")}}function t(e,t){var i;return function(){clearTimeout(i),i=setTimeout((function(){clearTimeout(i),e()}),t)}}document.addEventListener("DOMContentLoaded",(function(){var t=FlexlineCustomizerSettings,i=document.querySelector(".site-header");if(t.phoneLink&&i){var n=document.createElement("a");n.href=t.phoneLink,n.setAttribute("aria-label",t.ariaLabel),n.className="wp-block-button__link",n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="#ffffff" d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>',n.id="flexline-call-button",function(e,t){t.hideOnDesktop&&e.classList.add("flexline-hide-on-desktop");t.hideOnTablet&&e.classList.add("flexline-hide-on-tablet");t.hideOnMobile&&e.classList.add("flexline-hide-on-mobile")}(n,t),i.parentNode.insertBefore(n,i),e()}})),window.addEventListener("resize",t(e,100)),window.addEventListener("scroll",t(e,100))})();