window.addEventListener('DOMContentLoaded', () => {
    'use strict';

	//Timer
	const countTimer = (deadline) => {
		let timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');
        function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),
			    dateNow = new Date().getTime(),
			    timeRemaining = (dateStop - dateNow) / 1000,
			    seconds = Math.floor(timeRemaining % 60),
			    minutes = Math.floor((timeRemaining / 60) % 60),
		        hours = Math.floor(timeRemaining / 60 / 60);
		        //hours = Math.floor(timeRemaining / 60 / 60) % 24;
                //day = Math.floor(timeRemaining / 60 / 60 / 24);
            return {timeRemaining, hours, minutes, seconds};
        }
        const compare = function(time){
            let timeOut;
            if (time < 10){
                time = time.toString(); 
                timeOut = '0' + time;
            }
            if (time >= 10){
                timeOut = time.toString(); 
            }
            return timeOut;
        }; 
        let idInterval = setInterval( function updateClock(){
            let timer = getTimeRemaining();
            timerHours.textContent = compare(timer.hours);
            timerMinutes.textContent = compare(timer.minutes);
            timerSeconds.textContent = compare(timer.seconds);
            if (timer.timeRemaining < 1){
                clearInterval(idInterval);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            } 
        }, 1000);  
	};

    countTimer('8 09 2021');

    //Menu
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        btnMenu.addEventListener('click', handlerMenu);
        menu.addEventListener('click', (event) =>{
            let target = event.target;
            if(target.classList.contains('close-btn')){
                handlerMenu();
            } else {
                if(target.tagName === 'A'){
                    console.log('target.tagName: ', target.tagName);
                    handlerMenu();
                }
            }    
        });
    };

    toggleMenu();

    //popup
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn');

        const fadeIn = (el, speed) => {
            let step = 1 / speed;
            let interval = setInterval(function() {
                if (el.style.opacity >= 1) {
                    clearInterval(interval);
                }
                el.style.opacity = +el.style.opacity + step;
            }, speed / 1000);
        };
          
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                let width = document.documentElement.clientWidth;
                if(width > 768){
                    fadeIn(popup, 50);
                    popup.style.display = 'block';
                } else {
                    popup.style.opacity = 1;
                    popup.style.display = 'block';
                }
            });
        });

        popup.addEventListener('click', (event) =>{
            let target = event.target;

            if(target.classList.contains('popup-close')){
                popup.style.display = 'none';
                popup.style.opacity = 0;
            } else {
                target = target.closest('.popup-content');
                if(!target){
                    popup.style.display = 'none';
                    popup.style.opacity = 0;
                }
            }
        });
    };

    togglePopup();

    //Плавная прокрутка
    const htmlPage = document.querySelector('html');
    htmlPage.style.scrollBehavior = 'smooth';

    //табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++){
                if(index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if(target){
                tab.forEach((item, i) => {
                    if(item === target){
                        toggleTabContent(i);
                    }
                });
            }
        });
    };

    tabs();

    //Слайдер

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            slider = document.querySelector('.portfolio-content'),
            dotList = document.querySelector('.portfolio-dots');

        let dot = document.querySelectorAll('.dot'),
            currentSlide = 0,
            interval;
            
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            
            currentSlide++;
            if (currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')){
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if(target.matches('#arrow-right')){
                currentSlide++;
            } else if (target.matches('#arrow-left')){
                currentSlide--;
            } else if (target.matches('.dot')){
                dot.forEach((elem, index) => {
                    if (elem === target){
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length){
                currentSlide = 0;
            }
            if (currentSlide < 0){
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if(event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')){
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if(event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')){
                startSlide();
            }
        });


        
        slide.forEach((index) => {
            const li = document.createElement('li');
            li.classList.add('dot');
            if (index === 0) {li.classList.add('dot-active');}
            dotList.appendChild(li);
        });

        dot = document.querySelectorAll('.dot');

        startSlide();
    };

    slider();

    //hover изображения
    const hoverImg = () => {
        const imgList = document.querySelectorAll('.command__photo');

        
        imgList.forEach((elem) =>{
            let initialSrc;
            elem.addEventListener('mouseover', (e) => {
                initialSrc = e.target.getAttribute('src');
                e.target.src = e.target.dataset.img;
            });
            elem.addEventListener('mouseout', (e) => {
                e.target.setAttribute('src', initialSrc);
            });
        });
    };

    hoverImg();

    //фильтр и проверка заполняемых полей КАЛЬКУЛЯТОР
    const calcInputFiltr = () => {
        const calcItems = document.querySelectorAll('.calc-item');

        calcItems.forEach((elem) => {
            elem.addEventListener('blur', (e) => {
                e.target.value = e.target.value.replace(/\D/g, '');
            });
        });
    };

    calcInputFiltr();

    //фильтр и проверка заполняемых полей PopUp и формы опросника
    const InputFiltr = () => {
        const allInput = document.querySelectorAll('input');
        let stringModify;

        const stringTrim = (elem) => {
            elem = elem.replace(/\-+/g, '-');
            elem = elem.replace(/\s+/g, ' ').trim();
            elem = elem.replace(/^\-/g, '');
            elem = elem.replace(/\-$/g, '');
            return elem;
        };

        const toUpper = (str) => {
            return str
                .toLowerCase()
                .split(' ')
                .map(function(word) {
                    return word[0].toUpperCase() + word.substr(1);
                })
                .join(' ');
        };

        allInput.forEach((elem) => {
            if (elem.getAttribute('name') === 'user_name'){
                elem.addEventListener('blur', (e) => {
                    stringModify = e.target.value;
                    stringModify = stringModify.replace(/[^?!,.\-а-яё\s]/ig, '');
                    stringModify = stringTrim(stringModify);
                    stringModify = toUpper(stringModify);
                    e.target.value = stringModify;
                });
            } else if (elem.getAttribute('name') === 'user_message'){
                elem.addEventListener('blur', (e) => {
                    stringModify = e.target.value;
                    stringModify = stringModify.replace(/[^?!,.\-а-яё\s]/ig, '');
                    stringModify = stringTrim(stringModify);
                    e.target.value = stringModify; 
                });
            } else if (elem.getAttribute('name') === 'user_phone'){
                elem.addEventListener('blur', (e) => {
                    stringModify = e.target.value;
                    stringModify = stringModify.replace(/[^\-()0-9]/ig, '');
                    stringModify = stringTrim(stringModify);
                    stringModify = '+' + stringModify;
                    stringModify = stringModify.match(/\+?[78]([-()]*\d){10}/g);
                    e.target.value = stringModify; 
                });
            } else if (elem.getAttribute('name') === 'user_email'){
                elem.addEventListener('blur', (e) => {
                    stringModify = e.target.value;
                    stringModify = stringModify.replace(/[^a-z0-9\-\_\!\*\'\`\@\.]/ig, '');
                    stringModify = stringModify.match(/\w+@\w+\.\w{2,3}/g);
                    e.target.value = stringModify; 
                });
            }
        });
    };

    InputFiltr();

});
