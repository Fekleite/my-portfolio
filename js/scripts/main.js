var slideWorks = new Swiper(".slide-works", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    720: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    }
  }
});

AOS.init();