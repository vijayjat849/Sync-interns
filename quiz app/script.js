const quizData = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "Hyperlink and Text Markup Language",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which tag is used to define an internal style sheet?",
    choices: ["style", "css", "script", "link"],
    correctAnswer: 0,
  },
  {
    question: "Which property is used to change the font of an element?",
    choices: ["font-family", "font-size", "font-style", "font-weight"],
    correctAnswer: 0,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'script.js'?",
    choices: [
      "script src='script.js'",
      "script href='script.js'",
      "script ref='script.js'",
      "script name='script.js'",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which CSS property is used to control the spacing between elements?",
    choices: ["margin", "padding", "border", "float"],
    correctAnswer: 1,
  },
  {
    question:
      "Which method is used to remove the last element from an array in JavaScript?",
    choices: ["pop()", "push()", "shift()", "unshift()"],
    correctAnswer: 0,
  },
  {
    question: "Which event is triggered when a user clicks on an HTML element?",
    choices: ["onchange", "onclick", "onmouseover", "onsubmit"],
    correctAnswer: 1,
  },
  {
    question:
      "What is the result of the expression '2 + 2 + '2' + 2' in JavaScript?",
    choices: ["22", "4", "6", "8"],
    correctAnswer: 0,
  },
  {
    question:
      "Which method is used to add a new element to an array in JavaScript?",
    choices: ["append()", "push()", "concat()", "join()"],
    correctAnswer: 1,
  },
  {
    question: "Which CSS property is used to make text bold?",
    choices: ["font-weight", "text-transform", "text-decoration", "font-style"],
    correctAnswer: 0,
  },
];

const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit-btn");

let score = 0;

function showQuiz() {
  quizContainer.innerHTML = "";

  for (let i = 0; i < quizData.length; i++) {
    const quiz = quizData[i];

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const questionElement = document.createElement("div");
    questionElement.innerHTML = `<h3>${quiz.question}</h3>`;
    cardElement.appendChild(questionElement);

    const choicesElement = document.createElement("div");
    choicesElement.classList.add("choices");

    for (let j = 0; j < quiz.choices.length; j++) {
      const choice = quiz.choices[j];
      const choiceElement = document.createElement("div");
      choiceElement.classList.add("choice");
      choiceElement.innerHTML = `
          <label>
            <input type="radio" name="choice-${i}" value="${j}">
            ${choice}
          </label>
        `;
      choicesElement.appendChild(choiceElement);
    }
    cardElement.appendChild(choicesElement);

    quizContainer.appendChild(cardElement);
  }

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.addEventListener("click", checkAnswers);
  quizContainer.appendChild(submitButton);

  const choiceInputs = document.querySelectorAll('.choice input[type="radio"]');
  choiceInputs.forEach((input) => {
    input.addEventListener("change", highlightSelectedOption);
  });
}

function highlightSelectedOption(event) {
  const selectedChoice = event.target;
  const selectedChoiceElement = selectedChoice.closest(".choice");
  const allChoices = selectedChoiceElement.parentNode.children;

  for (const choiceElement of allChoices) {
    if (choiceElement === selectedChoiceElement) {
      choiceElement.classList.add("selected");
    } else {
      choiceElement.classList.remove("selected");
    }
  }
}

function checkAnswers() {
  let score = 0;

  for (let i = 0; i < quizData.length; i++) {
    const selectedChoice = document.querySelector(
      `input[name="choice-${i}"]:checked`
    );
    if (selectedChoice) {
      const selectedAnswer = Number(selectedChoice.value);
      if (selectedAnswer === quizData[i].correctAnswer) {
        score++;
      }
    }
  }

  quizContainer.innerHTML = `<h2>You scored : ${score}/${quizData.length}</h2>`;
}

showQuiz();
