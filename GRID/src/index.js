import "./sass/styles.scss";
import "hamburgers/_sass/hamburgers/hamburgers.scss";
import "slick-carousel";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";
import "./js/modal";
import $ from 'jquery';

const refs = {
  hamburgerMenu: document.querySelector(".hamburger-menu"),
  hamburgerOverlay: document.querySelector(".hamburger-overlay"),
  hamburger: document.querySelector(".hamburger"),
  hamburger2: document.querySelector(".hamburger2"),
}
refs.hamburger.addEventListener("click", function () {
  refs.hamburger.classList.add("hide");
  refs.hamburgerMenu.classList.add('show');
  refs.hamburgerOverlay.classList.remove('hide');
  refs.hamburgerOverlay.classList.add('show');

  window.addEventListener("keydown", hendleKeyPress);
});

const CloseHamburgerMenu = e => {
  refs.hamburgerMenu.classList.remove('show');
  refs.hamburgerOverlay.classList.add('hide');
  refs.hamburger.classList.remove('hide');
  window.removeEventListener("keydown", hendleKeyPress);
}

const hendleKeyPress = e => {
  if (e.code !== "Escape") {
    return;
  }
  CloseHamburgerMenu();
};

refs.hamburger2.addEventListener("click", CloseHamburgerMenu);

refs.hamburgerOverlay.addEventListener("click", function (e) {
  if (e.target === e.currentTarget) {
    CloseHamburgerMenu();
  }
});


$(document).ready(function () {
  $('.slider-list').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});


