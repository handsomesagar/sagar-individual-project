// script.js

// Sample quiz questions and answers
const quizQuestions = [
    {
        question: "What does ARIA stand for?",
        options: ["Accessible Rich Internet Applications", "Advanced Responsive Image Architecture", "All Resources for Inclusive Accessibility"],
        correctAnswer: "Accessible Rich Internet Applications"
    },
    {
        question: "Why is alt text important for images?",
        options: ["To make images look better", "For SEO purposes", "To provide a text alternative for screen readers"],
        correctAnswer: "To provide a text alternative for screen readers"
    }
];

// Function to display quiz questions
function displayQuiz() {
    const quizContainer = document.querySelector('#quiz-container');

    quizQuestions.forEach((questionObj, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('quiz-question');

        // Display question
        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${questionObj.question}`;
        questionElement.appendChild(questionText);

        // Display options
        questionObj.options.forEach((option, optionIndex) => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question-${index}`;
            optionInput.value = option;
            optionLabel.appendChild(optionInput);
            optionLabel.innerHTML += ` ${option}`;

            questionElement.appendChild(optionLabel);
        });

        quizContainer.appendChild(questionElement);
    });
}

// Function to check quiz answers
function checkQuizAnswers() {
    const userAnswers = [];

    const quizQuestions = document.querySelectorAll('.quiz-question');

    quizQuestions.forEach((questionElement, index) => {
        const selectedOption = questionElement.querySelector('input:checked');
        const userAnswer = selectedOption ? selectedOption.value : null;

        userAnswers.push({
            question: index + 1,
            answer: userAnswer
        });
    });

    // For simplicity, let's just log the user answers to the console
    console.log("User Answers:", userAnswers);
}

// Call the function to display the quiz when the page loads
document.addEventListener('DOMContentLoaded', displayQuiz);
