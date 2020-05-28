var countDown = 1000

function runCountDown(){
    
    countDown--;
    document.querySelector('#counting').textContent= countDown;
    if(countDown==0){
        startGame();
    // }else if($0)
    // setTimeout(runCountDown,100)
    }
    else{
    setTimeout(runCountDown, 1000)}

}
runCountDown();



const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement= document.getElementById('question-container')
const questionElement= document.getElementById('question')
const answerButtonsElement=document.getElementById('answer-buttons')
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',()=> {
    currentQuestionIndex++
    setNextQuestion()
})
let shuffledQuestions, currentQuestionIndex

function startGame(){
    console.log(`started`)
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(()=>Math.random()- .5)
    currentQuestionIndex = 0 
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
   showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText=question.question
    console.log(questionElement)
    question.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct= answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    }) 
}

function resetState(){
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton= e.target  
    const correct= selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length> currentQuestionIndex+1){
    nextButton.classList.remove('hide')
    }else{
        startButton.innerText= 'restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{ element.classList.add('wrong')  
    
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: ' What is JavaScript?',
        answers:[
            {text:'JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language', correct:true},
            {text:'A drink',correct:false}
        ]
    },
    {
        question:'What is the use of isNaN function?',
        answers:[
            {text:'isNan function returns true if the argument is not a number otherwise it is false.',correct:true},
            {text:'A animal', correct:false}
        ]
    },
    {
        question:' What is negative infinity?',
        answers:[
            {text:' Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.',correct:true},
            {text:'avengers',correct:false}
        ]
    }
]

