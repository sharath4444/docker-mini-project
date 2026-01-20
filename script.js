const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

function play(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (userChoice === computerChoice) {
        result = "😐 It's a draw!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `🎉 You win! Computer chose ${computerChoice}`;
        userScore++;
    } else {
        result = `😢 You lose! Computer chose ${computerChoice}`;
        computerScore++;
    }

    document.getElementById("result").innerText = result;
    document.getElementById("userScore").innerText = userScore;
    document.getElementById("computerScore").innerText = computerScore;
}
