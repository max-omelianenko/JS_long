let money, income, addExpenses, deposit, mission, period;

money = 35000; 
income = 'фотосессия'; 
addExpenses = 'Налоги, Аренда, Питание, Досуг, Связь, Подарки, Транспорт'; 
deposit = true; 
mission = 80000; 
period = 8;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);
console.log('Период равен ', period, ' месяцев');
console.log('Цель заработать ', mission, ' крон');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
let budgetDay = money/30;
console.log('budgetDay: ', budgetDay);




