var quiz = document.querySelector("#quiz")
var quizQuestion = document.querySelector(".question")
var startButton = document.querySelector("#start-button")
var timerEl = document.querySelector("#timer")
var invite = document.querySelector("#invite")
var secondsLeft = 30;
var recordedTime = localStorage.getItem("recordedTime")
var scoreForm = document.querySelector("#high-score-form")
var leaderBoard = document.querySelector("#leader-board")
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
    },
    {
        //this must be the last question
        question: "",
        answerPool: [],
        correct: ""
    }
]

//This hides the quiz
quiz.setAttribute("style", "display: none")
//This hides the high score form
scoreForm.setAttribute("style", "display: none")

//This starts the quiz and timer
var startQuiz = startButton.addEventListener("click", function() {
    quiz.setAttribute("style", "display: block")
    function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timerEl.textContent = secondsLeft;
            if(secondsLeft <= 0) {
                clearInterval(timerInterval);
            }
            //This will stop the timer when the quiz is finished. 
            if(questionNumber === questionBank.length - 1) {
                clearInterval(timerInterval);
                localStorage.setItem("recordedTime", secondsLeft)
            }
        }, 1000);
    }
    setTime();
    invite.setAttribute("style", "display: none");
});

//This allows for the user to record their score undertheir initials. 
function highScoreBoard () {
    var scoreSubmit = document.querySelector("#high-score-submit")
    var initials = document.querySelector("#initials");
    quizQuestion.setAttribute("style", "display: none")
    scoreForm.setAttribute("style", "display: block");
    timerEl.setAttribute("style", "display: none");
    invite.innerText = "Congratulations, your score is " + recordedTime + " please enter your intials and hit the submit button to save your score.";
    invite.setAttribute("style", "display: block");
    scoreSubmit.addEventListener("click", function(event) {
        var displayScores = document.createElement("li");
        var userInit = initials.value
        var recordedScores = [
            {recordedInitials: userInit,
            score: recordedTime}
        ];
        localStorage.setItem("scores", JSON.stringify(recordedScores));
        event.preventDefault();
        //Grader please tell me why this isn't working
        var userDisplayScores = JSON.parse(localStorage.getItem("scores"));
        displayScores.textContent = userDisplayScores.recordedInitials + " " + userDisplayScores.score;
        leaderBoard.appendChild(displayScores);
    })


}

//This sets the first question
var questionNumber = 0;
//This is the function that lets the user take the quiz itself
function takeQuiz(){
var currentQuestion = questionBank[questionNumber];
var div = document.getElementById("btn-div");


//This displays the current question of the quiz
quizQuestion.innerText = currentQuestion.question

//this creates the answer pool
for (i = 0; i < currentQuestion.answerPool.length; i++) {     
    var btn = document.createElement("button");
    btn.textContent = currentQuestion.answerPool[i];
    btn.className = "button";
    div.appendChild(btn);

btn.addEventListener("click", function (event){
    event.preventDefault();
    
        if (event.target.textContent === currentQuestion.correct) {
        questionNumber += 1;
        //This removes the answer from the answer pool
        var button = document.querySelectorAll(".button");
        for (i = 0; i < button.length; i++) {
            button[i].remove();
        }
        if (questionNumber === questionBank.length - 1){
            highScoreBoard();
        } else {
            takeQuiz();
        }
        
        } else {
            secondsLeft -= 5;
        }
    })
}
}

takeQuiz();
    

