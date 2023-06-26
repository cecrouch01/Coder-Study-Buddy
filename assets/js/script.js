//We need to be able to put question in the question area
//We need to have answers that correspond with the question
//Oonce that is done look at adding arrays to arrays
//use a randomizer to put the array in the question

var quizQuestion = document.querySelector(".question")
var answerA = document.querySelector(".answer-a")
var answerB = document.querySelector(".answer-b")
var answerC = document.querySelector(".answer-c")
var answerD = document.querySelector(".answer-d")
var questionBank = [
    { 
    question: "What character do we use to distinguish a class selector?", 
    answer: [
        {name: ".", selected: true}, 
        {name: "#", selected: false}, 
        {name: "%", selected: false},
        {name: "&&", selected: false}
        ]
    }, 
    {
    question: "What character do we use as a to distinguish a I.D. selector?", 
    answer: [
        {name: ".", selected: false}, 
        {name: "#", selected: true}, 
        {name: "%", selected: false},
        {name: "&&", selected: false}
        ]
    }, 
    {
    question: "What is the purpose of Semantic HTML?", 
    answer: [
        {name: "Semantic HTML makes the HTML more comprehensible and accessible by better defining the different sections and layout of web pages", selected: true}, 
        {name: "Semantic HTML is about giving meaning to class and I.D. selectors", selected: false}, 
        {name: "Semantic HTML doesn't have a actual purpose", selected: false}, 
        {name: "42", selected: false}
        ]
    }
]

//Randomly Select question out of question bank
//This gets a random question
questionBank.map(getQuestion)
function getQuestion(item) {
    return [item.question]
}
quizQuestion.innerText = questionBank.map(getQuestion)[Math.floor(Math.random() * questionBank.map(getQuestion).length)]
// console.log(questionBank[Math.floor(Math.random() * questionBank.length)])


//changes the Question and Answer
// function changeQandA() {
    
// }