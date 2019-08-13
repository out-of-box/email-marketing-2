/* 
ВВОДНЫЕ:
B3 - Текущий размер базы
B4 - Трафик на сайте в месяц
B5 - Конверсия на покупку на сайте
B6 - Средний чек

ФОРМУЛА
B3*4*20%*30%*B5*B6+(10%*B4)

КОНСТАНТЫ
4, 20%, 30%, 10%,
*/

// Vars
// B3 - Текущий размер базы 
var inputNum1 = document.querySelector('#calcB3');

// B4 - Трафик на сайте в месяц
var inputNum2 = document.querySelector('#calcB4');

// B5 - Конверсия на покупку на сайте
var inputNum3 = document.querySelector('#calcB5');

// B6 - Средний чек
var inputNum4 = document.querySelector('#calcB6');


var templateOutput = document.querySelector('#calc-output');


// // Формула
var revenue = function (x1, x2, x3, x4) {
    // Const
    const C1 = 0.24;
    const C2 = 0.005;

    var result = x1 * C1 * (x3 / 100) * x4 + (C2 * x2 * x3 * x4);
    return Math.floor((result));
}

var setResult = function () {
    var param1 = inputNum1.value;
    var param2 = inputNum2.value;
    var param3 = inputNum3.value;
    var param4 = inputNum4.value;

    templateOutput.innerText = revenue(param1, param2, param3, param4).toLocaleString('ru');
    if (templateOutput.innerText > 99999999999) {
        templateOutput.innerText = null;
        templateOutput.innerText = 'Упс, кажется что-то не так'
    }
}

inputNum1.addEventListener('input', setResult);
inputNum2.addEventListener('input', setResult);
inputNum3.addEventListener('input', setResult);
inputNum4.addEventListener('input', setResult);