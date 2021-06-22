'use strict';

const books = document.querySelectorAll('.book'),
    adv = document.querySelector('.adv'),
    bookHeader = document.querySelectorAll('a'),
    bookChapters = document.querySelectorAll('ul');
    
const booksSort = {};

books.forEach(element => {
    booksSort[parseInt(element.innerText.match(/\d+/))] = element;
});

let booksSortArray = Object.values(booksSort);
console.log('booksSortArray: ', booksSortArray);

books.forEach(function(item, i){
    booksSortArray[i].before(item);
});

adv.remove();
bookHeader[4].replaceWith('Книга 3. this и Прототипы Объектов');




