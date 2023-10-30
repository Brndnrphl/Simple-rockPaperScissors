document.addEventListener("DOMContentLoaded", () => {
    const moves = ['rock', 'paper', 'scissors'];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }


    // event listeners
    document.getElementById("rock").addEventListener("click", function () {
        handleUserSelection("rock");
    });

    document.getElementById("paper").addEventListener("click", function () {
        handleUserSelection("paper");
    });

    document.getElementById("scissors").addEventListener("click", function () {
        handleUserSelection("scissors");
    });

    function handleUserSelection(selection) {
        let index = moves.indexOf(selection);
        let userPick = moves[index];
        let computerPickIndex = Math.floor(Math.random() * moves.length);
        let computerPick = moves[computerPickIndex];

        if (userPick === computerPick) {
            console.log("Tie!");
            document.getElementById("ties").innerText = parseInt(document.getElementById("ties").innerText) + 1;
        } else if (userPick === "rock" && computerPick === "scissors") {
            console.log("You win!");
            document.getElementById("player-score").innerText = parseInt(document.getElementById("player-score").innerText) + 1;
        } else if (userPick === "paper" && computerPick === "rock") {
            console.log("You win!");
            document.getElementById("player-score").innerText = parseInt(document.getElementById("player-score").innerText) + 1;
        } else if (userPick === "scissors" && computerPick === "paper") {
            console.log("You win!");
            document.getElementById("player-score").innerText = parseInt(document.getElementById("player-score").innerText) + 1;
        } else {
            console.log("You lose!");
            document.getElementById("computer-score").innerText = parseInt(document.getElementById("computer-score").innerText) + 1;
        }
    }
})