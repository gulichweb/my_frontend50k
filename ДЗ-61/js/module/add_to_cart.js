
// /*заголовок*/ 
'use strict';

function add_to_cart () {

let myFunction = function (titl, prc, imgs) {
  let title = titl;
  let price = prc;
  let img = imgs;

  let creat_li = document.createElement('li');
  creat_li.classList.add("trash_item");


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


  fetch(" http://localhost:3000/request", {

   method: "POST",
   headers: {
    "Content-type": "Application/json"
   },
   body: JSON.stringify({
    "title": title[0].innerText,
    "price": price[0].innerText,
    "img": img[0].src
   
   })
  });


  console.log(document.getElementsByClassName("trash_item").length); // получение количечтов товаров после того как добавться в карзину
};



document.querySelector(".list_product").addEventListener('click', event => {
  let title = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".body_product p")
  let price = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice")
  let img = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll("img")

  myFunction(title, price, img);

});

}
module.exports = add_to_cart;



