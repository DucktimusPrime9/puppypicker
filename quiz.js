(function() {

    // Functions
    function buildQuiz() {
        const output = [];

        // Loop through each question
        questions.forEach((currentQuestion, questionNumber) => {
                const answers = [];

                // Add radio button to each question's answer
                for(letter in currentQuestion.answers) {
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

        questions.forEach((currentQuestion, questionNumber) => {

            // Find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
            const pointContainers = quizContainer.querySelectorAll(".points");
            const scoreContainers = pointContainers[userAnswer];

            for (breed_key in scoreContainers) {
                 scores[breed] += scoreContainers[breed];
            }

            }
        );
    }

// Element references
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

var scores = { corgi: 0, bernese: 0, german: 0, stzu: 0, american: 0, golden: 0, terrier: 0, labrador: 0, beagle: 0, havanese: 0, spaniel: 0, bulldog: 0, husky: 0, french: 0, collie: 0, mixed: 0 };

// Question bank
const questions = [

    // Question 1
    {
        question: "Why do you want a dog?",
        answers: {
            A: "For a friend to hang out with at home.",
            B: "To protect my home.",
            C: "To pick up girls / guys at the dog park.",
            D: "To do work at a farm",
        },
        points: {
            A: { beagle: 5, corgi: 3, american: 5, golden: 8, labrador: 8, bulldog: 5 },
            B: { german: 8, bernese: 5, husky: 5 },
            C: { corgi: 8, beagle: 5, golden: 8, american: 5, bulldog: 5, french: 5, stzu: 3  },
            D: { husky: 100, collie: 100, german: 100, spaniel: 100, bernese: 100 },
        }
    },

    // Question 2
    {
        question: "How large do you want your dog to be?",
        answers: {
            A: "I want a very small dog.",
            B: "I want a small dog.",
            C: "I want a medium size dog.",
            D: "I want a big dog that weighs more than 50 lbs / 22 kilos.",
        },
        points: {
            A: { stzu: 80, havanese: 80 },
            B: { terrier: 80, beagle: 80, french: 80, corgi: 80 },
            C: { american: 80, golden: 80, spaniel: 80, bulldog: 80, husky: 80, collie: 80 },
            D: { bernese: 80, labrador: 80, german: 80 },
        },
    },

    // Question 3
    {
        question: "Pick an adjective that you want to describe your dog?",
        answers: {
            A: "Cute",
            B: "Smart",
            C: "Friendly",
            D: "Strong"
        },
        points: {
            A: { corgi: 8, havanese: 8, stzu: 8, terrier: 5, french: 8 },
            B: { collie: 8, spaniel: 5, german: 5, american: 5 },
            C: { labrador: 8, golden: 13, beagle: 5 },
            D: { bernese: 8, bulldog: 3, husky: 5 },
        },
    },

    // Question 4
    {
        question: "Would you like your dog to be a purebred?",
        answers: {
            A: "Yes, I want a purebred dog.",
            B: "No, mixed breed dogs are fine with me!",
        },
        points: {
            A: { mixed: -1 },
            B: { mixed: 1000 },
        },
    },

    // Question 5
    {
        question: "How large is your living space?",
        answers: {
            A: "I live in an apartment, with no easy access to outdoor space.",
            B: "I live in an apartment, with with easily accessible outdoor space.",
            C: "I live in a house/apartment, with easy access to outdoor space.",
            D: "I live on a farm or estate with a very large amount of open space."
        },
        points: {
            A: { stzu: 13, havanese: 13 },
            B: { corgi: 5, havanese: 5, stzu: 5, beagle: 5, french: 5, terrier: 5 },
            C: { german: 3, american: 3, golden: 3, labrador: 3, spaniel: 3, bernese: 3 },
            D: { husky: 5, collie: 8, spaniel: 5, german: 8 },
        },
    },

];

// Display quiz
buildQuiz();

// Show results on submit
submitButton.addEventListener('click', showResults);
})();
