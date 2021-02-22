//fixed working Timer
var sec = 15;
function startTimerFunction() {
    var timer = setInterval(myClock, 1000);
    //seconds
    sec = 15;
    //countdown
    function myClock() {
        document.getElementById("countdownClock").innerHTML = --sec;
        if (sec == 0) {
            clearInterval(timer);
      };
    };
  };

//Player Click Counter
var clickNumber = 0;
function scoreFunction(){
    //Prevents counting before timer starts and stops counter a 0 sec
    if(document.getElementById("countdownClock").innerHTML != 0 && document.getElementById("countdownClock").innerHTML != "--"){
        clickNumber += 1;
    };
    document.getElementById("playerClicks").innerHTML = clickNumber;
    if(sec == 0){
    };
};

//reset
function resetFunction(){
    //stops timer reseting prematurely
    if(document.getElementById("countdownClock").innerHTML == 0){
    //timer update
    document.getElementById("countdownClock").innerHTML = "--";
    //click update
    clickNumber = 0;
    document.getElementById("playerClicks").innerHTML = clickNumber;
    } else{
        alert('Please wait for timer to finish before reseting!');
    }
};

    //highscore (doesnt work)
    if (highScore > clickNumber){
        highScore = clickNumber;
        document.getElementById("highScore").innerHTML = highScore;
    }
