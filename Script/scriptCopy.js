'use strict';

let startBtn = document.getElementById('start'),
	btnPlusIncomeAdd = document.getElementsByTagName('button')[0],
	btnPlusExpensesAdd = document.getElementsByTagName('button')[1],
	depositCheckmark = document.querySelector('.deposit-checkmark'),
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
	incomeItems = document.querySelectorAll('.income-items'),
	incomeTitle = document.querySelectorAll('.income-title'),
	incomeAmount = document.querySelector('.income-amount'),
	expenses = document.querySelector('.expenses'),
	expensesItems = document.querySelectorAll('.expenses-items'),
	expensesTitle = document.querySelectorAll('.expenses-title'),
	expensesAmount = document.querySelector('.expenses-amount'),
	additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	depositAmount = document.querySelector('.deposit-amount'),
	depositPercent = document.querySelector('.deposit-percent'),
	targetAmount = document.querySelector('.target-amount'),
	periodSelect = document.querySelector('.period-select'),
	periodAmount = document.querySelector('.period-amount'),
	canсelBtn = document.getElementById('cancel'),
	control = document.querySelector('.control');
	

	const reText = /^[?!,.а-яА-ЯёЁ\s]+$/;
const isNumber = function(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
};
	
const appData = {
	budget: 0,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	incomeMonth: 0,
	income: {},
	addIncome: [],
	expenses: {},
	addExpenses: [],
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	start: function(){	

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

		const allInput = document.querySelectorAll('input');
		allInput.forEach(function(item){
			item.disabled = true;
		});
		btnPlusIncomeAdd.disabled = true;
		btnPlusExpensesAdd.disabled = true;
		depositCheckmark.disabled = true;
		periodSelect.disabled = false;

	},
	reset: function(){
		
		const incomeItems = document.querySelectorAll('.income-items'),
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

		const allInput = document.querySelectorAll('input');
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

		btnPlusIncomeAdd.disabled = false;
		btnPlusExpensesAdd.disabled = false;
		depositCheckmark.disabled = false;
		canсelBtn.style.display = 'none';
	},
	///////////////////////////////////////////----Проверки ввода----///////////////////////////////////////////////////
	checkBadgetInput: function(){
		if(salaryAmount.value === '' || !isNumber(salaryAmount.value)){
			alert('Ошибка, поле "Месячный доход" должно быть заполнено и принимает только числа!');
			startBtn.disabled = true;
			return (salaryAmount.value = '');
		}
		else {
			startBtn.disabled = false;
			return;
		}
	},
	checkNumberInput: function(element){
		element.addEventListener('input', function (event) {
			if (!isNumber(element.value)) {
				alert('Ошибка, поле "Cумма" принимает только числа!');
				return (element.value = '');
			}
		});
	},
	checkTitlesInput: function(element){
		element.addEventListener('input', function (event) {
			if (!reText.test(element.value)) {
				alert('Ошибка, поле "Наименование" принимает только кириллицу, пробелы и запятые!');
				return (element.value = '');
			} else {
				// В реальном времени отсекает больше одного пробела 
				element.value = element.value.replace(/ +/g, ' ');
			}
		});
	},
	/////////////////////////////////////////////////////////////////////////////////////////////////////////
	showResult: function(){
		budgetMonthValue.value = this.budgetMonth;
		budgetDayValue.value = this.budgetDay;
		expensesMonthValue.value = this.expensesMonth;
		additionalExpensesValue.value = this.addExpenses.join(', ');
		additionalIncomeValue.value = this.addIncome.join(', ');
		targetMonthValue.value = this.getTargetMonth();
		incomePeriodValue.value = this.calcPeriod();
		periodSelect.oninput = function(){
			incomePeriodValue.value = appData.calcPeriod();
		};
	},
	addExpensesBlock: function(){
		let cloneExpensesItem = expensesItems[0].cloneNode(true);
		Array.from(cloneExpensesItem.children).forEach((el) => {
			el.value = '';
		});
		expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnPlusExpensesAdd);
		expensesItems = document.querySelectorAll('.expenses-items');

		// Добавление проверки на добавленную строку
		let item = expensesItems[expensesItems.length-1];
		let itemIncome = item.querySelector('.expenses-title');
		let cashIncome = item.querySelector('.expenses-amount');
		this.checkNumberInput(cashIncome);
		this.checkTitlesInput(itemIncome);
		if(expensesItems.length === 3){
			btnPlusExpensesAdd.style.display = 'none';
		}
	},
	getExpenses: function(){
		expensesItems.forEach(function(item){
			let itemExpenses = item.querySelector('.expenses-title').value;
			let cashExpenses = item.querySelector('.expenses-amount').value;
			if(itemExpenses !== ''){
				this.expenses[itemExpenses] = +cashExpenses;
			}
		}, this);
	},
	addIncomeBlock: function(){
		let cloneIncomeItems = incomeItems[0].cloneNode(true);
		Array.from(cloneIncomeItems.children).forEach((el) => {
			el.value = '';
		});
		incomeItems[0].parentNode.insertBefore(cloneIncomeItems, btnPlusIncomeAdd);
		incomeItems = document.querySelectorAll('.income-items');

		// Добавление проверки на добавленную строку
		let item = incomeItems[incomeItems.length-1];
		let itemIncome = item.querySelector('.income-title');
		let cashIncome = item.querySelector('.income-amount');
		this.checkNumberInput(cashIncome);
		this.checkTitlesInput(itemIncome);
		
		if(incomeItems.length === 3){
			btnPlusIncomeAdd.style.display = 'none';
		}
	},
	getIncome: function(){
		incomeItems.forEach(function(item){
			let itemIncome = item.querySelector('.income-title').value;
			let cashIncome = item.querySelector('.income-amount').value;
			if(itemIncome !== ''){
				this.income[itemIncome] = +cashIncome;
			}
		}, this);
	},
	getAddExpenses: function(){
		let addExpenses = additionalExpensesItem.value.split(',');
		addExpenses.forEach(function(item){
			item = item.trim();
			if (item !== ''){
				this.addExpenses.push(item);
			} 
		}, this);
	},
	getAddIncome: function(){
		additionalIncomeItem.forEach(function(item){
			let itemValue = item.value.trim();
			if (itemValue !== ''){
				this.addIncome.push(itemValue);
			}
		}, this);
	},
	// getStatusIncome: function(){
	// 	if (appData.budgetDay >= 1200) {
	// 		return ('У вас высокий уровень дохода');
	// 	} else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
	// 		return ('У вас средний уровень дохода');
	// 	} else if (appData.budgetDay >= 0 && appData.budgetDay < 600){
	// 		return ('К сожалению у вас уровень дохода ниже среднего');
	// 	} else if (appData.budgetDay < 0){
	// 		return ('Что то пошло не так!');
	// 	}
	// },
	getExpensesMonth: function(){
		let sum = 0;
		for (let key in this.expenses){
			sum += this.expenses[key];
		}
		return sum;
	},
	getIncomeMonth: function(){
		let sum = 0;
		for (let key in this.income){
			sum += this.income[key];
		}
		return sum;
	},
	getBudget: function(){
		this.expensesMonth = this.getExpensesMonth();
		this.incomeMonth = this.getIncomeMonth();
		this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
		this.budgetDay = Math.floor(this.budgetMonth / 30);
	},
	getTargetMonth: function(){
		return Math.ceil(+targetAmount.value / this.budgetMonth);
	},
	getInfoDeposit: function(){
		if (this.deposit){
			do {
				this.percentDeposit = prompt('Какой годовой процент?', 10);
			} while (!isNumber(this.percentDeposit));
			do {
				this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
			} while (!isNumber(this.moneyDeposit));
		}
	},
	calcPeriod: function(){
		return this.budgetMonth * periodSelect.value;
	},
	getPeriodAmount: function(event){
		periodAmount.textContent = event.target.value;
	},
	
};

startBtn.disabled = true;
 
salaryAmount.addEventListener('input', appData.checkBadgetInput);

appData.checkNumberInput(incomeAmount);
appData.checkTitlesInput(incomeTitle[1]);
appData.checkNumberInput(expensesAmount);
appData.checkTitlesInput(expensesTitle[1]);
appData.checkTitlesInput(additionalIncomeItem[0]);
appData.checkTitlesInput(additionalIncomeItem[1]);
appData.checkTitlesInput(additionalExpensesItem);
appData.checkNumberInput(targetAmount);

startBtn.addEventListener('click', appData.start.bind(appData));
canсelBtn.addEventListener('click', appData.reset.bind(appData));

btnPlusExpensesAdd.addEventListener('click', appData.addExpensesBlock.bind(appData));
btnPlusIncomeAdd.addEventListener('click', appData.addIncomeBlock.bind(appData));
periodSelect.addEventListener('input', appData.getPeriodAmount);

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
