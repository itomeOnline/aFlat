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

function apartmentNewSliders () {
    const sliderThumbs = new Swiper(".apartment_new_slider__thumbs", {
      spaceBetween: 12,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      direction: 'vertical',
    });

    const slider = new Swiper('.apartment_new_slider', {
        modules: [ Navigation, Mousewheel, Pagination, EffectFade, Thumbs],
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
        thumbs: {
          swiper: sliderThumbs,
        },
      });

      slider.on('activeIndexChange', function () {
          document.querySelector('[data-full-button]').setAttribute('data-id', slider.activeIndex);
      });

}

export default apartmentNewSliders;