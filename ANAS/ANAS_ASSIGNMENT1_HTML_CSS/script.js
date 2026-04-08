const quiz = [
  {
    q: "Capital of India?",
    options: ["Delhi", "Mumbai", "Chennai"],
    answer: "Delhi"
  },
  {
    q: "2 + 2 = ?",
    options: ["3", "4", "5"],
    answer: "4"
  },
  {
    q: "HTML stands for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "None"],
    answer: "Hyper Text Markup Language"
  }
];

let index = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").innerText = quiz[index].q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  quiz[index].options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === quiz[index].answer) {
    score++;
  }
}

function nextQuestion() {
  index++;
  if (index < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText = "Quiz Finished!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("score").innerText = "Score: " + score;
  }
}

loadQuestion();