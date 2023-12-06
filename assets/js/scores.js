const highscoresList = document.getElementById("highscores");

function displayHighscores() {

    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    highscores.sort((a, b) => b.score - a.score);

    highscores.forEach((score, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${score.name} - ${score.score}`;
        highscoresList.appendChild(listItem);
    });

}


function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;

displayHighscores();


