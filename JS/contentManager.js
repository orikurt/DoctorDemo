/**
 * Created by Ori on 29/06/2014.
 */

function changeContent (contentURL){

    console.log("Changing content to " + contentURL);

    var elemID= loadContent(contentURL);
    shiftWindow(elemID);
};

function loadContent(contentURL){
    
    console.log("Loading page: " + contentURL);
    var contentID = contentURL.split(".")[0];
    var $showing = $(".showing");
    var $height = $showing.css("height");
    var $width = $showing.css("width");
    
    var $newDiv = $("<div id="+contentID+"></div>");
    $('body').append($newDiv);
    $newDiv.addClass("container").addClass("pending");
    $newDiv.css("height", $height);
    $newDiv.css("width", $width);
    $newDiv.load(contentURL);
    
    return contentID;
    
};

function changeQuestion(direction){

    var $showing = $(".showing");
    var $complaint = $showing.attr("id");
    var $currQ = getQ($complaint, 0);
    var $totalQ = getQ($complaint, "total");
    var $dest = parseInt($currQ);
    
    if (direction == 'next'){
        $dest += 1;
    }
    else{
        $dest -= 1;
    }
    if ($dest == 0){
        return;
    }
    
    var $nextQ = "#Q"+$dest;

    setQ($complaint, $dest);

    shiftWindow(".showing", $currQ, $dest);
    
    advanceProgressBar($dest, $totalQ);

};

function advanceProgressBar($currQ, $totalQ){

    var $percent = calculateProgress($currQ, $totalQ);
    $meter = $(".meter > span");
    $meter.css("display", "block");
    var $origWidth = $meter.width()/10;
    $meter.data("origWidth", $origWidth);
    $meter.animate({
        width: $percent+"%"
    }, 600);

    checkColorChange($percent, $origWidth);

}

function checkColorChange(newNum, oldNum){
    var $mod1 = Math.floor(oldNum / 26);
    var $mod2 = Math.floor(newNum / 26);
    if ($mod2 - $mod1) {
        $(".meter").addClass("class"+$mod2, 300);
        $(".meter").removeClass("class"+$mod1, 300);
    }
}

function calculateProgress($currentQ, $totalQ){
    var factor = 5;

    var $done = ( $currentQ / $totalQ ) * 100;

    /*
    if ($currentQ > 2){
        var $addition = (1/$currentQ / factor) * 100;
        $done += $addition;
    }
    */

    if ($done < 100){
        return $done;
    }
    else return 100;
}

function getQ(page, param){
    if (param == "total")
    {
        var $total = $("#"+page+"Stats .totalQ");
        return parseInt($total.attr('value'));
    }
    else
    {
        var $Qnum = $("#"+page+"Stats .Qnum");
        return parseInt($Qnum.attr('value'));
    }
};

function setQ(page, value){
    
    var $Qnum = $("#"+page+"Stats .Qnum");
    $Qnum.attr("value", value);
    
};

function playSound(soundFile){
    switch (soundFile) {
        case 'hover':
            hover.stop;
            hover.play();
            break;
        
        case 'click':
            click.play();
            break;
        
    }
    /*
    $("<audio></audio>").attr({
        'src':'/Resources/Sounds/' + soundFile + '.mp3',
        'autoplay':'autoplay'
    }).appendTo("body");
    */
};

function shiftWindow(target, $currQ, $dest){

    var $showing = $(".showing");
    var $pending = $(target);
    
    $showing.animate({"top": "20"}, 200, "easeInOutQuad", function(){
        
        $showing.animate({"left": "-3000"}, 800);
        $pending.animate({"top": "88"}, 10, function(){
            
            if (target == ".showing"){
                $("#Q"+$currQ).hide();
                $("#Q"+$dest).removeClass('hidden');
                $("#Q"+$dest).show();
            }
            
        });
        $pending.animate({"left": "30"}, 950, "easeInOutQuad", function(){
            
            $showing.css("top", "88");
            $showing.removeClass("showing").addClass("pending");
            $pending.removeClass("pending").addClass("showing");
        
        
        });
        

    });

};

/* 

function shiftWindow($showing, $pending){

    $showing.animate({"top": "20"}, 200, "easeInOutQuad", function(){
        
        $showing.animate({"left": "-3000"}, 800);
        $pending.animate({"top": "88"}, 10);
        $pending.animate({"left": "30"}, 950, "easeInOutQuad", function(){

            $showing.css("top", "88");
            $showing.removeClass("showing").addClass("pending");
            $pending.removeClass("pending").addClass("showing");

        });

    });

};


*/

function exists() {
    return this.length !== 0;
};

function loadAllPages(){
    
    loadContent("login.html");
    loadContent("hello.html");
    loadContent("drPortal.html");
    loadContent("selectComplaint.html");
    loadContent("pain.html");
    
};