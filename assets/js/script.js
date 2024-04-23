// Get element Ids
let question = document.getElementById('question');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let score = document.getElementById('score');
let prevButton = document.getElementById('prev-button');
let nextButton = document.getElementById('next-button');
let progressBar = document.getElementById('progress-bar');
let progressBarFill = document.getElementById('progress-fill');
let playAgain = document.getElementById('playAgain');
let wrapper = document.getElementById('wrapper');

let questionNumber = 0;
let scoreAmount = 0;

let questions = [
  {
    "question": "What is Darth vaders real name?",
    "answers": [
      "Han Solo", "Anakin Skywalker", "Obi-Wan Kenobi"
    ],
    "correct": 1
  },
  {
    "question": "What is princess Leias last name?",
    "answers": [
      "Organa", "Skywalker", "Solo"
    ],
    "correct": 0
  },
  {
    "question": "on what planet do the Ewoks live?",
    "answers": [
      "Tatooine", "Endor", "Dagobah"
    ],
    "correct": 1
  },
  {
    "question": "What kind of creature is Chewbacca?",
    "answers": [
      "Wookie", "Hutt", "Bantha"
    ],
    "correct": 0
  },
  {
    "question": "What is Jar Jar Binks tribe called?",
    "answers": [
      "Tulpaa", "Jindas", "Gungan"
    ],
    "correct": 2
  },
  {
    "question": "What planet was Padmé Amidala queen of?",
    "answers": [
      "Naboo", "Tatooine", "Coruscant"
    ],
    "correct": 0
  },
  {
    "question": "What is Anakin Skywalkers mothers name?",
    "answers": [
      "Padmé Skywalker", "Rey Skywalker", "Shmi Skywalker"
    ],
    "correct": 2
  },
  {
    "question": "Anakins mother is played by a swedish actress - who?",
    "answers": [
      "Pernilla August", "Lena Olin", "Alicia Wikander"
    ],
    "correct": 0
  },
  {
    "question": "in what movie do we first encounter Boba Fett?",
    "answers": [
      "Attack of the clones", "The Empire Strikes Back", "Return of the Jedi"
    ],
    "correct": 1
  },
  {
    "question": "Who is the father of Kylo Ren?",
    "answers": [
      "Luke Skywalker", "Han Solo", "Darth Vader"
    ],
    "correct": 1
  },
]

let quizLength = questions.length;

function loadQuestion(questionNumber) {s
  question.innerText = questions[questionNumber].question;
}

/**
 * This function loads answers into the choice buttons
 * @param {int} questionNumber 
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
 * @param {int} answerNumber 
 */
function checkAnswer(answerNumber) {
  console.log('answer number chosen:', answerNumber);
  // we check what the correct answer is for this question
  let correctAnswer = questions[questionNumber].correct
  if (answerNumber === correctAnswer) {
    // if correct we increment the score by 1
    scoreAmount++;
    score.innerText = scoreAmount;
  }

  // after we increment the questionNumber
  questionNumber++;
  // we check if it is the end of the quiz
  if (questionNumber === quizLength) {
    endgame();
  } else {
    // if not we load the next question
    loadQuestion(questionNumber);
    loadAnswers(questionNumber);
  }
}

function handleNextButton() {
  questionNumber++;
  // we check if it is the end of the quiz
  if (questionNumber === quizLength) {
    endgame();
  } else {
    // if not we load the next question
    loadQuestion(questionNumber);
    loadAnswers(questionNumber);
  }
}

nextButton.addEventListener('click', handleNextButton);

function endgame() {
  playAgain.style.visibility = "visible";
}

// This function ends game
function endgameOption(chosen) {
  if (chosen === 0) {
    window.location.reload()
  } else {
    wrapper.innerHTML = "<h1>Thanks for playing...</h1>"
  }
}

// This function starts the quiz
function startQuiz() {
  playAgain.style.visibility = "hidden";
  loadQuestion(questionNumber);
  loadAnswers(questionNumber);
}

startQuiz();