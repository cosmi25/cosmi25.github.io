var game;


function Game() {
    this.wins = 0;
    this.losses = 0;
    this.round = new Round();
    this.playRound = function(index) {
        this.round.addCrystal(index);
        this.compare();        
    };

    this.compare = function() {
        if(this.round.score === this.round.randomNr) {
            this.wins++;
            alert('You won!');
            this.round = new Round();
        } else if(this.round.score > this.round.randomNr){
            this.losses++;
            alert('You lost.');
            this.round = new Round();
        }
    }
}

function Round() {
    this.randomNr = Math.floor(Math.random() * 102) + 19;
    this.score = 0;
    this.crystals = [];

    while(this.crystals.length < 4) {
        var nr  = Math.ceil(Math.random() * 12);
        if(this.crystals.indexOf(nr) === -1) {
            this.crystals.push(nr);
        }
    }

    this.addCrystal = function(anIndex) {
        this.score += this.crystals[anIndex];
        return this.score;
    };      
}

$(document).ready(function() {
    function displayGame() {
        $('#random').text(game.round.randomNr);
        $('#wins').text(game.wins);
        $('#losses').text(game.losses);
        $('.score-nr').text(game.round.score);
    }
    game = new Game();
    displayGame();

    $('#btn-1').on('click', function() {
        game.playRound(0);
        displayGame();
    });

    $('#btn-2').on('click', function() {
        game.playRound(1);
        displayGame();
    });

    $('#btn-3').on('click', function() {
        game.playRound(2);
        displayGame();
    });

    $('#btn-4').on('click', function() {
        game.playRound(3);
        displayGame();
    });
})

