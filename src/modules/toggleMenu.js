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
    //Плавная прокрутка
    const htmlPage = document.querySelector('html');
    htmlPage.style.scrollBehavior = 'smooth';
};

export default toggleMenu;