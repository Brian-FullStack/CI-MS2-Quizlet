
//--------To start the quiz
/**
 * When the user clicks the play arrow set the home screen display to hidden
 * and set the quiz page display to block
 */
document.getElementById('playArrow').onclick = function () {
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('quizPage').style.display = 'block';
}