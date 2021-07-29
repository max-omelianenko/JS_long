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
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    };

    toggleMenu();

    //popup
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');

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

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
            popup.style.opacity = 0;
        });
    };

    togglePopup();

    //Плавная прокрутка
    const htmlPage = document.querySelector('html');

    htmlPage.style.scrollBehavior = 'smooth';
});
