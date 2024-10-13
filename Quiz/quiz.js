//Declaring variables for points 
var points = 0;
//Setting questions and answers into one array 
var questions = [
    ["What color is a Firetruck?", Red],  
    ["What planet do we live on?", Earth],
    ["How many days are there in a year?", 365]
];

//Function that matches users answer with the correct answer and assigns points accordingly
function askQuestion(question) {
    var answer = prompt(question[0], "");
    if (answer == question[1]) {
        alert("Correct!");
        score++;
    }
    else {
        alert("Incorrect, the answer is " + question[1]);
    }
}
 //For loop that cycles through the questions array 
for (var i=0; i< questions.length; i++) {
    askQuestion(questions[i]);
}