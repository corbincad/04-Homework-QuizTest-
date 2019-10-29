var card = $("#quiz-area")


const questions = [{

    question : "Does JavaScript use camel notation?",
    answers : ["Yes", "No", "Camels scare me"],
    correct : "Yes",

},

{

    question : "Wraping text in quotations turns the text into a ...",
    answers : ["String", "Array", "Boolean"],
    correct : "String",

}];

var timer; 

var correctAnswers = {

    correct: 0, incorrect: 0, counter: 60,
    countDown: function(){

        correctAnswers.counter--
        $("#timerQuiz").html(correctAnswers.counter);

        if(correctAnswers.counter === 0){

            console.log("finished")
            correctAnswers.done()
        }
        
    },

    start: function(){

        timer = setInterval(correctAnswers.countDown, 1000);

        $("#quizTimer").prepend("<h2>Time Remaining: <span id='counter-number'>60</span>Seconds</h2>");
        $("#startButton").remove();
        for (i = 0; i < questions.length; i++){
            card.append("<h2>" + "questions[i].question" + "</h2");
            for (j = 0; j < questions[i].answers.length; j++){
                card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }

        }

        var input = 

    }

}

const startButton = document.getElementById("startButton")

document.addEventListener("click", startGame)

function startGame() {


}


function setNextQuestion() {


}



