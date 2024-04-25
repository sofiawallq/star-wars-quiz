// Import quiz questions from separate js-file, focus on functions and eventlisteners below
import {
  questions
} from "./questions.js";

// Get element ids
let question = document.getElementById('question');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let button = document.querySelector('button');
let chewie = document.getElementById('chewie');
let score = document.getElementById('score');
let popup = document.getElementById('popup-background');
let finalScore = document.getElementById('finalScore');
let playAgain = document.getElementById('playAgain');
let message = document.getElementById('message');

let questionNumber = 0;
let scoreAmount = 0;

let quizLength = questions.length;

/**
 * This function loads the question into the quiz
 * On both the loading questions and checking the answers functions
 * my mentor Spencer Barriball has been extremely helpful with the code
 */
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
  let correctAnswer = questions[questionNumber].correct;
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

  // Display image for question nr 3 and hide it for other questions
  if (questionNumber === 3) {
    displayImage();
  } else {
    hideImage();
  }
}

/**
 * This function displays an image for question number 3
 */
function displayImage() {
  chewie.style.display = "block";
}
/**
 * This function hides the image
 */
function hideImage() {
  chewie.style.display = "none";
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
 * This eventListener changes the style of the buttons when you hover over them
 */
button.addEventListener('mouseenter', function () {
  button.style.cursor = 'pointer';
  button.style.backgroundColor = 'rgba(246, 190, 0, 0.6)';
});
button.addEventListener('mouseleave', function () {
  button.style.cursor = 'default';
  button.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
});

/**
 * This function shows a window with the users final score
 * It shows a message to the user depending on their score
 * It also gives the user the option to try again
 */
function endgame() {
  playAgain.style.visibility = "visible";
  popup.style.visibility = "visible";
  finalScore.innerText = scoreAmount;
  let info = "That was terrible, have you actually watched Star Wars?";
  if (scoreAmount > 3) {
    info = "Well some improvement is needed - maybe use the force?";
  }
  if (scoreAmount > 5) {
    info = "Well done, not a bad attempt at all. You're on the good side of the force";
  }
  if (scoreAmount > 7) {
    info = "I think you are ready for Jedi school with a score like that";
  }
  if (scoreAmount === 10) {
    info = "Amazing! Yoda, is that you?";
  }
  message.innerText = info;
  // Add event listener to "Play Again" button
  let playAgainButton = document.querySelector('#playAgain button');
  playAgainButton.addEventListener('click', function () {
    window.location.reload();
  });
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
  hideImage();
}

/**
 * This function attach event listeners to answer buttons
 */
function attachEventListeners() {
  let answer1 = document.getElementById('answer1');
  let answer2 = document.getElementById('answer2');
  let answer3 = document.getElementById('answer3');

  answer1.addEventListener('click', () => checkAnswer(0));
  answer2.addEventListener('click', () => checkAnswer(1));
  answer3.addEventListener('click', () => checkAnswer(2));
}
// Call the function to attach event listeners
attachEventListeners();
// Start the quiz
startQuiz();