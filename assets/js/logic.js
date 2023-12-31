const startButton = document.getElementById("start");
const timeElement = document.getElementById("time");
const questionsElement = document.getElementById("questions");
const questionTitleElement = document.getElementById("question-title");
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");

let currentQuestionIndex = 0;
let timer;
let timeLeft = 60;

startButton.addEventListener("click", startQuiz);

function startQuiz() {

    var openingScreenElement = document.getElementById("start-screen");
    openingScreenElement.setAttribute("class", "hide");
    questionsElement.removeAttribute("class");

    startTimer();

    displayQuestion();
}

function startTimer() {

    const interval = 1000;

    timer = setInterval(function () {
        timeLeft = timeLeft - 1;
        timeElement.textContent = timeLeft;


        if (timeLeft <= 0) {
            endQuiz();
        }
    }, interval);
}

function displayQuestion() {
   
    const currentQuestion = questions[currentQuestionIndex];

    questionTitleElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach((choice, index) => {
      const choiceButton = document.createElement("button");
      choiceButton.textContent = choice;
      choiceButton.addEventListener("click", function () {
        checkAnswer(index);
      });
      choicesElement.appendChild(choiceButton);
    });
  }

  function checkAnswer(choiceIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.choices[choiceIndex] === currentQuestion.correctAnswer) {
      feedbackElement.textContent = "Correct!";

    } else {
      timeLeft = timeLeft - 10;
      feedbackElement.textContent = "Wrong!";
    }
    
      currentQuestionIndex++;

      if (currentQuestionIndex < questions.length) {
        displayQuestion();

      } else {

        endQuiz();
      }

      if (timeLeft <= 0) {
        endQuiz();
      }
    }
  
    function saveHighscore() {
        var name = initialsInput.value;
        
        if (name !== "") {
            var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
            var newScore = {
              score: time,
              name: name
            };
            highscores.push(newScore);
            window.localStorage.setItem("highscores", JSON.stringify(highscores));
          }
        }
        
        function checkForEnter(event) {
          if (event.key === "Enter") {
            saveHighscore();
          }
        }
        
        initialsInput.addEventListener("keyup", checkForEnter);
        submitButton.addEventListener("click", saveHighscore);
        startButton.addEventListener("click", startQuiz);
        