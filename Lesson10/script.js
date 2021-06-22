'use strict';

const books = document.querySelectorAll('.book'),
    adv = document.querySelector('.adv'),
    bookHeader = document.querySelectorAll('a'),
    bookChapters = document.querySelectorAll('ul');
    
//const booksSort = {};

/*
books.forEach(element => {
    booksSort[parseInt(element.innerText.match(/\d+/))] = element;
});*/

const sortElem = function(array){
    for (let i = 0; i < array.length; i++){

        console.log('Проход:', (i));

        for (let j = 0; j < array.length; j++) {

            console.log('Номер книги: ', parseInt(array[j].innerText.match(/\d+/)));

            if((parseInt(array[j].innerText.match(/\d+/))-1) === i){ 
                array[j].before(array[i]);

                console.log('Сработало, записал книгу ' + (parseInt(array[j].innerText.match(/\d+/))-1) + ' перед элементом ' + i);
            }
        }
    }
    
};


/*books.forEach(function(item, i){
    parseInt(item.innerText.match(/\d+/));
    booksSortArray[i].before(item);
});

let booksSortArray = Object.values(booksSort);
console.log('booksSortArray: ', booksSortArray);
books.forEach(function(item, i){
    //booksSortArray[i].before(item);
});
*/
adv.remove();
bookHeader[4].textContent = 'Книга 3. this и Прототипы Объектов';
sortElem(books);



