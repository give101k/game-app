function hideall() {
        $("#game_over").hide();
        $("#Leaderboard").hide();
        $("#Game").hide();
        $("#Rules").hide();
        $("#home_page").hide();	
        $("#quit").hide();
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
     	$("#game_over").show();
     });

    $('.home').click(function(){
    	hideall();
        $("#home_page").show();
    });

    $('#play-again').click(function(){
        hideall();
        $("#Game").show();
    });

    $('#exit').click(function(){
        hideall();
        $("#home_page").show();
    });

    $('#exit_button').click(function(){
        hideall();
        $('#Game').show();
        $('#quit').show();
    });

    $('#no').click(function(){
        hideall();
        $('#Game').show();
    });

    $('#yes').click(function(){
        hideall();
        $('#home_page').show();
    });
});

document.addEventListener("DOMContentLoaded", function() {
  hideall();
  $("#home_page").show();
});
