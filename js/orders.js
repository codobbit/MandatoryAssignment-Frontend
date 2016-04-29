(function () {

    var orders= [
    {
        "Purchaser":"Thomas Jensen",
        "Date": "18/01/2016",
        "Content" :[
            {
                "name": "Hammer",
                "description": "20 cm hammer with wooden grip",
                "price": "70 DKK"
            },
            {
                "name": "Nails 7",
                "description": "Package of 100. 7 inch nails made out of stainless steel.",
                "price": "30 DKK"
            }
        ],
        "Approved" : "False"
    },
    {
        "Purchaser":"Thomas Jensen",
        "Date": "17/01/2016",
        "Content" :[
            {
                "name": "Nails 7",
                "description": "Package of 100. 7 inch nails made out of stainless steel.",
                "price": "30 DKK"
            },

            {
                "name": "Screws ",
                "description": "Package of 25. 3 inch screws.",
                "price": "40 DKK"
            }
        ],
        "Approved" : "False"


    }

];

function addOrderToList(order){
    var details = $('<h3>');
    details.append(order.Date);
    details.append(order.Purchaser);
    var orderInOrders = $('<li>');
    var approveBtn=$('<button class="">');

    approveBtn.attr('class','floatRight approvalButton marginBottomXS marginTopXS orangeBackground');
    approveBtn.attr('id','approvalButton');
    approveBtn.append('Approve');
    orderInOrders.append(approveBtn);

    approveBtn.click(function() {
        order.Approved="True";
        orderInOrders.attr('class','hide');
    });
    orderInOrders.append(details);
    for(var i=0;i<order.Content.length; i++){
        var p=$('<p>');
            p.append(order.Content[i].name);
            p.append(order.Content[i].price);
        orderInOrders.append(p);
    }

    $('#orders-list').append(orderInOrders);

};
    for (var i = 0; i < orders.length; i++) {
    addOrderToList(orders[i]);
};

}());






