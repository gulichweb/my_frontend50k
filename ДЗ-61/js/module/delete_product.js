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

  module.exports = delete_product;