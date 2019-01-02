
//WORD VARS
var words = ["blackpanther", "ironman", "deadpool", "spiderman", "wolverine", "fantasticfour", "captainamerica", "incrediblehulk"]

//Empty variables
var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//Counter variables
var wins = 0;
var losses = 0;
var guessesRemaining = 10;


//GAME FUNCTION
function Game() {
    //computer generates random word from words array.
    randomWord = words[Math.floor(Math.random() * words.length)];

    //split the individual word into separate arrays, and store in new array.
    lettersOfWord = randomWord.split("");

    //store length of word in blanks.
    blanks = lettersOfWord.length;

    //creating a loop to generate "_" for each letter in array stored in blanks.
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //showing the "_" within HTML
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    //console logging 
    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}



//AUDIO FUNCTION

//Background Music Button
$(".button").on("click", function() {
marvel.play();
});

//vars for audio function
var blackpanther = document.getElementById("blackpanther");
var ironman = document.getElementById("ironman");
var deadpool = document.getElementById("deadpool");
var spiderman = document.getElementById("spiderman");
var wolverine = document.getElementById("wolverine");
var fantasticfour = document.getElementById("fantasticfour");
var captainamerica = document.getElementById("captainamerica");
var incrediblehulk = document.getElementById("incrediblehulk");
var tryagain = document.getElementById("tryagain");
var marvel = document.getElementById("marvel");

function aud() {
    //Black Panther Audio & Image
    //---------------------------
    if (randomWord === words[0]) {
        marvel.pause();
        incrediblehulk.pause();
        captainamerica.pause();
        fantasticfour.pause();
        wolverine.pause();
        spiderman.pause();
        deadpool.pause();
        ironman.pause();
        blackpanther.play();
        document.getElementById("image1").src = "./assets/images/blackpanther.gif";
    }
    //Iron Man Audio & Image
    //---------------------------
    if (randomWord === words[1]) {
        marvel.pause();
        incrediblehulk.pause();
        captainamerica.pause();
        fantasticfour.pause();
        wolverine.pause();
        spiderman.pause();
        deadpool.pause();
        blackpanther.pause();
        ironman.play();
        document.getElementById("image1").src = "./assets/images/ironman.gif";
    }
    //Deadpool Audio & Image
    //---------------------------
    else if (randomWord === words[2]) {
        marvel.pause();
        incrediblehulk.pause();
        captainamerica.pause();
        fantasticfour.pause();
        wolverine.pause();
        spiderman.pause();
        ironman.pause();
        blackpanther.pause();
        deadpool.play();
        document.getElementById("image1").src = "./assets/images/deadpool.gif";
    }
    //Spider Man Audio & Image
    //---------------------------
    else if (randomWord === words[3]) {
        marvel.pause();
        incrediblehulk.pause();
        captainamerica.pause();
        fantasticfour.pause();
        wolverine.pause();
        deadpool.pause();
        ironman.pause();
        blackpanther.pause();
        spiderman.play();
        document.getElementById("image1").src = "./assets/images/spiderman.gif";
    }
    //Wolverine Audio & Image
    //---------------------------
    else if (randomWord === words[4]) {
        marvel.pause();
        incrediblehulk.pause();
        captainamerica.pause();
        fantasticfour.pause();
        spiderman.pause();
        deadpool.pause();
        ironman.pause();
        blackpanther.pause();
        wolverine.play();
        document.getElementById("image1").src = "./assets/images/wolverine.gif";
    }
    //Fantasticfour Audio & Image
    //---------------------------
    else if (randomWord === words[5]) {
        marvel.pause();
        incrediblehulk.pause();
        captainamerica.pause();
        wolverine.pause();
        spiderman.pause();
        deadpool.pause();
        ironman.pause();
        blackpanther.pause();
        fantasticfour.play();
        document.getElementById("image1").src = "./assets/images/fantasticfour.gif";
    }
    //Captainamerica Audio & Image
    //---------------------------
    else if (randomWord === words[6]) {
        marvel.pause();
        incrediblehulk.pause();
        fantasticfour.pause();
        wolverine.pause();
        spiderman.pause();
        deadpool.pause();
        ironman.pause();
        blackpanther.pause();
        captainamerica.play();
        document.getElementById("image1").src = "./assets/images/captainamerica.gif";
    }

    //Incrediblehulk Audio & Image
    //---------------------------
    else if (randomWord === words[7]) {
        marvel.pause();
        captainamerica.pause();
        fantasticfour.pause();
        wolverine.pause();
        spiderman.pause();
        deadpool.pause();
        ironman.pause();
        blackpanther.pause();
        incrediblehulk.play();
        document.getElementById("image1").src = "./assets/images/incrediblehulk.gif";
    }
};


//RESET FUNCTION
function reset() {
    guessesRemaining = 10;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}


//CHECK LETTERS FUNCTION
//If/Else to check if letter selected matches random word.
function checkLetters(letter) {
    var letterInWord = false;
    //if the generated random word is equal to the letter entered then variable is true.
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word.
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses.
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

//FINAL GAME FUNCTION

//check to see if player won.
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if won, then alert, play audio, display image and reset new round.
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if lost, then alert and reset new round.
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        marvel.pause();
        incrediblehulk.pause();
        captainamerica.pause();
        fantasticfour.pause();
        wolverine.pause();
        spiderman.pause();
        deadpool.pause();
        ironman.pause();
        blackpanther.pause();
        tryagain.play();
        document.getElementById("image1").src = "./assets/images/tryagain.gif"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //display losses on screen and guesses remaining countdown.
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


//call start game function
Game()

//check for keyup, and convert to lowercase then store in guesses.
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches value of random word.
    checkLetters(guesses);
    //process wins/loss.
    complete();
    //store player guess in console for reference.
    console.log(guesses);

    //display/store incorrect letters on screen.
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}
