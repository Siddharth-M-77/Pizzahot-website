AOS.init();


// navbar fixed
var nav = document.querySelector("header");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
      nav.classList.add("scroll-on");
  }
  else {
      nav.classList.remove("scroll-on");
  }
}


//Mobile-menu
var menu = document.querySelector(".mobile-menu")
$("#menu-btn").click(() => {
  menu.style.right = "0"
})
$("#close").click(() => {
  menu.style.right = "-300px"
})


gsap.from(".logo-contain, .nav-items, .log-sign-btn", {
    x: -100,
    opacity:0,
    stagger: 0.15
})
gsap.from("#menu-btn", {
    y: 50,
    opacity:0,
})
gsap.from(".head-contain > h1, .head-contain > h5", {
    y: 250,
    rotate: 35,
    stagger: 0.15,
    delay: 1.4
})



