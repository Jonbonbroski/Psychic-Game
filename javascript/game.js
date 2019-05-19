
//creating global variables for game
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                "n","o","p","q","r","s","t","u","v","w","x","y","z"];
var chosenLtr = [];
var playerGuess; //the actual guess the player chooses.
var guesses = []; //storing guesses.
var chancesCounter = 5;


//selects random letter when "play" button is clicked
document.getElementById("start-button").addEventListener("click", function(){
    chosenLtr = alphabet[Math.floor(Math.random()*alphabet.length)];
    console.log(chosenLtr);
});

//determines which guess player makes with keyboard
//also is the start of the comparison.
document.onkeyup = function(guess){

    playerGuess = guess.key;
    console.log(playerGuess);


//game rules
    
    if(playerGuess === chosenLtr){
        alert("You won!");
        chosenLtr = [];
        chancesCounter = 5;
    }else if(playerGuess !== chosenLtr && chancesCounter > 0){
        chancesCounter--;
        guesses.push(playerGuess);
        var guessTracker = document.createTextNode( "-" + playerGuess);
        guessTracker.textContent = playerGuess;
        document.getElementById("guesses").appendChild(guessTracker);
        alert("try again");

    }else {
        chosenLtr = [];
        alert("You Lose!");
        chosenLtr = [];
        chancesCounter = 5;
    };


};


