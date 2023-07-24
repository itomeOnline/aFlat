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

function topsBenefitsSlider () {
    const slider = new Swiper('.tops_benefits__slider', {
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
            nextEl: '.tops_benefits__arrow--next',
            prevEl: '.tops_benefits__arrow--prev',
        },
        scrollbar: {
            el: '.tops_benefits__scroll',
            draggable: true,
          },
        breakpoints: {
          300: {
            slidesPerView: 1.1,
            spaceBetween: 20
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1124: {
            slidesPerView: 3,
            spaceBetween: 28
          },
        }
      });

}

export default topsBenefitsSlider;