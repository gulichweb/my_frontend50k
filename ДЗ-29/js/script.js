
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


var elements = document.getElementsByClassName("tool_tip");

var myFunction = function() {
    var attribute = this.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("reviews");
    alert(attribute[0].innerText);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}




