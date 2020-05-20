//
// Mobile nav toggle
// ==========================================================================// Mobile nav toggle

const hamburger = document.querySelector(".nav__hamburger");
const mobileNav = document.querySelector(".nav__main-nav");
const modal = document.querySelector(".modal");

function toggleNav() {
  mobileNav.classList.toggle("nav__main-nav--active");
  hamburger.classList.toggle("nav__hamburger--active");
  modal.classList.toggle("modal--active");
}

function closeNav() {
  mobileNav.classList.remove("nav__main-nav--active");
  hamburger.classList.remove("nav__hamburger--active");
  modal.classList.remove("modal--active");
}

hamburger.addEventListener("click", toggleNav);
modal.addEventListener("click", toggleNav);
window.addEventListener("resize", closeNav);
window.addEventListener("scroll", closeNav);


