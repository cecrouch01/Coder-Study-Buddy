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



//This gets a random question from the question bank
// var randomQuizQuestion = [Math.floor(Math.random() * questionBank.length)]

quizQuestion.innerText = questionBank[0].question
// console.log(questionBank[randomQuizQuestion].answerPool)

//This connects the answer pool to answers A-D
//Iterate answer pool
//Put answer in the selected location
//Randomize the answer selected
//remove the answer selected from the iteration
function randomizedAnswer() {
  
    for (i = 0; i < questionBank[0].answerPool.length; i++) {
        //This retrieves a random answer from the answer poop
        // questionBank[randomQuizQuestion].answerPool[Math.floor(Math.random() * i)]
        // quizAnswers.push(randomQuizQuestion.answerPool[i])
        // console.log(quizAnswers)
        // console.log(randomQuizQuestion.answerPool[i])
        // Create button element:
        
        // This puts the answer pool into the buttons (non-randomized)
        var btn = document.createElement("button");
        btn.textContent = questionBank[0].answerPool[i];

        // // Append btn to div element:
        var div = document.getElementById("btn-box")
        div.appendChild(btn);  
        // randomizedAnswerPool.splice(0 , 0, questionBank[randomQuizQuestion].answerPool[i]) 
    }
  
}

//set a class to all buttons
//eventlistener to button box
//if eventtarget = class then check value
//look up set attributes
//play around with set interval on timers
//do the thing that is required first
randomizedAnswer();
// console.log(questionBank[Math.floor(Math.random() * questionBank.length)])


//This connects questions to their answer pools
//once answers and questions are properly tied together then make sure that they can only appear once