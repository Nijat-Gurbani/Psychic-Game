var wins = 0;
var losses = 0;
var guessesLeft = 12;
var letterUser = [];

var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computerAprox = computerChoice[Math.floor(Math.random() * computerChoice.length)];


var restart = function() {
    guessesLeft = 12;
    letterUser = [];
    computerAprox = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log("Computer estimate -- " + computerAprox)
}

function estimatedNumbers() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function userAprox() {
    document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
}

estimatedNumbers();
restart()

document.onkeyup = function(event) {
    guessesLeft--;

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    letterUser.push(userGuess);
    estimatedNumbers();
    userAprox();

    if (userGuess === computerAprox) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        alert(computerAprox + " -- You guessed right")
        restart();
    } else if (guessesLeft === 0) {
        losses++;
        document.querySelector("#lose").innerHTML = "Loses: " + losses;
        alert("YOU DID NOT GUESS CORRECTLY")
        restart();
    }
};