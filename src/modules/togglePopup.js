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

export default togglePopup;