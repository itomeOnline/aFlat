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

function excursionsSlider () {
    const slider = new Swiper('.excursions__slider', {
        modules: [ Navigation, Scrollbar, Mousewheel, Pagination],
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 16,
        watchOverflow: true,
        mousewheelControl: true,
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
            nextEl: '.excursions__arrow--next',
            prevEl: '.excursions__arrow--prev',
        },
        pagination: {
          el: '.excursions__pagination',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return current + ' - ' + total;
          }
        },
      });

}

export default excursionsSlider;