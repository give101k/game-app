// Global vars
var clock =15; 
var colors =[
    "red",
    "green",
    "white",
    "blue",
]; 
var wrong_answer = false;
var master_index;
var score = 0;

// Callback functions 
$(document).ready(function(){
    $("#b1").click(function(){
        hideall();
        $("#Rules").show();
    });

     $("#b2").click(function(){
        hideall();
        $("#Game").show();
        start_game();
    });

     $("#b3").click(function() {
     	hideall();
     	$("#Leaderboard").show();
        pullData();
     });

    $('.home').click(function(){
    	hideall();
        $("#home_page").show();
    });

    $('#play-again').click(function(){
        hideall();
        $("#Game").show();
        start_game();
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
        clock = -1
    });

    $('#circle1').click(function() {
        check_color(0);
    });

    $('#circle2').click(function() {
        check_color(1);
    });

    $('#circle3').click(function() {
        check_color(2);
    });

    $('#circle4').click(function() {
        check_color(3);
    });
    $('#clear').click(function() {
        clearStorage();
    });
});

document.addEventListener("DOMContentLoaded", function() {
  hideall();
  $("#home_page").show();
});


//User defined function
function hideall() {
    $("#game_over").hide();
    $("#Leaderboard").hide();
    $("#Game").hide();
    $("#Rules").hide();
    $("#home_page").hide(); 
    $("#quit").hide();
    $('#alert1').hide();
    $('#alert2').hide();
}

// This functions takes an array and suffles it
// *Note: The array should be global 
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

// Use this function when you want to run the timer
// *Note: when you want to reset the timer, you must use the clearInterval functions
// like this: clearInterval(interval);
// This function requires the updateTimer function so don't erase it
function runTimer() {
    interval = setInterval(updateTimer, 1000); 
}

// Function that updates the timer.  Note: #time and #time-label are MY IDs,
// you must change those to match yours.  Also, clock is a global var that I used, change that accorning to your code.
// Don't call this function directly, the function runTimer() calls it
function updateTimer() {
    clock--;
    if (clock <= 0) {
        // update timer
        $( "#timer" ).html(clock);
        clearInterval(interval);
        if(clock == 0){
            show_gameover();
        }

    } else {
        // timer changes to red when under 5 seconds
        if (clock < 5) {
            $( "#timer" ).css("color", "red");
            $( "#time-label" ).css("color", "red");
        }
        // update timer
        $( "#timer" ).html(clock+"s");
    }
}

function checkTime() {
    if (clock <= 0) {
        clock = 15;
        $( "#timer" ).css("color", "white");
        $( "#time-label" ).css("color", "white");
    }
}

function shuffleCircles() {
    master_index = getRandomArbitrary()-1;
    shuffle(colors);
    $("#master").css("background-color", colors[master_index]);
    $("#circle1").css("background-color",colors[0]);
    $("#circle2").css("background-color",colors[1]);
    $("#circle3").css("background-color",colors[2]);
    $("#circle4").css("background-color",colors[3]);
    return master_index;
}

function getRandomArbitrary() {
  return Math.floor((Math.random() * 4) + 1);
}

function show_gameover() {
            hideall();
            $("#game_over").show();
            $("#score").html(score+"pts");
}

function check_color(i) {
    if (i == master_index){
        score++;
        $( "#points" ).html(score+"pts");
        shuffleCircles();
    }
    else{
        clock = 1;
    }
}

function start_game() {
    score = 0;
    checkTime();
    master_index = shuffleCircles();
    runTimer();
    $("#score").html(score+"pts");
}

function storeData(){
    var i = 0,
    key = [],
    sKey,
    j = 0;
    var copy = false;
    var name = $('#player-name').val();
    var score = $('#player-score').val();
    for (; sKey = window.localStorage.key(i); i++) {
        key[i] = sKey
    }
    while(copy == false && j < key.length){
        if (key[j]==name){
            copy = true;
        }
        else{
            j++;
        }
    }
    if (copy == false) {
        localStorage.setItem(name, score);
    }
    else{
        $("#alert1").show();
    }
}
function pullData() {
    var i = 0,
    key = [],
    data = [],
    sKey;
    for (; sKey = window.localStorage.key(i); i++) {
        key[i] = sKey
        data[i]= window.localStorage.getItem(sKey);
    }
    
    bubbleSort(data,key);
    table(key,data);

}

 
function bubbleSort(items,items2) {  
    var length = items.length;
    for (var i = (length - 1); i >= 0; i--) {
        //Number of passes
        for (var j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            if (items[j] < items[j - 1]) {
                //Swap the numbers
                var tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
                var tmp2 = items2[j];
                items2[j] = items2[j - 1];
                items2[j - 1] = tmp2;
            }
        }
    }
}

function table(name,score) {
    var length = name.length;
    var j = 1;
    for (var i = 0; i < length; i++) {
        $('#leader').append('<tr><td>'+j+'</td><td>'+name[i]+'</td><td>'+score[i]+'</td></tr>');
        j++;
    }

}

function clearStorage(){
    localStorage.clear();
    $('#alert2').show();
}