var questions = ["What color is a Firetruck?", "What planet are we on?", "How many days are there in a year?"];
var answers = ["Red", "Earth", "365"];
var attempts = 3;
var points = 0;

function quiz() {
    for (var i = 0; i <= 3; i++) {
        while (attempts > 0) {
            ans = prompt("What is " + questions[0]);
            if (ans == answers[0]) {
                points += 1;
                alert("Correct!");
                attempts = 0;
            } else {
                alert("Incorrect");
                attempts = attempts - 1;
            }
        }
    }
}