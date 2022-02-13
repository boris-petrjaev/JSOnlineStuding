"use strict";

//alert("Hello")

// const result = confirm("Are u here?");
// console.log(result)

//вывод даст сроку
// const answer = prompt("Вам есть 18?", "");
// добавляем + к prompt и вывод даст число
// const answer = +prompt("Вам есть 18?", "");
// console.log(typeof(answer)); 
// вся информация которая приходит от юзера, будет строкой

const answers = [];
answers[0] = prompt('what is ur name?', '');
answers[1] = prompt('what is ur surname?', '');
answers[2] = prompt('how old are u?', '');

console.log(typeof(answers));
console.log(typeof(null));