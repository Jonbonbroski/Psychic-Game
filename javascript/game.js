
//creating global variables for game
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var chosenLtr = [];
var playerGuess; //the actual guess the player chooses.
var guesses = []; //storing guesses to mark out.
var chancesCounter = 5;
var letterBtn;


document.getElementById("start-button").addEventListener("click", function(){
//loop to create buttons with alphabet
 for( var i = 0; i < alphabet.length; i++){
    letterBtn = document.createElement("button");
    letterBtn.className += "letter-buttons";
    letterBtn.setAttribute("button-info",alphabet[i])
    letterBtn.textContent = alphabet[i];
    document.getElementById("alph-buttons").appendChild(letterBtn);
};

document.getElementsByClassName("letter-buttons").addEventListener("click",function(){

    playerGuess.push(letterBtn);
    alert(playerGuess);
});


});