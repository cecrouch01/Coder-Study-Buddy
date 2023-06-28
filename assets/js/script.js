// We need to be able to put question in the question area
// We need to have answers that correspond with the question
// Oonce that is done look at adding arrays to arrays
// use a randomizer to put the array in the question

var quizQuestion = document.querySelector(".question")

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

//This sets a class to all buttons
var buttonList = document.querySelectorAll("button")
buttonList.forEach((button => {
    button.classList.add("button");
})
)

//This puts the question on the webpage
quizQuestion.innerText = questionBank[0].question

//This creates the answer buttons
function createAnswerPool() {
  
    for (i = 0; i < questionBank[0].answerPool.length; i++) {        
        var btn = document.createElement("button");
        btn.textContent = questionBank[0].answerPool[i];

       
        var div = document.getElementById("btn-div")
        div.appendChild(btn);  
    }
}
//this is adding an event listener to all buttons
buttonList.addEventListener("click", function (event){
if (event.target == document.querySelector("button")) {
    question
}
})
console.log(questionBank[0].correct[0])

//eventlistener to button box
//if eventtarget = class then check value
//look up set attributes
//play around with set interval on timers
//do the thing that is required first
createAnswerPool();
// console.log(questionBank[Math.floor(Math.random() * questionBank.length)])


//This connects questions to their answer pools
//once answers and questions are properly tied together then make sure that they can only appear once

//This gets a random question from the question bank
// var randomQuizQuestion = [Math.floor(Math.random() * questionBank.length)]

//This connects the answer pool to answers A-D
//Iterate answer pool
//Put answer in the selected location

        // questionBank[randomQuizQuestion].answerPool[Math.floor(Math.random() * i)]
        // quizAnswers.push(randomQuizQuestion.answerPool[i])
        // console.log(quizAnswers)
        // console.log(randomQuizQuestion.answerPool[i])
        // Create button element:

                // randomizedAnswerPool.splice(0 , 0, questionBank[randomQuizQuestion].answerPool[i]) 