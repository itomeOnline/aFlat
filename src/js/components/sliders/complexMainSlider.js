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

function complexMainSlider () {
    const slider = new Swiper('.complex_page_main_slider', {
        modules: [ Navigation, Scrollbar, Mousewheel, Pagination, EffectFade],
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 16,
        watchOverflow: true,
        mousewheelControl: true,
        mousewheel: {
          forceToAxis: true,
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        navigation: {
            nextEl: '.complex_page_main_slider__arrow--next',
            prevEl: '.complex_page_main_slider__arrow--prev',
        },
        pagination: {
          el: '.complex_page_main_slider__pagination',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return current + ' - ' + total;
          }
        },
      });

}

export default complexMainSlider;