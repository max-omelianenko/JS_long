'use strict';

const startBtn = document.getElementById('start'),
	btnPlusIncomeAdd = document.getElementsByTagName('button')[0],
	btnPlusExpensesAdd = document.getElementsByTagName('button')[1],
	additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
	budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
	budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
	expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
	additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
	additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
	incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
	targetMonthValue = document.getElementsByClassName('target_month-value')[0],
	salaryAmount = document.querySelector('.salary-amount'),
	income = document.querySelector('.income'),
	incomeTitle = document.querySelectorAll('.income-title'),
	incomeAmount = document.querySelector('.income-amount'),
	expenses = document.querySelector('.expenses'),
	expensesTitle = document.querySelectorAll('.expenses-title'),
	expensesAmount = document.querySelector('.expenses-amount'),
	additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	depositCheck = document.getElementById('deposit-check'),
	depositCheckmark = document.querySelector('.deposit-checkmark'),
	depositAmount = document.querySelector('.deposit-amount'),
	depositPercent = document.querySelector('.deposit-percent'),
	depositBank = document.querySelector('.deposit-bank'),
	targetAmount = document.querySelector('.target-amount'),
	periodSelect = document.querySelector('.period-select'),
	periodAmount = document.querySelector('.period-amount'),
	canсelBtn = document.getElementById('cancel'),
	control = document.querySelector('.control');
	
let	incomeItems = document.querySelectorAll('.income-items'),
	expensesItems = document.querySelectorAll('.expenses-items');

const reText = /^[?!,.а-яА-ЯёЁ\s]+$/;
const isNumber = function(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
};

class AppData {
	constructor(){
		this.budget = 0;
		this.budgetDay = 0;
		this.budgetMonth = 0;
		this.expensesMonth = 0;
		this.incomeMonth = 0;
		this.income = {};
		this.addIncome = [];
		this.expenses = {};
		this.addExpenses = [];
		this.deposit = false;
		this.percentDeposit = 0;
		this.moneyDeposit = 0;
	}
}

AppData.prototype.start = function(){	
	const allInput = document.querySelectorAll('input');
	this.budget = +salaryAmount.value;
	this.getExpenses(); 
	this.getIncome();
	this.getInfoDeposit();
	this.getAddExpenses();
	this.getAddIncome();
	this.getBudget();
	this.showResult();
	startBtn.disabled = true;
	canсelBtn.style.display = 'inline';
	startBtn.style.display = 'none';
	allInput.forEach(function(item){
		item.disabled = true;
	});
	btnPlusIncomeAdd.disabled = true;
	btnPlusExpensesAdd.disabled = true;
	depositCheckmark.disabled = true;
	periodSelect.disabled = false;
};
AppData.prototype.reset = function(){
		
	let incomeItems = document.querySelectorAll('.income-items'),
	expensesItems = document.querySelectorAll('.expenses-items');

	this.budget = 0;
	this.budgetDay = 0;
	this.budgetMonth = 0;
	this.expensesMonth = 0;
	this.incomeMonth = 0;
	this.income = {};
	this.addIncome = [];
	this.expenses = {};
	this.addExpenses = [];
	this.deposit = false;
	this.percentDeposit = 0;
	this.moneyDeposit = 0;
	
	let allInput = document.querySelectorAll('input');
	allInput.forEach(function(item){
		if(item.type === 'checkbox'){
			item.checked = false;
			item.disabled = false;
		} else if (item.type === 'range'){
			item.value = 1;
			periodAmount.textContent = '1';
		} else {
			item.value = '';
			item.disabled = false;
		}
	});
	
	incomeItems.forEach(function(item, index){
		if(index !== 0){
			item.remove();
		}
	});
	btnPlusIncomeAdd.style.display = 'inline';
	
	expensesItems.forEach(function(item, index){
		if(index !== 0){
			item.remove();
		}
	});
	btnPlusExpensesAdd.style.display = 'inline';

	btnPlusIncomeAdd.disabled = false;
	btnPlusExpensesAdd.disabled = false;
	depositCheckmark.disabled = false;
	canсelBtn.style.display = 'none';
	startBtn.style.display = 'inline';
	this.depositHandler();
	// depositBank.style.display = 'none';
	// depositAmount.style.display = 'none';
	// depositPercent.style.display = 'none';
	
};
///////////////////////////////////////////----Проверки ввода----///////////////////////////////////////////////////
AppData.prototype.checkBadgetInput = function(){
	if(salaryAmount.value === '' || !isNumber(salaryAmount.value)){
		alert('Ошибка, поле "Месячный доход" должно быть заполнено и принимает только числа!');
		startBtn.disabled = true;
		return (salaryAmount.value = '');
	} else {
		startBtn.disabled = false;
		return;
	}
};
AppData.prototype.checkNumberInput = function(element){
	element.addEventListener('input', function () {
		if (!isNumber(element.value)) {
			alert('Ошибка, поле "Cумма" принимает только числа!');
			return (element.value = '');
		} else {
			startBtn.disabled = false;
			return;
		}
	});
};
AppData.prototype.checkTitlesInput = function(element){
	element.addEventListener('input', function () {
		if (!reText.test(element.value)) {
			alert('Ошибка, поле "Наименование" принимает только кириллицу, пробелы и запятые!');
			return (element.value = '');
		} else {
			// В реальном времени отсекает больше одного пробела 
			element.value = element.value.replace(/ +/g, ' ');
		}
	});
};
AppData.prototype.checkPecentInput = function(element){
	element.addEventListener('input', function () {
		if (!isNumber(element.value) || element.value < 1 || element.value > 100) {
			alert('Ошибка, поле "Процент" принимает только числа в диапазоне от 1 до 100!');
			return (element.value = '');
		} else {
			startBtn.disabled = false;
			return;
		}
	});
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////
AppData.prototype.showResult = function(){
	const _this = this;
	budgetMonthValue.value = this.budgetMonth;
	budgetDayValue.value = this.budgetDay;
	expensesMonthValue.value = this.expensesMonth;
	additionalExpensesValue.value = this.addExpenses.join(', ');
	additionalIncomeValue.value = this.addIncome.join(', ');
	targetMonthValue.value = this.getTargetMonth();
	incomePeriodValue.value = this.calcPeriod();
	periodSelect.oninput = function(){
		incomePeriodValue.value = _this.calcPeriod();
	};
};
AppData.prototype.addExpensesBlock = function(){
	let cloneExpensesItem = expensesItems[0].cloneNode(true);
	Array.from(cloneExpensesItem.children).forEach((el) => {
		el.value = '';
	});
	expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnPlusExpensesAdd);
	expensesItems = document.querySelectorAll('.expenses-items');

	// Добавление проверки на добавленную строку
	let item = expensesItems[expensesItems.length-1];
	const itemIncome = item.querySelector('.expenses-title');
	const cashIncome = item.querySelector('.expenses-amount');
	this.checkNumberInput(cashIncome);
	this.checkTitlesInput(itemIncome);
	if(expensesItems.length === 3){
		btnPlusExpensesAdd.style.display = 'none';
	}
};
AppData.prototype.getExpenses = function(){
	expensesItems.forEach((item) => {
		const itemExpenses = item.querySelector('.expenses-title').value;
		const cashExpenses = item.querySelector('.expenses-amount').value;
		if(itemExpenses !== ''){
			this.expenses[itemExpenses] = +cashExpenses;
		}
	});
};
AppData.prototype.addIncomeBlock = function(){
	let cloneIncomeItems = incomeItems[0].cloneNode(true);
	Array.from(cloneIncomeItems.children).forEach((el) => {
		el.value = '';
	});
	incomeItems[0].parentNode.insertBefore(cloneIncomeItems, btnPlusIncomeAdd);
	incomeItems = document.querySelectorAll('.income-items');

	// Добавление проверки на добавленную строку
	let item = incomeItems[incomeItems.length-1];
	const itemIncome = item.querySelector('.income-title');
	const cashIncome = item.querySelector('.income-amount');
	this.checkNumberInput(cashIncome);
	this.checkTitlesInput(itemIncome);
	
	if(incomeItems.length === 3){
		btnPlusIncomeAdd.style.display = 'none';
	}
};
AppData.prototype.getIncome = function(){
	incomeItems.forEach((item) => {
		const itemIncome = item.querySelector('.income-title').value;
		const cashIncome = item.querySelector('.income-amount').value;
		if(itemIncome !== ''){
			this.income[itemIncome] = +cashIncome;
		}
	});
};
AppData.prototype.getAddExpenses = function(){
	let addExpenses = additionalExpensesItem.value.split(',');
	addExpenses.forEach((item) => {
		item = item.trim();
		if (item !== ''){
			this.addExpenses.push(item);
		} 
	});
};
AppData.prototype.getAddIncome = function(){
	additionalIncomeItem.forEach((item) => {
		let itemValue = item.value.trim();
		if (itemValue !== ''){
			this.addIncome.push(itemValue);
		}
	});
};
AppData.prototype.getExpensesMonth = function(){
	let sum = 0;
	for (let key in this.expenses){
		sum += this.expenses[key];
	}
	return sum;
};
AppData.prototype.getIncomeMonth = function(){
	let sum = 0;
	for (let key in this.income){
		sum += this.income[key];
	}
	return sum;
};
AppData.prototype.getBudget = function(){
	const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
	this.expensesMonth = this.getExpensesMonth();
	this.incomeMonth = this.getIncomeMonth();
	this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
	this.budgetDay = Math.floor(this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function(){
	return Math.ceil(+targetAmount.value / this.budgetMonth);
};
AppData.prototype.calcPeriod = function(){
	return this.budgetMonth * periodSelect.value;
};
AppData.prototype.getPeriodAmount = function(event){
	periodAmount.textContent = event.target.value;
};
AppData.prototype.getInfoDeposit = function(){
	if (this.deposit){
		this.percentDeposit = depositPercent.value;
		this.moneyDeposit = depositAmount.value;
	}
};
AppData.prototype.changePercent = function(){
	const valueSelect = this.value;
	if (valueSelect === 'other') {
		depositPercent.style.display = 'inline-block';
	} else {
		depositPercent.value = valueSelect;
		depositPercent.style.display = 'none';
	}
};
AppData.prototype.depositHandler = function(){
	if (depositCheck.checked){
		startBtn.disabled = true;
		depositPercent.style.display = 'none';
		depositBank.style.display = 'inline-block';
		depositAmount.style.display = 'inline-block';
		this.deposit = true;
		depositBank.addEventListener('change', this.changePercent);
	} else {
		startBtn.disabled = false;
		depositBank.style.display = 'none';
		depositAmount.style.display = 'none';
		depositPercent.style.display = 'none';
		depositBank.value = '';
		depositAmount.value = '';
		depositPercent.value = '';
		this.deposit = false;
		depositBank.removeEventListener('change', this.changePercent);
	}
};
AppData.prototype.eventListeners = function(){
	
	salaryAmount.addEventListener('input', this.checkBadgetInput);

	this.checkNumberInput(depositAmount);
	this.checkPecentInput(depositPercent);

	this.checkNumberInput(incomeAmount);
	this.checkTitlesInput(incomeTitle[1]);
	this.checkNumberInput(expensesAmount);
	this.checkTitlesInput(expensesTitle[1]);
	this.checkTitlesInput(additionalIncomeItem[0]);
	this.checkTitlesInput(additionalIncomeItem[1]);
	this.checkTitlesInput(additionalExpensesItem);
	this.checkNumberInput(targetAmount);

	startBtn.addEventListener('click', this.start.bind(this));
	canсelBtn.addEventListener('click', this.reset.bind(this));

	btnPlusExpensesAdd.addEventListener('click', this.addExpensesBlock.bind(this));
	btnPlusIncomeAdd.addEventListener('click', this.addIncomeBlock.bind(this));
	periodSelect.addEventListener('input', this.getPeriodAmount);
	depositCheck.addEventListener('change', this.depositHandler.bind(this));
};

const appData = new AppData();

startBtn.disabled = true;
appData.eventListeners();
 

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
