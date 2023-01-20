function count_product() {
    let caunt_product = document.getElementsByClassName("trash_item").length;
    document.querySelectorAll('.card_count')[0].innerHTML = caunt_product;
  }

  module.exports = count_product;