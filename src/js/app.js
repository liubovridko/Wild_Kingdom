import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();
/*module for burger menu*/
flsFunctions.toogleMenu();
/*module "Spollers"*/
//flsFunctions.spollers();
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});
