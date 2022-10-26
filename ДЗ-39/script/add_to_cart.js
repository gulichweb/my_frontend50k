
// /*заголовок*/ 
'use strict';
// let title = document.getElementsByClassName("title");
// console.log(title[1].innerText);

// /*инфо о картинке*/

// let img = document.getElementsByTagName("img");
// console.log(img[2].src);

// /*текст*/

// let footer = document.getElementsByClassName("mt-4");
// console.log(footer[1].innerText);

// /*товар - цена*/

// let price = document.getElementsByClassName("price");
// console.log(price[1].innerText);

// картинки

// let src = document.querySelectorAll(".product > .img");
// console.log(src[0]);
// console.log(src[1]);
// console.log(src[2]);
// console.log(src[3]);
// console.log(src[4]);


// var elements = document.getElementsByClassName("add_cart");

// var myFunction = function() {
//     var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".title");
//     console.log(attribute[0].innerText);
// };

// for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }

// ДЗ-33 добавление товаров в корзину


   let my_info = document.getElementsByClassName("add_cart");

    console.log(my_info);

               
  

   let myFunction = function() {


   let title = this.parentNode.parentNode.parentNode.querySelectorAll(".body_product p");
   let price = this.parentNode.parentNode.parentNode.querySelectorAll(".price del");
   let img = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll( "img");

   let creat_li = document.createElement('li');
   creat_li.classList.add("trash_item");
    // console.log();
    // console.log();
    // console.log();


    creat_li.innerHTML = '<div class="left">\
                                <div class="left">\
                                <a href="#">\
                                <img src="'+img[0].src+'" alt="">\
                                </a>\
                                </div>\
                                <div class="right m-l-10">\
                                    <p>'+title[0].innerText+'</p>\
                                    <p>'+price[0].innerText+'<del>'+price[0].innerText+'</del></p>\
                                </div>\
                            </div>\
                            <div class="fa-solid">\
                                <i class="fa-solid fa-trash-can"></i>\
                            </div>\
                            ';


     let list_cart = document.querySelector('.my_shope  ul');
         list_cart.appendChild(creat_li);

       alert("Товары успешно добавлены!");
// ДЗ-39 удаление товаров
    delete_product();

        //  function del_func(){
        //    alert("asd");
        //  }
       
        };

  for (var i = 0; i < my_info.length; i++) {
    my_info[i].addEventListener('click', myFunction, false);

 }; 
          
 
 // ДЗ 34

//  let object = {0: 'first', 1: 'second', 2: 'third', length: 3}
//  console.log( object ); 
//  let array = [];
 
//  for (var i = 0; i < object.length; i++) {
//     array.push(object[i]);
//     console.log( object[i] ); 
//  }
 
//  console.log( array );
// console.log(object); 




// let str = ("first",  "second" ,  "third");

// console.log( str.split([""]));

// let str = ("first" +  "second" +  "third");
// console.log( str.split([""]));

// ДЗ-39 удаление товаров

function delete_product(){
  let click_trash = document.querySelectorAll(".fa-solid .fa-trash-can");


       for (var i = 0; i < click_trash.length; i++) {
         click_trash[i].addEventListener('click', del_func, false);
       
       }

       function del_func(evt){
        evt.preventDefault();
        this.parentNode.parentNode.remove();
       }
}






