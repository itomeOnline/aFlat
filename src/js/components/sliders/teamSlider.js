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

function teamSlider () {
  const slider = new Swiper('.contacts_team__slider', {
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
          nextEl: '.contacts_team__arrow--next',
          prevEl: '.contacts_team__arrow--prev',
      },
      scrollbar: {
          el: '.contacts_team__scroll',
          draggable: true,
        },
      breakpoints: {
        300: {
          slidesPerView: 1.3,
          spaceBetween: 20
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1124: {
          slidesPerView: 3,
          spaceBetween: 28
        },
      }
    });

}

export default teamSlider;