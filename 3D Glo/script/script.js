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


});
