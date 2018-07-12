var winDom = document.getElementById('wins');
var wordDom = document.getElementById('word');
var nrGuessDom = document.getElementById('nrGuesses');
var letterDom = document.getElementById('lettersGuessed');
var game;

function Game() {
    this.wins = null;
    this.wordList = ['turmeric', 'kombucha', 'cinamon', 'ginger', 'chocolate', 'spirulina', 'blueberries'];
    
    this.play = function(aLetter) {
        this.round.checkLetter(aLetter);
        this.round.updateHangman(aLetter);
        if(this.round.isLost()) {
            alert("Sorry, you lost.")
            this.startNewRound();
        } else if (this.round.isWon()) {
            this.wins++;
            this.startNewRound();
        }
    };

    this.startNewRound = function() {
        this.round = new Round(this.wordList[Math.floor(Math.random() * this.wordList.length)]); 
    }
    this.startNewRound();
}

function Round(word) {
    this.currentWord = word;
    this.nrGuesses = 12;
    this.lettersGuessed = [];
    this.hangman = [];

    this.displayHangman = function() {
        for(var i = 0; i < this.currentWord.length; i++) {
            var char = this.currentWord.charAt(i);
            char = "-";
            this.hangman.push(char);
        }
    };
    this.displayHangman();

    this.checkLetter = function(letter) { 
        if(this.lettersGuessed.length === 0) {
            this.lettersGuessed.push(letter); 
            this.nrGuesses--;            
        } else {
            var counter = 0;
            for (var i = 0; i < this.lettersGuessed.length; i++) {
                if(letter == this.lettersGuessed[i]) {
                    break;
                } else {
                    counter++;
                }                       
            }
            if(counter === this.lettersGuessed.length) {
                this.lettersGuessed.push(letter); 
                this.nrGuesses--;
            }
        }    
    };

    this.updateHangman = function(letter) {
        for(var i = 0; i < this.hangman.length; i++) {           
            for(var j = 0; j < this.currentWord.length; j++) {
                if(letter == this.currentWord.charAt(j)) {
                    this.hangman[j] = letter;
                }
            }    
        }
    };
    
    this.isWon = function() {
        var isRoundWon = false;
        var string = '';
            for(var i = 0; i < this.hangman.length; i++) {
                string += this.hangman[i];
            }
            if(string == this.currentWord && this.nrGuesses >  0) {
                isRoundWon = true;
            }
            return isRoundWon;
    }

    this.isLost = function() {
        var isRoundLost = false;
        if(this.nrGuesses === 0) {
            isRoundLost = true;
        }
        return isRoundLost;
    };
}
game = new Game();

function displayGame() {
    winDom.textContent = game.wins;
    wordDom.textContent = game.round.hangman;
    nrGuessDom.textContent = game.round.nrGuesses; 
    letterDom.textContent = game.round.lettersGuessed;
}

displayGame();

document.onkeyup = function(event) {
   game.play(event.key); 
   displayGame();
}
