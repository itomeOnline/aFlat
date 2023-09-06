import LazyLoad from "vanilla-lazyload";
import LocomotiveScroll from 'locomotive-scroll';
import InputPhone from "./components/inputs/inputPhone";
import Input from "./components/inputs/input";
import validationMessages from "./components/inputs/validationMessages";
import IMask from "imask";
import SimpleBar from "simplebar";
import "simplebar/dist/simplebar.css";
import ModalDispatcher from "./components/modalDispatcher";
import Dropdown from './components/dropdown';

import formSubmit from "./components/form";
import cookieTooltip from "./components/cookieTooltip";
import headerDropdown from "./components/headerDropdown";
import headerLocationDropdown from "./components/headerLocationDropdown";
import topsSlider from "./components/sliders/topsSlider";
import topsBenefitsSlider from "./components/sliders/topsBenefitsSlider";
import excursionsSlider from "./components/sliders/excursionsSlider";
import banksSlider from "./components/sliders/banksSlider";
import complexMainSlider from "./components/sliders/complexMainSlider";
import mapWidget from "./components/mapWidget";
import complexProgressSlider from "./components/sliders/complexProgressSlider";
import fullGallerySlider from "./components/sliders/fullGallerySlider";
import apartmentLayoutsSlider from "./components/sliders/apartmentLayoutsSlider";
import projectMoreSlider from "./components/sliders/projectMoreSlider";
import tab from "./components/faqTabs";
import contactsSlider from "./components/sliders/contactsSlider";
import teamSlider from "./components/sliders/teamSlider";
import apartmentNewSliders from "./components/sliders/apartmentNewSliders";
import apartmentSecSlider from "./components/sliders/apartmentSecSlider";

setTimeout(() => { 
    document.querySelector('body').classList.add('on-loaded');
}, 1000)

document.addEventListener("DOMContentLoaded", _ => {
    if (!sessionStorage.activeSession) {
        // setTimeout(_ => {
        //   document.querySelector('.preloader').classList.add('is-ready');
        //   sessionStorage.activeSession = 1;
        // }, 1000)
        
        setTimeout(() => {
            document.querySelector('body').classList.add('disabled');
            // sessionStorage.setItem('site', 'enter');
        }, 3500)
        
        sessionStorage.activeSession = 1;
    } else {
        document.querySelector('body').classList.add('disabled');
    }

    formSubmit();
    cookieTooltip();
    ModalDispatcher.init();

    headerDropdown();
    headerLocationDropdown();
    mapWidget();

    topsSlider();
    topsBenefitsSlider();
    excursionsSlider();
    banksSlider();
    complexMainSlider();
    complexProgressSlider();
    fullGallerySlider();
    apartmentLayoutsSlider();
    projectMoreSlider();
    contactsSlider();
    teamSlider();
    apartmentNewSliders();
    apartmentSecSlider();


    document.querySelectorAll('[data-dropdown]').forEach(el => {
        new Dropdown(el);
    })

    if (document.querySelector('[data-tab-wrapper]')) {
        tab(document.querySelector('[data-tab-wrapper]'));
    }

    let scroll = new LocomotiveScroll({ 
        getDirection: true,
    });
    
    const lazyLoadInstance = new LazyLoad({
        elements_selector: '[data-lazy]'
    });

    setTimeout( _ => {
        scroll.update();


        scroll.on('scroll', (args) => {
        if (args.scroll.y > 100) {
            document.body.dataset.scrollDirection = args.direction;
        }
        else {
            document.body.dataset.scrollDirection = '';
        }
        });
        
        scroll.on('call', func => {
            statsCounter();
        })  
    }, 0)

    // PRIVACY
    
    if (document.querySelector('.privacy')) {
        let containers = document.querySelectorAll('[data-sector]');
        let links = document.querySelectorAll('.privacy_pagination__link');
        let anchorLinks = document.querySelectorAll('[data-anchor-link]');
      
        function intersectionHandler(entries) {
            [].forEach.call(entries, function(entry) {
                let sector = entry.target.dataset.sector;
                let link = [].find.call(links, link =>  link.getAttribute('href').replace('#', '') === sector);
                if (entry.isIntersecting) {
                    link.classList.add('is-active');
                }
                else {
                    link.classList.remove('is-active');
                }
      
            });
        }
      
        let observerSector = new IntersectionObserver(intersectionHandler, {  threshold: .1, rootMargin: '-20% 0% -50%'});
        [].forEach.call(containers, function(entry) {
            observerSector.observe(entry);
        });
      
        [].forEach.call(anchorLinks, function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
      
                const sector = link.getAttribute('href').replace('#', '');
                const pos = document.querySelector(`[data-sector="${sector}"]`).offsetTop;

                if (document.querySelector('.mortgage_calc')) {
                    scroll.scrollTo(pos + 800);
                } else {
                    scroll.scrollTo(pos);
                }
            });
        });
      
      }
      
    // ANCHOR LINKS

    const anchorLinks = document.querySelectorAll('[data-anchor]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', evt => {
            evt.preventDefault();
            const target = document.querySelector(`[data-scroll-id=${link.dataset.anchor}]`);
            scroll.scrollTo(target);
        });
    });

    // INPUTS

    const inputs = document.querySelectorAll('.input_wrapper__input');


    document.querySelectorAll('[name="phone"]').forEach((el) => {
        new InputPhone(el);
    });

    inputs.forEach(item => {
        new Input(item, validationMessages);
    })

});