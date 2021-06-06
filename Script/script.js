'use strict';

let money, 
income = 'Бригада', 
addExpenses, 
deposit, 
mission = 80000, 
period,
budgetDay,
compulsoryExpenses1, compulsoryExpenses2, 
cost1, cost2,
accumulatedMonth;

//Функции
let showTypeOf = function(data){
    console.log(data, typeof(data));
};

let getStatusIncome = function(){
    if (budgetDay > 1200 || budgetDay === 1200) {
        return ('У вас высокий уровень дохода');
    } 
    else if (budgetDay > 600 || budgetDay === 600 && budgetDay < 1200) {
        return ('У вас средний уровень дохода');
    }
    else if (budgetDay > 0 || budgetDay === 0 && budgetDay < 600){
        return ('К сожалению у вас уровень дохода ниже среднего');
    }
    else if (budgetDay < 0){
        return ('Что то пошло не так!');
    }
};

let getAccumulatedMonth = function(a, b, c, callback){
    return a - callback(b, c);
};

let getExpensesMonth = function(b, c){
    return b + c;
};

let getTargetMonth = function(a, b){
    return Math.ceil(a / b);
};

//Запрос данных от пользователя
money = Number(prompt('Введите ваш месячный доход:', '45000'));
addExpenses = prompt('Перечислите через запятую возможные расходы за расчитываемый период:', 'Стоматолог, Курсы, Еда');
deposit = confirm('Есть ли у вас депозит в банке?');
compulsoryExpenses1 = prompt('Введите первую обязательную статью расходов:', 'Аренда');
cost1 = Number(prompt('Введите предполагаемую стоимость:', '17000'));
compulsoryExpenses2 = prompt('Введите вторую обязательную статью расходов:', 'Налоги');
cost2 = Number(prompt('Введите предполагаемую стоимость:', '3000'));

//Обработка данных
accumulatedMonth = getAccumulatedMonth(money, cost1, cost2, getExpensesMonth);
budgetDay = Math.floor(accumulatedMonth / 30);

//Вывод результатов
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.length);
console.log('Период равен ', getTargetMonth(mission, accumulatedMonth), ' месяцев');
console.log('Цель заработать ', mission, ' крон');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
console.log('Бюджет на день: ', budgetDay);
console.log('Бюджет на месяц: ', accumulatedMonth);
console.log(getStatusIncome());

