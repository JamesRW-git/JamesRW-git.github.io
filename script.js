const questions = [
    {
        question: "What is the primary function of the respiratory system?",
        answers: [
            { text: "Gas exchange", correct: true },
            { text: "Blood filtration", correct: false },
            { text: "Nutrient absorption", correct: false },
            { text: "Hormone regulation", correct: false }
        ]
    },
    {
        question: "The diaphragm is the primary muscle involved in quiet (eupneic) breathing.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "How many pairs of true ribs are in the human body?",
        answers: [
            { text: "5", correct: false },
            { text: "7", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "The right lung is larger than the left lung.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Which muscle is primarily responsible for lifting the ribs during inspiration?",
        answers: [
            { text: "Internal intercostals", correct: false },
            { text: "Diaphragm", correct: false },
            { text: "External intercostals", correct: true },
            { text: "Rectus abdominis", correct: false }
        ]
    },
    {
        question: "What structure divides the nasal cavity into two sections?",
        answers: [
            { text: "Nasal septum", correct: true },
            { text: "Larynx", correct: false },
            { text: "Trachea", correct: false },
            { text: "Pharynx", correct: false }
        ]
    },
    {
        question: "The trachea bifurcates into the right and left mainstem bronchi at the carina.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Which part of the respiratory system is referred to as the 'voice box'?",
        answers: [
            { text: "Larynx", correct: true },
            { text: "Pharynx", correct: false },
            { text: "Trachea", correct: false },
            { text: "Bronchi", correct: false }
        ]
    },
    {
        question: "The pharynx serves as a common passageway for both air and food.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Which structure covers the trachea during swallowing to prevent aspiration?",
        answers: [
            { text: "Epiglottis", correct: true },
            { text: "Vocal cords", correct: false },
            { text: "Larynx", correct: false },
            { text: "Nasal septum", correct: false }
        ]
    },
    {
        question: "What is the primary site of gas exchange in the lungs?",
        answers: [
            { text: "Bronchi", correct: false },
            { text: "Alveoli", correct: true },
            { text: "Trachea", correct: false },
            { text: "Pleura", correct: false }
        ]
    },
    {
        question: "The pleural space is located between which two structures?",
        answers: [
            { text: "Ribs and lungs", correct: false },
            { text: "Lungs and diaphragm", correct: false },
            { text: "Parietal pleura and visceral pleura", correct: true },
            { text: "Bronchi and alveoli", correct: false }
        ]
    },
    {
        question: "Which structure is primarily responsible for the production of surfactant in the lungs?",
        answers: [
            { text: "Type I pneumocytes", correct: false },
            { text: "Type II pneumocytes", correct: true },
            { text: "Alveolar macrophages", correct: false },
            { text: "Ciliated epithelial cells", correct: false }
        ]
    },
    {
        question: "Which of the following anatomical landmarks is used to identify the location where the trachea bifurcates into the mainstem bronchi?",
        answers: [
            { text: "Sternal notch", correct: false },
            { text: "Carina", correct: false },
            { text: "Xiphoid process", correct: false },
            { text: "Angle of Louis", correct: true }
        ]
    },
    {
        question: "Which part of the lung is most affected by the accumulation of 'dead space' gas?",
        answers: [
            { text: "Bases", correct: false },
            { text: "Apices", correct: true },
            { text: "Hilum", correct: false },
            { text: "Pleural space", correct: false }
        ]
    },
    {
        question: "The right lung has how many lobes?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Which of the following muscles is NOT typically involved in quiet respiration?",
        answers: [
            { text: "Diaphragm", correct: false },
            { text: "External intercostals", correct: false },
            { text: "Sternocleidomastoid", correct: true },
            { text: "Internal intercostals", correct: false }
        ]
    },
    {
        question: "Which component of the thoracic wall provides the primary site for muscle attachment?",
        answers: [
            { text: "Ribs", correct: true },
            { text: "Sternum", correct: false },
            { text: "Vertebrae", correct: false },
            { text: "Costal cartilage", correct: false }
        ]
    },
    {
        question: "The mediastinum includes all of the following structures except:",
        answers: [
            { text: "Heart", correct: false },
            { text: "Esophagus", correct: false },
            { text: "Lungs", correct: true },
            { text: "Great vessels", correct: false }
        ]
    },
    {
        question: "Which of the following is true about the diaphragm during inspiration?",
        answers: [
            { text: "It contracts and moves upward", correct: false },
            { text: "It contracts and flattens", correct: true },
            { text: "It relaxes and flattens", correct: false },
            { text: "It relaxes and moves upward", correct: false }
        ]
    },
    {
        question: "Which of the following best describes the role of alveolar macrophages?",
        answers: [
            { text: "Gas exchange", correct: false },
            { text: "Production of mucus", correct: false },
            { text: "Phagocytosis of foreign particles", correct: true },
            { text: "Secretion of surfactant", correct: false }
        ]
    },
    {
        question: "The angle of Louis is an important anatomical landmark located at the junction of which two structures?",
        answers: [
            { text: "Manubrium and body of the sternum", correct: true },
            { text: "Clavicle and manubrium", correct: false },
            { text: "Xiphoid process and body of the sternum", correct: false },
            { text: "First rib and manubrium", correct: false }
        ]
    },
    {
        question: "Which part of the respiratory tract is responsible for the sense of smell?",
        answers: [
            { text: "Nasal cavity", correct: true },
            { text: "Pharynx", correct: false },
            { text: "Larynx", correct: false },
            { text: "Trachea", correct: false }
        ]
    },
    {
        question: "Which component of the thoracic cavity contains the heart, great vessels, and trachea?",
        answers: [
            { text: "Pleural cavity", correct: false },
            { text: "Pericardium", correct: false },
            { text: "Mediastinum", correct: true },
            { text: "Diaphragm", correct: false }
        ]
    },
    {
        question: "What is the primary role of surfactant in the lungs?",
        answers: [
            { text: "Increase airway resistance", correct: false },
            { text: "Reduce surface tension", correct: true },
            { text: "Promote mucus secretion", correct: false },
            { text: "Increase alveolar pressure", correct: false }
        ]
    },
    {
        question: "Which of the following statements is true about the right mainstem bronchus?",
        answers: [
            { text: "It is more vertical than the left bronchus", correct: true },
            { text: "It is more horizontal than the left bronchus", correct: false },
            { text: "It is longer than the left bronchus", correct: false },
            { text: "It has a smaller diameter than the left bronchus", correct: false }
        ]
    },
    {
        question: "Which of the following structures is NOT part of the lower respiratory tract?",
        answers: [
            { text: "Trachea", correct: false },
            { text: "Bronchi", correct: false },
            { text: "Alveoli", correct: false },
            { text: "Larynx", correct: true }
        ]
    },
    {
        question: "The pleura that directly covers the surface of the lungs is called the:",
        answers: [
            { text: "Parietal pleura", correct: false },
            { text: "Visceral pleura", correct: true },
            { text: "Mediastinal pleura", correct: false },
            { text: "Diaphragmatic pleura", correct: false }
        ]
    },
    {
        question: "What is the function of the cilia in the respiratory tract?",
        answers: [
            { text: "Gas exchange", correct: false },
            { text: "Mucus production", correct: false },
            { text: "Filtration and movement of mucus", correct: true },
            { text: "Structural support", correct: false }
        ]
    },
    {
        question: "Which of the following best describes the role of the epiglottis during swallowing?",
        answers: [
            { text: "Opens the trachea", correct: false },
            { text: "Closes the esophagus", correct: false },
            { text: "Covers the laryngeal opening", correct: true },
            { text: "Supports the vocal cords", correct: false }
        ]
    },
    {
        question: "The intercostal muscles are located between which structures?",
        answers: [
            { text: "Lungs and pleura", correct: false },
            { text: "Diaphragm and lungs", correct: false },
            { text: "Ribs", correct: true },
            { text: "Trachea and bronchi", correct: false }
        ]
    },
    {
        question: "The alveolar-capillary membrane is primarily responsible for:",
        answers: [
            { text: "Gas exchange", correct: true },
            { text: "Air filtration", correct: false },
            { text: "Producing mucus", correct: false },
            { text: "Moving the diaphragm", correct: false }
        ]
    },
    {
        question: "The primary muscle of respiration is the:",
        answers: [
            { text: "External intercostals", correct: false },
            { text: "Internal intercostals", correct: false },
            { text: "Diaphragm", correct: true },
            { text: "Scalene muscles", correct: false }
        ]
    },
    {
        question: "The upper respiratory tract includes all of the following EXCEPT:",
        answers: [
            { text: "Nasal cavity", correct: false },
            { text: "Pharynx", correct: false },
            { text: "Larynx", correct: false },
            { text: "Bronchi", correct: true }
        ]
    },
    {
        question: "What is the anatomical term for the throat?",
        answers: [
            { text: "Pharynx", correct: true },
            { text: "Larynx", correct: false },
            { text: "Trachea", correct: false },
            { text: "Esophagus", correct: false }
        ]
    },
    {
        question: "Which of the following structures is part of the larynx?",
        answers: [
            { text: "Epiglottis", correct: true },
            { text: "Trachea", correct: false },
            { text: "Bronchioles", correct: false },
            { text: "Alveoli", correct: false }
        ]
    },
    {
        question: "Which of the following muscles is involved in forced expiration?",
        answers: [
            { text: "Diaphragm", correct: false },
            { text: "External intercostals", correct: false },
            { text: "Internal intercostals", correct: true },
            { text: "Scalene muscles", correct: false }
        ]
    },
    {
        question: "The right lung has three lobes while the left lung has:",
        answers: [
            { text: "One lobe", correct: false },
            { text: "Two lobes", correct: true },
            { text: "Three lobes", correct: false },
            { text: "Four lobes", correct: false }
        ]
    },
    {
        question: "Which part of the brain regulates the rate and depth of breathing?",
        answers: [
            { text: "Cerebellum", correct: false },
            { text: "Medulla oblongata", correct: true },
            { text: "Hippocampus", correct: false },
            { text: "Thalamus", correct: false }
        ]
    },
    {
        question: "What is the function of the pleural fluid in the pleural space?",
        answers: [
            { text: "Aid in digestion", correct: false },
            { text: "Act as a lubricant", correct: true },
            { text: "Provide nutrients to the lungs", correct: false },
            { text: "Support the heart", correct: false }
        ]
    },
    {
        question: "The scalene muscles are considered accessory muscles of inspiration.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Which structure is responsible for filtering, heating, and humidifying the air we breathe?",
        answers: [
            { text: "Trachea", correct: false },
            { text: "Nasal cavity", correct: true },
            { text: "Alveoli", correct: false },
            { text: "Bronchi", correct: false }
        ]
    },
    {
        question: "What type of epithelium lines most of the conducting airways in the respiratory system?",
        answers: [
            { text: "Squamous epithelium", correct: false },
            { text: "Cuboidal epithelium", correct: false },
            { text: "Pseudostratified ciliated columnar epithelium", correct: true },
            { text: "Simple columnar epithelium", correct: false }
        ]
    },
    {
        question: "Which ribs are referred to as 'false ribs'?",
        answers: [
            { text: "Pairs 1-7", correct: false },
            { text: "Pairs 8-10", correct: true },
            { text: "Pairs 11-12", correct: false },
            { text: "All ribs are false ribs", correct: false }
        ]
    },
    {
        question: "What is the name of the cartilage that forms a complete ring around the trachea?",
        answers: [
            { text: "Thyroid cartilage", correct: false },
            { text: "Epiglottis", correct: false },
            { text: "Cricoid cartilage", correct: true },
            { text: "Tracheal cartilage", correct: false }
        ]
    },
    {
        question: "During quiet breathing, exhalation is typically a passive process.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "The mediastinum is the central compartment of the thoracic cavity that contains which of the following?",
        answers: [
            { text: "Lungs", correct: false },
            { text: "Heart", correct: true },
            { text: "Diaphragm", correct: false },
            { text: "Spleen", correct: false }
        ]
    },
    {
        question: "Which respiratory structure is the site where the trachea divides into the right and left mainstem bronchi?",
        answers: [
            { text: "Carina", correct: true },
            { text: "Epiglottis", correct: false },
            { text: "Larynx", correct: false },
            { text: "Alveolus", correct: false }
        ]
    },
    {
        question: "What is the typical length of the adult trachea?",
        answers: [
            { text: "6 cm", correct: false },
            { text: "9 cm", correct: false },
            { text: "12 cm", correct: true },
            { text: "15 cm", correct: false }
        ]
    }
];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const feedbackElement = document.getElementById('feedback');

let shuffledQuestions, currentQuestionIndex;
let correctAnswers = 0;  // Initialize correct answer counter

function startQuiz() {
    shuffledQuestions = shuffleArray(questions);  // Shuffle questions at the start
    currentQuestionIndex = 0;
    correctAnswers = 0;  // Reset correct answers counter
    nextButton.innerText = 'Next';  // Reset button text to "Next"
    nextButton.classList.add('hide');
    feedbackElement.classList.add('hide');
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    resetState();
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn', 'btn-outline-primary', 'mb-2');
        button.addEventListener('click', () => selectAnswer(answer, question.answers));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    feedbackElement.classList.add('hide');
    feedbackElement.innerText = '';  // Clear previous feedback
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(selectedAnswer, answers) {
    const correct = selectedAnswer.correct;
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.innerText === selectedAnswer.text && correct);
    });
    if (correct) {
        correctAnswers++;  // Increment correct answers counter if the answer is correct
    }
    displayFeedback(correct, answers);
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.innerText = 'Next';  // Ensure the button says "Next"
        nextButton.classList.remove('hide');
    } else {
        nextButton.innerText = 'Show Results';  // Change button text to "Show Results" when quiz is over
        nextButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.remove('btn-outline-primary');
        element.classList.add('btn-success');
    } else {
        element.classList.remove('btn-outline-primary');
        element.classList.add('btn-danger');
    }
}

function clearStatusClass(element) {
    element.classList.remove('btn-success');
    element.classList.remove('btn-danger');
    element.classList.add('btn-outline-primary');
}

function displayFeedback(correct, answers) {
    feedbackElement.classList.remove('hide');
    if (correct) {
        feedbackElement.innerText = "Correct!";
        feedbackElement.classList.add('text-success');
        feedbackElement.classList.remove('text-danger');
    } else {
        feedbackElement.innerText = "Incorrect!";
        feedbackElement.classList.add('text-danger');
        feedbackElement.classList.remove('text-success');
        // Find and display the correct answer
        const correctAnswer = answers.find(answer => answer.correct).text;
        feedbackElement.innerHTML += `<br>The correct answer is: <strong>${correctAnswer}</strong>`;
    }
}

function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm to randomize the array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showResults() {
    resetState();
    const percentageCorrect = Math.round((correctAnswers / shuffledQuestions.length) * 100);
    feedbackElement.innerText = `You answered ${correctAnswers} out of ${shuffledQuestions.length} questions correctly (${percentageCorrect}%).`;
    feedbackElement.classList.remove('hide');
    nextButton.innerText = 'Restart';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        showResults();  // Show results when all questions have been answered
    }
});

startQuiz();
