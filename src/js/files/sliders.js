/* 
Документація https://swiperjs.com/
 */

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

//Базові стилі
//import "../../scss/base/swiper.scss";
//Повний набір стилів з scss/libs/swiper.scss
//import "../scss/libs/swiper/scss";
//Повний набір стилів з node_modules
import "swiper/css";


// init Swiper:
function initSliders() {
   if (document.querySelector('.hero__slider')) { 
       // Створюємо слайдер
        new Swiper('.hero__slider', { 
           
           modules: [Navigation],
           observer: true,
           observeParents: true,
           slidesPerView: 3,
           spaceBetween: 0,
           autoHeight: true,
           speed: 800,
           loop: true,
           //autoHeight: true,
           centeredSlides: true,
   
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
                        
           },
           
           // Події
           on: {
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
   }
}

