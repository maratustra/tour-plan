// Создание интеркативной карты Яндекс API
ymaps.ready(init);

let myMap;
let myPlacemark;

function init() {

  myMap = new ymaps.Map("map", {
    center: [7.573638, 79.803867], // Координаты центра карты
    zoom: 10  // Уровень масштабирования от 0 (весь мир) до 19.
  }, {
    searchControlProvider: 'yandex#search'
  })

  myPlacemark = new ymaps.GeoObject({ // Создаем геообъект с типом геометрии "Точка"

    geometry: {
      type: "Point",
      coordinates: [7.577567, 79.794274]
    }
  })
}


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
