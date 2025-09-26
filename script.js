      const questions = [
        {
          question: "Which is the largest animal in the world?",
          answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
          ],
        },
        {
          question: "Which planet is known as the Red Planet?",
          answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
          ],
        },
        {
          question: "What is the capital city of France?",
          answers: [
            { text: "Paris", correct: true },
            { text: "Rome", correct: false },
            { text: "Madrid", correct: false },
            { text: "Berlin", correct: false },
          ],
        },
      ];

      const questionElement = document.getElementById("question");
      const answerButtons = document.getElementById("answer-buttons");
      const nextButton = document.getElementById("next-btn");
      const backButton = document.getElementById("back-btn");
      const correctCountEl = document.querySelector(".correct-count");
      const falseCountEl = document.querySelector(".false-count");

      let currentQuestionIndex = 0;
      let score = 0;
      let wrong = 0;
      let shuffledQuestions = [];

      // Utility to shuffle arrays
      function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
      }

      function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        wrong = 0;
        correctCountEl.textContent = 0;
        falseCountEl.textContent = 0;
        nextButton.innerHTML = "Next";
        backButton.style.display = "none";
        shuffledQuestions = shuffle([...questions]);
        showQuestion();
      }

      function showQuestion() {
        resetState();
        let currentQuestion = shuffledQuestions[currentQuestionIndex];
        questionElement.innerHTML = currentQuestion.question;

        // shuffle answers too
        const shuffledAnswers = shuffle([...currentQuestion.answers]);
        shuffledAnswers.forEach((answer) => {
          const button = document.createElement("button");
          button.innerHTML = answer.text;
          button.classList.add("btn");
          answerButtons.appendChild(button);
          if (answer.correct) {
            button.dataset.correct = answer.correct;
          }
          button.addEventListener("click", selectAnswer);
        });

        backButton.style.display = currentQuestionIndex > 0 ? "block" : "none";
      }

      function resetState() {
        nextButton.style.display = "none";
        while (answerButtons.firstChild) {
          answerButtons.removeChild(answerButtons.firstChild);
        }
      }

      function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if (isCorrect) {
          selectedBtn.classList.add("correct");
          score++;
          correctCountEl.textContent = score;
        } else {
          selectedBtn.classList.add("incorrect");
          wrong++;
          falseCountEl.textContent = wrong;
        }

        Array.from(answerButtons.children).forEach((button) => {
          if (button.dataset.correct === "true") {
            button.classList.add("correct");
          }
          button.disabled = true;
        });

        nextButton.style.display = "block";
      }

      function showScore() {
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${shuffledQuestions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
        backButton.style.display = "none";
      }

      function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
          showQuestion();
        } else {
          showScore();
        }
      }

      function handleBackButton() {
        if (currentQuestionIndex > 0) {
          currentQuestionIndex--;
          showQuestion();
        }
      }

      nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < shuffledQuestions.length) {
          handleNextButton();
        } else {
          startQuiz();
        }
      });

      backButton.addEventListener("click", handleBackButton);

      startQuiz();
    // const questionElement = document.getElementById("question");
    // const answerButtons = document.getElementById("answer-buttons");
    // const nextButton = document.getElementById("next-btn");
    
    // let currentQuestionIndex = 0;
    // let score = 0;
    
    // function startQuiz() {
    //   currentQuestionIndex = 0;
    //   score = 0;
    //   nextButton.innerHTML = "Next";
    //   showQuestion();
    // }
    
    // function showQuestion() {
    //   resetState();
    //   let currentQuestion = questions[currentQuestionIndex];
    //   let questionNo = currentQuestionIndex + 1;
    //   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    //   currentQuestion.answers.forEach(answer => {
    //     const button = document.createElement("button");
    //     button.innerHTML = answer.text;
    //     button.classList.add("btn");
    //     if (answer.correct) {
    //       button.dataset.correct = answer.correct;
    //     }
    //     button.addEventListener("click", selectAnswer);
    //     answerButtons.appendChild(button);
    //   });
    // }
    
    // function resetState() {
    //   nextButton.style.display = "none";
    //   while (answerButtons.firstChild) {
    //     answerButtons.removeChild(answerButtons.firstChild);
    //   }
    // }
    
    // function selectAnswer(e) {
    //   const selectedBtn = e.target;
    //   const isCorrect = selectedBtn.dataset.correct === "true";
    
    //   if (isCorrect) {
    //     selectedBtn.classList.add("correct");
    //     score++;
    //   } else {
    //     selectedBtn.classList.add("incorrect");
    //   }
    
    //   Array.from(answerButtons.children).forEach(button => {
    //     if (button.dataset.correct === "true") {
    //       button.classList.add("correct");
    //     }
    //     button.disabled = true; 
    //   });
    
    //   nextButton.style.display = "block";
    // }
    
    // function showScore() {
    //   resetState();
    //   questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    //   nextButton.innerHTML = "Play Again";
    //   nextButton.style.display = "block";
    // }
    
    // function handleNextButton() {
    //   currentQuestionIndex++;
    //   if (currentQuestionIndex < questions.length) {
    //     showQuestion();
    //   } else {
    //     showScore();
    //   }
    // }
    
    // nextButton.addEventListener("click", () => {
    //   if (currentQuestionIndex < questions.length) {
    //     handleNextButton();
    //   } else {
    //     startQuiz();
    //   }
    // });
    
    // startQuiz();
