import Swiper, {
    Navigation,
    Scrollbar,
    Mousewheel,
    Pagination,
    EffectFade,
    Autoplay,
    Virtual,
    Parallax,
    Lazy
  } from 'swiper';
  
import 'swiper/swiper.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';

function projectMoreSlider () {
    let texts = ['О жилом комплексе', 'О доме', 'Где находится', 'Парковка', 'Дополнительные зоны'];
    const slider = new Swiper('.project_more_info__slider', {
      modules: [ Navigation, Autoplay, Pagination, EffectFade],
      slidesPerView: 1,
	    speed: 700,
	    spaceBetween: 8,
	    loop: true,
	    autoplay: {
	      delay: 3000,
	    },
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      loopedSlides: 5,
      navigation: {
          nextEl: '.project_more_info__slider_btn--next',
          prevEl: '.project_more_info__slider_btn--prev',
      },
      pagination: {
        el: '.project_more_info__pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<button class="' + className + '"><span>'  + (texts[index]) + '</span></button>';
        },
      },
      // breakpoints: {
      //   300: {
      //     slidesPerView: 5,
      //     spaceBetween: 16,
      //     direction: 'vertical',
      //   },
      //   500: {
      //     slidesPerView: 5,
      //     spaceBetween: 20,
      //     direction: 'vertical',
      //   },
      //   1124: {
      //     slidesPerView: 1,
      //     spaceBetween: 8,
      //     direction: 'horizontal',
      //   },
      // }
	           
      });
}

export default projectMoreSlider;