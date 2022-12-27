
(function() {
    'use strict';
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

   const request_ = new XMLHttpRequest();

   request_.open("GET", "search.php?query="+search.value);

   search_res.innerHTML = "Данные отправлены";

   request_.send();

   request_.addEventListener('load', ( ) => {
    if(request_.readyState === 4 && request_.status === 200){

        const data = JSON.parse(request_.response);

        console.log(data);
        // sublist = $("<ul></ul>");
        let creat_ul = document.createElement('ul');

        for(let i = 0; i < data.length; i++) {

            creat_ul.innerHTML += `<li>
                                 <a href="${data[i].href}">${data[i].text}</a>
                                </li>`;
        }
        search_res.innerHTML = creat_ul.outerHTML;

  }else {
      console.log("error");
  }

   });

});

}());