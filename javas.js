$(document).ready(function(){
    $("#b1").click(function(){
        $("#Rules").toggle();
        $("#home_page").toggle();
    });


     $("#b2").click(function(){
        $("#Game").toggle();
        $("#home_page").toggle();
    });

     $("#b3").click(function() {
     	$("#Leaderboard").toggle();
     	$("#home_page").toggle();
     });

     $("#b4").click(function() {
     	$("#game_over").toggle();
     	$("#home_page").toggle();
     });

    $('.home').click(function(){
        $("#game_over").hide();
        $("#Leaderboard").hide();
        $("#Game").hide();
        $("#Rules").hide();
        $("#home_page").show();
    });
});