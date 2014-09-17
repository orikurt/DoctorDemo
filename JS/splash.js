
loadAllPages();

$(window).load(function(){

    
      splash(500, "#login");

    
});

function splash(delay, dest){
    setTimeout(function(){shiftWindow(dest)}, delay);
};
