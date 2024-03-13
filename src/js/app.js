import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()
/*module for burger menu*/
flsFunctions.toogleMenu()
/*module "Spollers"*/
flsFunctions.spollers()

//===================================================================================================================
//Слайдер Swiper
//====================================================================================================================
/* 
Налаштування підключення плагіна Swiper відбувається у файлі "./files/sliders.js"
Документація https://swiperjs.com/
 */
import "./files/sliders.js"

//Функції роботи скролом
import * as flsScroll from "./files/scroll/scroll.js";

//функція додавання класів до хедеру під час прокручування
flsScroll.headerScroll();
// Модуль поекраної прокрутки
// import './modules/fullpage.js'
