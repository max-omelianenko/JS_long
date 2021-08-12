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
    
    let idInterval;

    function updateClock(){
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
    }

    updateClock();
    idInterval = setInterval(updateClock, 1000);  
};

export default countTimer;