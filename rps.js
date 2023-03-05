let playerWinCount=0;
let computerWinCount=0;


const playerWinCountDisplay = document.querySelector("#player-count");
const computerWinCountDisplay = document.querySelector("#computer-count");
const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
const btnReset = document.querySelector("#reset");

btnRock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    compareChoice(playerSelection,computerSelection);
});

btnPaper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    compareChoice(playerSelection,computerSelection);
});

btnScissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    compareChoice(playerSelection,computerSelection);
});

btnReset.addEventListener('click', () => {
    resetScore();
});

function getComputerChoice(){
    const computerChoice=["rock","paper","scissors"];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
   
};

//reset button and reset score
function resetScore(){
    playerWinCount = 0;
    computerWinCount = 0;
    playerWinCountDisplay.textContent = playerWinCount;
    computerWinCountDisplay.textContent = computerWinCount;
}

//compare the computer and playerchoice
function compareChoice(playerPick,computerPick){
    console.log(computerPick);
    console.log(playerPick);

        if (playerPick === computerPick) {
            alert("Its a tie");
            return;
        }
        else if(playerPick === "rock" && computerPick === "scissors"||
                playerPick === "paper" && computerPick === "rock"||
                playerPick === "scissors" && computerPick === "paper"){
               // alert(`You won! You pick ${playerPick} beats Computer pick ${computerPick}`);
                playerWinCount++;
                playerWinCountDisplay.textContent = playerWinCount;
                if (playerWinCount === 10 ){
                    alert(`Final score: You won ${playerWinCount} - ${computerWinCount} Computer`);
                    resetScore()
                  }
                return ;
                
        }
        else{
            //alert(`You lose Computer pick ${computerPick} beats You pick ${playerPick}`)
                computerWinCount++;
                computerWinCountDisplay.textContent = computerWinCount;
                if (computerWinCount === 10 ){
                    alert(`Final score: You won ${playerWinCount} - ${computerWinCount} Computer`);
                    resetScore()
                    }
                return ;
        }   

};

//create a loop that counts the winner
function multiRounds(){
      for(let i = 0 ; i < (playerWinCount <= 10 ) || (playerWinCount <= 10) ; i++){
        compareChoice();
        
        
   
}
}

