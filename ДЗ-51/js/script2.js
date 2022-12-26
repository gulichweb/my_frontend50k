
(function() {
    'use strict';

    // function getData() {
    //     const nums = parseInt(document.querySelector('#nums').value);
    //     // URL на который будем отправлять GET запрос
    //     const requestURL = `/js/search.php?nums=${nums}`;
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('GET', requestURL);
    //     xhr.onload = function () {
    //       if (xhr.status !== 200) {
    //         return;
    //       }
    //       const response = JSON.parse(xhr.response);
    //       let html = [];
    //       for (let i = 0, length = response.length; i < length; i++) {
    //         html.push(`<li>${response[i]}</li>`);
    //       }
    //       document.querySelector('#list').innerHTML = html.join('');
    //     }
    //     xhr.send();
    //   }
    //   // при нажатию на кнопку
    //   document.querySelector('#get').addEventListener('click', () => {
    //     getData();
    //   });
      //////////////////////////////////////////////////////////////////////////
const inputSom = document.querySelector("#som");
const inputUsd = document.querySelector("#usd");

inputSom.addEventListener( 'input', () =>{

    const request = new XMLHttpRequest();

    request.open('GET', 'http://50kmyproject/json/xhr.json');
    request.setRequestHeader("Content-Type", "application/json, charset utf-8");
    request.send();


    request.addEventListener('readystatechange', () => {

        if(request.readyState === 4 && request.status === 200){
            console.log(request.response);
            console.log(JSON.parse(request.response));

            const curency = JSON.parse(request.response);

            const result = inputSom.value/curency.xhr.usd;

            inputUsd.value =( result).toFixed(2);
        }

    });
    // status
    // statusText
    // response
    // redyState

});



const  search         = document.querySelector("[name='search']"),
       buttonSearch   = document.querySelector(".search button"),
       search_res     = document.querySelector(".search-result");
       buttonSearch.addEventListener('click', (e) => { 

   e.preventDefault();


   fetch('/js/search.php', {
    method: "POST",
    body: JSON.stringify({query: search.value}),
    header: {
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(json => {

    let creat_ul = document.createElement('ul');

            for(let i = 0; i < json.length; i++) {
    
                creat_ul.innerHTML += `<li>
                                     <a href="${json[i].href}">${json[i].text}</a>
                                    </li>`;
            }
            search_res.innerHTML = creat_ul.outerHTML;

        })
         .catch(console.log("Ошибка"));
//    const request_ = new XMLHttpRequest();

//    request_.open("GET", "/js/search.php?query="+search.value);

// //    search_res.innerHTML = "Данные отправлены";

//    request_.send();

//    request_.addEventListener('load', ( ) => {
//     if(request_.readyState === 4 && request_.status === 200){

//         const data = JSON.parse(request_.response);

//         console.log(data);
//         // sublist = $("<ul></ul>");
//         let creat_ul = document.createElement('ul');

//         for(let i = 0; i < data.length; i++) {

//             creat_ul.innerHTML += `<li>
//                                  <a href="${data[i].href}">${data[i].text}</a>
//                                 </li>`;
//         }
//         search_res.innerHTML = creat_ul.outerHTML;

//   }else {
//       console.log("error");
//   }

//    });

});

}());