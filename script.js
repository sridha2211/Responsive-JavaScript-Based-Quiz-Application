let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;


const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const timerEl = document.getElementById("time");
const scoreContainer = document.getElementById("score-container");


function startTimer() {
timer = setInterval(() => {
timeLeft--;
timerEl.textContent = timeLeft;
if (timeLeft === 0) {
clearInterval(timer);
nextQuestion();
}
}, 1000);
}
function selectAnswer(button, selected) {
const correct = questions[currentQuestion].answer;
Array.from(optionsEl.children).forEach(btn => btn.disabled = true);


if (selected === correct) {
button.classList.add("correct");
score++;
} else {
button.classList.add("wrong");
}
}


function nextQuestion() {
currentQuestion++;
if (currentQuestion < questions.length) {
loadQuestion();
} else {
showScore();
}
}
function showScore() {
clearInterval(timer);
questionEl.textContent = "Quiz Completed!";
optionsEl.innerHTML = "";
nextBtn.style.display = "none";
scoreContainer.textContent = `Your Score: ${score} / ${questions.length}`;
}


nextBtn.onclick = nextQuestion;


loadQuestion();
