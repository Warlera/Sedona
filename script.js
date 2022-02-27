let burger = document.querySelector('.header_burger');
let nav = document.querySelector('.burger_nav');
let logo = document.querySelector('.mobLogo');
burger.onclick = function () {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  logo.classList.toggle('active');
};