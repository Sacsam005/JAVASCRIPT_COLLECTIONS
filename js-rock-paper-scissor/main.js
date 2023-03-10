const playGame = confirm('Do you want to play rock, paper, or scissor?');

if (playGame) {
    let playerChoice = prompt('Please enter rock, paper, or scissor...');
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();

        if (playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissor') {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? 'rock' : computerChoice === 2 ? 'paper' : 'scissor';

            let result = playerOne === computer ? `Player 1: ${playerOne}\nComputer : ${computer}\nGame-tied`
                : playerOne === 'rock' && computer === 'paper' ?
                    `Player 1 : ${playerOne}\nComputer : ${computer}\nComputer wins`
                    : playerOne === 'paper' && computer === 'scissor' ?
                        `Player 1 : ${playerOne}\nComputer : ${computer}\nComputer wins`
                        : playerOne === 'scissor' && computer === 'rock' ?
                            `Player 1 : ${playerOne}\nComputer : ${computer}\nComputer wins`
                            : `Player 1 : ${playerOne}\nComputer : ${computer}\nPlayer 1 wins`;
            alert(result);

            let playAgain = confirm('Play again?');
            if (playAgain) {
                window.location.reload();
            }
            else {
                alert('Ok! Thanks for playing');
            }
        }
        else {
            alert("You didn't enter rock, paper, or scissor !");
        }
    }
    else {
        alert("I think you changed your mind. Let's play next time.")
    }
}
else {
    alert('Ok! May be next time.')
}