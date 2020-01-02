

    
  
let startQuiz = document.getElementById("getStarted");
let questionDiv = document.getElementById("quizQuest");
let choicesDiv = document.getElementById("choices");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");
let resultDiv = document.getElementById("result");
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



function renderQuest()
{
    let q = questionList[questionNum];
    questionDiv.innerHTML ='<p>' + q.question + '</p>';
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

};


 startQuiz.addEventListener('click',function()
 {
     renderQuest();
//     let question = document.createElement('hl');
//     question.id = 'quizQuest';
//     let newList = document.createElement('ol');
//     newList.id = 'choices'
//     let questionList = document.createElement('li');
//     questionDiv.replaceWith(question);
//     choicesDiv.appendChild(newList);
//     for(let i = 1; i < 5; i++){
//         let textNode = document.createTextNode(questionList[0][i]);
//         questionList.appendChild(textNode);
//     }
 });
 function checkAns(answer)
 {
     let q = questionList[questionNum];
     if(answer == q.answer ){
         console.log("Correct");
     }
     else{
         console.log("Wrong")
     }
 };


