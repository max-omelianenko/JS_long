'use strict';


let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n) && n > 0 && n < 100;
};

let numberInput = function(){
	let num;
	do {
			num = prompt('Введите ваш ответ от 1 до 100');
	}
	while (!isNumber(num));
	return num;
};

function randomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

function game(){

	let x = randomInteger(0, 100);

	function answerComparison() {
		let answer = +numberInput();
		console.log('x: ', x);
		console.log('answer: ', answer);
		let confirmNext = function(){
			let a = confirm('Продолжить?');
			if (a === true){
				answerComparison();
			} else if (a === false){
				alert('Слабак!=)');
			}
		};
		if(answer > x){
			alert('Загаданное число меньше');
			confirmNext();
		} else if (answer < x){
			alert('Загаданное число больше');
			confirmNext();
		} else if (answer === x){
			alert('Победа!!!');
			let oneMore = confirm('Eще разок?');
			if (oneMore === true){
				game();
			} else if (oneMore === false){
				alert('Игра окончена!');
			}
		}
	}
	answerComparison();
}
game();


/*let money,
cost,
income = 'Бригада', 
mission = 80000, 
period,
budgetDay,
expenses = [];

let addExpenses = prompt('Перечислите через запятую возможные расходы за расчитываемый период:', 'Стоматолог, Курсы, Еда'),
deposit = confirm('Есть ли у вас депозит в банке?');

//Функции
let start = function(){
    do {
        money = prompt('Введите ваш месячный доход:', 45000);
    }
    while (!isNumber(money));
};

start();

let showTypeOf = function(data){
    console.log(data, typeof(data));
};

let getStatusIncome = function(){
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } 
    else if (budgetDay >= 600 && budgetDay < 1200) {
        return ('У вас средний уровень дохода');
    }
    else if (budgetDay >= 0 && budgetDay < 600){
        return ('К сожалению у вас уровень дохода ниже среднего');
    }
    else if (budgetDay < 0){
        return ('Что то пошло не так!');
    }
};

let numberInput = function(){
    do {
        cost = prompt('Введите предполагаемую стоимость:', 4500);
    }
    while (!isNumber(cost));
    return +cost;
};

let getExpensesMonth = function(){
    let sum = 0;
    for (let i = 0; i < 2; i++){
        expenses[i] = prompt('Введите обязательную статью расходов:', 'Cтатья расходов ');
        sum += numberInput();
    }
    return sum;
};

let expensesAmount = getExpensesMonth();

let getAccumulatedMonth = function(){
    return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function(){
    return Math.ceil(mission / accumulatedMonth);
};

budgetDay = Math.floor(accumulatedMonth / 30);

//Вывод результатов
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.length);
if (getTargetMonth() > 0){
    console.log('Период равен ', getTargetMonth(), ' месяцев');
} else {
    console.log('Цель не будет достигнута');
}
console.log('Цель заработать ', mission, ' крон');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
console.log('Бюджет на день: ', budgetDay);
console.log('Бюджет на месяц: ', accumulatedMonth);
console.log(getStatusIncome());
*/
