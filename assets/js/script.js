// We need to be able to put question in the question area
// We need to have answers that correspond with the question
// Oonce that is done look at adding arrays to arrays
// use a randomizer to put the array in the question
var quiz = document.querySelector("#quiz")
var quizQuestion = document.querySelector(".question")
var startButton = document.querySelector("#start-button")
var timerEl = document.querySelector("#timer")
var invite = document.querySelector("#invite")
var secondsLeft = 30;
var questionBank = [
    { 
    question: "What character do we use to distinguish a class selector?", 
    answerPool: [".", "#", "%", "&&"],
    correct: "."
    }, 
    {
    question: "What character do we use as a to distinguish a I.D. selector?", 
    answerPool: [".", "#", "||", "*"],
    correct: "#"
    }, 
    {
    question: "What is the purpose of Semantic HTML?", 
    answerPool: ["Semantic HTML makes the HTML more comprehensible and accessible by better defining the different sections and layout of web pages", "Semantic HTML is about giving meaning to class and I.D. selectors",
    "Semantic HTML doesn't have a actual purpose", "42"],
    correct: "Semantic HTML makes the HTML more comprehensible and accessible by better defining the different sections and layout of web pages"
    }
]
//This hides the quiz
quiz.setAttribute("style", "display: none")
//This starts the quiz and timer
var startQuiz = startButton.addEventListener("click", function(event) {
    event.target = quiz.setAttribute("style", "display: block")
    function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timerEl.textContent = secondsLeft;
            if(secondsLeft === 0) {
                clearInterval(timerInterval);
                //I will need to put some end message here?
            }
        }, 1000);
    }
    event.target = setTime();
    event.target = invite.setAttribute("style", "display: none")
});

//When a question is answered either user gets it correct and is given a new answer OR time is subtracted from the clock
//This is the function that lets the user take the quiz itself
function takeQuiz(questionNumber){
var currentQuestion = questionBank[questionNumber];

//This displays the question
quizQuestion.innerText = currentQuestion.question

//this creates the answer pool
for (i = 0; i < currentQuestion.answerPool.length; i++) {        
    var btn = document.createElement("button");
    btn.textContent = currentQuestion.answerPool[i];
    var div = document.getElementById("btn-div");
    div.appendChild(btn);

btn.addEventListener("click", function (event){
    event.preventDefault();
        if (event.target.textContent === currentQuestion.correct) {
        questionNumber += 1;
        takeQuiz(questionNumber);
        console.log("It is working")
        } else {
            secondsLeft -= 5;
        }
    })
}
if (questionNumber === questionBank.length -1) {
    console.log("We Kinda did it")
}
} 
takeQuiz(0);
    
///bugs found:
//If answered wrong you can go below zero in the timer.

//TO DO
//Add url and pictures to README

//look up set attributes
//play around with set interval on timers
//do the thing that is required first
 
// //This sets a class to all buttons (I DON'T THINK THIS PART IS NECESSARY)
// var buttonList = document.querySelectorAll("button")
// buttonList.forEach((button => {
//     button.classList.add("button");
// })
// )