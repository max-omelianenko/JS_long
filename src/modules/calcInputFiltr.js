const calcInputFiltr = () => {
    const calcItems = document.querySelectorAll('.calc-item');

    calcItems.forEach((elem) => {
        if (elem.classList.contains('.calc-square') || elem.classList.contains('.calc-count') || 
        elem.classList.contains('.calc-day')){
            elem.addEventListener('blur', (e) => {
                e.target.value = e.target.value.replace(/\D/g, '');
            });
        }
    });
};

export default calcInputFiltr;