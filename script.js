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
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Who developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Nikola Tesla", correct: false },
      { text: "Galileo Galilei", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Neptune", correct: false },
    ],
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "China", correct: false },
      { text: "Japan", correct: true },
      { text: "Thailand", correct: false },
      { text: "India", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Ag", correct: false },
      { text: "Au", correct: true },
      { text: "Gd", correct: false },
      { text: "Go", correct: false },
    ],
  },
  {
    question: "Which is the smallest continent by land area?",
    answers: [
      { text: "Europe", correct: false },
      { text: "Australia", correct: true },
      { text: "Antarctica", correct: false },
      { text: "South America", correct: false },
    ],
  },
  {
    question: "In which year did World War II end?",
    answers: [
      { text: "1940", correct: false },
      { text: "1945", correct: true },
      { text: "1939", correct: false },
      { text: "1950", correct: false },
    ],
  },
  {
    question: "Which ocean is the largest?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Michelangelo", correct: false },
    ],
  },
  {
    question: "What is the square root of 64?",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "7", correct: false },
      { text: "9", correct: false },
    ],
  },
  {
    question: "Which gas do humans need to survive?",
    answers: [
      { text: "Carbon dioxide", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Helium", correct: false },
    ],
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    answers: [
      { text: "China", correct: false },
      { text: "Brazil", correct: true },
      { text: "UK", correct: false },
      { text: "Japan", correct: false },
    ],
  },
  {
    question: "Which is the fastest land animal?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Cheetah", correct: true },
      { text: "Horse", correct: false },
      { text: "Tiger", correct: false },
    ],
  },
  {
    question: "What is H2O commonly known as?",
    answers: [
      { text: "Salt", correct: false },
      { text: "Water", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Beijing", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Seoul", correct: false },
      { text: "Bangkok", correct: false },
    ],
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Nile", correct: true },
      { text: "Yangtze", correct: false },
      { text: "Mississippi", correct: false },
    ],
  },
  {
    question: "Which planet is closest to the sun?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mercury", correct: true },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
    ],
  },
  {
    question: "What is the national sport of Japan?",
    answers: [
      { text: "Karate", correct: false },
      { text: "Sumo wrestling", correct: true },
      { text: "Judo", correct: false },
      { text: "Kendo", correct: false },
    ],
  },
  {
    question: "What is the capital of Australia?",
    answers: [
      { text: "Sydney", correct: false },
      { text: "Canberra", correct: true },
      { text: "Melbourne", correct: false },
      { text: "Perth", correct: false },
    ],
  },
  {
    question: "Which is the hardest natural substance?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Diamond", correct: true },
      { text: "Iron", correct: false },
      { text: "Silver", correct: false },
    ],
  },
  {
    question: "How many continents are there on Earth?",
    answers: [
      { text: "5", correct: false },
      { text: "7", correct: true },
      { text: "6", correct: false },
      { text: "8", correct: false },
    ],
  },
  {
    question: "What is the boiling point of water in Celsius?",
    answers: [
      { text: "90", correct: false },
      { text: "100", correct: true },
      { text: "110", correct: false },
      { text: "120", correct: false },
    ],
  },
  {
    question: "Which bird is the symbol of peace?",
    answers: [
      { text: "Crow", correct: false },
      { text: "Dove", correct: true },
      { text: "Eagle", correct: false },
      { text: "Parrot", correct: false },
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      { text: "K2", correct: false },
      { text: "Mount Everest", correct: true },
      { text: "Kangchenjunga", correct: false },
      { text: "Makalu", correct: false },
    ],
  },
  {
    question: "Who is known as the Father of Computers?",
    answers: [
      { text: "Alan Turing", correct: false },
      { text: "Charles Babbage", correct: true },
      { text: "Bill Gates", correct: false },
      { text: "Steve Jobs", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: true },
      { text: "Kalahari", correct: false },
      { text: "Arabian", correct: false },
    ],
  },
  {
    question: "Which blood group is known as the universal donor?",
    answers: [
      { text: "A", correct: false },
      { text: "O negative", correct: true },
      { text: "B", correct: false },
      { text: "AB", correct: false },
    ],
  },
  {
    question: "Which vitamin is produced when a person is exposed to sunlight?",
    answers: [
      { text: "Vitamin A", correct: false },
      { text: "Vitamin D", correct: true },
      { text: "Vitamin C", correct: false },
      { text: "Vitamin E", correct: false },
    ],
  },
  {
    question: "Which organ purifies our blood?",
    answers: [
      { text: "Heart", correct: false },
      { text: "Kidney", correct: true },
      { text: "Lungs", correct: false },
      { text: "Liver", correct: false },
    ],
  },
  {
    question: "What is the capital of Canada?",
    answers: [
      { text: "Toronto", correct: false },
      { text: "Ottawa", correct: true },
      { text: "Vancouver", correct: false },
      { text: "Montreal", correct: false },
    ],
  },
  {
    question: "What is the national flower of Japan?",
    answers: [
      { text: "Rose", correct: false },
      { text: "Cherry blossom", correct: true },
      { text: "Lotus", correct: false },
      { text: "Tulip", correct: false },
    ],
  },
  {
    question: "Which instrument measures atmospheric pressure?",
    answers: [
      { text: "Thermometer", correct: false },
      { text: "Barometer", correct: true },
      { text: "Hygrometer", correct: false },
      { text: "Anemometer", correct: false },
    ],
  },
  {
    question: "Which is the largest internal organ in the human body?",
    answers: [
      { text: "Heart", correct: false },
      { text: "Liver", correct: true },
      { text: "Kidney", correct: false },
      { text: "Lungs", correct: false },
    ],
  },
  {
    question: "What is the freezing point of water in Celsius?",
    answers: [
      { text: "0", correct: true },
      { text: "10", correct: false },
      { text: "5", correct: false },
      { text: "20", correct: false },
    ],
  },
  {
    question: "What is the capital of Egypt?",
    answers: [
      { text: "Cairo", correct: true },
      { text: "Alexandria", correct: false },
      { text: "Luxor", correct: false },
      { text: "Giza", correct: false },
    ],
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    answers: [
      { text: "Tiger", correct: false },
      { text: "Lion", correct: true },
      { text: "Leopard", correct: false },
      { text: "Cheetah", correct: false },
    ],
  },
  {
    question: "What is the capital of Italy?",
    answers: [
      { text: "Rome", correct: true },
      { text: "Venice", correct: false },
      { text: "Milan", correct: false },
      { text: "Florence", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for silver?",
    answers: [
      { text: "Si", correct: false },
      { text: "Ag", correct: true },
      { text: "Au", correct: false },
      { text: "Sl", correct: false },
    ],
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    answers: [
      { text: "Germany", correct: false },
      { text: "France", correct: true },
      { text: "UK", correct: false },
      { text: "Spain", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Morning Star?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Venus", correct: true },
      { text: "Mercury", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    question: "How many players are there in a football (soccer) team?",
    answers: [
      { text: "9", correct: false },
      { text: "11", correct: true },
      { text: "10", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Carbon dioxide", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
    {
    question: "Which continent is the Sahara Desert located in?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "Australia", correct: false },
      { text: "South America", correct: false },
    ],
  },
  {
    question: "What is the largest mammal on land?",
    answers: [
      { text: "Elephant", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Rhino", correct: false },
      { text: "Hippo", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Blue Planet?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Earth", correct: true },
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: false },
    ],
  },
  {
    question: "Who invented the telephone?",
    answers: [
      { text: "Albert Einstein", correct: false },
      { text: "Alexander Graham Bell", correct: true },
      { text: "Nikola Tesla", correct: false },
      { text: "Thomas Edison", correct: false },
    ],
  },
  {
    question: "What is the largest bone in the human body?",
    answers: [
      { text: "Skull", correct: false },
      { text: "Femur", correct: true },
      { text: "Spine", correct: false },
      { text: "Rib", correct: false },
    ],
  },
  {
    question: "Which gas is known as laughing gas?",
    answers: [
      { text: "Carbon dioxide", correct: false },
      { text: "Nitrous oxide", correct: true },
      { text: "Methane", correct: false },
      { text: "Oxygen", correct: false },
    ],
  },
  {
    question: "Which country is the Taj Mahal located in?",
    answers: [
      { text: "India", correct: true },
      { text: "Pakistan", correct: false },
      { text: "Bangladesh", correct: false },
      { text: "Nepal", correct: false },
    ],
  },
  {
    question: "Which element is needed for breathing?",
    answers: [
      { text: "Nitrogen", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Carbon dioxide", correct: false },
      { text: "Helium", correct: false },
    ],
  },
  {
    question: "Which country is called the Land of a Thousand Lakes?",
    answers: [
      { text: "Sweden", correct: false },
      { text: "Finland", correct: true },
      { text: "Norway", correct: false },
      { text: "Canada", correct: false },
    ],
  },
  {
    question: "Which fruit is known as the King of Fruits?",
    answers: [
      { text: "Apple", correct: false },
      { text: "Mango", correct: true },
      { text: "Banana", correct: false },
      { text: "Pineapple", correct: false },
    ],
  },
  {
    question: "Which is the smallest planet in our solar system?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Mercury", correct: true },
      { text: "Pluto", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "Which instrument is used to measure temperature?",
    answers: [
      { text: "Barometer", correct: false },
      { text: "Thermometer", correct: true },
      { text: "Hygrometer", correct: false },
      { text: "Speedometer", correct: false },
    ],
  },
  {
    question: "Who discovered gravity?",
    answers: [
      { text: "Albert Einstein", correct: false },
      { text: "Isaac Newton", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Stephen Hawking", correct: false },
    ],
  },
  {
    question: "Which is the fastest bird?",
    answers: [
      { text: "Ostrich", correct: false },
      { text: "Peregrine Falcon", correct: true },
      { text: "Eagle", correct: false },
      { text: "Hawk", correct: false },
    ],
  },
  {
    question: "What is the capital of Germany?",
    answers: [
      { text: "Munich", correct: false },
      { text: "Berlin", correct: true },
      { text: "Frankfurt", correct: false },
      { text: "Hamburg", correct: false },
    ],
  },
  {
    question: "Which is the national animal of China?",
    answers: [
      { text: "Tiger", correct: false },
      { text: "Giant Panda", correct: true },
      { text: "Leopard", correct: false },
      { text: "Dragon", correct: false },
    ],
  },
  {
    question: "What is the capital of South Korea?",
    answers: [
      { text: "Beijing", correct: false },
      { text: "Seoul", correct: true },
      { text: "Tokyo", correct: false },
      { text: "Pyongyang", correct: false },
    ],
  },
  {
    question: "Which is the hottest planet in our solar system?",
    answers: [
      { text: "Mercury", correct: false },
      { text: "Venus", correct: true },
      { text: "Mars", correct: false },
      { text: "Neptune", correct: false },
    ],
  },
  {
    question: "Which city is known as the Big Apple?",
    answers: [
      { text: "Los Angeles", correct: false },
      { text: "New York", correct: true },
      { text: "Chicago", correct: false },
      { text: "Miami", correct: false },
    ],
  },
  {
    question: "Which language has the most native speakers?",
    answers: [
      { text: "English", correct: false },
      { text: "Mandarin Chinese", correct: true },
      { text: "Spanish", correct: false },
      { text: "Hindi", correct: false },
    ],
  },
  {
    question: "What is the capital of Russia?",
    answers: [
      { text: "St. Petersburg", correct: false },
      { text: "Moscow", correct: true },
      { text: "Kazan", correct: false },
      { text: "Novosibirsk", correct: false },
    ],
  },
  {
    question: "Which country is famous for tulips?",
    answers: [
      { text: "Germany", correct: false },
      { text: "Netherlands", correct: true },
      { text: "France", correct: false },
      { text: "Switzerland", correct: false },
    ],
  },
  {
    question: "Which metal is liquid at room temperature?",
    answers: [
      { text: "Iron", correct: false },
      { text: "Mercury", correct: true },
      { text: "Aluminium", correct: false },
      { text: "Copper", correct: false },
    ],
  },
  {
    question: "Which continent has the most countries?",
    answers: [
      { text: "Europe", correct: false },
      { text: "Africa", correct: true },
      { text: "Asia", correct: false },
      { text: "South America", correct: false },
    ],
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Dollar", correct: false },
      { text: "Yen", correct: true },
      { text: "Won", correct: false },
      { text: "Rupee", correct: false },
    ],
  },
  {
    question: "Who was the first man to walk on the moon?",
    answers: [
      { text: "Buzz Aldrin", correct: false },
      { text: "Neil Armstrong", correct: true },
      { text: "Yuri Gagarin", correct: false },
      { text: "Michael Collins", correct: false },
    ],
  },
  {
    question: "Which is the longest mountain range in the world?",
    answers: [
      { text: "Himalayas", correct: false },
      { text: "Andes", correct: true },
      { text: "Rockies", correct: false },
      { text: "Alps", correct: false },
    ],
  },
  {
    question: "Which country is known as the Land of Fire and Ice?",
    answers: [
      { text: "Iceland", correct: true },
      { text: "Greenland", correct: false },
      { text: "Norway", correct: false },
      { text: "Canada", correct: false },
    ],
  },
  {
    question: "Which is the largest island in the world?",
    answers: [
      { text: "Madagascar", correct: false },
      { text: "Greenland", correct: true },
      { text: "Borneo", correct: false },
      { text: "New Guinea", correct: false },
    ],
  },
  {
    question: "Which gas do we exhale?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Which country invented paper?",
    answers: [
      { text: "Egypt", correct: false },
      { text: "China", correct: true },
      { text: "Greece", correct: false },
      { text: "India", correct: false },
    ],
  },
  {
    question: "What is the capital of Spain?",
    answers: [
      { text: "Barcelona", correct: false },
      { text: "Madrid", correct: true },
      { text: "Seville", correct: false },
      { text: "Valencia", correct: false },
    ],
  },
  {
    question: "Which is the coldest continent?",
    answers: [
      { text: "Europe", correct: false },
      { text: "Antarctica", correct: true },
      { text: "North America", correct: false },
      { text: "Asia", correct: false },
    ],
  },
  {
    question: "What is the capital of Nigeria?",
    answers: [
      { text: "Lagos", correct: false },
      { text: "Abuja", correct: true },
      { text: "Kano", correct: false },
      { text: "Port Harcourt", correct: false },
    ],
  },
  {
    question: "Which sport uses a shuttlecock?",
    answers: [
      { text: "Tennis", correct: false },
      { text: "Badminton", correct: true },
      { text: "Squash", correct: false },
      { text: "Table tennis", correct: false },
    ],
  },
  {
    question: "Which continent is the Amazon rainforest in?",
    answers: [
      { text: "Asia", correct: false },
      { text: "South America", correct: true },
      { text: "Africa", correct: false },
      { text: "Australia", correct: false },
    ],
  },
  {
    question: "Which is the capital of Argentina?",
    answers: [
      { text: "Santiago", correct: false },
      { text: "Buenos Aires", correct: true },
      { text: "Rio de Janeiro", correct: false },
      { text: "Montevideo", correct: false },
    ],
  },
  {
    question: "What is the capital of Turkey?",
    answers: [
      { text: "Istanbul", correct: false },
      { text: "Ankara", correct: true },
      { text: "Izmir", correct: false },
      { text: "Antalya", correct: false },
    ],
  },
  {
    question: "Which is the largest lake in the world?",
    answers: [
      { text: "Lake Superior", correct: false },
      { text: "Caspian Sea", correct: true },
      { text: "Lake Victoria", correct: false },
      { text: "Lake Baikal", correct: false },
    ],
  },
  {
    question: "Which is the tallest building in the world (as of 2025)?",
    answers: [
      { text: "Shanghai Tower", correct: false },
      { text: "Burj Khalifa", correct: true },
      { text: "Lotte World Tower", correct: false },
      { text: "Taipei 101", correct: false },
    ],
  },
  {
    question: "Which is the longest river in Africa?",
    answers: [
      { text: "Congo", correct: false },
      { text: "Nile", correct: true },
      { text: "Niger", correct: false },
      { text: "Zambezi", correct: false },
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
