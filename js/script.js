const swiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },

  // Keyboard Control Parameters
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});