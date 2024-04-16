// getters
let question = document.getElementById('question');
let answer1 = document.getElementById('answer0');
let answer2 = document.getElementById('answer1');
let answer3 = document.getElementById('answer2');
let score = document.getElementById('score');
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
      "correct": 2
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
      "question": "In what movie do we first encounter Boba Fett?",
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