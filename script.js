const questions = [
{     
  question: "Which is the largest animal in the world",     
  answers: [         
    { text: "Shark", correct: false },         
    { text: "Blue whale", correct: true },         
    { text: "Elephant", correct: false },         
    { text: "Giraffe", correct: false },     
  ] 
}, 
{     
  question: "Which planet is known as the Red Planet?",     
  answers: [         
    { text: "Venus", correct: false },         
    { text: "Mars", correct: true },         
    { text: "Jupiter", correct: false },         
    { text: "Saturn", correct: false },     
  ] 
}, 
{     
  question: "What is the capital city of France?",     
  answers: [         
    { text: "Paris", correct: true },         
    { text: "Rome", correct: false },         
    { text: "Madrid", correct: false },         
    { text: "Berlin", correct: false },     
  ] 
}, 
{     
  question: "Which gas do plants absorb from the atmosphere?",     
  answers: [         
    { text: "Oxygen", correct: false },         
    { text: "Carbon dioxide", correct: true },         
    { text: "Nitrogen", correct: false },         
    { text: "Hydrogen", correct: false },     
  ] 
}, 
{     
  question: "What is the largest continent in the world?",     
  answers: [         
    { text: "Africa", correct: false },         
    { text: "Asia", correct: true },         
    { text: "Europe", correct: false },         
    { text: "Australia", correct: false },     
  ] 
}, 
{     
  question: "Which is the fastest land animal?",     
  answers: [         
    { text: "Lion", correct: false },         
    { text: "Cheetah", correct: true },         
    { text: "Tiger", correct: false },         
    { text: "Horse", correct: false },     
  ] 
}, 
{     
  question: "Who wrote the play Romeo and Juliet?",     
  answers: [         
    { text: "William Shakespeare", correct: true },         
    { text: "Charles Dickens", correct: false },         
    { text: "Mark Twain", correct: false },         
    { text: "Leo Tolstoy", correct: false },     
  ] 
}, 
{     
  question: "Which element has the chemical symbol O?",     
  answers: [         
    { text: "Gold", correct: false },         
    { text: "Oxygen", correct: true },         
    { text: "Osmium", correct: false },         
    { text: "Oxide", correct: false },     
  ] 
}, 
{     
  question: "What is the tallest mountain in the world?",     
  answers: [         
    { text: "K2", correct: false },         
    { text: "Mount Everest", correct: true },         
    { text: "Kilimanjaro", correct: false },         
    { text: "Andes", correct: false },     
  ] 
}, 
{     
  question: "Which is the smallest prime number?",     
  answers: [         
    { text: "1", correct: false },         
    { text: "2", correct: true },         
    { text: "3", correct: false },         
    { text: "5", correct: false },     
  ] 
}, 
{     
  question: "Which ocean is the largest?",     
  answers: [         
    { text: "Atlantic Ocean", correct: false },         
    { text: "Pacific Ocean", correct: true },         
    { text: "Indian Ocean", correct: false },         
    { text: "Arctic Ocean", correct: false },     
  ] 
}, 
{     
  question: "Who was the first man to walk on the moon?",     
  answers: [         
    { text: "Buzz Aldrin", correct: false },         
    { text: "Neil Armstrong", correct: true },         
    { text: "Yuri Gagarin", correct: false },         
    { text: "Michael Collins", correct: false },     
  ] 
}, 
{     
  question: "Which instrument has keys, pedals, and strings?",     
  answers: [         
    { text: "Guitar", correct: false },         
    { text: "Piano", correct: true },         
    { text: "Violin", correct: false },         
    { text: "Drums", correct: false },     
  ] 
}, 
{     
  question: "Which language has the most native speakers in the world?",     
  answers: [         
    { text: "English", correct: false },         
    { text: "Mandarin Chinese", correct: true },         
    { text: "Spanish", correct: false },         
    { text: "Hindi", correct: false },     
  ] 
}, 
{     
  question: "How many days are there in a leap year?",     
  answers: [         
    { text: "364", correct: false },         
    { text: "366", correct: true },         
    { text: "365", correct: false },         
    { text: "368", correct: false },     
  ] 
}, 
{     
  question: "Which human organ is responsible for speech?",     
  answers: [         
    { text: "Tongue", correct: false },         
    { text: "Larynx", correct: true },         
    { text: "Trachea", correct: false },         
    { text: "Esophagus", correct: false },     
  ] 
}, 
{     
  question: "Which part of the human brain regulates body temperature?",     
  answers: [         
    { text: "Cerebellum", correct: false },         
    { text: "Hypothalamus", correct: true },         
    { text: "Cerebrum", correct: false },         
    { text: "Medulla", correct: false },     
  ] 
}, 
{     
  question: "Which organ system includes the skin, hair, and nails?",     
  answers: [         
    { text: "Respiratory system", correct: false },         
    { text: "Integumentary system", correct: true },         
    { text: "Skeletal system", correct: false },         
    { text: "Digestive system", correct: false },     
  ] 
}, 
{     
  question: "Which cells in plants control the opening and closing of stomata?",     
  answers: [         
    { text: "Xylem cells", correct: false },         
    { text: "Guard cells", correct: true },         
    { text: "Phloem cells", correct: false },         
    { text: "Root hair cells", correct: false },     
  ] 
}, 
{     
  question: "Which blood vessels carry blood away from the heart?",     
  answers: [         
    { text: "Veins", correct: false },         
    { text: "Arteries", correct: true },         
    { text: "Capillaries", correct: false },         
    { text: "Venules", correct: false },     
  ] 
}, 
{     
  question: "Which process produces gametes in humans?",     
  answers: [         
    { text: "Mitosis", correct: false },         
    { text: "Meiosis", correct: true },         
    { text: "Binary fission", correct: false },         
    { text: "Budding", correct: false },     
  ] 
}, 
{     
  question: "What is the currency of Japan?",     
  answers: [         
    { text: "Won", correct: false },         
    { text: "Yen", correct: true },         
    { text: "Dollar", correct: false },         
    { text: "Peso", correct: false },     
  ] 
}, 
{     
  question: "Which blood group is known as the universal donor?",     
  answers: [         
    { text: "A", correct: false },         
    { text: "O negative", correct: true },         
    { text: "AB", correct: false },         
    { text: "B", correct: false },     
  ] 
}, 
{     
  question: "Which is the hardest natural substance on Earth?",     
  answers: [         
    { text: "Iron", correct: false },         
    { text: "Diamond", correct: true },         
    { text: "Gold", correct: false },         
    { text: "Granite", correct: false },     
  ] 
}, 
{     
  question: "Which is the longest river in the world?",     
  answers: [         
    { text: "Amazon River", correct: true },         
    { text: "Nile River", correct: false },         
    { text: "Yangtze River", correct: false },         
    { text: "Mississippi River", correct: false },     
  ] 
}, 
{     
  question: "Which is the national sport of Japan?",     
  answers: [         
    { text: "Karate", correct: false },         
    { text: "Sumo Wrestling", correct: true },         
    { text: "Judo", correct: false },         
    { text: "Kendo", correct: false },     
  ] 
}, 
{     
  question: "Who painted the Mona Lisa?",     
  answers: [         
    { text: "Vincent van Gogh", correct: false },         
    { text: "Leonardo da Vinci", correct: true },         
    { text: "Pablo Picasso", correct: false },         
    { text: "Claude Monet", correct: false },     
  ] 
}, 
{     
  question: "Which is the closest star to Earth?",     
  answers: [         
    { text: "Polaris", correct: false },         
    { text: "The Sun", correct: true },         
    { text: "Sirius", correct: false },         
    { text: "Alpha Centauri", correct: false },     
  ] 
}, 
{     
  question: "What is the chemical symbol for water?",     
  answers: [         
    { text: "O2", correct: false },         
    { text: "H2O", correct: true },         
    { text: "CO2", correct: false },         
    { text: "HO", correct: false },     
  ] 
}, 
{     
  question: "Which country is known as the Land of the Rising Sun?",     
  answers: [         
    { text: "China", correct: false },         
    { text: "Japan", correct: true },         
    { text: "Thailand", correct: false },         
    { text: "Korea", correct: false },     
  ] 
}, 
{     
  question: "How many continents are there in the world?",     
  answers: [         
    { text: "5", correct: false },         
    { text: "6", correct: false },         
    { text: "7", correct: true },         
    { text: "8", correct: false },     
  ] 
}, 
{     
  question: "Which metal is liquid at room temperature?",     
  answers: [         
    { text: "Mercury", correct: true },         
    { text: "Iron", correct: false },         
    { text: "Aluminum", correct: false },         
    { text: "Silver", correct: false },     
  ] 
}, 
{     
  question: "Which is the largest desert in the world?",     
  answers: [         
    { text: "Gobi", correct: false },         
    { text: "Sahara", correct: false },         
    { text: "Antarctic Desert", correct: true },         
    { text: "Kalahari", correct: false },     
  ] 
}, 
{     
  question: "Who invented the light bulb?",     
  answers: [         
    { text: "Thomas Edison", correct: true },         
    { text: "Nikola Tesla", correct: false },         
    { text: "Alexander Graham Bell", correct: false },         
    { text: "Michael Faraday", correct: false },     
  ] 
}, 
{     
  question: "Which is the largest mammal on land?",     
  answers: [         
    { text: "Elephant", correct: true },         
    { text: "Hippo", correct: false },         
    { text: "Giraffe", correct: false },         
    { text: "Rhino", correct: false },     
  ] 
}, 
{     
  question: "Which organ purifies our blood?",     
  answers: [         
    { text: "Heart", correct: false },         
    { text: "Kidney", correct: true },         
    { text: "Lungs", correct: false },         
    { text: "Liver", correct: false },     
  ] 
}, 
{     
  question: "What is the capital city of Italy?",     
  answers: [         
    { text: "Paris", correct: false },         
    { text: "Rome", correct: true },         
    { text: "Milan", correct: false },         
    { text: "Venice", correct: false },     
  ] 
},
{     
  question: "What is the powerhouse of the cell?",     
  answers: [         
    { text: "Nucleus", correct: false },         
    { text: "Mitochondria", correct: true },         
    { text: "Ribosome", correct: false },         
    { text: "Chloroplast", correct: false },     
  ] 
}, 
{     
  question: "Which blood cells help fight infections?",     
  answers: [         
    { text: "Red blood cells", correct: false },         
    { text: "White blood cells", correct: true },         
    { text: "Platelets", correct: false },         
    { text: "Plasma", correct: false },     
  ] 
}, 
{     
  question: "Which organ in the human body purifies blood?",     
  answers: [         
    { text: "Lungs", correct: false },         
    { text: "Kidneys", correct: true },         
    { text: "Heart", correct: false },         
    { text: "Liver", correct: false },     
  ] 
}, 
{     
  question: "Which organ in humans is responsible for pumping blood?",     
  answers: [         
    { text: "Lungs", correct: false },         
    { text: "Heart", correct: true },         
    { text: "Kidneys", correct: false },         
    { text: "Brain", correct: false },     
  ] 
}, 
{     
  question: "What pigment gives plants their green color?",     
  answers: [         
    { text: "Carotene", correct: false },         
    { text: "Chlorophyll", correct: true },         
    { text: "Xanthophyll", correct: false },         
    { text: "Anthocyanin", correct: false },     
  ] 
}, 
{     
  question: "Which part of the brain controls breathing and heartbeat?",     
  answers: [         
    { text: "Cerebrum", correct: false },         
    { text: "Medulla oblongata", correct: true },         
    { text: "Cerebellum", correct: false },         
    { text: "Hypothalamus", correct: false },     
  ] 
}, 
{     
  question: "Which is the largest organ in the human body?",     
  answers: [         
    { text: "Liver", correct: false },         
    { text: "Skin", correct: true },         
    { text: "Lungs", correct: false },         
    { text: "Heart", correct: false },     
  ] 
}, 
{     
  question: "Which blood group is known as the universal donor?",     
  answers: [         
    { text: "AB positive", correct: false },         
    { text: "O negative", correct: true },         
    { text: "B positive", correct: false },         
    { text: "A positive", correct: false },     
  ] 
}, 
{     
  question: "What type of blood cells carry oxygen?",     
  answers: [         
    { text: "Platelets", correct: false },         
    { text: "Red blood cells", correct: true },         
    { text: "White blood cells", correct: false },         
    { text: "Plasma", correct: false },     
  ] 
}, 
{     
  question: "Which organ produces insulin?",     
  answers: [         
    { text: "Liver", correct: false },         
    { text: "Pancreas", correct: true },         
    { text: "Kidneys", correct: false },         
    { text: "Gallbladder", correct: false },     
  ] 
}, 
{     
  question: "Which vitamin is produced when the skin is exposed to sunlight?",     
  answers: [         
    { text: "Vitamin C", correct: false },         
    { text: "Vitamin D", correct: true },         
    { text: "Vitamin A", correct: false },         
    { text: "Vitamin B12", correct: false },     
  ] 
}, 
{     
  question: "Which human organ detoxifies chemicals and metabolizes drugs?",     
  answers: [         
    { text: "Heart", correct: false },         
    { text: "Liver", correct: true },         
    { text: "Kidneys", correct: false },         
    { text: "Stomach", correct: false },     
  ] 
}, 
{     
  question: "Which part of the plant conducts photosynthesis?",     
  answers: [         
    { text: "Root", correct: false },         
    { text: "Leaf", correct: true },         
    { text: "Stem", correct: false },         
    { text: "Flower", correct: false },     
  ] 
}, 
{     
  question: "What is the normal human body temperature in Celsius?",     
  answers: [         
    { text: "35°C", correct: false },         
    { text: "37°C", correct: true },         
    { text: "39°C", correct: false },         
    { text: "40°C", correct: false },     
  ] 
}, 
{     
  question: "Which gas do humans exhale during respiration?",     
  answers: [         
    { text: "Oxygen", correct: false },         
    { text: "Carbon dioxide", correct: true },         
    { text: "Nitrogen", correct: false },         
    { text: "Hydrogen", correct: false },     
  ] 
}, 
{     
  question: "Which organ stores bile?",     
  answers: [         
    { text: "Pancreas", correct: false },         
    { text: "Gallbladder", correct: true },         
    { text: "Liver", correct: false },         
    { text: "Stomach", correct: false },     
  ] 
}, 
{     
  question: "Which human organ is responsible for producing urine?",     
  answers: [         
    { text: "Liver", correct: false },         
    { text: "Kidneys", correct: true },         
    { text: "Bladder", correct: false },         
    { text: "Pancreas", correct: false },     
  ] 
}, 
{     
  question: "Which part of the human eye controls the amount of light entering?",     
  answers: [         
    { text: "Lens", correct: false },         
    { text: "Iris", correct: true },         
    { text: "Retina", correct: false },         
    { text: "Cornea", correct: false },     
  ] 
}, 
{     
  question: "Which process converts sugar into energy in cells?",     
  answers: [         
    { text: "Photosynthesis", correct: false },         
    { text: "Respiration", correct: true },         
    { text: "Fermentation", correct: false },         
    { text: "Transpiration", correct: false },     
  ] 
}, 
{     
  question: "Which blood cells are responsible for clotting?",     
  answers: [         
    { text: "Plasma", correct: false },         
    { text: "Platelets", correct: true },         
    { text: "Red blood cells", correct: false },         
    { text: "White blood cells", correct: false },     
  ] 
}, 
{     
  question: "What is the structural and functional unit of the kidney?",     
  answers: [         
    { text: "Neuron", correct: false },         
    { text: "Nephron", correct: true },         
    { text: "Alveoli", correct: false },         
    { text: "Glomerulus", correct: false },     
  ] 
}, 
{     
  question: "Which organ controls the human nervous system?",     
  answers: [         
    { text: "Heart", correct: false },         
    { text: "Brain", correct: true },         
    { text: "Liver", correct: false },         
    { text: "Spinal cord", correct: false },     
  ] 
}, 
{     
  question: "Which part of the cell contains genetic material?",     
  answers: [         
    { text: "Cytoplasm", correct: false },         
    { text: "Nucleus", correct: true },         
    { text: "Mitochondria", correct: false },         
    { text: "Ribosomes", correct: false },     
  ] 
}, 
{     
  question: "Which blood type is the universal recipient?",     
  answers: [         
    { text: "O negative", correct: false },         
    { text: "AB positive", correct: true },         
    { text: "A positive", correct: false },         
    { text: "B positive", correct: false },     
  ] 
}, 
{     
  question: "Which part of the human brain controls balance?",     
  answers: [         
    { text: "Cerebrum", correct: false },         
    { text: "Cerebellum", correct: true },         
    { text: "Hypothalamus", correct: false },         
    { text: "Medulla", correct: false },     
  ] 
}, 
{     
  question: "Which organ is responsible for hearing and balance?",     
  answers: [         
    { text: "Nose", correct: false },         
    { text: "Ear", correct: true },         
    { text: "Eyes", correct: false },         
    { text: "Mouth", correct: false },     
  ] 
}, 
{     
  question: "Which tissue connects muscles to bones?",     
  answers: [         
    { text: "Ligaments", correct: false },         
    { text: "Tendons", correct: true },         
    { text: "Cartilage", correct: false },         
    { text: "Nerves", correct: false },     
  ] 
}, 
{     
  question: "Which process do plants use to lose water vapor?",     
  answers: [         
    { text: "Respiration", correct: false },         
    { text: "Transpiration", correct: true },         
    { text: "Photosynthesis", correct: false },         
    { text: "Osmosis", correct: false },     
  ] 
}, 
{     
  question: "What type of blood circulation goes through the lungs?",     
  answers: [         
    { text: "Systemic circulation", correct: false },         
    { text: "Pulmonary circulation", correct: true },         
    { text: "Coronary circulation", correct: false },         
    { text: "Portal circulation", correct: false },     
  ] 
}, 
{     
  question: "Which mineral is essential for healthy bones and teeth?",     
  answers: [         
    { text: "Iron", correct: false },         
    { text: "Calcium", correct: true },         
    { text: "Potassium", correct: false },         
    { text: "Sodium", correct: false },     
  ] 
}, 
{     
  question: "Which blood component carries nutrients and hormones?",     
  answers: [         
    { text: "White blood cells", correct: false },         
    { text: "Plasma", correct: true },         
    { text: "Platelets", correct: false },         
    { text: "Red blood cells", correct: false },     
  ] 
}, 
{     
  question: "What is the main function of red blood cells?",     
  answers: [         
    { text: "Clotting", correct: false },         
    { text: "Carrying oxygen", correct: true },         
    { text: "Fighting infection", correct: false },         
    { text: "Producing insulin", correct: false },     
  ] 
}, 
{     
  question: "Which process in plants converts light into chemical energy?",     
  answers: [         
    { text: "Respiration", correct: false },         
    { text: "Photosynthesis", correct: true },         
    { text: "Fermentation", correct: false },         
    { text: "Germination", correct: false },     
  ] 
}, 
{     
  question: "Which part of the human skeleton protects the brain?",     
  answers: [         
    { text: "Spine", correct: false },         
    { text: "Skull", correct: true },         
    { text: "Rib cage", correct: false },         
    { text: "Pelvis", correct: false },     
  ] 
}, 
{     
  question: "Which cells in plants are responsible for transporting water?",     
  answers: [         
    { text: "Phloem", correct: false },         
    { text: "Xylem", correct: true },         
    { text: "Chloroplasts", correct: false },         
    { text: "Guard cells", correct: false },     
  ] 
}, 
{     
  question: "Which enzyme breaks down starch into sugar?",     
  answers: [         
    { text: "Pepsin", correct: false },         
    { text: "Amylase", correct: true },         
    { text: "Lipase", correct: false },         
    { text: "Trypsin", correct: false },     
  ] 
}, 
{     
  question: "Which part of the cell is responsible for protein synthesis?",     
  answers: [         
    { text: "Nucleus", correct: false },         
    { text: "Ribosome", correct: true },         
    { text: "Mitochondria", correct: false },         
    { text: "Golgi apparatus", correct: false },     
  ] 
}, 
{     
  question: "Which structure in the human body connects muscles to muscles?",     
  answers: [         
    { text: "Ligaments", correct: false },         
    { text: "Fascia", correct: true },         
    { text: "Tendons", correct: false },         
    { text: "Cartilage", correct: false },     
  ] 
}, 
{     
  question: "Which organ is responsible for storing and releasing glucose?",     
  answers: [         
    { text: "Kidneys", correct: false },         
    { text: "Liver", correct: true },         
    { text: "Pancreas", correct: false },         
    { text: "Stomach", correct: false },     
  ] 
}, 
{     
  question: "Which is the largest gland in the human body?",     
  answers: [         
    { text: "Pancreas", correct: false },         
    { text: "Liver", correct: true },         
    { text: "Salivary gland", correct: false },         
    { text: "Thyroid gland", correct: false },     
  ] 
}, 
{     
  question: "What type of muscle is found in the walls of internal organs?",     
  answers: [         
    { text: "Skeletal muscle", correct: false },         
    { text: "Smooth muscle", correct: true },         
    { text: "Cardiac muscle", correct: false },         
    { text: "Voluntary muscle", correct: false },     
  ] 
}
];

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


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  backButton.style.display = "none"; 
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
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
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  backButton.style.display = "none";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
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
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

backButton.addEventListener("click", handleBackButton);

startQuiz();