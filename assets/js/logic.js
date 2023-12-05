const startButton = document.getElementById("start");
const timeElement = document.getElementById("time");
const questionTitleElement = document.getElementById("question-title");
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");

let currentQuestionIndex = 0;
let timer;
let timeLeft = 60;

startButton.addEventListener("click", startQuiz);