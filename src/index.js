import {createHomePage} from './home';
import {createMenuPage} from './menu';
import {createAboutPage} from './about';

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

createHomePage();

homeBtn.addEventListener('click', createHomePage);
menuBtn.addEventListener('click', createMenuPage);
aboutBtn.addEventListener('click', createAboutPage);