/* 
Документація https://swiperjs.com/
 */

import Swiper from 'swiper';
import { Navigation, Controller, Parallax } from 'swiper/modules';

//Базові стилі
//import "../../scss/base/swiper.scss";
//Повний набір стилів з scss/libs/swiper.scss
//import "../scss/libs/swiper/scss";
//Повний набір стилів з node_modules
//import "swiper/css";

//import 'swiper/swiper-bundle.css'; 


// init Swiper:
function initSliders() {
   if (document.querySelector('.hero__slider')) { 
       // Створюємо слайдер
    //    const miniSlider = new Swiper('.hero__mini-slider', { 
           
    //     modules: [Navigation,Controller],
    //     observer: true,
    //     observeParents: true,
    //     slidesPerView: "auto",
    //     spaceBetween: 20,
    //     slideToClickedSlide: true,
    //     addSlidesAfter: 4,
    //     //autoHeight: true,
    //     speed: 800,
    //     loop: true,     
    //     // Події
    //     on: {
    //         init: function (slider) {
    //          slider.slides.forEach(slide =>{
    //              const imageSrc = slide.querySelector('.slide-hero__image').getAttribute('src');
    //              const topImage = `									
    //              <div class="slide-hero__top-image">
    //                 <img src="${imageSrc}" alt="Image">
    //              </div>
    //              `;
    //              slide.insertAdjacentHTML('beforeend',topImage);
    //          })
    //         }
    //     }
    //    });
       const mainSlider = new Swiper('.hero__slider', { 
           
           modules: [Navigation,Controller,Parallax],
           observer: true,
           observeParents: true,
           slidesPerView: 1.5,
           spaceBetween: 30,
           parallax: true,
           //autoHeight: true,
           speed: 800,
           loop: true,
           //autoHeight: true,
           //centeredSlides: true,
   
           //touchRatio: 0,
           //simulateTouch: false,
           //loop: true,
   
           // Підгрузка забражень class к img "swiper-lazy"
           //preloadImages: false,
           //lazy: true,
   
           /*
           // Еффекти
           effect: 'fade',
           autoplay: {
               delay: 3000,
               disableOnInteraction: false,
           },
           */
   
           // Пагінація
           /*
           pagination: {
               el: '.swiper-pagination',
               clickable: true,
           },
           */
   
           // Скроллбар
           /*
           scrollbar: {
               el: '.swiper-scrollbar',
               draggable: true,
           },
           */
   
           navigation: {
               prevEl: '.hero__arrow--left',
               nextEl: '.hero__arrow--right',
           },
   
           
           breakpoints: {
            // 640: {
            //       slidesPerView: 1,
            //       spaceBetween: 0,
            //       autoHeight: true,
            // },
            // 768: {
            //       slidesPerView: 2,
            //       spaceBetween: 20,
            // },
            // 992: {
            //    slidesPerView: 3,
            //    spaceBetween: 20,
            // },
            // 1268: {
            //    slidesPerView: 4,
            //    spaceBetween: 20,
            // },
                        
           },
           // Події
           on: {
               init: function (slider) {
                slider.slides.forEach(slide =>{
                    const imageSrc = slide.querySelector('.slide-hero__image').getAttribute('src');
                    const topImage = `									
                    <div class="slide-hero__top-image">
                       <img src="${imageSrc}" alt="Image">
                    </div>
                    `;
                    var slideContent = slide.querySelector('.slide-hero__content');
                    slideContent.insertAdjacentHTML('beforeend',topImage);
                })
               }
            // slideChange: function () {
            //    let titlePrevIndex = this.realIndex - 1;
            //    let titleNextIndex = this.realIndex + 1;
            //    let fadeSpeed = 20
         
            //    if (titlePrevIndex == -1) {
            //      titlePrevIndex = titleArray.length - 1;
            //    }
            //    if (titleNextIndex == titleArray.length) {
            //      titleNextIndex = 0;
            //    }
               
            //    //Нижче дві функції для плавного зникнення и появи
            //    function fadeIn(fade) {
            //      var opacity = 0;
            //      var intervalID = setInterval(function () {
            //        if (opacity < 1) {
            //          opacity = opacity + 0.01;
            //          fade.style.opacity = opacity;
            //        } else {
            //          clearInterval(intervalID);
            //        }
            //      },6);
            //    }
            //    function fadeOut(fade) {
            //      var opacity = 1;
            //      var intervalID = setInterval(function () {
            //        if (opacity > 0) {
            //          opacity = opacity - 0.01;
            //          fade.style.opacity = opacity;
            //        } else {
            //          clearInterval(intervalID);
            //        }
            //      }, 6);
            //    }
               
            //    //Функція для зміни заголовків на кнопках
            //    function changeTitle() {
            //      nextBtn.querySelector("span").textContent = titleArray[
            //        titleNextIndex
            //      ].getAttribute("title");
            //      prevBtn.querySelector("span").textContent = titleArray[
            //        titlePrevIndex
            //      ].getAttribute("title");
            //    }
               
            //    //Ховаємо старі заголовки на кнопках
            //    fadeOut(nextBtn.querySelector("span"));
            //    fadeOut(prevBtn.querySelector("span"));
               
            //    //Затримка з наступною зміною кнопок та їх плавною появою
            //    setTimeout(function () {
            //      changeTitle();
            //      fadeIn(nextBtn.querySelector("span"));
            //      fadeIn(prevBtn.querySelector("span"));
            //    }, 600);
            //  }
   
           }
       });
       //mainSlider.controller.control = miniSlider;
      // miniSlider.controller.control = mainSlider;
   }
}
document.addEventListener("DOMContentLoaded", initSliders);

//Scroll on base slider
function initSlidersScroll(){
    let sliderScrollItems=document.querySelector('.swiper_scroll');
    if (sliderScrollItems.length > 0) {
        for (let index=0; index < sliderScrollItems.lenght; index++) {
            const sliderScrollItem = sliderScrollItems[index];
            const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
            const sliderScroll = new Swiper(sliderScrollItem, {
                observer:true,
                observeParents:true,
                direction:'vertical',
                slidesPerView:'auto',
                freeMode:{
                    enabled:true,
                },
                scrollbar:{
                    el:sliderScrollBar,
                },
            })
        }
    }
}


