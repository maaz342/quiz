// Step 1: Define Quiz Data

const quizData  = [
    {
        question:"Html Stands For _________",
        options: ["Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language"
        ],
        correctAns: 3,
    },
    {
        question:"Css Stands For __________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language"
        ],
        correctAns: 0,
    },
    {
        question:"Js Stands For  _________",
        options: [
            "Java Style",
            "Java Script",
            "Script",
            "Script Src"
        ],
        correctAns: 1,
    },
    {
        question:"Dom Stands For  _________",
        options: [
            "Document Object Model",
            "html",
            "Css",
            "Java"
        ],
        correctAns: 0,
    },
    {
        question:"Ram Stands For _________",
        options: [
            "Read Only Memory",
            "Dom",
            "Random Acccess Memory",
            "For Pc"
        ],
        correctAns: 2,
    },
    {
        question:"Rom Stands For  _________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory"
        ],
        correctAns: 3,
    },
];
  
  //? Step 2: JavaScript Initialization
  
  const answersElem = document.querySelectorAll(".answer");
  console.log(answersElem);
  const [questionElem, option_1, option_2, option_3, option_4] =
    document.querySelectorAll(
      "#question, #option_1, #option_2, #option_3, #option_4"
    );
  // console.log(option_2);
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
  
    questionElem.innerText = `${currentQuiz + 1}: ${question}`;
    options.forEach((curOption, index) => {
      return (window[`option_${index + 1}`].innerText = curOption);
    });
  };
  
  loadQuiz();
  
  
  const getSelected = () => {
    const answerElement = Array.from(answersElem);
    return answerElement.findIndex((curOption) => curOption.checked);
  };
  
  const deselectAnswers = () => {
    answersElem.forEach((curElem) => (curElem.checked = false));
  };
  
  submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelected();
    console.log(selectedOptionIndex);
  
    if (selectedOptionIndex === quizData[currentQuiz].correctAns) {
      score = score + 1;
    }
  
    currentQuiz++;
  
    if (currentQuiz < quizData.length) {
      deselectAnswers();
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <div class="result">
      <h2>🏆 Your Score: ${score}/${quizData.length} Correct Answers</h2>
      <p>Congratulations on completing the quiz! 🎉</p>
      <button type="submit" class="reload-button btn btn-primary" onclick="location.reload()">Play Again 🔄</button>
      </div>
    `;
    }
  });