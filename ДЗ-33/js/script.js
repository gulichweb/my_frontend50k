
// "Use strict";

// let object = {
//     name: "Zac",
//     surname: "Miken",
//     age: 25,
//     date: 2020,
//     city: "Bishkek",
//     work: "programmer"

// };

// console.log(" Name: " + object.name +  " Surname: " + object.surname + " Age: " + object.age + " Date: " +  object.date + " city: " + object.city + " Work: " + object.work);



// /*массивы */

// let animals = ["Тигр", "Волк", "Слон", "Пантера", "Кенгуру"];
// console.log(animals[2]);


// /*переборы */

// let arr = ["Телефон", "Ноутбук", "Музыка", "Уроки"];
// console.log(arr.length);


// /*перебираемый объект */


// for (let char of "1 2 3 4" ) {

// console.log( char );

// }

// /*ДЗ 25 */


// /* 1) */

// var person = prompt('Введите имя:', '');

// alert('Ваше имя: ' + person + '');

// var person = prompt('Введите Фамилию:', '');

// alert('Ваше фамилия: ' + person + '');



// /* 2) */


// var number =  prompt('ведите два числа:', '' );

// alert (number + number );


// /* 3)* */



// var sum = prompt('Ведите два числа:', '');

// alert(sum * sum);


// список картинок


//     let src = document.querySelectorAll(".product > .img");
// console.log(src[0]);
// console.log(src[1]);
// console.log(src[2]);
// console.log(src[3]);
// console.log(src[4]);

// заголовки

// var elements = document.getElementsByClassName("add_cart");

// var myFunction = function() {
//     var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".title");
//     alert(attribute[0].innerText);
// };

// for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }
    

// цена
// var elements = document.getElementsByClassName("picture");

// var myFunction = function() {
//     var attribute = this.parentNode.parentNode.querySelectorAll("del");
//     alert(attribute[0].innerText);
// };

// for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }

// // цена

// var elements = document.getElementsByClassName("card");

// var myFunction = function() {
//     var attribute = this.parentNode.parentNode.parentNode.querySelectorAll("del");
//     alert(attribute[0].innerText);
// };

// for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }


// // цена картинки
// var elements = document.getElementsByClassName("desc");

// var myFunction = function() {
//     var attribute = this.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("price");
//     alert(attribute[0].innerText);
// };

// for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }

// описание

// var elements = document.getElementsByClassName("tool_tip");

// var myFunction = function() {
//     var attribute = this.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("reviews");
//     alert(attribute[0].innerText);
// };

// for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }

//Пример просто

// function BigUser() {

//     this.name = "John";
  
//     return { name: "Godzilla" };  // <-- возвращает этот объект
//   }
  
//   alert( new BigUser().name );  // Godzilla, получили этот объект

// var square = function(number) { return number * number; };
// var x = square(4); // x получает значение 16

// console.log(x);

// ДЗ-31

// 1) вычисления длина и окружности

// const r = +prompt('Введите число');
// const circleLength = 2 * Math.PI * r;
// console.log(Math.round(circleLength));

// const circleSquare = Math.PI * Math.pow(r, 2);

//    alert(Math.round(circleSquare));


//    let n = 2;
// n += 5; // теперь n = 7 (работает как n = n + 5)
// n *= 2; // теперь n = 14 (работает как n = n * 2)

// alert( n ); // 14



// 2)  min a,b

// var a = 1, b = 3;
// var z = Math.min(a, b);

// alert(z);


// 1) возвдение в степень


// let a = prompt('Введи число')
// let c = prompt('Введи степень')
// let f
 
 
 
// for (let i = 0; i < 1; i++) {
//     f = a ** c
 
//     document.write('Выводить:' + f);
// }

// alert(f);


// // 1) вычисления длина и окружности

// const r = +prompt('Введите число');
// const circleLength = 2 * Math.PI * r;
// console.log(Math.round(circleLength));

// const circleSquare = Math.PI * Math.pow(r, 2);

//    alert(Math.round(circleSquare));

//2) треугольник

// var a=prompt("введи те число a");
// var b=prompt("введите число b");

// function ab(a,b){
// if(a!=''&&b!='')
// return a*b;
// else if(a!=''&&b=='')
// return a*a;
// else if(a==''&&b!='')
// return b*b; }

// alert(ab(a,b));

// ДЗ-32

//1)

// const x = prompt("");

// const num = x * 2 ;

// alert(num.toFixed(0.2));

//2)

const x = prompt("");

const num = x * 2 ;

alert(num.toFixed(0.3));









