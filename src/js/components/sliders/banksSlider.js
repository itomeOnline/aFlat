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

function banksSlider () {
    const slider = new Swiper('.banks__slider', {
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
            nextEl: '.banks__arrow--next',
            prevEl: '.banks__arrow--prev',
        },
        scrollbar: {
            el: '.banks__scroll',
            draggable: true,
          },
        breakpoints: {
          300: {
            slidesPerView: 1.1,
            spaceBetween: 20
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1120: {
            slidesPerView: 4,
            spaceBetween: 28
          },
        }
      });

}

export default banksSlider;