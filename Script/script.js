'use strict';

let money = 35000, 
income = 'бригада', 
addExpenses = 'Налоги, Аренда, Питание, Досуг, Связь, Подарки, Транспорт', 
deposit = true, 
mission = 80000, 
period = 8,
budgetDay = money/30,
compulsoryExpenses1, compulsoryExpenses2, 
cost1, cost2,
budgetMonth;

//confirm();
//prompt();
money = Number(prompt('Введите ваш месячный доход:'));
addExpenses = prompt('Перечислите через запятую возможные расходы за расчитываемый период:');
deposit = confirm('Есть ли у вас депозит в банке?');
compulsoryExpenses1 = prompt('Введите первую обязательную статью расходов:');
cost1 = Number(prompt('Введите предполагаемую стоимость:'));
compulsoryExpenses2 = prompt('Введите вторую обязательную статью расходов:');
cost2 = Number(prompt('Введите предполагаемую стоимость:'));

budgetMonth = cost1 + cost2;





console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);
console.log('Период равен ', period, ' месяцев');
console.log('Цель заработать ', mission, ' крон');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
console.log('budgetDay: ', budgetDay);
console.log('budgetMonth: ', budgetMonth);



