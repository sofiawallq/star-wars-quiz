import { questions } from "./questions.js";

// Get element Ids
let question = document.getElementById('question');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let chewie = document.getElementById('chewie');
let score = document.getElementById('score');
let popup = document.getElementById('popup-background');
let finalScore = document.getElementById('finalScore');
let playAgain = document.getElementById('playAgain');
let container = document.getElementsByClassName('container');
let message = document.getElementById('message');

let questionNumber = 0;
let scoreAmount = 0;

let quizLength = questions.length;

function loadQuestion(questionNumber) {
  question.innerText = questions[questionNumber].question;
}

/**
 * This function loads answers into the choice buttons
 */
function loadAnswers(questionNumber) {
  answer1.innerText = questions[questionNumber].answers[0];
  answer2.innerText = questions[questionNumber].answers[1];
  answer3.innerText = questions[questionNumber].answers[2];
}

/**
 * This function checks the answer button that has been pressed
 * If correct it increments the score and question number by 1
 * If correct it updates the progress bar
 * It also checks if it is the end of the quiz
 */
function checkAnswer(answerNumber) {
  let correctAnswer = questions[questionNumber].correct
  if (answerNumber === correctAnswer) {
    scoreAmount++;
    score.innerText = scoreAmount;
  }

  // Increment the questionNumber
  questionNumber++;

  // Update the progress bar
  updateProgressBar();
  
  // Check if it is the end of the quiz
  if (questionNumber === quizLength) {
    endgame();
  } else {
    loadQuestion(questionNumber);
    loadAnswers(questionNumber);
  }
}

/**
 * This function updates the progress bar after each question is answered
 */
function updateProgressBar() {
  let progressBar = document.getElementById('progress-fill');
  let widthPercentage = (questionNumber / quizLength) * 100;
  progressBar.style.width = widthPercentage + '%';
}

/**
 * Function to display image for question number 3
*/
function displayImage() {
  if (questionNumber === 3) {
    chewie.style.display = 'visible';
  }
}

/**
 * This function shows a window with the users final score
 * It shows a message to the user depending on their score
 * It also gives the option to try again
 */
function endgame() {
  playAgain.style.visibility = "visible";
  popup.style.visibility = "visible";
  finalScore.innerText = scoreAmount;
  let info = "That was terrible, have you actually watched Star Wars?"
  if (scoreAmount > 3) {
    info = "Well some improvement is needed - maybe use the force?"
  }
  if (scoreAmount > 5) {
    info = "Well done, not a bad attempt at all, you're on the good side of the force"
  }
  if (scoreAmount > 7) {
    info = "I think you are ready for Jedi school with a score like that"
  } 
  if (scoreAmount === 10) {
    info = "Amazing! Yoda, is that you?"
  }
  message.innerText = info;
}

/**
 * This function ends game
 */ 
function endgameOption(chosen) {
  if (chosen === 0) {
    window.location.reload()
  } else {
    container.innerHTML = "<h1>Thanks for playing...</h1>"
  }
}

/** 
 * This function starts the quiz
 */ 
function startQuiz() {
  playAgain.style.visibility = "hidden";
  popup.style.visibility = "hidden";
  score.style.visibility = "hidden";
  loadQuestion(questionNumber);
  loadAnswers(questionNumber);
  updateProgressBar();
}

// Load questions into quiz
document.addEventListener('DOMContentLoaded', function() {
  let answer1 = document.getElementById('answer1');
  let answer2 = document.getElementById('answer2');
  let answer3 = document.getElementById('answer3');

  answer1.addEventListener('click', () => checkAnswer(0));
  answer2.addEventListener('click', () => checkAnswer(1));
  answer3.addEventListener('click', () => checkAnswer(2));

  startQuiz();
});