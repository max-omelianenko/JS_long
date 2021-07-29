'use strict';

const date = document.querySelector('.date');
    //dateTime = document.querySelector('.date_time');

const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    dayTime = ['Доброе утро!','Добрый день!','Добрый вечер!','Здравствуйте!'],
    dayWord = [' день!', ' дня!', ' дней!'];

function countTimer(deadline) {
    function getTimeRemaining(){
        let dateStop = new Date(deadline).getTime(),
		    dateNow = new Date().getTime(),
		    timeRemaining = (dateStop - dateNow) / 1000,
		    seconds = Math.floor(timeRemaining % 60),
		    minutes = Math.floor((timeRemaining / 60) % 60),
	        hours = Math.floor(timeRemaining / 60 / 60) % 24,
            day = Math.floor(timeRemaining / 60 / 60 / 24);
        return {timeRemaining, hours, minutes, seconds, day};
    }
    
    let idInterval = setInterval( function updateClock(){
        let timer = getTimeRemaining();

        const formatOne = function(now){
            const compare = function(time){
                let timeWord;
                if (time > 10 && time < 20){
                    timeWord = 2;  
                }
                else {
                    time = time % 10;
                }
                if (time === 1){
                    timeWord = 0;
                }
                else if(time >= 2 && time <= 4){
                    timeWord = 1;
                }
                else if(time >= 5 || time === 0){
                    timeWord = 2;
                }
                return timeWord;
            },
            compareDayTime = function(time){
                let timeWord;
                if (time >= 3 && time < 11){
                    timeWord = 0;
                } else if (time >= 11 && time < 16){
                    timeWord = 1;
                } else if (time >= 16 && time < 22){
                    timeWord = 2;
                } else {
                    timeWord = 3;
                }
                return timeWord;
            },
            compareTime = function(time){
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

            date.textContent = `${dayTime[compareDayTime(now.getHours())]}
            Сегодня: ${weekDays[now.getDay()]} 
            Текущее время - 
            ${compareTime(now.getHours())}:${compareTime(now.getMinutes())}:${compareTime(now.getSeconds())}
            До нового года осталось ${getTimeRemaining().day} ${dayWord[compare(getTimeRemaining().day)]}`;
        };

        const getCurrentTime = function(){
            let currentTime = new Date();
            return currentTime;
        };

        formatOne(getCurrentTime());

        // Добрый день (утро, вечер, ночь в зависимости от времени суток)
        // Сегодня: Понедельник
        // Текущее время:12:05:15 PM
        // До нового года осталось 175 дней

        if (timer.timeRemaining < 1){
            clearInterval(idInterval);
        } 
    }, 1000);  
}
countTimer('31 december 2021 24:00');
