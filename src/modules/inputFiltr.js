const inputFiltr = () => {
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
        if(str){
            return str
            .toLowerCase()
            .split(' ')
            .map(function(word) {
                return word[0].toUpperCase() + word.substr(1);
            })
            .join(' ');
        } else {
            str = '';
            return str;
        }
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
                stringModify = stringModify.replace(/[^?!,.\-а-я0-9ё\s]/ig, '');
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
            elem.setAttribute('required', true);
            elem.addEventListener('blur', (e) => {
                stringModify = e.target.value;
                stringModify = stringModify.replace(/[^a-z0-9\-\_\!\*\'\`\@\.]/ig, '');
                stringModify = stringModify.match(/\w+@\w+\.\w{2,3}/g);
                e.target.value = stringModify; 
            });
        }
    });
};

export default inputFiltr;