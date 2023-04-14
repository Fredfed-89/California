const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__list");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  navMenu.classList.toggle("is-active");
});
