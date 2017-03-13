function hideall() {
        $("#game_over").hide();
        $("#Leaderboard").hide();
        $("#Game").hide();
        $("#Rules").hide();
        $("#home_page").hide();	
}

$(document).ready(function(){
    $("#b1").click(function(){
        hideall();
        $("#Rules").show();
    });


     $("#b2").click(function(){
        hideall();
        $("#Game").show();
    });

     $("#b3").click(function() {
     	hideall();
     	$("#Leaderboard").show();
     });

     $("#b4").click(function() {
     	hideall();
     	$("game_over").show();
     });

    $('.home').click(function(){
    	hideall();
        $("#home_page").show();
    });
});
