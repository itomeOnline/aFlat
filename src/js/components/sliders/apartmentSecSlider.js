import Swiper, {
    Navigation,
    Scrollbar,
    Mousewheel,
    Pagination,
    EffectFade,
    Autoplay,
    Virtual,
    Thumbs
  } from 'swiper';
  
import 'swiper/swiper.min.css';
// import 'swiper/components/scrollbar/scrollbar.min.css';

function apartmentSecSlider () {

    const slider = new Swiper('.apartment_new_slider--sec', {
        modules: [ Navigation, Mousewheel, Pagination, EffectFade],
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
            nextEl: '.apartment_new_slider__arrow--next',
            prevEl: '.apartment_new_slider__arrow--prev',
        },
        pagination: {
          el: '.apartment_new_slider__pagination',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return current + ' - ' + total;
          }
        },
      });

      slider.on('activeIndexChange', function () {
          document.querySelector('[data-full-button]').setAttribute('data-id', slider.activeIndex);
      });

}

export default apartmentSecSlider;