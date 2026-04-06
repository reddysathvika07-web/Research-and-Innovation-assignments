const questions = [
  {
    question: "What is HTML?",
    options: ["Programming Language", "Markup Language", "Database", "Operating System"],
    answer: 1
  },
  {
    question: "What is CSS used for?",
    options: ["Structure", "Styling", "Logic", "Database"],
    answer: 1
  },
  {
    question: "Which language is used for web interactivity?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: 2
  },
  {
    question: "Which tag is used for images in HTML?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: 0
  },
  {
    question: "Which property is used to change text color in CSS?",
    options: ["font-color", "text-color", "color", "bgcolor"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("div");
    btn.textContent = option;
    btn.classList.add("option");

    btn.onclick = () => {
      selectedAnswer = index;

      const allOptions = document.querySelectorAll(".option");
      allOptions.forEach(opt => opt.style.background = "#eee");
      btn.style.background = "#cce5ff";
    };

    optionsEl.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  if (selectedAnswer === null) {
    alert("Please select an answer!");
    return;
  }

  if (selectedAnswer === questions[currentQuestion].answer) {
    score++;
  }

  selectedAnswer = null;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.textContent = `Your Score: ${score}/${questions.length}`;
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
}

loadQuestion();