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

const quiz = [
    {
        q:'The behaviour of the instances present of a class inside a method is defined by __________',
        options: ['Method','Classes','Interfaces','Classes and Interfaces'],
        answer:1
    },
    {
        q:'The keyword or the property that you use to refer to an object through which they were invoked is _________',
        options: ['from','to','this','object'],
        answer:2
    },
    {
        q:'What will be the output of the following JavaScript code?',
        options: ['false','true','0','1'],
        answer:1
    },
    {
        q:'The basic difference between JavaScript and Java is _________',
        options: ['There is no difference','Functions are considered as fields','Variables are specific','Functions are values, and there is no hard distinction between methods'],
        answer:3
    },
    {
        q:'The meaning for Augmenting classes is that ___________',
        options: ['objects inherit prototype properties even in a dynamic state','objects inherit prototype properties only in a dynamic state','objects inherit prototype properties in the static state','object doesn’t inherit prototype properties in the static state'],
        answer:0
    }   
]


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
questionText.innerHTML = currentQuestion.q; // ERROR : Uncaught TypeError:Cannot read property 'q'of undefined at getNewQuestion (app.js:30)

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
    getNewQuestion(); // ERROR : Uncaught TypeError:Cannot read property 'q'of undefined at window.onload (app.js:75)
}
