
//--------To start the quiz
/**
 * When the user clicks the play arrow set the home screen display to hidden
 * and set the quiz page display to block
 */
document.getElementById('playArrow').onclick = function () {
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('quizPage').style.display = 'block';
}
//------------------------------------

//----------------Display a question. 
/**
 * When the quiz is started display a question in the innerHTML of the head
 *  Display the possible quiz answers as radio button selections.
 */
let question = document.getElementById('question');
let homeBtn = document.getElementById('homeBtn');
let currentQuestion = 0;
let answerOption = document.querySelector('.answerOption');

function displayQuestion(){
    for(let i = 0; i < questionList.length; i++){
        question.innerHTML = questionList[currentQuestion];
        question;
    }
}
displayQuestion();