var products=[];
var current_page = 1;
var records_per_page = 16;

//where the magic happens

   (function(){
       $('#btn_prev').click(function(){
           prevPage();
       });
       $('#btn_next').click(function(){
           nextPage();
       });
//    Generating the HTML
 /*   <div class=" productGridItem">
        <div class="actualProductContainer">
        <h3 class="thumbnailTitleRelative">Screws</h3>
        <img class="thumbnailImage" src="../media/images/screw.png">
        <div class="paragraphSpacingThumbnail">
        <p >Package of 25. 3 inch screws.</p>
    <p >40 DKK</p>
    </div>
    <button class="btnAddToCart floatRight floatingMaterialButtonShadow">
        <i class="fa fa-cart-plus fa-2 floatRight"></i>
        </button>
        </div>
        </div>
 */$.getJSON('../data/products.json', function(data) {
           products = data;
           console.log(products);
           //for (var i = 0; i < products.length; i++) {
           //    addDetailsToCards(products[i]);
           //};
           //for (var i=0; i< products.length; i++){
           changePage(1);
           //}
       });


    function addDetailsToCards(product){

    //    <div class=" productGridItem">
//    <div class="actualProductContainer">
//        <h3 class="thumbnailTitleRelative">Hammer</h3>
        var productItem = $('<div class=" productGridItem">');
        var actualProductGrid = $('<div class="actualProductContainer">');
        var title=$('<h3 class="thumbnailTitleRelative">');
            title.append(product.name);
        actualProductGrid.append(title);
//        <img class="thumbnailImage" src="../media/images/hammer-1.jpg">
//        <div class="paragraphSpacingThumbnail">
//        <p >20 cm hammer with wooden grip</p>
//       <p >70 DKK</p>
        var image= $('<img>');
            image.attr('class','thumbnailImage');
            image.attr('src', product.image);
        actualProductGrid.append(image);

        var paragraphs = $('<div class="paragraphSpacingThumbnail">');
            var para1=$('<p>');
            para1.append(product.description);
             var para2=$('<p>');
            para2.append(product.price);
        paragraphs.append(para1,para2);
        actualProductGrid.append(paragraphs);

        var buyBtn=$('<button class="btnAddToCart floatRight floatingMaterialButtonShadow">');
            buyBtn.append($('<i class="fa fa-cart-plus fa-2 floatRight"></i>'));
        actualProductGrid.append(buyBtn);
        productItem.append(actualProductGrid);

        $('#productGrid').append(productItem);
    }



//});


//    Pagination


function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page)
{
    $('#productGrid').empty();
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("pagination");
    console.log(listing_table);
    var page_span = document.getElementById("page");

    //btn_prev.click(function(){
    //   prevPage();
    //});
    //btn_next.click(function(){
    //    nextPage();
    //});
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    //listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < products.length; i++) {
        //listing_table.innerHTML += products[i].adName + "<br>";
        addDetailsToCards(products[i]);

    }
    page_span.innerHTML = page + "/" + numPages();

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(products.length / records_per_page);
}

//window.onload = function() {
//    changePage(1);
//};
   }());
