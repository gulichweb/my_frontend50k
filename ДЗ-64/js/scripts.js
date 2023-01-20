import $ from 'jquery';


(function () {

  const get_list_product = require("./module/get_list_product"),
        add_to_cart = require("./module/add_to_cart"),
        count_product = require("./module/count_product"),
        delete_product = require("./module/delete_product"),
        total_price = require("./module/total_price");

        get_list_product();
        // add_to_cart();
        // count_product();
        // delete_product();
        // total_price();
        add_to_cart (delete_product, total_price, count_product);
}());

$(document).ready(function(){
  $('#accord .accordion').one( 'click', function() {
    // alert( 'Вы нажали на елемент "#foo"');
    $('#accord .panel').not ($(this).next()).slideUp(500);
    $(this).next().slideToggle(1000);
  });
});


