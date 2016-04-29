(function () {
    /*
    * <li>
    *     <button class="floatRight approvalButton marginBottomXS marginTopXS orangeBackground" id="approvalButton">Approve</button>
    * <h3>18/01/2016Thomas Jensen</h3>
    * <p>Hammer70 DKK</p>
    * <p>Nails 730 DKK</p></li>
    *
    * */
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


    },
        {
            "Purchaser":"Ole Sorensen",
            "Date": "07/03/2016",
            "Content" :[
                {
                    "name": "Ladder",
                    "description": "It make you look taller",
                    "price": "330 DKK"
                },

                {
                    "name": "Protection Goggles",
                    "description": "Package of 25. Size M.",
                    "price": "1000 DKK"
                }
            ],
            "Approved" : "False"
        },
        {
            "Purchaser":"Bjorn Madsen",
            "Date": "12/04/2016",
            "Content" :[
                {
                    "name": "Ladder",
                    "description": "It make you look taller",
                    "price": "330 DKK"
                },

                {
                    "name": "Protection Goggles",
                    "description": "Package of 25. Size M.",
                    "price": "1000 DKK"
                },
                {
                    "name": "Handsaw",
                    "description": "JACK handsaw 550MM",
                    "price": "50 DKK"
                }, {
                    "name": "Scissors",
                    "description": "Aluminium plate scissors",
                    "price": "75 DKK"
                },
            ],
            "Approved" : "False"
        },
        {
            "Purchaser":"Thomas Jensen",
            "Date": "19/03/2016",
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
                },
                {
                    "name": "Staple Gun",
                    "description": "MITSUTOMO STAPLE GUN",
                    "price": "80 DKK"
                },

                {
                    "name": "Metal Hand Saw",
                    "description": "Metal handsaw",
                    "price": "89 DKK"
                }
            ],
            "Approved" : "False"
        }

];

function addOrderToList(order){
    var date = $('<h3>');
    date.append(order.Date);
    var name= $('<h3>');
    name.append(order.Purchaser);
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
    orderInOrders.append(date);
    orderInOrders.append(name);

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






