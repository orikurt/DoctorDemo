/**
 * Created by Ori on 03/07/2014.
 */
$(document).ready(function(){

    setupScreen();
    $("#9_2 > div > label").css("font-size", 16);
});

function setupScreen(){

    $(".gradual > .second").addClass('hidden');
    $(".gradual > .second").hide();

    //set all the Q div's  to hidden
    $('div[id^="Q"]').hide();
    $('div[id^="Q"]').addClass('hidden');

    $("#Q1").show();
    $("#Q1").removeClass("hidden");

};

$(".reply").on('click', function(e){

    changeQuestion('next');
    playSound('click');

});

$(".return").on('click', function(e){

    changeQuestion('prev');

});

$("label").mouseenter(function () {
    playSound("hover");
});

$("a").mouseenter(function () {
    playSound("hover");
});

$(".reply").mouseenter(function () {
    playSound("hover");
});

$("label").click(function () {
    playSound("click");
});

$("a").click(function () {
    playSound("click");
});

$(".submit").on("click", function(){

    $("#pain_form").submit();

});

$("#pain_form").on("submit", function(e){
    
    e.preventDefault();
    $.ajax({
        
        url: "patient",
        method: "POST",
        data: $("#pain_form").serialize()
        
        });
    
});


$(".first .doMore").on('click', function(e){

    $(".gradual > .first").addClass('hidden');
    $(".gradual > .first").hide();
    $(".gradual > .second").removeClass('hidden');
    $(".gradual > .second").show();

});


