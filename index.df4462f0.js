document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".animate");function t(){e.forEach(function(e){o(e)?(console.log("in view"),e.classList.add("active")):e.classList.remove("active")})}var i=document.querySelector(".messageForm");function n(){o(i)?i.classList.add("flip"):i.classList.remove("flip")}function o(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}window.addEventListener("scroll",n),window.addEventListener("resize",n),window.addEventListener("scroll",t),t()}),ScrollReveal().reveal(".BottomSlidetxt",{delay:0,duration:1e3,distance:"20px",origin:"bottom",easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",reset:!0}),ScrollReveal().reveal(".RightSlideTxt",{delay:500,duration:1e3,distance:"20px",origin:"right",easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",reset:!0}),ScrollReveal().reveal(".LeftSlideTxt",{delay:500,duration:1e3,distance:"20px",origin:"left",easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",reset:!0}),new Typed(".typed",{strings:["Bishal","a developer."],loop:!0,typeSpeed:150,backSpeed:150}),new PerfectScrollbar(document.getElementById("customScrollbar"));
//# sourceMappingURL=index.df4462f0.js.map