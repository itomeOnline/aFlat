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

function complexProgressSlider () {

  const slider = new Swiper('.complex_page_progress__slider', {
      modules: [ Navigation, Scrollbar, Mousewheel],
      slidesPerView: 4,
      speed: 700,
      spaceBetween: 28,
      watchOverflow: true,
      mousewheelControl: true,
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
          nextEl: '.complex_page_progress__arrow--next',
          prevEl: '.complex_page_progress__arrow--prev',
      },
      scrollbar: {
          el: '.complex_page_progress__scroll',
          draggable: true,
        },
      breakpoints: {
        300: {
          slidesPerView: 1.2,
          spaceBetween: 20
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1220: {
          slidesPerView: 4,
          spaceBetween: 28
        },
      }
    });


}

export default complexProgressSlider;