

// urok 45

(function () {
    'use strict';


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

    const getProduct = async (url) => {
    const result = await fetch(url);

    if(!result.ok) {
        throw new Error(`Ошибка fetch ${url} статус: ${result}`);
    }

    return result.json();


    
};



getProduct('http://localhost:3000/product').then(() => {
    new cardProduct(
            '-%30',
            'bg_red',
            'img/product/img63.jpg',
            'Animal Print Sweatshirt 2',
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
});

/// Getter & Setter

const person = {
  name: "Gulia",
  age: 25,

  get userAge() {
 return this.name;
  },

 set userAge(num) {
    return this.num;
     }
   

};

// console.log(person.userAge);
// console.log(person.userAge = 35);
// console.log(person.userAge);

///Инкапсуляция

// function User(name, age) {
//     this.name = name;

//     let UserAge = age;

//     this.get= function () {
//     console.log(`Имя пользователя: ${this.name}, Возраст: ${this.age}`);
//     };


//  this.getAge = function() {
//     return UserAge;
//  };
// // от сюда вниз идет
//  this.setAge = function(age) {

//     if(typeof age == "number" && age > 1 && age < 150) {
//         UserAge = age;
//     } else {
//         console.log("Не допустимое значенние!");
//     }
//  };

// }

// const userData = new User("Sasha", 18);

//  console.log(userData.name);
//  console.log(userData.getAge);

//  userData.setAge(151);

//  console.log(userData.getAge());

// конвертация

class User {

    constructor(name, age){
        this.name = name;
        this.age = age;
    } 
    // #sname = "Smadiarova"; // Если прописать # то скроется
   get() {
    console.log(`Имя пользователя: ${this.name}, Возраст: ${this.age}`);
    }
    // ,Фамилия пользователя: ${this.#sname}

   get UserAge() {
    return this.age;
 }

set UserAge(age) {

    if(typeof age == "number" && age > 1 && age < 150) {
        this.age = age;
    } else {
        console.log("Не допустимое значенние!");
    }
 }

}

const userData = new User("Sasha", 18);
//  userData.name = "Alex";
//  console.log(userData.name);
//  console.log(userData.getAge);

//  userData.setAge(30);

//  console.log(userData.getAge());
//  console.log(userData.get());
//  console.log(userData.sname);
console.log(userData.UserAge);
userData.UserAge = 44;
console.log(userData.UserAge);


const asd = "Алфавит";

const num = 1;

// (function (){
// let num = 10;
// console.log(num);

// console.log(num + 30);
// }());
// console.log(num);



const user = (function (){
    const privat = function () {
        console.log("Mister Bi");
    };
return {
    seyHello: privat
};
  
}());
user.seyHello();



}());

