import Swiper, {
  Navigation,
  Scrollbar,
  Mousewheel,
  Pagination,
  EffectFade,
  Autoplay,
  Virtual
} from 'swiper';

import 'swiper/swiper.min.css';
// import 'swiper/components/scrollbar/scrollbar.min.css';

function apartmentLayoutsSlider () {

  const slider = new Swiper('.apartment_layouts__slider', {
      modules: [ Navigation, Scrollbar, Mousewheel],
      slidesPerView: 3,
      speed: 700,
      spaceBetween: 28,
      watchOverflow: true,
      mousewheelControl: true,
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
          nextEl: '.apartment_layouts__arrow--next',
          prevEl: '.apartment_layouts__arrow--prev',
      },
      scrollbar: {
          el: '.apartment_layouts__scroll',
          draggable: true,
        },
      breakpoints: {
        300: {
          slidesPerView: 1.2,
          spaceBetween: 20
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1220: {
          slidesPerView: 3,
          spaceBetween: 28
        },
      }
    });


}

export default apartmentLayoutsSlider;