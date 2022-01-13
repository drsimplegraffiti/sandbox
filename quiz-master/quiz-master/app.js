function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();


    }
};

// Guess function
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }

}

//show progress
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of  " + quiz.questions.length;

}

//show scores function
function showScores() {
    // create HTML elements
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> Your Score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}



var questions = [
    new Question("NodeJS is a ________?", ["server-side", "front-side", "middle-side", "side-side"], "server-side"),
    new Question("HTML is used for ________ web layouts", ["enhancing", "structuring", "beautifying", "none of the above"], "structuring"),
    new Question("CSS can be regarded as the ________ the web design", ["flesh", "bone", "life", "none of the above"], "flesh"),
    new Question("____ is not a programming language ?", ["HTML", "JavaScript", "Python", "Ruby"], "HTML"),
    new Question("Javascript handles the ______ of the web?", ["interactivity", "structuring", "styling", "all of the above"], "interactivity"),
];

var quiz = new Quiz(questions);

populate();