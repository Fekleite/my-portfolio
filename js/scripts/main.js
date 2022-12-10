var slideWorks = new Swiper(".slide-works", {
  slidesPerView: 2.5,
  spaceBetween: 45,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    }
  }
});

AOS.init();