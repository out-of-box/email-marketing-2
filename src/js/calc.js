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

var calcButton = document.querySelector('#js-result');
var goToFormButton = document.querySelector('#toFormJs-2');

var templateOutput = document.querySelector('#calc-output');
var roiOutput = document.querySelector('#calc-roi-output');
var calcSumPanel = document.querySelector('#calc-summ');
var calcWelcomePanel = document.querySelector('#calc-welcome');

import { CountUp } from 'countup.js';

var minusButtons = [
    document.querySelector('#minusB3'),
    document.querySelector('#minusB4'),
    document.querySelector('#minusB5'),
    document.querySelector('#minusB6'),
]

minusButtons.forEach(function (el, index) {
    el.addEventListener('click', function (event) {
        event.preventDefault();
        var decrement = index === 2 ? 1 : 1000;
        var id = '#calcB' + (index + 3);
        var calc = document.querySelector(id);
        var value = calc.value === "" ? 0 : parseInt(calc.value);
        value -= decrement / 20;
        if (value < 0) { value = 0 };
        calc.value = value;
    })
})
var plusButtons = [
    document.querySelector('#plusB3'),
    document.querySelector('#plusB4'),
    document.querySelector('#plusB5'),
    document.querySelector('#plusB6'),
]

plusButtons.forEach(function (el, index) {
    el.addEventListener('click', function (event) {
        event.preventDefault();
        var increment = index === 2 ? 20 : 1000;
        var id = '#calcB' + (index + 3);
        var calc = document.querySelector(id);

        var value = calc.value === "" ? 0 : parseInt(calc.value);
        index === 2 ? value = value * 20 : "";
        value = value + increment / 20;
        if (value < 0) { value = 0 };
        calc.value = index === 2 ? value / 20 : value;
    })
})


// // Формула
var revenue = function (x1, x2, x3, x4) {
    // Const
    const C1 = 0.24;
    const C2 = 0.005;

    var result = x1 * C1 * (x3 / 100) * x4 + (C2 * x2 * x3 * x4);

    return Math.floor((result));
}
var roi = function (x1, x2, x3, x4) {
    const C1 = 0.24;
    const C2 = 0.005;
    const C3 = 150000;

    var result = x1 * C1 * (x3 / 100) * x4 + (C2 * x2 * x3 * x4);
    var roi = (result - C3) * 100 / C3;

    if (roi > 999999999) {
        roi = roi / 1000000000
        roi = Math.floor((roi)).toLocaleString('ru') + '&nbsp;<span class="calc__sum-value--small">млрд</span>&nbsp;'
    } else {
        roi = roi > 0 ? Math.floor((roi)).toLocaleString('ru') : 0;
    }
    return roi
}
function setResult() {
    var param1 = inputNum1.value;
    var param2 = inputNum2.value;
    var param3 = inputNum3.value;
    var param4 = inputNum4.value;
    var currentRevenue = revenue(param1, param2, param3, param4)
    var suffix = currentRevenue > 999999999 ? '&nbsp;<span class="calc__sum-value--small">млрд</span>' : ""
    var options = {
        separator: ' ',
        suffix: suffix
    };
    console.log(parseInt(currentRevenue));
    var demo = new CountUp('calc-output', currentRevenue, options);
    demo.start();
    window.setTimeout(function () { roiOutput.innerHTML = roi(param1, param2, param3, param4) }, 2000);
}
calcButton.addEventListener('click', function (event) {
    event.preventDefault();
    roiOutput.innerHTML = "0";
    goToFormButton.classList.contains('main-btn__wrapper--hidden') ? goToFormButton.classList.remove('main-btn__wrapper--hidden') : "";
    calcSumPanel.classList.contains('calc-form__wrapper--blur') ? calcSumPanel.classList.remove('calc-form__wrapper--blur') : "";
    !calcWelcomePanel.classList.contains('calc__col-2--hidden') ? calcWelcomePanel.classList.add('calc__col-2--hidden') : "";
    setResult()
});
/*
inputNum1.addEventListener('input', setResult);
inputNum2.addEventListener('input', setResult);
inputNum3.addEventListener('input', setResult);
inputNum4.addEventListener('input', setResult);
*/