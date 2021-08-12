'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import hoverImg from './modules/hoverImg';
import calcInputFiltr from './modules/calcInputFiltr';
import inputFiltr from './modules/inputFiltr';
import calc from './modules/calc';
import sendAllForm from './modules/sendAllForm';

//Timer
countTimer('8 16 2021');
//Menu
toggleMenu();
//popup
togglePopup();
//табы
tabs();
//Слайдер
slider();
//hover изображения
hoverImg();
//фильтр и проверка заполняемых полей КАЛЬКУЛЯТОР
calcInputFiltr();
//фильтр и проверка заполняемых полей PopUp и формы опросника
inputFiltr();
//Калькулятор
calc(100);
//send-ajax-form
//Отправка данных по всем формам
sendAllForm();