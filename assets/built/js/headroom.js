document.addEventListener("DOMContentLoaded",(function(){console.log("Headroom initialized!");var e=document.querySelector("header.site-header");function n(e){var n=document.querySelector("#header_container");if(n){var o=(n.offsetHeight-e.offsetHeight)/2;e.style.position="fixed",e.style.top="".concat(n.offsetTop+o,"px")}}e&&new Headroom(e,{offset:50,tolerance:{up:10,down:0},classes:{initial:"headroom",pinned:"headroom--pinned",unpinned:"headroom--unpinned"},onPin:function(){console.log("Header pinned!");var e=document.querySelector("#slide-in-menu-button"),o=document.querySelector("#web4sl-call-button");n(e),n(o)},onUnpin:function(){console.log("Header unpinned!")}}).init()}));