
let computerChoice=["Rock","Paper","Scissor"];
function getComputerChoice(computerChoice){
    
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
   
}

function playerSelection(){

}


console.log(getComputerChoice(computerChoice));