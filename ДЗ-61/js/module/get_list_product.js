
    function getProduct(){
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
}
module.exports = getProduct;