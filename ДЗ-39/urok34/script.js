
"Use strict";


// let myname = { 
//     myname: "Guli",
//     age: 30,
//     date: 2011,
//     address: "6 micro"
//  };
 
//  console.log (myname.address + " Name:" + myname.myname + " date:" + myname.date);

//  /*массивы */

//  let brr = ["книга", "машина", "ручка"];

//  console.log(brr[2]);

////////////////////////////

// "Use strict";

// // строгий режим для обработки данных

// let number = 1;

// Данные которые без скопок = числа
// данные которые указыватеся в скопки называютя строки "string"

// console.log(number);

// let text = "Gulnara";

// console.log(text);

// Если текст + цифра = это будет означать склеивания
// + Это операция склеисания и сложения


// true = истина
// false = лож


// Что такое массив? 
//Массив: это коробка внутри есть еще отдельные коробки для храниенеия данных

// Создание объктов начинатеся с фигурных скобок

// let obj = {
//     name: "Gilnara",
//     // name это название первого объеекта
//     // : это разделение между объектом и его значением
//     // " внутри ковычек указывается значние объекта "
//     // конец строки заканчиавние на, 
//     age: 11,
//     location: "6 micro"
// };

// Перый вариант получения данных объекта
// Это конманда для вывода данных на экран
// obj - это перемена
// вотрой вариант . это операция обращиеня к объекту
// obj - это перемена
// [] указания позиции и уточнения объекта 
// в конце [] скобок запятые не укзаываются


// console.log("Name:" + obj.name + obj.age + "location:" + obj.location);

// console.log(obj ["name"]);

// Масивы созадется с помощью кватратных скобок []
// В Массивах используется сразу значения
// для получения необходимоа использовать порядковый номер
// let arr = ["айфон", 'кино', "книга"];


// console.log(arr.айфон); // undefined не аонятно и не определено

// console.log(arr[1]);

// let person = {
//      name: "Jhon",
//      age: 22,
//      year: 1999,
//      location: "USA",
//      job: "programmist"

     
// };

// console.log("Name:" + person.name + "Age:" + person.age + "year:" + person.year + "location:" + person.location + "job:" + person.programmist);


// // Базовые функции . Взаимодействие с пользователям

// console.log("Сщщбщение"); // Данная команда нужна для того чтобы вывести сообщение в console.
//                               // Модальное окно
// alert("Всем привет!")

// var years = prompt('Сколько вам лет?', 100);
// Пропст состоит из 2 частей
// 1 часть  вопрос
// 2 часть ответ по умолчанию
// Promt запоминает веденные данные для дальшнейего обработки

// alert('Вам ' + years + ' лет!');

// var years = prompt('Сколько вам лет?', "");

// alert('Вам ' + years + ' лет!');

// var msg;
// if(result == "4") {
//      msg = "верно";
// } else {
//      msg = "неверно";
// }

// alert(msg);

// confirm("Результать сложения 2+2 будет равен 4?");




// if (2==2){
//      alert("ответь правильный");
//      }else{
//          alert("ответ не правлиьный");
//      }



// Урок 30 Функиции

// function mytest(param) {
//    var number = 10;
//    var res;
//     res = number + param;
//     alert(res);
// }
 
// mytest(1);

// function bima(mister, mister1, bima2){
//     var number = 25;
//     var bi;
//     bi = number + mister + mister1 + bima2;
//     alert(bi);
// }

// bima(20, 25, 40);

// ОБЪЕКТЫ

// const arr = {
//     name: "Olga",
//     age: 30,
//     param: {
//         nat: "Russian",
//         lang: "Engl, Russ"
// }
// };

// console.log(arr);

//Получить например только один елемент


// const arr = {
//     name: "Olga",
//     age: 30,
//     param: {
//         nat: "Russian",
//         lang: "Engl, Russ"
// }
// };

// console.log(arr['name']); // Или можно через точку console.log(arr.name);

// 2) вариант


// const arr = {
//     name: "Olga",
//     age: 30,
//     param: {
//         nat: "Russian",
//         lang: "Engl, Russ"
// }
// };

// console.log(arr.name);

// delete arr.name;

// console.log(arr);

// 1) вариант выыодв
// for ( let key in arr) {
//     console.log(key);

// }

// 2) вариант вывода

// for ( let key in arr) {
//     console.log(arr[key]);

// }

// 3) как получить все ключи
// for (let key in arr) {
//     if (typeof(arr[key]) === 'object') {
//         for(let key2 in arr[key]){
//             console.log(arr[key][key2]);
//         }
//     } else {
//         console.log(arr[key]);
//     }
// }


//  вычиления площадь и окружности

// function result (radius){
//     var circle = {
//         square : function (){
//             return Math.PI * Math.pow(radius, 2)
//         },
//         length : function (){
//             return Math.PI * 2 * radius;
//         }
//     };
//     return [circle.square(),circle.length()];
// }
 

// 1) вычисления длина и окружности

// const r = +prompt('Введите число');
// const circleLength = 2 * Math.PI * r;
// console.log(Math.round(circleLength));

// const circleSquare = Math.PI * Math.pow(r, 2);

//    alert(Math.round(circleSquare));

// Урок 31

// Что аткое функция

// function  name1(number) {
//   let num = number;
//   alert(num);

// }

// let num = 22;
// let num2 = 21;
// let num3 = 23;

// alert(num);
// alert(num2);
// alert(num3);

// alert(name1(200));
// alert(name1(205));

// function  name1(number) {
//   let num = number;
//   alert(num);

// }

// name1(400);
// name1(700);

// let num = 200;
// alert(num);


// function name3(){
//   let num = 11;
//   alert(num);
// }
// name3 ();


////


// let num = 200;

// function name3(num){
//   let per_const = 100;
//   let result;

//   result = per_const + num;
//   alert(result);
// }
// name3 (200);


// urok 34  Массив и псевдомассивы

// const arr2 = [1, 2, 3, 4, 5];
 ///     интексы массива

// console.log(arr2);


// const arr2 = [1, 2, 3, 4, 5];

// console.log(arr2.pop());  // выдыодит послдений елемент



// const arr2 = [1, 2, 3, 4, 5];

// console.log(arr2.shift());  // выводит  первый елемент

// поллный вариант

const arr2 = [ 1,2,3,4,5];
console.log(arr2);
// console.log(arr2.pop());
// console.log(arr2.shift()); 
// console.log(arr2);
// console.log(arr2[2]);
//   arr2.push(10);
//   arr2.push(19);
// результать [ 2, 3, 4, 10 ]
//  интексы остаются те 
// arr2.unshift(18);
// console.log(arr2);
// console.log(arr2[2]);
// arr2.delete(0);
// arr2.delete(1);
// console.log(arr2);
// console.log(arr2.length);
// console.log(arr2);

// arr2[50] = 20;

// console.log(arr2);

// for(let i = 0; i<arr2.length; i++) {
//     console.log(arr2[i]);
// }


// for (let value of arr2) {
//     console.log(value);
// }

// arr2.forEach(function(item, index, arr2) {
//     console.log(index);
// });


// arr2.forEach(function(item, index, arr2) {
//     console.log("индек:"+index+"значение:"+item+"из массива = "+arr2);
// });

//Преобразуем псевдомассив в массив


// let object = {0: 1, 1: 2, 2: 3, length: 3}
// console.log( object ); 
// let array = [];

// // Преобразуем псевдомассив в массив
// for (var i = 0; i < object.length; i++) {
//    array.push(object[i]);
// }

// console.log( array ); // [1, 2, 3]

  ////// 2) пепеконвертировать в сам массив

//   let object = {0: 1, 1: 2, 2: 3, length: 3}
//   console.log( object ); 
//   let array = [];
  
//   // Преобразуем псевдомассив в массив
//   for (var i = 0; i < object.length; i++) {
//      array.push(object[i]);
//      console.log( object[i] ); // [1, 2, 3]
//   }
  
//   console.log( array ); // [1, 2, 3]
  


// дз 34
let object = {0: 'first', 1: 'second', 2: 'third', length: 3}
  console.log( object ); 
  let array = [];
  
  for (var i = 0; i < object.length; i++) {
     array.push(object[i]);
     console.log( object[i] ); 
  }
  
  console.log( array );