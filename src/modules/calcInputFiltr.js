const calcInputFiltr = () => {
    const calcItems = document.querySelectorAll('.calc-item');
    let stringModify;
    calcItems.forEach((elem) => {
        if (elem.classList.contains('calc-square') || elem.classList.contains('calc-count') || 
        elem.classList.contains('calc-day')){
            elem.addEventListener('blur', (e) => {
                stringModify = e.target.value;
                stringModify = stringModify.replace(/\D/g, '');
                e.target.value = stringModify;
            });
        }
    });
};

export default calcInputFiltr;