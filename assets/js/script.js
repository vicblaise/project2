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
const resultSection = document.getElementById("result-section")
const questionNumberContainer = document.getElementById("question-number")

let currentQuestionIndex = 0;
let score = 0;



function showQuestion() {
    console.log("quiz data length ", quizData.length)
    if (currentQuestionIndex + 1 > quizData.length) {
        console.log("break")
        showResult()
        questionElement.style.display = "none"
    } else {
        const currentQuestion = quizData[currentQuestionIndex];
        console.log("currentQuestion ", currentQuestion)
        questionElement.innerText = currentQuestion.question;
        questionNumberContainer.innerText = currentQuestionIndex + 1
        optionsElement.innerHTML = "";
        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option;
            optionsElement.appendChild(button);
            button.addEventListener("click", selectAnswer);
        });
    }

}

function selectAnswer(e) {
    const selectedButton = e.target;
    console.log("selectedButton", selectedButton)
    console.log("currentQuestionIndex", currentQuestionIndex)
    const answer = quizData[currentQuestionIndex].answer;
    console.log("answer", answer)

    if (selectedButton.innerText === answer) {
        score++;
    }

    currentQuestionIndex++;
    console.log("currentQuestionIndex", currentQuestionIndex)

    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    resultSection.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
}

showQuestion();