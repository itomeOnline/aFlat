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

function contactsSlider () {
    const slider = new Swiper('.contacts_slider', {
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
            nextEl: '.contacts_slider__arrow--next',
            prevEl: '.contacts_slider__arrow--prev',
        },
        pagination: {
          el: '.contacts_slider__pagination',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return current + ' - ' + total;
          }
        },
      });

}

export default contactsSlider;