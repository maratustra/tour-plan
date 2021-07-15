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


// const swiper = new Swiper('.hotel-slider', {
//   // Optional parameters
//   loop: true,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.hotel-slider__button--next',
//     prevEl: '.hotel-slider__button--prev',
//   },

//   effect: 'coverflow',
//   coverflowEffect: {
//     rotate: 30,
//     slideShadows: false,
//   },

//   // Keyboard Control Parameters
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
// });
