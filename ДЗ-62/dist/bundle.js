/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/module/add_to_cart.js":
/*!**********************************!*\
  !*** ./js/module/add_to_cart.js ***!
  \**********************************/
/***/ ((module) => {

"use strict";
// /*заголовок*/ 


function add_to_cart() {
  let myFunction = function (titl, prc, imgs) {
    let title = titl;
    let price = prc;
    let img = imgs;
    let creat_li = document.createElement('li');
    creat_li.classList.add("trash_item");
    creat_li.innerHTML = '<div class="left">\
                                <div class="left">\
                                <a href="#">\
                                <img src="' + img[0].src + '" alt="">\
                                </a>\
                                </div>\
                                <div class="right m-l-10 info_price">\
                                    <p>' + title[0].innerText + '</p>\
                                    <span class="currensy">$</span>\
                                    <span class="oprice">' + price[0].innerText + '</span>\
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
    let title = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".body_product p");
    let price = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
    let img = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll("img");
    myFunction(title, price, img);
  });
}
module.exports = add_to_cart;

/***/ }),

/***/ "./js/module/count_product.js":
/*!************************************!*\
  !*** ./js/module/count_product.js ***!
  \************************************/
/***/ ((module) => {

function count_product() {
  let caunt_product = document.getElementsByClassName("trash_item").length;
  document.querySelectorAll('.card_count')[0].innerHTML = caunt_product;
}
module.exports = count_product;

/***/ }),

/***/ "./js/module/delete_product.js":
/*!*************************************!*\
  !*** ./js/module/delete_product.js ***!
  \*************************************/
/***/ ((module) => {

function delete_product() {
  let click_trash = document.querySelectorAll(".fa-solid .fa-trash-can");
  for (var i = 0; i < click_trash.length; i++) {
    click_trash[i].addEventListener('click', del_func, false);
  }
  function del_func(evt) {
    evt.preventDefault();
    this.parentNode.parentNode.remove();
    total_price();
    caunt_product();
  }
}
module.exports = delete_product;

/***/ }),

/***/ "./js/module/get_list_product.js":
/*!***************************************!*\
  !*** ./js/module/get_list_product.js ***!
  \***************************************/
/***/ ((module) => {

function getProduct() {
  class cardProduct {
    constructor(tooltips, tooltipsClass, img, title, originPrice, oldPrice, innerBlock) {
      this.tooltips = tooltips;
      this.tooltipsClass = tooltipsClass;
      this.img = img;
      this.title = title;
      this.originPrice = originPrice;
      this.oldPrice = oldPrice;
      this.innerBlock = document.querySelector(innerBlock);
      this.valuta = 85;
      this.originPrice = this.convetToUSD(this.originPrice);
      this.oldPrice = this.convetToUSD(this.oldPrice);
    }
    convetToUSD(price) {
      const result = price / this.valuta;
      return result.toFixed(2);
    }
    render() {
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `<div class="img">
                                    <div class="tooltips ${this.tooltipsClass}">
                                        <span>${this.tooltips}</span>
                                    </div>
                                    <img src=${this.img} alt="">
                                </div>
                                <div class="body_product">
                                    <p class="title"> ${this.title}</p>
                                    <div class="block_stars">
                                        <div class="stars">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div class="reviews">
                                            <span>6 reviews(s)</span>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span class="currensy">$</span>
                                        <span class="oprice originPrice">${this.originPrice}</span>
                                        <del class="oldPrice">$ ${this.oldPrice}</del>
                                    </div>
                                    <div class="btns dnone">
                                        <ul class="ul_li">
                                            <li class="add_cart">
                                                <span class="seryi-krug">
                                                    <i class="fa-solid fa-briefcase add_cart"></i>
                                                </span>
                                            </li>
                                            <li>
                                                <span class="seryi-krug">
                                                    <i class="fa-solid fa-scale-balanced"></i>
                                                </span>
                                            </li>
                                            <li>
                                                <span class="seryi-krug">
                                                    <i class="fa-solid fa-heart"></i>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                 `;
      this.innerBlock.append(div);
    }
  }
  const getProduct = async url => {
    const result = await fetch(url);
    if (!result.ok) {
      throw new Error(`Ошибка fetch ${url} статус: ${result}`);
    }
    return result.json();
  };
  getProduct('http://localhost:3000/product').then(() => {
    new cardProduct('-%30', 'bg_red', 'img/product/img63.jpg', 'Animal Print Sweatshirt 2', 1230, 2500, '.list_product').render();
    new cardProduct('NEW', 'bg_orange', 'img/product/img50.jpg', 'Animal Print Sweatshirt 2', 1230, 2500, '.list_product').render();
    new cardProduct('SALE', 'bg_red', 'img/product/img61.jpg', 'Animal Print Sweatshirt 3', 1230, 2500, '.list_product').render();
    new cardProduct('NEW', 'bg_blue', 'img/product/img63.jpg', 'Animal Print Sweatshirt 4', 1230, 2500, '.list_product').render();
    new cardProduct('-%29', 'bg_orange', 'img/product/img50.jpg', 'Animal Print Sweatshirt 5', 1230, 2500, '.list_product').render();
  });
}
module.exports = getProduct;

/***/ }),

/***/ "./js/module/total_price.js":
/*!**********************************!*\
  !*** ./js/module/total_price.js ***!
  \**********************************/
/***/ ((module) => {

function total_price() {
  let count_price = document.querySelectorAll(".info_price .oprice");
  let total_price = 0;
  for (var i = 0; i < count_price.length; i++) {
    total_price = total_price + +count_price[i].textContent;
  }
  document.getElementsByClassName('total_card')[0].innerHTML = total_price;
  document.querySelectorAll('.total span')[0].innerHTML = total_price;
}
module.exports = total_price;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
(function () {
  const get_list_product = __webpack_require__(/*! ./module/get_list_product */ "./js/module/get_list_product.js"),
    add_to_cart = __webpack_require__(/*! ./module/add_to_cart */ "./js/module/add_to_cart.js"),
    count_product = __webpack_require__(/*! ./module/count_product */ "./js/module/count_product.js"),
    delete_product = __webpack_require__(/*! ./module/delete_product */ "./js/module/delete_product.js"),
    total_price = __webpack_require__(/*! ./module/total_price */ "./js/module/total_price.js");
  get_list_product();
  add_to_cart();
  count_product();
  delete_product();
  total_price();
})();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map