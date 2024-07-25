const quizData = [{
        question: "Who is the best footballer in the world?",
        options: ["Messi", "Vinicus jr", "Ronaldo", "Modric"],
        answer: "Messi"
    },

    {
        question: "What country is the best in the world?",
        options: ["USA", "England", "Nigeria", "Spain"],
        answer: "Nigeria"
    },

    {
        question: "What country hosted the last Euros?",
        options: ["Ireland", "Georgia", "Netherlands", "Germany"],
        answer: "Germany"
    },

    {
        question: "What is the most busiest city in the world?",
        options: ["New Delhi", "Mexico City", "London", "Jakarta"],
        answer: "Mexico City"
    }

];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const checkButton = document.getElementById("check");

let currentQuestion = 0;
let score = 0;



function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;

    if (selectedButton.innerText === answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
}

showQuestion();