// variables 
let startQuiz = document.getElementById("getStarted");
let questionDiv = document.getElementById("quizQuest");
let choicesDiv = document.getElementById("choices");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");
let resultDiv = document.getElementById("result");
let entryForm = document.getElementById("entryForm");
let scoreDiv = document.getElementById("yourScore");
let submitInitials = document.querySelector("form");
let player = document.getElementById("initialEntry")

entryForm.style.display = "none";
choiceA.style.display = "none";
choiceB.style.display = "none";
choiceC.style.display = "none";
choiceD.style.display = "none";

// Questions array 
let questionList = [
    {
        question:"Inside which HTML element do we put the JavaScript?",
        choiceA: "&ltscript&gt",
        choiceB: "&ltjavascript&gt",
        choiceC: "&ltdiv&gt",
        choiceD: "&ltjs&gt",
        answer: "&ltscript&gt",
    },

    {
        question:"Which built-in method calls a function for each element in the array?",
        choiceA: "while()",
        choiceB: "if()",
        choiceC: "forEach()",
        choiceD: "loop()",
        answer: "forEach()",
    },

    {
        question:"Which of the following function of Array object removes the last element from an array and returns that element?",
        choiceA: "push()",
        choiceB: "pop()",
        choiceC: "join()",
        choiceD: "map()",
        answer: "pop()",
    }
];

//variables 
let questArryLength = questionList.length -1;
let questionNum = 0; 
let timeSetter = document.getElementById("timer");
let startingTime = 15*(questArryLength);
let score = 0;

// Start quiz event listener 
startQuiz.addEventListener('click',function()
 {
    startTimer()
    renderQuest();
     
 });

 function renderQuest()
 {
    if(questionNum === (questArryLength+1))
    {
        stopTime();
        score = startingTime;
        timeSetter.innerHTML = score;
        allDone();
        return;
     }
    else
    {
        let q = questionList[questionNum];
        questionDiv.innerHTML ='<p>' + q.question + '</p>';
        choiceA.style.display = 'block';
        choiceB.style.display = 'block';
        choiceC.style.display = 'block';
        choiceD.style.display = 'block';
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
    }
 };

 function startTimer()
 {
    let countDwnTimer = setInterval(function quiztimer()
    {
        timeSetter.innerHTML = "<p>Timer: " + startingTime + "</p>";
        startingTime -= 1;
        if(questionNum == (questArryLength+1))
        {
            stopTime();
            timeSetter.innerHTML = "<p>Timer: " + score + "</p>";
            allDone();
        } 
        else if(startingTime <= 0)
        {
            stopTime();
            timeSetter.innerHTML = "<p>Timer: " + score + "</p>";
            allDone();
        };

    }, 1000);
 };

 function stopTime() 
 {
    clearTimeout(startingTime);
 };

 function checkAns(answer)
 {
    let q = questionList[questionNum]; 
    resultDiv.innerHTML = "";
    if(answer === q.answer.value){

        //write "correct" to resultDiv
        resultDiv.innerHTML = "Correct!";
    }
    else{
        startingTime = startingTime - 5;
        timeSetter.innerHTML = startingTime
        //write "Wrong" to resultDiv 
        resultDiv.innerHTML = "Wrong!";
    };

    questionNum++;
    renderQuest();

};


function allDone(){
 // 
    choicesDiv.style.display = 'none';
    resultDiv.style.display = 'none';
    scoreDiv.style.display = "block";
    entryForm.style.display = "block";
    questionDiv.innerHTML = "All Done!";
    scoreDiv.innerHTML =  "<p>Your final score: " + score + "! </p>";
};

submitInitials.addEventListener("submit", function(event){

    let playerScore = player.value + " - " + score;
    let scoreList = JSON.parse(localStorage.getItem("scoreList")) || [];
    scoreList.push(playerScore);
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
   
});


