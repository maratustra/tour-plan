let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function () {
  console.log('Click');
  document
    .querySelector('.navbar-bottom')
    .classList.toggle('navbar-bottom--visible');
});

const hotelSwiper = new Swiper('.hotel-slider', {
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

const reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  autoHeight: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  // Keyboard Control Parameters
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

$('.parallax-window').parallax({ imageSrc: 'img/newsletter/newsletter_bg.jfif' });

// // Создание интеркативной карты Яндекс API
// ymaps.ready(init);

// function init() {

//   var myMap = new ymaps.Map("map", {

//     center: [7.573638, 79.803867], // Координаты центра карты
//     zoom: 10  // Уровень масштабирования от 0 (весь мир) до 19.
//   }, {
//     searchControlProvider: 'yandex#search'

//   })

//   myGeoObject = new ymaps.GeoObject({

//     geometry: {
//       type: "Point",
//       coordinates: [55.8, 37.8]
//     },

//   });

//   myMap.geoObjects
//     .add(new ymaps.Placemark([7.577567, 79.794274], {
//       balloonContent: 'Маленькая иконка'
//     }, {
//       iconLayout: 'default#image'
//     }))
// }
