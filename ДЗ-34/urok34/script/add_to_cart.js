/*циклы*/

// var arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function(item, i, arr) {
//   alert( i + ": " + item + " (массив:" + arr + ")" );
// });


// /*Филтр*/


// var arr = [1, -1, 2, -2, 3];

// var positiveArr = arr.filter(function(number) {
//   return number > 0;
// });

// alert( positiveArr ); // 1,2,3


// /*Длина*/

// var names = ['HTML', 'CSS', 'JavaScript'];

// var nameLengths = names.map(function(name) {
//   return name.length;
//   //length длина текста
// });

// // получили массив с длинами
// alert( nameLengths ); // 4,3,10



// every some

// var arr = [1, -1, 2, -2, 3];

// function isPositive(number) {
//   return number > 0;
// }

// alert( arr.every(isPositive) ); // false, не все положительные
// alert( arr.some(isPositive) ); // true, есть хоть одно положительное

// Складывание

// var arr = [1, 12, 23, 43, 5]

// // для каждого элемента массива запустить функцию,
// // промежуточный результат передавать первым аргументом далее
// var result = arr.reduce(function(sum, current) {
//   return sum + current;
// }, 0);

// alert( result ); // 84


// let title = document.getElementsByClassName("title");
// // let title = document.getElementById("title");

// console.log(title[0].innerText);
// console.log(title[2].innerText);
// console.log(title[3].innerText);
// console.log(title[4].innerText);
// console.log(title[5].innerText);
// console.log(title[6].innerText);


// 1) вариант
// let title = document.querySelectorAll(".body_product > .title");
// console.log(title);

// 2) вариант

// let title = document.querySelectorAll(".body_product > .title");
// console.log(title); // перебор параметры

           //  вариант выбор номер 1

// console.log(title[0]);
// console.log(title[1]);
// console.log(title[2]);
// console.log(title[3]);
// console.log(title[4]);


// let src = document.querySelectorAll(".product > .img");
// console.log(src[0]);
// console.log(src[1]);
// console.log(src[2]);
// console.log(src[3]);
// console.log(src[4]);

// for (let text of title) {
//     console.log(text.innerText);
// }

var elements = document.getElementsByClassName("add_cart");

var myFunction = function() {
    var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".title");
    alert(attribute[0].innerText);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}