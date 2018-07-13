var game = {
    correct: 0,
    incorrect: 0,
    notAnswered: 0,
    timer: 20,
    questionList: [{  
        question: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
        answers: ["William and Elizabeth", "Joseph and Catherine", "John and Mary", "George and Anne"],
        correctOne: 2,
        response: -1
    }, 
    {   
        question: "Which of the following items was owned by the fewest U.S. homes in 1990?",
        answers: ["home computer", "compact disk player", "cordless phone", "dishwasher"],
        correctOne: 1,
        response: -1
    }, 
    {   
        question: "Who holds the record for the most victories in a row on the professional golf tour?",
        answers: ["Jack Nicklaus", "Arnold Palmer", "Byron Nelson", "Ben Hogan"],
        correctOne: 2,
        response: -1
    }, 
    {   
        question: "During the 1980s for six consecutive years what breed of dog was the most popular in the U.S.?",
        answers: ["cocker spaniel", "German shepherd", "Labrador retriever", "poodle"],
        correctOne: 0,
        response: -1
    }, 
    {
        question: "Which of these characters turned 40 years old in 1990?",
        answers: ["Charlie Brown", "Bugs Bunny", "Mickey Mouse", "Fred Flintstone"],
        correctOne: 0,
        response: -1
    }, 
    {
        question: "When did the Liberty Bell get its name?",
        answers: ["when it was made, in 1701", "when it rang on July 4, 1776", "in the 19th century, when it became a symbol of the abolition of slavery", "none of the above"],
        correctOne: 2,
        response: -1
    }]
}

function playGame() {
    $("#container").empty();
    startTimer();
    displayQuestions();    
}

function startTimer() {
    var timerDisplay = $("<p>");
    timerDisplay.text("Time Remaining: " + game.timer);
    $("#container").append(timerDisplay);
    var s = setInterval(function() {
        game.timer--;
        if(game.timer > 0) {
            timerDisplay.text("Time Remaining: " + game.timer);
        } else {
            clearInterval(s);
            displayResults();
        }
    }, 1000);
}

function displayQuestions() {
    for(var i = 0; i < game.questionList.length; i++) {
       var question =  $("<p>" + game.questionList[i].question + "</p>" );
       $("#container").append(question);

       for(var j = 0; j < game.questionList[i].answers.length; j++) {
        var answers = $("<div>");
        var inputAnswer = $("<input>");
        var labelAnswer = $("<label>");
        
        answers.attr("id", "answerContent");
        inputAnswer.attr("type", "radio");
        inputAnswer.attr("id", "word_" + i + "_" + j);

        inputAnswer.attr("name", i);
        inputAnswer.attr("value", game.questionList[i].answers[j]); 
        inputAnswer.on("click", processResponses); 
        //labelAnswer.attr("for", "word_"+ i + "_" + j);
        labelAnswer.text(game.questionList[i].answers[j]);
        $("#container").append(answers, inputAnswer, labelAnswer);
       }             
    }
}

function displayResults() {
    $("#container").empty();
    $("#container").append("<p>All Done!</p>");
    $("#container").append("<p>Correct Answers: " + game.correct + "</p>");
    $("#container").append("<p>Incorrect Answers: " + game.incorrect + "</p>");
    $("#container").append("<p>Unanswered: " + game.notAnswered + "</p>");
}

function processResponses(event)  {
    var answerClicked = event.currentTarget.value;
    console.log("XXXxxxXXXxxx=" +event.currentTarget.id.split('_')[2])
    game.questionList[event.currentTarget.name].response = event.currentTarget.id.split('_')[2];
    compare();  
}

function compare() {
    game.notAnswered = 0;
    game.correct = 0;
    game.incorrect = 0;

    for(var i = 0; i < game.questionList.length; i++) {
        if(game.questionList[i].response === -1) {
            game.notAnswered++;
            console.log("not answered =" + game.notAnswered)
        } else if(game.questionList[i].response == game.questionList[i].correctOne ) {
            game.correct++;
            console.log("correct =" + game.correct)
        } else  {
            game.incorrect++;
            console.log("incorrect =" + game.incorrect)
        }
    }
    
}

$("#begin").on("click", playGame);
