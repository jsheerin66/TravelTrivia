// GLOBAL VARIABLES
//
// console.log(document);
var timer = $(".timer");
console.log("timer");
var begin = $("#begin");
console.log(begin);
var intervalId = 60;
console.log(intervalId);
var questionHolder = $("#questionHolder");
console.log(questionHolder);
var end = $("#end");
console.log(end);
var timeKeeper;
console.log(timeKeeper);
var q1 = $("q1");
console.log(q1)

document.getElementById("questionHolder").style.visibility = "hidden";

// JUST CREATING FUNCTION
function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    timeKeeper = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function endTimer() {
    clearTimeout(timeKeeper);
};


// Create on click for begin to run timer
$(begin).on("click", function() {
    // starts timer
    // RUNNING FUNCTION HERE
    var oneMinutes = 60
    startTimer(oneMinutes, timer);
    document.getElementById("begin").style.visibility = "hidden";
    document.getElementById("questionHolder").style.visibility = "visible";
})

$(end).on("click", function() {
    console.log("click")
    endTimer();
})
// does game end when timer ends or just when button is clicked? let game run out
// grab answers from user click, compare answer to correct value, add up number of true and false, display correctAnswers, incorrectAnswers, unanswered

// CLICK BUTTON
// START TIMER
// SHOW CONTAINER
// BUTTON TO FINISH
// GRAB BODY
// GET BOOLEAN FROM CHECKED QUESTIONS
// RETURN SCORE
//
