<?php
    $_POST = json_decode(file_get_contents('php://input'), true);

    // print_r($_POST);
if ($_POST['query'] == "Рубашка"){
    $result = array(
               array(
                "text" => "Рубашка",
                "href" => "https://aliexpress.ru/item/1005004844426453.html?sku_id=12000030715226363/"
               ),
               array(
                "text" => "Кофта",
                "href" => "https://aliexpress.ru/item/1005004844426453.html?sku_id=12000030715226349/"
               ),
               array(
                "text" => "Кофта",
                "href" => "https://aliexpress.ru/item/1005004844426453.html?sku_id=12000030715226391"
               )
                           
               );


} else if ($_GET['query' ] == "Пальто"){
    $result = array(
               array(
                "text" => "Пальто",
                "href" => "https://aliexpress.ru/item/1005004988513516.html?spm=a2g2w.productlist.search_results.0.142a50a2CKoAtp&sku_id=12000031253807276/"
               ),
               array(
                "text" => "Jacket",
                "href" => "https://aliexpress.ru/item/1005004988513516.html?spm=a2g2w.productlist.search_results.0.142a50a2CKoAtp&sku_id=12000031253807270/"
               ),
               array(
                "text" => "Black tone",
                "href" => "https://aliexpress.ru/item/1005005054781338.html?sku_id=12000031507368677&spm=a2g2w.productlist.search_results.0.71b753c9d2YIIB/"
               )
               
               );
            // } else {
                // $result("ничего не найдено");
             }

            echo  json_encode($result);
      

            ?>

