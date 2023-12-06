const highscoresList = document.getElementById("highscores");

function displayHighscores() {
    // Retrieve high scores from local storage
    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
}