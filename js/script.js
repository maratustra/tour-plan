$(document).ready(function () {

  let menuButton = $('.menu-button');

  menuButton.on('click', function () {
    $('.navbar-bottom').toggleClass('navbar-bottom--visible');
  });

  const hotelSwiper = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },

    //effect: 'coverflow',
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

  // Modal Windows 

  let modalButton = $('[data-toggle="modal"]');
  let closeModalButtonByClick = $('.modal__close');
  let closeModalButtonByEsc = $('[data-toggle="modal"]');

  modalButton.on('click', openModal);
  closeModalButtonByClick.on('click', closeModalByMouse);
  closeModalButtonByEsc.on('keydown', closeModalByEsc);

  function openModal() {

    let targetModal = $(this).attr('data-href');

    $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible');
    $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible');
    $('body').addClass('modal-open'); // switch off scroll when modal is open
  }

  function closeModalByMouse(event) {

    event.preventDefault();

    let modalOverlay = $('.modal__overlay');
    let modalDialog = $('.modal__dialog');

    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    $('body').removeClass('modal-open'); // switch off scroll when modal is closed
  }

  function closeModalByEsc(event) {

    if (event.key === 'Escape') {
      event.preventDefault();

      let modalOverlay = $('.modal__overlay');
      let modalDialog = $('.modal__dialog');

      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
  }

  // Validation Forms

  $('.form').each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          minlength: 18,
          maxlength: 18
        }
      },
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Please enter at least 2 characters"
        },
        email: {
          required: "Please specify your email address",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Please specify your phone number",
          minlength: "Your phone number must be at least 11 digits"
        },
      }
    });
  });

  $('.newsletter__subscribe').validate({
    rules: {
      mail: {
        required: true,
        mail: true
      },
    },
    messages: {
      mail: {
        required: "Please specify your email address",
        email: "Your email address must be in the format of name@domain.com"
      },
    }
  });


  // Mask Plugin For Phone Numbers

  $('.phone').mask('+0 (000) 000-00-00');

  let maskBehavior = function (value) {
    return value.replace(/\D/g, '').length === 11 ? '+0 (000) 000-00-00' : '+0 (000) 000-00-00';
  };

  $('.phone').mask(maskBehavior);

});