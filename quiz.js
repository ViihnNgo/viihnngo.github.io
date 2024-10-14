var questions = ["What color is a Firetruck?", "What planet are we on?", "How many days are there in a year?"];
var answers = ["Red", "Earth", "365"];
var attempts = 3;
var points = 0;

function quiz() {
    for (var i = 0; i < 3; i++) {
        while (attempts > 0 && i < 3) { 
            ans = prompt(questions[i]);
            if (ans == answers[i]) {
                alert("Correct!");
                if (attempts == 3) {
                    points += 3;
                } else if (attempts == 2) {
                    points += 2;
                } else {
                    points += 1;
                }
                i++;
            } else {
                alert("Incorrect");
                attempts = attempts - 1;
                alert(attempts + " attempts left")

            }
        }
    }
    return points;
}