 const options = document.querySelectorAll(".options");
    let playerScore = 0;
    let compScore = 0;

options.forEach((option) => {
    option.addEventListener("click", function () {
        const playerInput = this.value;
//Assigning computer options
        const compOptions = ["Rock", "Paper", "Scissors"];
        const compInput = compOptions[Math.floor(Math.random() * 3)];
   
//Updating the score   
        updateMoves(playerInput, compInput);
        compareInputs(playerInput, compInput);
        updateScore();
        if(checkWinner()){
			playerScore = compScore= 0;
			updateScore();
        }
      });
    });




 function compareInputs(playerInput, compInput) {
    const currentGame = `${playerInput} vs ${compInput}`;
//If it's a tie
	if (playerInput === compInput) {
		alert(`${currentGame} is a Tie`);
        return;
    }
//If Player selects rock
    if (playerInput === "Rock") {
        if (compInput === "Scissors") {
			alert(`${currentGame} = You Win`);
			playerScore++;
        } 
		else {
			alert(`${currentGame} = Computer Wins`);
			compScore++;
        }
      }
//If player selects paper
    else if (playerInput === "Paper") {
        if (compInput === "Rock") {
			alert(`${currentGame} = You Win`);
			playerScore++;
        } 
		else {
			alert(`${currentGame} = Computer Wins`);
			compScore++;
        }
      }
//If player selects scissors
    else if (playerInput === "Scissors") {
        if (compInput === "Paper") {
			alert(`${currentGame} = You Win`);
			playerScore++;
        } 
		else {
			alert(`${currentGame} = Computer Wins`);
			compScore++;
        }
    }
//Else statement - Error
    else {
        alert("Error");
    }
}
//update score
    function updateScore() {
      document.getElementById("player-score").textContent = playerScore;
      document.getElementById("comp-score").textContent = compScore;
    }
    function updateMoves(playerInput, compInput){
      document.getElementById("player-move").src = `./image/${playerInput}.jpg`;
      document.getElementById("comp-move").src = `./image/${compInput}.jpg`;
    }
//when someone wins 3 games start again
    function checkWinner() {
      if (playerScore === 3 || compScore === 3) {
        const winner =
          playerScore === 3
            ? "You win, start again"
            : "Computer wins, start again";
        alert(winner);
        return true;
      }
      return false;
    }