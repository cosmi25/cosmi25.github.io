//startTime();


/*
$("#begin").click(function() {
    console.log($(this).text());
})

*/





/*
    playGame: function() {
        $("#container").empty();
        game.startTimer();
        game.displayQuestions();
        game.isGuessed();
    },

    startTimer: function() {
        var timerDisplay = $("<p>");
        timerDisplay.text("Time Remaining: " + game.timer);
        $("#container").append(timerDisplay);
        var s = setInterval(function() {
        game.timer--;
        if(game.timer > 0) {
            timerDisplay.text("Time Remaining: " + game.timer);
        } else {
            clearInterval(s);
            game.displayResults();
        }
        }, 1000);
    },

    displayQuestions: function() {
        for(var i = 0; i < game.questionList.length; i++) {
            var question =  $("<p>" + game.questionList[i].question + "</p>" );
            $("#container").append(question);
     
            for(var j = 0; j < game.questionList[i].answers.length; j++) {
             var answers = $("<div>");
             var inputAnswer = $("<input>");
             var labelAnswer = $("<label>");
             
             answers.addClass("answerContent");
             inputAnswer.attr("type", "radio");
             inputAnswer.attr("id", "word");
             inputAnswer.attr("name", "aWord");
             inputAnswer.attr("value", game.questionList[i].answers[j]);     
             labelAnswer.attr("for", "word");
             labelAnswer.text(game.questionList[i].answers[j]);
             $("#container").append(answers).append(inputAnswer, labelAnswer);
            }       
         }
    },

    isGuessed: function() {
        $("#word").on("click", function() {
            console.log(labelAnswer.text());
        });
        game.displayResults();
    },

    displayResults: function() {
        $("#container").empty();
        $("#container").append("<p>All Done!</p>");
        $("#container").append("<p>Correct Answers: " + game.correct + "</p>");
        $("#container").append("<p>Incorrect Answers: " + game.incorrect + "</p>");
        $("#container").append("<p>Unanswered: " + game.notAnswered + "</p>");
    }
    */






















/*

var game = '';
function Game(uniqueId) {
    this.uniqueId = uniqueId;
    this.correctAnswer = 0;
    this.incorrectAnswer = 0;
    this.unansweredQuestion = 0;
    this.questionList = [{  
                            question: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
                            answers: ["William and Elizabeth", "Joseph and Catherine", "John and Mary", "George and Anne"],
                            correctOne: "John and Mary"
                        }, 
                        {   
                            question: "Which of the following items was owned by the fewest U.S. homes in 1990?",
                            answers: ["home computer", "compact disk player", "cordless phone", "dishwasher"],
                            correctOne: "compact disk player"
                        }, 
                        {   
                            question: "Who holds the record for the most victories in a row on the professional golf tour?",
                            answers: ["Jack Nicklaus", "Arnold Palmer", "Byron Nelson", "Ben Hogan"],
                            correctOne: "Byron Nelson"
                        }, 
                        {   
                            question: "During the 1980s for six consecutive years what breed of dog was the most popular in the U.S.?",
                            answers: ["cocker spaniel", "German shepherd", "Labrador retriever", "poodle"],
                            correctOne: "cocker spaniel"
                        }, 
                        {
                            question: "Which of these characters turned 40 years old in 1990?",
                            answers: ["Charlie Brown", "Bugs Bunny", "Mickey Mouse", "Fred Flintstone"],
                            correctOne: "Charlie Brown"
                        }, 
                        {
                            question: "When did the Liberty Bell get its name?",
                            answers: ["when it was made, in 1701", "when it rang on July 4, 1776", "in the 19th century, when it became a symbol of the abolition of slavery", "none of the above"],
                            correctOne: "in the 19th century, when it became a symbol of the abolition of slavery"   
                        }];
    
    this.timeLeft = 10;
    console.log("this.uniqueId=" + this.uniqueId);
    var cucu = this;
    this.startTimer = function() {
        var timer = setInterval(function() {
            console.log("cucu.uniqueId=" + cucu.uniqueId);
            cucu.timeLeft--;
            console.log("mess 0" + cucu.timeLeft);
            if(cucu.timeLeft > 0) {
                console.log("mess 1a" + cucu.timeLeft);
            } else {
                clearInterval(timer);
                console.log("mess 1b" + cucu.timeLeft);
            }
        }, 1000);
        console.log("mess 2" + timer);
    }
    this.startTimer();

}


var gamea = new Game("a");
console.log("test cucu in exterior" + gamea.cucu);
    
var gameb = new Game("b");
//game.startTimer();
*/

