'use strict';

const books = document.querySelectorAll('.book'),
    adv = document.querySelector('.adv'),
    chaptersBook2 = books[0].querySelectorAll('li'),
    chaptersBook5 = books[5].querySelectorAll('li'),
    chaptersBook6 = books[2].querySelectorAll('li'),
    newElem = document.createElement('li');


const readNumber = function (block) {
    return parseInt(block.innerText.match(/\d+/));
};

//Работа с книгой
const sortElem = function(array) {
    // собираем всю инфу в массив со ссылкой на книгу, её номером и её индексом
    const bookArray = [];
    for (let i = 0; i < array.length; i++) {
        const book = array[i];
        const bookNumber = readNumber(array[i]);
        const index = i;

        bookArray.push({
            index,
            book,
            bookNumber,
        });
    }
    console.log('bookArray', bookArray);

    // отсортируем по номеру книги
    bookArray.sort((a, b) => a.bookNumber - b.bookNumber);
    //console.log('bookArray', bookArray);

    // начнем перемещение
    for (let i = 0; i < array.length - 1; i++) {
        // текущая книга
        const currBook = bookArray[i];
        // следующая книга по логике
        const nextBook = bookArray.find((b) => b.bookNumber === i + 2);
        // переместим текущую книгу
        currBook.book.after(nextBook.book);
        console.log('перенесем книгу', currBook, 'перед', nextBook);
    }
};

//books[1].insertAdjacentElement('afterend', books[0]);
//books[5].insertAdjacentElement('afterend', books[2]);
//books[4].insertAdjacentElement('afterend', books[3]);

document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';
books[4].querySelector('h2>a').textContent = 'Книга 3. this и Прототипы Объектов';
adv.remove();
chaptersBook2[9].after(chaptersBook2[2]);
chaptersBook2[3].after(chaptersBook2[8]);
chaptersBook2[3].after(chaptersBook2[6]);
chaptersBook5[1].after(chaptersBook5[9]);
chaptersBook5[4].after(chaptersBook5[2]);
chaptersBook5[7].after(chaptersBook5[5]);
newElem.textContent = 'Глава 8: За пределами ES6';
chaptersBook6[chaptersBook6.length - 1].before(newElem);


sortElem(books);
/*
//Работа с главами

const books =  document.querySelectorAll('.book'),
    adv = document.querySelector('.adv'),
    bookHeader = document.querySelectorAll('a'),
    bookChapters = document.querySelectorAll('ul');

const sortBookElem = function (arrayOfElem) {
    for (let j = 0; j < arrayOfElem.length; j++){
        const elemArray = [];  
        let test = 0, test2 = 1; 
        for (let i = 2; i < arrayOfElem[j].children.length; i++) {
            const elem = arrayOfElem[j].children[i];
            console.log('elem: ', elem);
            let elemIsChapter = true;
            let chapterNumber;
            const index = i;
            if (readNumber(arrayOfElem[j].children[i])){
                elemIsChapter = true;
            } else {
                elemIsChapter = false;
            }
            if (elemIsChapter === true)
            {
                chapterNumber = 1 + readNumber(arrayOfElem[j].children[i]);
                test++;
            } else {
                chapterNumber = arrayOfElem[j].children.length - test2;
                test2++;
            }
            elemArray.push({
                index,
                elem,
                elemIsChapter,
                chapterNumber,
            });
        }
        /*
        for (let i = 2; i < arrayOfElem[j].children.length; i++) {
            console.log('test output', elemArray.elemIsChapter);
            if (elemArray.elemIsChapter === false)
            {
                elemArray.chapterNumber = 1 + test + i;
            }
        }
        */
/*
        console.log('elemArray: ', elemArray);
        elemArray.sort((a, b) => a.chapterNumber - b.chapterNumber);
        console.log('elemArray: ', elemArray);
    //console.log('bookArray', bookArray);

    // начнем перемещение
        for (let i = 2; i < arrayOfElem[j].children.length - 1; i++) {
            // текущая книга
            const currChapter = elemArray[i];
            console.log('currChapter: ', currChapter);
            // следующая книга по логике
            const nextChapter = elemArray.find((b) => b.chapterNumber === i + 1);
            console.log('nextChapter: ', nextChapter);
            // переместим текущую книгу
            currChapter.elem.after(nextChapter.elem);
            console.log('перенесем книгу', currChapter, 'перед', nextChapter);
        }
    }
};

adv.remove();
bookHeader[4].textContent = 'Книга 3. this и Прототипы Объектов';
sortElem(books);

sortBookElem(bookChapters);
*/
