'use strict';

let money = 35000, 
income = 'Бригада', 
addExpenses = 'Налоги, Аренда, Питание, Досуг, Связь, Подарки, Транспорт', 
deposit = true, 
mission = 80000, 
period = 8,
budgetDay = money/30,
compulsoryExpenses1, compulsoryExpenses2, 
cost1, cost2,
budgetMonth;

//Запрос данных от пользователя
money = Number(prompt('Введите ваш месячный доход:', '45000'));
addExpenses = prompt('Перечислите через запятую возможные расходы за расчитываемый период:', 'Стоматолог, Курсы, Еда');
deposit = confirm('Есть ли у вас депозит в банке?');
compulsoryExpenses1 = prompt('Введите первую обязательную статью расходов:', 'Аренда');
cost1 = Number(prompt('Введите предполагаемую стоимость:', '17000'));
compulsoryExpenses2 = prompt('Введите вторую обязательную статью расходов:', 'Налоги');
cost2 = Number(prompt('Введите предполагаемую стоимость:', '3000'));

//Обработка данных
budgetMonth = money - (cost1 + cost2);
period = Math.ceil(mission / budgetMonth);
budgetDay = Math.floor(budgetMonth / 30);

//Вывод результатов в консоль
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ', period, ' месяцев');
console.log('Цель заработать ', mission, ' крон');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
console.log('Бюджет на день: ', budgetDay);
console.log('Бюджет на месяц: ', budgetMonth);

//Условия вывода
if (budgetDay > 1200 || budgetDay === 1200) {
    console.log('У вас высокий уровень дохода');
} 
else if (budgetDay > 600 || budgetDay === 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
}
else if (budgetDay > 0 || budgetDay === 0 && budgetDay < 600){
    console.log('К сожалению у вас уровень дохода ниже среднего');
}
else if (budgetDay < 0){
    console.log('Что то пошло не так!');
}


