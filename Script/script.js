'use strict';

const startBtn = document.getElementById('start'),
	btnPlusIncomeAdd = document.getElementsByTagName('button')[0],
	btnPlusExpensesAdd = document.getElementsByTagName('button')[1],
	depositCheckmark = document.querySelector('.deposit-checkmark'),
	additionalIncomeItem1 = document.querySelectorAll('.additional_income-item')[0],
	additionalIncomeItem2 = document.querySelectorAll('.additional_income-item')[1],
	budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
	budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
	expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
	additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
	additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
	incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
	targetMonthValue = document.getElementsByClassName('target_month-value')[0],
	salaryAmount = document.querySelector('.salary-amount'),
	incomeTitle = document.querySelectorAll('.income-title')[1],
	incomeAmount = document.querySelector('.income-amount'),
	expensesTitle = document.querySelector('.expenses-title'),
	expensesAmount = document.querySelector('.expenses-amount'),
	additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	depositAmount = document.querySelector('.deposit-amount'),
	depositPercent = document.querySelector('.deposit-percent'),
	targetAmount = document.querySelector('.target-amount'),
	periodSelect = document.querySelector('.period-select');

const isNumber = function(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
start = function(){	
	do {
		money = prompt('Введите ваш месячный доход:', 45000);
    } while (!isNumber(money));
};
start();
	
const appData = {
	budget: money,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	income: {},
	addIncome: [],
	expenses: {},
	addExpenses: [],
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	mission: 80000,
	period: 5,
	asking: function(){
		if(confirm('Есть ли у вас дополнительный зароботок?')){
			let itemIncome, cashIncome;
			do {
				itemIncome = prompt('Какой у вас есть доп заработок?', 'Фотограф');
			} while (isNumber(itemIncome));
			do {
				cashIncome = prompt('Сколько на этом зарабатываете в месяц?' , 7500);
			} while (!isNumber(cashIncome));
			appData.income[itemIncome] = cashIncome;
		}
		let addExpenses = prompt(
			'Перечислите через запятую возможные расходы за расчитываемый период:', 
			'Стоматолог, вагон ромашкового чая, Курсы, Еда, такси'
			);
			appData.addExpenses = addExpenses.toLowerCase().split(', ');
			appData.deposit = confirm('Есть ли у вас депозит в банке?');
			for (let i = 0; i < 2; i++){
				let expenses, cost;
				do {
					expenses = prompt(
					'Введите обязательную статью расходов:', 
					'Cтатья расходов '
					);
				} while (isNumber(expenses));
				do {
					cost = prompt('Введите предполагаемую стоимость:', 4500);
				} while (!isNumber(cost));
				appData.expenses[expenses] = +cost;
			}
	},
	getStatusIncome: function(){
		if (appData.budgetDay >= 1200) {
			return ('У вас высокий уровень дохода');
		} else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
			return ('У вас средний уровень дохода');
		} else if (appData.budgetDay >= 0 && appData.budgetDay < 600){
			return ('К сожалению у вас уровень дохода ниже среднего');
		} else if (appData.budgetDay < 0){
			return ('Что то пошло не так!');
		}
	},
	getExpensesMonth: function(){
		let sum = 0;
		for (let key in appData.expenses){
			sum += appData.expenses[key];
		}
		return sum;
	},
	getBudget: function(){
		appData.expensesMonth = appData.getExpensesMonth();
		appData.budgetMonth = appData.budget - appData.expensesMonth;
		appData.budgetDay = Math.floor(appData.budgetMonth / 30);
	},
	getTargetMonth: function(){
		return Math.ceil(appData.mission / appData.budgetMonth);
	},
	getInfoDeposit: function(){
		if (appData.deposit){
			do {
				appData.percentDeposit = prompt('Какой годовой процент?', 10);
			} while (!isNumber(appData.percentDeposit));
			do {
				appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
			} while (!isNumber(appData.moneyDeposit));
		}
	},
	calcSavedMoney: function(){
		return appData.budgetMonth * appData.period;
	}
	
};

appData.asking();
appData.getBudget();
appData.getInfoDeposit();

console.log('startBtn: ', startBtn);
console.log('btnPlusExpensesAdd: ', btnPlusExpensesAdd);
console.log('depositCheckmark: ', depositCheckmark);
console.log('additionalIncomeItem2: ', additionalIncomeItem2);
console.log('budgetMonthValue: ', budgetMonthValue);
console.log('salaryAmount: ', salaryAmount);
console.log('incomeTitle: ', incomeTitle);
console.log('additionalExpensesItem: ', additionalExpensesItem);
console.log('periodSelect: ', periodSelect);
/*console.log('Расходы за месяц: ', appData.expensesMonth);
if (appData.getTargetMonth() > 0){
	console.log('Период равен ', appData.getTargetMonth(), ' месяцев');
} else {
	console.log('Цель не будет достигнута');
}
console.log(appData.getStatusIncome());		
console.log('Наша программа включает в себя данные: ');		
for (let key in appData){
	console.log(key + ': ' + appData[key]);
}

console.log(appData);
console.log(appData.addExpenses.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', '));
*/

//--------------------------------------------Игра 6го урока---------------------------------------
/*
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
*/
