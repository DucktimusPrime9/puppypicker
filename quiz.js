(function() {
    // Functions
    function buildQuiz() {
        const output = [];

        // Loop through each question
        questions.forEach((currentQuestion, questionNumber) => {
                const answers = [];
                // Add radio button to each question's answer
                for(letter in currentQuestion.answers){
                    answers.push(
                        `<label>
                            <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                        </label><br>`
                    );
                }

                // Add question and its answers to output
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div><br>`
                );
            }
        );
        // Put output to HTML page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // Get answer containers from quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");
        // Keep track overal score
        let score = 0;

        questions.forEach((currentQuestion, questionNumber) => {
            // Find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if(userAnswer===currentQuestion.correctAnswer){
                score++; // add to the number to score
              }
            }
        );
    }

// Element references
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

// Question bank
const questions = [
    {
        question: "Why do you want a dog?",
        answers: {
            A: "For a friend to hang out with at home.",
            B: "To protect my home.",
            C: "To pick up girls / guys at the dog park.",
            D: "To do work at a farm",
        }
    },
    {
        question: "How large do you want your dog to be?",
        answers: {
            A: "I want a very small dog.",
            B: "I want a medium size dog.",
            C: "I want a big dog that weighs more than 50 lbs / 22 kilos.",
        }
    },
    {
        question: "Q",
        answers: {
            A: "",
            B: "",
            C: "",
            D: ""
        }
    },
    {
        question: "Q",
        answers: {
            A: "",
            B: "",
            C: "",
            D: ""
        }
    },
    {
        question: "Q",
        answers: {
            A: "",
            B: "",
            C: "",
            D: ""
        }
    }
];

// Display quiz
buildQuiz();

// Show results on submit
submitButton.addEventListener('click', showResults);
})();
