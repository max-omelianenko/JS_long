const sendForm = (form) => {
    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    
    const postData = (body) => {
        
        return fetch ('./server.php', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
    };

    const statusMessage = document.createElement('div');

    const deleteMessage = () => {
        statusMessage.textContent = '';
    };

    statusMessage.style.cssText = 'font-size: 2rem; color: #ffffff';
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        
        postData(formData)
            .then((response) => {
                if (response.status !== 200){
                    throw new Error ('status network not 200');
                } 
                statusMessage.textContent = successMessage;
                form.reset();
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            })
            .finally(() => {
                setTimeout(deleteMessage, 5000);
            });
    });
};

const sendAllForm = () => {
    const allForms = document.querySelectorAll('form');
    allForms.forEach((item) => {
        sendForm(item);   
    });
};

export default sendAllForm;