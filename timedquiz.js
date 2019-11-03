var startButton = document.getElementById("startButton");
var timeCount = document.getElementById("timeCount");
var questions = document.getElementById("questions");

var myQuestions = [

    {
        title: "Wrapping text in quotes turns the text into a:",
        choices: ["string", "boolean", "quotes"],
        answer: "string",
    },
    {
        title: "Does JavaScript use camel notation?",
        choices: ["no", "yes", "camels scare me"],
        answer: "yes",
    },
    {
        title: "Where is a good resource for finding bugs in code?",
        choices: ["Dreams", "Under a log", "'Inspect' tool"],
        answer: "'Inspect' tool",
    }]

        var count = 45

        function timer() {
            setInterval(function () {
                timeCount.innerHTML = count;
                count--;
            }, 1000);
        }
        $(document).ready(function () {
            $("#startPage").click(function () {
                $(this).hide()
            })
        })
        $("#startButton").on("click", timer);

            
        function firstQuestion(){
            for (var i = 0; i < myQuestions.length; i++){
                var q1 = myQuestions[i]
                for (var j = 0; j <myQuestions.choices.length; j++)
                var answer1 = answer;
                buttons.append(`
                class="letter-button letter letter-button-color"
                data-letter="${q1}>
                ${q1}
                </button>
                `)
            }
        }