/**
 * Created by alice on 23/04/2016.
 */

// Toggle showing the Menu on small screens
$('#hamburgerMenu').click(function() {
    $('#sideMenu').toggleClass('show');
    $('#sideMenu').toggleClass('hide');

});
    // Preview the uploaded image
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#inputBarcodeScanner').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageInput").change(function(){
        readURL(this);
    });


