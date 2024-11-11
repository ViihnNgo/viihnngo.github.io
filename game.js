//Creating multidimensional array of questions and answers
var questions = [
    ["What color is a Firetruck?", [1], "Blue", "Red", "Yellow"],
    ["What planet are we on?", [0], "Earth", "Mars", "Jupiter"],
    ["How many days are there in a year?", [0], "365", "364", "265"]
 ];
 
 //question counter
var questionNumber = 0;

//Loading button to "prompt" div to start game
document.getElementById("prompt").innerHTML = '<button onclick="playGame()">Play Game</button>';

//function to start game when button is clicked
function playGame() {
    //for loop to go through quesions one by one
    for (i = 0; i < questions.length; i++) {

        //variable to generate questions
        var currentQuestion = questions[0];
        var questionText = questions[0];
        var correctAnswerIndex = questions[1];

        //loading question to "question" id
        document.getElementById("question").innerHTML = questionText;

        //deleting the previous question to go on to the next
        questions.shift();

        //creating empty variable to store answers 
        var answersList = "";

        //using for loop to cycle through array and display answers
        for (var i = 2; i < currentQuestion.length; i++) {
            answersList += `<li onclick="checkAnswer(${i - 2}, ${correctAnswerIndex})">${currentQuestion[i]}</li>`;
        }

        //appending answers to "answers" id
        document.getElementById("answers").innerHTML = answersList;

        //deleting previous answer to go on to the next 
        answersList.shift();
    }

    //updating question number
    questionNumber++;

}

//creating new function with new variables to check answers 
function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }

}
