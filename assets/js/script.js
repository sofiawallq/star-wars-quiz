import { questions } from "./questions.js";

// Get element Ids
let question = document.getElementById('question');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let score = document.getElementById('score');
let playAgain = document.getElementById('playAgain');
let wrapper = document.getElementById('wrapper');
let popup = document.getElementById('popup-background');
let finalScore = document.getElementById('finalScore');
let container = document.querySelector('.container');
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
 * This function checks the answer button that has been pressed.
 * If correct it increments the score and question number.
 * It also checks if it is the end of the quiz
 */
function checkAnswer(answerNumber) {
  // we check what the correct answer is for this question
  let correctAnswer = questions[questionNumber].correct
  if (answerNumber === correctAnswer) {
    // if correct we increment the score by 1
    scoreAmount++;
    score.innerText = scoreAmount;
  }

  // after we increment the questionNumber
  questionNumber++;

  // Update the progress bar
  updateProgressBar();
  
  // we check if it is the end of the quiz ( have we run out of questions)
  if (questionNumber === quizLength) {
    endgame();
  } else {
    // if not we load the next question
    loadQuestion(questionNumber);
    loadAnswers(questionNumber);
  }
}

/**
 * This function updates the progress bar each turn
 */
function updateProgressBar() {
  let progressBar = document.getElementById('progress-fill');
  let widthPercentage = (questionNumber / quizLength) * 100;
  progressBar.style.width = widthPercentage + '%';
}

function endgame() {
  playAgain.style.visibility = "visible";
  finalScore.innerText = scoreAmount;
  let info = "That was terrible, have you actually watched Star Wars?"
  if (scoreAmount > 3) {
    info = "Well some improvement is needed - maybe use the force?"
  }
  if (scoreAmount > 5) {
    info = "Well done, not a bad attempt at all, you're on the good side"
  }
  if (scoreAmount > 7) {
    info = "I think you are ready for Jedi school with a score like that"
  } 
  if (scoreAmount === 10) {
    info = "Amazing! Yoda, is that you?"
  }
  message.innerText = info;
  popup.style.visibility = "visible";
}

// This function ends game
function endgameOption(chosen) {
  if (chosen === 0) {
    window.location.reload()
  } else {
    container.innerHTML = "<h1>Thanks for playing...</h1>"
  }
}

// This function starts the quiz
function startQuiz() {
  playAgain.style.visibility = "hidden";
  popup.style.visibility = "hidden";
  loadQuestion(questionNumber);
  loadAnswers(questionNumber);
  updateProgressBar();
}

document.addEventListener('DOMContentLoaded', function() {
  let answer1 = document.getElementById('answer1');
  let answer2 = document.getElementById('answer2');
  let answer3 = document.getElementById('answer3');

  answer1.addEventListener('click', () => checkAnswer(0));
  answer2.addEventListener('click', () => checkAnswer(1));
  answer3.addEventListener('click', () => checkAnswer(2));

  startQuiz();
});