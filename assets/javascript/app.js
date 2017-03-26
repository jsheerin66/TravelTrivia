// GLOBAL VARIABLES
//
// console.log(document);
// created variable timer which is grabbing the class .timer from the HTML
var timer = $(".timer");
//logging variable timer
console.log(timer);
//created variable begin which is grabbing the #id begin from the HTML
var begin = $("#begin");
//logging variable begin
console.log(begin);
//created variable intervalId which is set to 60
var intervalId = 60;
// logging the variable intervalId which will display 60
console.log(intervalId);
// created variable questionHolder which is grabbing the id #questionHolder from the HTML
var questionHolder = $("#questionHolder");
//logging variable questionHolder
console.log(questionHolder);
// created variable end which is grabbing the id #end from the HTML
var end = $("#end");
// logging variable end
console.log(end);
//created empty variable timeKeeper
var timeKeeper;
// logging variable timeKeeper
console.log(timeKeeper);
// created variable q1 which is grabbing the name q1
var q1 = $('input[name=q1]');
//logging variable q1
console.log(q1)
var q2 = $('input[name=q2]');
console.log(q2)
var q3 = $('input[name=q3]');
console.log(q3)
var q4 = $('input[name=q4]');
console.log(q4)
var q5 = $('input[name=q5]');
console.log(q5)
var q6 = $('input[name=q6]');
console.log(q6)
var q7 = $('input[name=q7]');
console.log(q7)
var q8 = $('input[name=q8]');
console.log(q8)
var q9 = $('input[name=q9]');
console.log(q9)
var q10 = $('input[name=q10]');
console.log(q10)


// for (var i=1; ivar q5 = $('input[name=q5]');
// console.log(q5) = 10; i++){
//   var q + i= $("input[name="+ q + i +"]")
//   console.log(q+i);
// }


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
        console.log (display[0].innerHTML);

        if (--timer < 0) {
            timer = duration;
        }

          if (display[0].innerHTML == "00:00") {
            alert("Hello Darkness my Old Friend");

          }

        // if (display[0].innerHTML == "00:00") {
        //   alert("Hello darkness my old friend")

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

$(end).on("click", function(){
  // for (var i = 1; i = 10; i++){
  //   console.log("q" + i + [0].checked)
  //   console.log("q" + i + [1].checked)
  // }
   console.log(q1[0].checked)
   console.log(q1[1].checked)
  if (q1[0].checked){
    console.log(q1[0].value)
  }
  if (q1[1].checked){
    console.log(q1[1].value)
  }

  console.log("click")
  endTimer();
})

// $(end).on("click", function() {
//     console.log(q1[0].checked)
//     console.log(q1[1].checked)
//     if (q1[0].checked) {
//       console.log(q1[0].value)
//
//     }
//     if (q1[1].checked) {
//       console.log(q1[1].value)
//     }
//     console.log("click")
//     endTimer();
// })
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

//create for loop which goes through all the questions
