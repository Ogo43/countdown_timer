const startTiming = 30;                 //Start Timing for 20 minutes
let time = startTiming * 60;           //Set time in seconds

const count = document.getElementById("countDownTimer");

//set interval to determine how often it will call in milliseconds
setInterval(updateTimer, 1000);

function updateTimer() {

    // Declare minutes and seconds by 60

    const minutes = Math.floor (time/60);
    let seconds = time % 60; 

    //Use ternary operator to declare the if statement
    //This explains a condition ? do this : do that i.e true or false

    seconds = seconds < 10 ? "0" + seconds : seconds;

    //To display countdown timer

    count.innerHTML = `${minutes}:${seconds}`;
    time--

    //If the count down is finished, clear interval
    if (time < 0) {
        clearInterval(0);
        document.getElementById("countDownTimer").innerHTML = "STOP";
    }

}