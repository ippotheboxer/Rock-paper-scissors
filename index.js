var choices = ["rock", "paper", "scissors"];
var user_wins = 0;
var comp_wins = 0;
var tieScore = 0;

function computerMove() {
    var compMove = choices[Math.floor(Math.random()*choices.length)];
    if (compMove==='rock') {
        $("#computerChoiceImg").text("👊");
    }
    if (compMove==='scissors') {
        $("#computerChoiceImg").text("✂️");
    }
    if (compMove==='paper') {
        $("#computerChoiceImg").text("📄");
    }
    
    return compMove;
}

function checkWinner(usersMove, computersMove) {
    if ((usersMove === "rock" && computersMove === "scissors") || (usersMove === "scissors" && computersMove === "paper") || (usersMove === "paper" && computersMove === "rock")) {
        $("h2#showWinner").text("You win!");
        user_wins++
        $("p").text("... How could I lose!");
    }
    else if (usersMove===computersMove) {
        $("h2#showWinner").text("It's a tie!");
        tieScore++;
        $("p").text("Next time I'll get you! You just got lucky.");
    }
    else {
        $("h2#showWinner").text("Computer wins!");
        comp_wins++;
        $("p").text("Muahhahahhahah. Fool.");
    }
}

$(".weaponChoice").click(function() {
    let userChoice = this.id;
    let computerChoice = computerMove();
    checkWinner(userChoice, computerChoice);
    $("h2#scoreBoard").text(`User: ${user_wins} | Computer: ${comp_wins} | Ties: ${tieScore}`)
});