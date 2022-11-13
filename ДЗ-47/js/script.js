

// urok 45

(function () {
    'use strict';

    // class ploshad {
    //     constructor(width, height){
    //         this.width = width;
    //         this.height = height;
    //     }

    //     calcPloshad(){
    //         return this.width * this.height;
    //     }

    // //     calcPloshad2(){
    // //         return this.width + this.height;
    // //     }
    //  }

    // const res_area = new ploshad(15, 20);

    // console.log(res_area.calcPloshad());



    // ////


    // class ploshadText extends ploshad{
    //     // связка других классов
    //     constructor(width, height, text, value){
    //         super(width, height);

    //         this.text = text;
    //         this.value = value;
    //     }


    // showText(){
    //     console.log(`Text: ${this.text} | value: ${this.value}`); 
    // }

    // }

    // const block = new ploshadText(20, 20, "Alex", "урок 45");


    // block.showText();

    // console.log(block.calcPloshad());
    // // console.log(block.calcPloshad2());
// 42
let my_info = document.getElementsByClassName("add_cart");

// console.log(my_info);

           


let myFunction = function() {


let title = this.parentNode.parentNode.parentNode.querySelectorAll(".body_product p");
let price = this.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
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
                            <div class="right m-l-10 info_price">\
                                <p>'+title[0].innerText+'</p>\
                                <span class="currensy">$</span>\
                                <span class="oprice">'+price[0].innerText+'</span>\
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

////////////////

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

function delete_product(){
let click_trash = document.querySelectorAll(".fa-solid .fa-trash-can");


   for (var i = 0; i < click_trash.length; i++) {
     click_trash[i].addEventListener('click', del_func, false);
   
   }

   function del_func(evt){
    evt.preventDefault();
    this.parentNode.parentNode.remove();

    total_price();
    caunt_product()
}

   }

  

function total_price(){
 let count_price = document.querySelectorAll(".info_price .oprice");


 let total_price = 0;

for (var i = 0; i < count_price .length; i++) {
  total_price  = total_price + (+count_price[i].textContent);
}

document.getElementsByClassName('total_card') [0].innerHTML = total_price;
document.querySelectorAll('.total span') [0].innerHTML = total_price;


}

function caunt_product(){
let caunt_product = document.getElementsByClassName("trash_item").length;
document.querySelectorAll('.card_count') [0].innerHTML = caunt_product ;
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
    creat_ui.innerHTML +=  `<li>${item}</li>`;
  
  });
  document.querySelector(".insert_listing").innerHTML += creat_ui.outerHTML;
  

    // Urok 46

    class cardProduct {
        constructor(tooltips, tooltipsClass, img, title, originPrice, oldPrice, innerBlock){
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

        convetToUSD(price){
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

        
        new cardProduct(
            '-%30',
            'bg_red',
            'img/product/img63.jpg',
            'Animal Print Sweatshirt 1',
            1230,
            2500,
            '.list_product'
        ).render();

        new cardProduct(
            'NEW',
            'bg_orange',
            'img/product/img50.jpg',
            'Animal Print Sweatshirt 2',
            1230,
            2500,
            '.list_product'
        ).render();

        new cardProduct(
            'SALE',
            'bg_red',
            'img/product/img61.jpg',
            'Animal Print Sweatshirt 3',
            1230,
            2500,
            '.list_product'
        ).render();

        new cardProduct(
            'NEW',
             'bg_blue',
            'img/product/img63.jpg',
            'Animal Print Sweatshirt 4',
            1230,
            2500,
            '.list_product'
        ).render();



        new cardProduct(
            '-%29',
            'bg_orange',
            'img/product/img50.jpg',
            'Animal Print Sweatshirt 5',
            1230,
            2500,
            '.list_product'
        ).render();
            
            
             

}());



