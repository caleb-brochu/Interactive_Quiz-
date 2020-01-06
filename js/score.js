function clearStorage(){

    localStorage.clear();
    highscores.innerHTML = "";

};

let highscores = document.getElementById("highscores");
let scores = JSON.parse(localStorage.getItem("scoreList")) || [];
console.log(scores);
console.log(scores.length);

  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];

    var li = document.createElement("li");
    // li.classList.add("breadcrumb");
    li.textContent = score;
    highscores.appendChild(li);
  }
