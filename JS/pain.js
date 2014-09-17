/**
 * Created by Ori on 02/07/2014.
 */
$(document).ready(function(){

    //Highlight the image map areas
    $(".photoMap ul li a").on('click', function(e){
        var $select = $(this);
        var $val = $select.parents('[id]')[0].id;
        var $search = ".photoMap ul li a[value=" + $val + "]";
        var $previous = $($search);
        
        $("#" +$val+ "A").attr("value", $select.attr("title"));
        $select.css('background', 'rgba(255, 0, 0, 0.6)');
        $select.attr('value', $val);
        $previous.css('background', 'rgba(155, 255, 255, 0.3)');
        $previous.removeAttr('value');
    });

    //create the number slider
    var slideOptions = {

        animate: 0,

        value: 50,

        slide: function(e, ui){
            $('#sliderValue').html(ui.value);
        }

    };

    $('#slider').slider(slideOptions);
    $('#sliderValue').html($('#slider').slider('value'));
    $('.sliderValue').attr("value", $('#slider').slider('value'));
    

});