//Questions taken from  w3schools quiz
let questionList = [{
        question: 'What does HTML stand for?',
        a: 'Hyper Text Markup Language',
        b: 'Hyperlinks and Text Markup Language',
        c: 'Home Tool Markup Language',
        d: 'How To Make Lasagne',
        answer: 'A'
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        a: 'h1',
        b: 'h6',
        c: 'heading',
        d: 'head',
        answer: 'A'
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        a: 'em',
        b: 'break',
        c: 'lb',
        d: 'br',
        answer: 'D'
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        a: ' &lt;a name="http://www.w3schools.com"&gt; W3Schools.com &lt/a&gt;',
        b: '&lt;a href="http://www.w3schools.com"&gt; W3Schools.com &lt/a&gt;',
        c: '&lt;a "http://www.w3schools.com"&gt; W3Schools.com &lt/a&gt;',
        d: '&lt;a url="http://www.w3schools.com"&gt; W3Schools.com &lt/a&gt;',
        answer: 'B'
    },
    {
        question: 'Which of these elements are all table elements?',
        a: 'table, tr, td',
        b: 'table, thead, tfoot',
        c: 'thead, tbody, tr',
        d: 'trow, tcol, tdata',
        answer: 'A'
    },
    {
        question: 'How can you make a numbered list?',
        a: 'list',
        b: 'dl',
        c: 'ol',
        d: 'ul',
        answer: 'C'
    },
    {
        question: 'What is the correct HTML for making a text input field?',
        a: 'input type="text"',
        b: 'textinput type="text"',
        c: 'input type="textfield"',
        d: 'textfield',
        answer: 'A'
    },
    {
        question: 'Which HTML element is used to specify a footer for a document or section?',
        a: 'bottom',
        b: 'bodyend',
        c: 'footer',
        d: 'section',
        answer: 'C'
    },
    {
        question: 'In HTML, which attribute is used to specify that an input field must be filled out?',
        a: 'validate',
        b: 'required',
        c: 'placeholder',
        d: 'needed',
        answer: 'B'
    },
    {
        question: 'Which HTML element defines navigation links?',
        a: 'links',
        b: 'navigation',
        c: 'nav',
        d: 'navigate',
        answer: 'C'
    },
    {
        question: 'What does CSS stand for?',
        a: 'Creative Style Sheets',
        b: 'Cascading Style Sheets',
        c: 'Computer Style Sheets',
        d: 'Colourful Style Sheets',
        answer: 'B'
    },
    {
        question: 'What is the correct HTML for referring to an external style sheet?',
        a: '&lt;stylesheet&gt;style.css&lt;/stylesheet&gt',
        b: '&lt;link rel="stylesheet" href="style.css"&gt',
        c: '&lt;a href="style.css"&gt;css&lt/a&gt"',
        d: '&lt;style src="style.css"&gt;',
        answer: 'B'
    },
    {
        question: 'Which is the correct syntax?',
        a: 'body{color:blue;}',
        b: '{body:color = blue}',
        c: 'bodyColor = "blue"',
        d: 'body(color: blue;)',
        answer: 'A'
    },
    {
        question: 'How do you insert a comment in a CSS file?',
        a: '//this is a comment//',
        b: '"this is a comment"',
        c: '/*this is a comment*/',
        d: '&lt!--this is a comment--&gt;',
        answer: 'C'
    },
    {
        question: 'Which property is used to change the background color?',
        a: 'bgcolor',
        b: 'body-color',
        c: 'background-color',
        d: 'color',
        answer: 'C'
    },
    {
        question: 'Which CSS property controls the text size?',
        a: 'text-size',
        b: 'font-style',
        c: 'text-style',
        d: 'font-size',
        answer: 'D'
    },
    {
        question: 'What is the correct CSS syntax for making all the &ltp&gt elements bold?',
        a: 'p{text-size: bold;}',
        b: 'p style="text-size: bold;"',
        c: 'all.p{font-style: bold;}',
        d: 'p{font-weight: bold;}',
        answer: 'D'
    },
    {
        question: 'How do you display hyperlinks without an underline?',
        a: 'a{underline: none;}',
        b: 'a{text-decoration: none;}',
        c: 'a{decoration: no-underline;}',
        d: 'a{text-style: none;}',
        answer: 'B'
    },
    {
        question: 'How do you make each word in a text start with a capital letter?',
        a: 'transform: capitalize;',
        b: 'text-transform: uppercase;',
        c: 'text-transform: capitalize;',
        d: 'text-style: capitalize',
        answer: 'C'
    },
    {
        question: 'How do you select an element with id "demo"?',
        a: 'id:demo',
        b: '.demo',
        c: '*demo',
        d: '#demo',
        answer: 'D'
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        a: 'js',
        b: 'script',
        c: 'scripting',
        d: 'javascript',
        answer: 'B'
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        a: 'msgBox("Hello World")',
        b: 'alertBox("Hello World")',
        c: 'msg("Hello WOrld")',
        d: 'alert("Hello World")',
        answer: 'D'
    },
    {
        question: 'How do you create a function in JavaScript?',
        a: 'function myFunction()',
        b: 'function = myFunction()',
        c: 'function:myFunction()',
        d: 'let function myFunction()',
        answer: 'A'
    },
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        a: 'if(i != 5)',
        b: 'if(i <> 5)',
        c: 'if i =! 5',
        d: 'if i-= 5',
        answer: 'A'
    },
    {
        question: 'How does a FOR loop start?',
        a: 'for i = 1 to 5',
        b: 'for(i = 0; i <= 5;)',
        c: 'for(let i = 0; i <= 5; i++)',
        d: 'for(i is 5, i++)',
        answer: 'C'
    },
    {
        question: 'How can you add a comment in a JavaScript?',
        a: '"&lt!--this is a comment--&gt;"',
        b: '//This is a comment',
        c: '**This is a comment**',
        d: '/*This is a comment*/',
        answer: 'B'
    },
    {
        question: 'What is the correct way to write a JavaScript array?',
        a: 'let colors = ["red","green","blue"]',
        b: 'let colors = (1:"red", 2:"green", 3:"blue")',
        c: 'let colors = {red, green, blue}',
        d: 'let colors = "red","green","blue"',
        answer: 'A'
    },
    {
        question: 'How do you round the number 7.25, to the nearest integer?',
        a: 'round(7.25)',
        b: 'Math.rnd("7.25")',
        c: 'Math.round(7.25)',
        d: 'rnd(7.25)',
        answer: 'C'
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        a: 'onmouseclick',
        b: 'onchange',
        c: 'onmouseover',
        d: 'onclick',
        answer: 'D'
    },
    {
        question: 'Which operator is used to assign a variable?',
        a: '-',
        b: '=',
        c: '*',
        d: '%',
        answer: 'B'
    }
];

//--------To start the quiz
/**
 * When the user clicks the play arrow set the home screen display to hidden
 * and set the quiz page display to block
 */
document.getElementById('playArrow').onclick = function () {
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('quizPage').style.display = 'block';
    countdown();
}
//------------------------------------

//--------To exit the quiz
/**When the user clicks the home button set the quiz page display to hidden and the home page display to block*/
document.getElementById('homeBtn').onclick = function () {
    document.getElementById('quizPage').style.display = 'none';
    document.getElementById('homeScreen').style.display = 'block';
}
//------------------------------------

//----------------Display a question. 
/**
 * When the quiz is started display a question in the innerHTML of the head
 *  Display the possible quiz answers as radio button selections.
 * When the last question is answered the scoreBtn is displayed
 */
let question = document.getElementById('question');
let currentQuestion = 0;
let answerOption = document.querySelectorAll('.answerOption');

function displayQuestion() {
    if (currentQuestion === questionList.length) {
        document.getElementById('scoreBtn').style.display = 'block';
    } else {
        for (let i = 0; i < questionList.length; i++) {
            question.innerHTML = questionList[currentQuestion].question;
        }
        answerOption[0].innerHTML = questionList[currentQuestion].a;
        answerOption[1].innerHTML = questionList[currentQuestion].b;
        answerOption[2].innerHTML = questionList[currentQuestion].c;
        answerOption[3].innerHTML = questionList[currentQuestion].d;
    }
}
displayQuestion();
//------------------------------------

//Display the question counter
function questionNumber() {
    let questionCount = document.getElementById('questionCount');
    questionCount.innerHTML = `Question ${currentQuestion} of ${questionList.length}`;
}
questionNumber();

//When user selects an answer
/**
 * When the user selects an answer run a function that compares the selected answer to the correct answer
 * if the answer is correct:
 * increment the correct count
 * display a new question
 * if the answer is incorrect:
 * increment the wrong count
 * display a new question
 */
let correctCount = 0;
let wrongCount = 0;
let answerClicked = false;

function selectedAnswer() {
    let radioValue = this.value;
    if (radioValue === questionList[currentQuestion].answer) {
        answerClicked = true;
        correctCount++;
        document.getElementById('correct').innerHTML = correctCount;
        currentQuestion++;
        displayQuestion();
        questionNumber();
        countdown();
    } else {
        answerClicked = true;
        wrongCount++;
        document.getElementById('wrong').innerHTML = wrongCount;
        currentQuestion++;
        displayQuestion();
        questionNumber();
        countdown();
    }
}

document.getElementById('radioA').onclick = selectedAnswer;
document.getElementById('radioB').onclick = selectedAnswer;
document.getElementById('radioC').onclick = selectedAnswer;
document.getElementById('radioD').onclick = selectedAnswer;

//Countdown timer
/**
 * Display a time of 20secs for each question
 * when the countdown reaches 0 increment the wrong answer number
 * and display the next question.
 * The timer should start at 20 for each new question
 */
let time = 20;
let clock = document.getElementById('timer');

function countdown() {
    let countdownClock = setInterval(() => {
        time--;
        if (time === 0) {
            wrongCount++;
            document.getElementById('wrong').innerHTML = wrongCount;
            currentQuestion++;
            displayQuestion();
            questionNumber();
            time = 20;
        } else if (answerClicked) {
            clearInterval(countdownClock);
            time = 20;
            answerClicked = false;
        }
        clock.innerHTML = time;
        //Stops the countdown
        if (currentQuestion == questionList.length) {
            clearInterval(countdownClock)
        }
    }, 1000);
}

//Calculate Score
/**Depending on what score the user got, a different message will be displayed*/
let quizGrade = document.getElementById('quizGrade');
let quizResult = document.getElementById('resultText');

function calculateScore() {
    if (correctCount === 30) {
        quizGrade.innerHTML = 'A+';
        quizResult.innerHTML = 'You scored ' + Math.round((correctCount / questionList.length) * 100) + '% Certified Hacker!! You know your stuff';
    } else if (correctCount >= 25) {
        quizGrade.innerHTML = 'A';
        quizResult.innerHTML = 'You scored ' + Math.round((correctCount / questionList.length) * 100) + '% You know your stuff!!';
    } else if (correctCount >= 20) {
        quizGrade.innerHTML = 'B';
        quizResult.innerHTML = 'You scored ' + Math.round((correctCount / questionList.length) * 100) + '% Nice Work!!';
    } else if (correctCount >= 15) {
        quizGrade.innerHTML = 'C';
        quizResult.innerHTML = 'You scored ' + Math.round((correctCount / questionList.length) * 100) + '% You need to brush up on some stuff';
    } else if (correctCount < 10) {
        quizGrade.innerHTML = 'D';
        quizResult.innerHTML = 'You scored ' + Math.round((correctCount / questionList.length) * 100) + '% Do you even code?!! :/';
    }
}
document.getElementById('scoreBtn').onclick = calculateScore;

/** Saving users results to local storage using https://www.youtube.com/watch?v=DFhmNLKwwGw James Q Quick tutorial*/
let username = document.getElementById('username');
let saveScoreBtn = document.getElementById('saveScoreBtn');
let highScores = JSON.parse(localStorage.getItem('highScores')) || [];


function saveHighScore() {
    //An object used to store the users name and score
    let score = {
        score: Math.round((correctCount / questionList.length) * 100),
        name: username.value
    };
    /**Adds the score object to the highScores array
     * sorts the array by highest score
     * and shows only the first five items in that array
     */
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score)
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');
}
saveScoreBtn.onclick = function () {
    saveHighScore();
    saveScoreBtn.style.backgroundColor = "#48DEA8";
    saveScoreBtn.innerHTML = "Saved";
}

let scoreBoard = document.getElementById('scoreBoard');
scoreBoard.innerHTML = highScores.map(score => {
    return `<li>${score.name} - ${score.score}%</li>`;
}).join('');