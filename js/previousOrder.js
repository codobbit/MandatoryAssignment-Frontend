/**
 * Created by alice on 29/04/2016.
 */

(function () {
    $(document).on('click', '.approvalButton', function (clickEvent) {
        //updating the dates
        //var d = new Date();
        //var month = d.getMonth()+1;
        //var day = d.getDate();
        //var output = d.getFullYear() + '/' +
        //    (month<10 ? '0' : '') + month + '/' +
        //    (day<10 ? '0' : '') + day;
        //$('.date').append(output);
      //  clones only 1 of them
      $('.clonable').first().clone().appendTo( "#previousOrders" );
    return false;
    });

    }());

