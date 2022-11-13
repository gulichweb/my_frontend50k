

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


    // Urok 46

    class cardProduct {
        constructor( img,  title, originPrice, oldPrice, innerBlock){
            this.img = img;
            this.title = title;
            this.originPrice = originPrice;
            this.oldPrice = oldPrice;
            this.innerBlock = document.querySelector(innerBlock);
            this.valuta = 85;
            this.convetToUSD();
            this.originPrice = this.convetToUSD(this.originPrice);
            this.oldPrice = this.convetToUSD(this.oldPrice);



        }

        convetToUSD(price){
            const result =this.originPrice = this.originPrice / this.valuta;
            return result;
        }


    render() {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = '<div class="img">\
                            <div class="tooltips bg_red">\
                            <span>new</span>\
                        </div>\
                        <img src="img/product/img61.jpg" alt="">\
                            </div>\
                            <div class="body_product">\
                                <p class="title">Animal Print Sweatshirt</p>\
                                <div class="block_stars">\
                                    <div class="stars">\
                                        <i class="fa-solid fa-star"></i>\
                                        <i class="fa-solid fa-star"></i>\
                                        <i class="fa-solid fa-star"></i>\
                                        <i class="fa-solid fa-star"></i>\
                                        <i class="fa-solid fa-star"></i>\
                                    </div\
                                    <div class="reviews">\
                                        <span>6 reviews(s)</span>\
                                    </div>\
                                </div>\
                                <div class="price">\
                                    <span class="currensy">$</span>\
                                    <span class="oprice originPrice">60.00</span>\
                                    <del class="oldPrice">$42.00</del>\
                                </div>\
                                <div class="btns dnone">\
                                    <ul class="ul_li">\
                                        <li class="add_cart">\
                                            <span class="seryi-krug">\
                                                <i class="fa-solid fa-briefcase add_cart"></i>\
                                            </span>\
                                        </li>\
                                        <li>\
                                            <span class="seryi-krug">\
                                                <i class="fa-solid fa-scale-balanced"></i>\
                                            </span>\
                                        </li>\
                                        <li>\
                                            <span class="seryi-krug">\
                                                <i class="fa-solid fa-heart"></i>\
                                            </span>\
                                        </li>\
                                    </ul>\
                                </div>\
                            </div>\
            ';

            this.innerBlock.append(div);
                
                        
        }
       
    }
  
    new cardProduct(
        'SALE',
        'img/product/img63.jpg',
        1000,
        4000,
        '.list_product'
).render();
        

}());



// (`2 + 3 = ${2 + 3}.`); 