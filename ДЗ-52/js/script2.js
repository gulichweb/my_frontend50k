
(function() {
    'use strict';

// const array = ["Яблоко", "Груши", "виноград", "Апельсин"];

// const result = array.filter(name => name.length < 7);

// console.log(result);


//   const array = ["Яблоко", "ГРУША", "виноград", "Апельсин"];
//   const result = array.map(item => item.toLowerCase());
//   console.log(result);

//   every/some

//   const array = ["Яблоко", "ГРУША", "виноград", "Апельсин", "1"];
// //   const result = array.some(item => typeof(item) == 'number');
//   const result = array.every(item => typeof(item) == 'string');
//   console.log(result);

// reduse

// const array = [1, 2, 3, 4, 5, 6];
// const array = ["you", "they", "me", "4", "5", "6"];
// // 2+3+4+5+6 складывает с предыдущим
// // const result = array.reduce((count, item) => count + item);
// // const result = array.reduce((count, item) => count + ' / ' + item);
// // const result = array.reduce((count, item) =>'${count} / ${item}');
// const result = array.reduce((count, item) =>`${count} / ${item}`, "5");
// console.log(result);


// const obj = {
//     smadiarova: "sname",
//     gulia: "name",
//     26: "age"


// };


// const result = Object.entries(obj)
// // .filter(item =>console.log(item));
// // .filter(item =>console.log(item[1]));
// .filter(item =>item[1] === 'name')
// .map(item => item[0]);
// console.log(result);

var fruits = ['Яблоко', 'Банан'];
var newLength = fruits.unshift('Клубника')
console.log(fruits);

}());