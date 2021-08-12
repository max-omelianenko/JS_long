/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_hoverImg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/hoverImg */ \"./src/modules/hoverImg.js\");\n/* harmony import */ var _modules_calcInputFiltr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calcInputFiltr */ \"./src/modules/calcInputFiltr.js\");\n/* harmony import */ var _modules_inputFiltr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/inputFiltr */ \"./src/modules/inputFiltr.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendAllForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sendAllForm */ \"./src/modules/sendAllForm.js\");\n\n\n\n\n\n\n\n\n\n\n\n //Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('8 16 2021'); //Menu\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); //popup\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__.default)(); //табы\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)(); //Слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)(); //hover изображения\n\n(0,_modules_hoverImg__WEBPACK_IMPORTED_MODULE_5__.default)(); //фильтр и проверка заполняемых полей КАЛЬКУЛЯТОР\n\n(0,_modules_calcInputFiltr__WEBPACK_IMPORTED_MODULE_6__.default)(); //фильтр и проверка заполняемых полей PopUp и формы опросника\n\n(0,_modules_inputFiltr__WEBPACK_IMPORTED_MODULE_7__.default)(); //Калькулятор\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_8__.default)(100); //send-ajax-form\n//Отправка данных по всем формам\n\n(0,_modules_sendAllForm__WEBPACK_IMPORTED_MODULE_9__.default)();\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcCount = document.querySelector('.calc-count'),\n      calcDay = document.querySelector('.calc-day'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    totalValue.textContent = total;\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3dglo/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/calcInputFiltr.js":
/*!***************************************!*\
  !*** ./src/modules/calcInputFiltr.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calcInputFiltr = function calcInputFiltr() {\n  var calcItems = document.querySelectorAll('.calc-item');\n  calcItems.forEach(function (elem) {\n    if (elem.classList.contains('.calc-square') || elem.classList.contains('.calc-count') || elem.classList.contains('.calc-day')) {\n      elem.addEventListener('blur', function (e) {\n        e.target.value = e.target.value.replace(/\\D/g, '');\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcInputFiltr);\n\n//# sourceURL=webpack://3dglo/./src/modules/calcInputFiltr.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar countTimer = function countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60); //hours = Math.floor(timeRemaining / 60 / 60) % 24;\n    //day = Math.floor(timeRemaining / 60 / 60 / 24);\n\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  var compare = function compare(time) {\n    var timeOut;\n\n    if (time < 10) {\n      time = time.toString();\n      timeOut = '0' + time;\n    }\n\n    if (time >= 10) {\n      timeOut = time.toString();\n    }\n\n    return timeOut;\n  };\n\n  var idInterval;\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n    timerHours.textContent = compare(timer.hours);\n    timerMinutes.textContent = compare(timer.minutes);\n    timerSeconds.textContent = compare(timer.seconds);\n\n    if (timer.timeRemaining < 1) {\n      clearInterval(idInterval);\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n    }\n  }\n\n  updateClock();\n  idInterval = setInterval(updateClock, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3dglo/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/hoverImg.js":
/*!*********************************!*\
  !*** ./src/modules/hoverImg.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar hoverImg = function hoverImg() {\n  var imgList = document.querySelectorAll('.command__photo');\n  imgList.forEach(function (elem) {\n    var initialSrc;\n    elem.addEventListener('mouseover', function (e) {\n      initialSrc = e.target.getAttribute('src');\n      e.target.src = e.target.dataset.img;\n    });\n    elem.addEventListener('mouseout', function (e) {\n      e.target.setAttribute('src', initialSrc);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hoverImg);\n\n//# sourceURL=webpack://3dglo/./src/modules/hoverImg.js?");

/***/ }),

/***/ "./src/modules/inputFiltr.js":
/*!***********************************!*\
  !*** ./src/modules/inputFiltr.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar inputFiltr = function inputFiltr() {\n  var allInput = document.querySelectorAll('input');\n  var stringModify;\n\n  var stringTrim = function stringTrim(elem) {\n    elem = elem.replace(/\\-+/g, '-');\n    elem = elem.replace(/\\s+/g, ' ').trim();\n    elem = elem.replace(/^\\-/g, '');\n    elem = elem.replace(/\\-$/g, '');\n    return elem;\n  };\n\n  var toUpper = function toUpper(str) {\n    if (str) {\n      return str.toLowerCase().split(' ').map(function (word) {\n        return word[0].toUpperCase() + word.substr(1);\n      }).join(' ');\n    } else {\n      str = '';\n      return str;\n    }\n  };\n\n  allInput.forEach(function (elem) {\n    if (elem.getAttribute('name') === 'user_name') {\n      elem.addEventListener('blur', function (e) {\n        stringModify = e.target.value;\n        stringModify = stringModify.replace(/[^?!,.\\-а-яё\\s]/ig, '');\n        stringModify = stringTrim(stringModify);\n        stringModify = toUpper(stringModify);\n        e.target.value = stringModify;\n      });\n    } else if (elem.getAttribute('name') === 'user_message') {\n      elem.addEventListener('blur', function (e) {\n        stringModify = e.target.value;\n        stringModify = stringModify.replace(/[^?!,.\\-а-я0-9ё\\s]/ig, '');\n        stringModify = stringTrim(stringModify);\n        e.target.value = stringModify;\n      });\n    } else if (elem.getAttribute('name') === 'user_phone') {\n      elem.addEventListener('blur', function (e) {\n        stringModify = e.target.value;\n        stringModify = stringModify.replace(/[^\\-()0-9]/ig, '');\n        stringModify = stringTrim(stringModify);\n        stringModify = '+' + stringModify;\n        stringModify = stringModify.match(/\\+?[78]([-()]*\\d){10}/g);\n        e.target.value = stringModify;\n      });\n    } else if (elem.getAttribute('name') === 'user_email') {\n      elem.setAttribute('required', true);\n      elem.addEventListener('blur', function (e) {\n        stringModify = e.target.value;\n        stringModify = stringModify.replace(/[^a-z0-9\\-\\_\\!\\*\\'\\`\\@\\.]/ig, '');\n        stringModify = stringModify.match(/\\w+@\\w+\\.\\w{2,3}/g);\n        e.target.value = stringModify;\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputFiltr);\n\n//# sourceURL=webpack://3dglo/./src/modules/inputFiltr.js?");

/***/ }),

/***/ "./src/modules/sendAllForm.js":
/*!************************************!*\
  !*** ./src/modules/sendAllForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm(form) {\n  var errorMessage = 'Что то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  var statusMessage = document.createElement('div');\n\n  var deleteMessage = function deleteMessage() {\n    statusMessage.textContent = '';\n  };\n\n  statusMessage.style.cssText = 'font-size: 2rem; color: #ffffff';\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    form.appendChild(statusMessage);\n    statusMessage.textContent = loadMessage;\n    var formData = new FormData(form);\n    postData(formData).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      statusMessage.textContent = successMessage;\n      form.reset();\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n    })[\"finally\"](function () {\n      setTimeout(deleteMessage, 5000);\n    });\n  });\n};\n\nvar sendAllForm = function sendAllForm() {\n  var allForms = document.querySelectorAll('form');\n  allForms.forEach(function (item) {\n    sendForm(item);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendAllForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/sendAllForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      slider = document.querySelector('.portfolio-content'),\n      dotList = document.querySelector('.portfolio-dots');\n  var dot = document.querySelectorAll('.dot'),\n      currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  slide.forEach(function (index) {\n    var li = document.createElement('li');\n    li.classList.add('dot');\n\n    if (index === 0) {\n      li.classList.add('dot-active');\n    }\n\n    dotList.appendChild(li);\n  });\n  dot = document.querySelectorAll('.dot');\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3dglo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var btnMenu = document.querySelector('.menu'),\n      menu = document.querySelector('menu');\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  btnMenu.addEventListener('click', handlerMenu);\n  menu.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('close-btn')) {\n      handlerMenu();\n    } else {\n      if (target.tagName === 'A') {\n        console.log('target.tagName: ', target.tagName);\n        handlerMenu();\n      }\n    }\n  }); //Плавная прокрутка\n\n  var htmlPage = document.querySelector('html');\n  htmlPage.style.scrollBehavior = 'smooth';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3dglo/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn');\n\n  var fadeIn = function fadeIn(el, speed) {\n    var step = 1 / speed;\n    var interval = setInterval(function () {\n      if (el.style.opacity >= 1) {\n        clearInterval(interval);\n      }\n\n      el.style.opacity = +el.style.opacity + step;\n    }, speed / 1000);\n  };\n\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      var width = document.documentElement.clientWidth;\n\n      if (width > 768) {\n        fadeIn(popup, 50);\n        popup.style.display = 'block';\n      } else {\n        popup.style.opacity = 1;\n        popup.style.display = 'block';\n      }\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n      popup.style.opacity = 0;\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n        popup.style.opacity = 0;\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://3dglo/./src/modules/togglePopup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;