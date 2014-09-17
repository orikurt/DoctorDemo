$(document).ready(function(){
    $('map').on('click', 'area', function(e){
        alert(e.delegateTarget);
    });
});