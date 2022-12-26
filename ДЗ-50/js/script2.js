
(function() {
    'use strict';
// console.log("Запрос данных.....");

// const req = new Promise((resolve, reject) => {

//     setTimeout(() => {

//         console.log("Обработка данных");
        
//         const data = {
//             name: "Product",
//             price: 5000
//         };
        
//         resolve(data);       
        
        
//         }, 1500);
        

// });

// req.then(data =>{

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             data.status = "order";
//            reject(data);
      
               
//        }, 2000);
       
//     });
//     }).then(data => {
//         data.modify = "modify";
//         return data;

//         // resolve(data);

//  }).then(data => {
//     console.log(data);

// }).catch(() => {
//     console.log("Ошибка получения данныз");
// }).finally(() => {
//     console.log("Очистка данных"); // просто пример

// });
///////////////////////
//  .then(data => {
//     console.log(data);
 // 1) вариант

// });
//////////////////////
// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };
// test(1000).then(() => console.log("Time 1000ms"));
// test(3000).then(() => console.log("Time 1000ms"));

// Promise.all([test(1000), test(2000)]).then(() =>{
//     console.log("All done");
// });
// Promise.race([test(1000), test(2000)]).then(() =>{
//     console.log("All done");
// });
let urls = [
    'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js'

  ];
  
  // Преобразуем каждый URL в промис, возвращённый fetch
  let requests = urls.map(url => fetch(url));
  
  // Promise.all будет ожидать выполнения всех промисов
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => alert(`${response.url}: ${response.status}`)
    ));

}());