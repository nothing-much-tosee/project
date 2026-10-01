let playerName = "";

function getPlayerName() {
    playerName = document
        .getElementById("playerName")
        .value;
    if (playerName.trim() === "") {

        // Set a default name if
        // none provided
        playerName = "Anonymous";
    }
}

function startGame() {
    getPlayerName();
    document.getElementById("startScreen")
        .style.display = "none";
    document.getElementById("gameScreen")
        .style.display = "block";
    Text.draw(`Hello, ${playerName}!
                       Click to play!`);
    canvas.removeEventListener('click',
        startGame);
    canvas.addEventListener('click', x);
}

document.getElementById("startButton")
    .addEventListener("click", startGame);