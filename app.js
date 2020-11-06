// console.log(quiz[0]);
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availablOptions = [];

function setAvailableQuestions(){
const totalQuestion = quiz.length;
for(let i=0 ; i<totalQuestion.length ; i++){
availableQuestions.push(quiz[i]);
}
}

//set question number
//get random question

function getNewQuestion(){
// set question number
questionNumber.innerHTML = "Question" + (questionCounter + 1) + " of " + quiz.length;

//set text
//set random question
const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
// console.log(questionIndex);
currentQuestion = questionIndex;
questionText.innerHTML = currentQuestion.q;

//get the position of 'questionIndex' from the availableQuestion Array
const index1 = availableQuestions.indexOf(questionIndex);

//remove the 'questionIndex' from the availableQuestion Array,so that question does not 
availableQuestions.splice(index1,1);

//set options
//get the length of options
const optionLen = currentQuestion.options.length;
// push options into availableOptions Array

for(let i=0; i< optionLen; i++){
    availablOptions.push(i);
}

for(let i=0; i< optionLen; i++){
    const optonIndex = availableOptions[Math.floor(Math.random()* availablOptions.length)];
    const index2 = availableOptions.indexOf(optonIndex);
    availablOptions.splice(index2,1);
    const option = document.createElement("div");
    option.innerHTML = currentQuestion.option[optonIndex];
    option.id = optonIndex;
    option.className ="option";
    optionContainer.appendChild(option)
}
//console.log(currentQuestion.options);

questionCounter++;
}

function next(){
    if(questionCounter == quiz.length){
        console.log("Quiz over");
    }
    else{
        getNewQuestion();
    }
}

window.onload = function(){
    //set all questions in AvailableQuestion array
    setAvailableQuestions();
    //we will call getQusetion()funtion
    getNewQuestion();
}
