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


let questionList = [
    {
        question:"This is question 1",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        answer: "D",
    },

    {
        question:"This is question 2",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        answer: "A",
    },

    {
        question:"This is question 3",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        answer: "C",
    }
];

let questArryLength = questionList.length -1;
let questionNum = 0; 
let timeSetter = document.getElementById("timer");
let startingTime = 15*(questArryLength);
let score = 0;


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
        timeSetter.innerHTML = startingTime;
        startingTime -= 1;
        if(questionNum == (questArryLength+1))
        {
            stopTime();
            timeSetter.innerHTML = score;
            allDone();
        } 
        else if(startingTime <= 0)
        {
            stopTime();
            timeSetter.innerHTML = score;
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
    if(answer == q.answer){
        console.log("Correct");
        //write "correct" to resultDiv
        resultDiv.innerHTML = "Correct!";
    }
    else{
        console.log("Wrong");
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


