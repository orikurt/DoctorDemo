/**
 * Created by Ori on 29/06/2014.
 */
$(document).ready(function(){

    //Buttons click references
    $("#cardLink").on("click", function(){
        shiftWindow("#hello");
    });

    $(".sounds").delegate('img', 'click', function () {
        playSound("click");
    });


});
