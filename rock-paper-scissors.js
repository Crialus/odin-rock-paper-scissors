function playGame(computer, human) {
    function getComputerChoice() {
        const options = ["rock", "paper", "scissors", "rock"];
        let x = Math.floor(Math.random()*3)+1;
        return options[x]
    }
    function getHumanChoice() {
        return(prompt("Enter a choice of \"rock\", \"paper\" or \"scissors\"").toLowerCase())
    }
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Tie - No winner")
            return -1;
        }
        else if (options.indexOf(humanChoice) + 1 == options.indexOf(computerChoice, 1)){
            console.log(`Sorry you lose, ${computerChoice} beats ${humanChoice}`)
            return 0;
        }
        else {
            console.log(`You win, ${humanChoice} beats ${computerChoice}`)
            return 1;
        }      
    }
    function winner(computer, human) {
        if (computer == 5) {
            console.log("Game over, Computer wins!");
            return false;
        }
        else if (human == 5) {
            console.log("Game over, Player wins!");
            return false;
        }
        else {
            return true;
        }
    }
    do {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        let y = playRound(humanChoice,computerChoice);
            if (y==0) {
                computer++;
            }
            else if (y==1) {
                human++;
            }
    } while(winner(computer,human))
}
 


let computerScore = 0;
let humanScore = 0;

playGame(computerScore,humanScore);


