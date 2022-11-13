
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

// console.log(my_info);




let myFunction = function () {


  let title = this.parentNode.parentNode.parentNode.querySelectorAll(".body_product p");
  let price = this.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
  let img = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll("img");

  let creat_li = document.createElement('li');
  creat_li.classList.add("trash_item");
  // console.log();
  // console.log();
  // console.log();


  creat_li.innerHTML = '<div class="left">\
                                <div class="left">\
                                <a href="#">\
                                <img src="'+ img[0].src + '" alt="">\
                                </a>\
                                </div>\
                                <div class="right m-l-10 info_price">\
                                    <p>'+ title[0].innerText + '</p>\
                                    <span class="currensy">$</span>\
                                    <span class="oprice">'+ price[0].innerText + '</span>\
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

  ////////////

  // получить общее количестсво товара

  total_price();

  // Количестова товаров на карзине
  caunt_product();

  //  function del_func(){
  //    alert("asd");
  //  }
  console.log(document.getElementsByClassName("trash_item").length); // получение количечтов товаров после того как добавться в карзину
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

function delete_product() {
  let click_trash = document.querySelectorAll(".fa-solid .fa-trash-can");


  for (var i = 0; i < click_trash.length; i++) {
    click_trash[i].addEventListener('click', del_func, false);

  }

  function del_func(evt) {
    evt.preventDefault();
    this.parentNode.parentNode.remove();

    total_price();
    caunt_product()
  }

}



function total_price() {
  let count_price = document.querySelectorAll(".info_price .oprice");


  let total_price = 0;

  for (var i = 0; i < count_price.length; i++) {
    total_price = total_price + (+count_price[i].textContent);
  }

  document.getElementsByClassName('total_card')[0].innerHTML = total_price;
  document.querySelectorAll('.total span')[0].innerHTML = total_price;


}

function caunt_product() {
  let caunt_product = document.getElementsByClassName("trash_item").length;
  document.querySelectorAll('.card_count')[0].innerHTML = caunt_product;
}



const tabs = {
  list_tabs: [
    "Новые товары",
    "Популярные товары",
    "Новые заказы"
  ]
};

let creat_ui = document.createElement('ul');
tabs.list_tabs.forEach((item, i) => {
  creat_ui.innerHTML += `<li>${item}</li>`;

});
document.querySelector(".insert_listing").innerHTML += creat_ui.outerHTML;
