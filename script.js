// This listens for any click on a link inside a dropdown
document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', (e) => {
        console.log("Navigating to: " + e.target.innerText);
    });
});

// This is setting up an array of questions with images and the answers.
const questions = [
    {
        question: "A rugby player accelerates uniformly from rest at 0.680 m s⁻² and runs 22.0 m",
        question2: "How long did it take to run 22.0 m?",
        answers: [
            { text: "12.3s", correct: false},
            { text: "8.04s", correct: true},
            { text: "3.44s", correct: false},
            { text: "0.34s", correct: false},
        ]
    },
    {
        image: "../images/diagram_1_b.png",
        question: "To take a penalty shot, the ball is placed on the ground and kicked towards the goal posts. To make the penalty shot, the ball must go over the crossbar, which is 3.00 m above the ground and 45.0 m from where the ball is kicked. ",
        question2: "A player taking a penalty shot kicks the ball at 25.0 m s⁻¹ at 34.0° to the ground. By performing appropriate calculations, decide whether the ball makes it over the crossbar before hitting the ground.",
        answers: [
            { text: "Yes, it will make it over", correct: true},
            { text: "No, it won't make it over", correct: false},
            { text: "No, it will hit the post", correct: false},
        ]   
    },
    {
        question: "An 80.0 kg player moves at 4.30 m s⁻¹",
        question2: "Calculate the player’s momentum and give the correct unit",
        answers: [
            { text: "344 kg ms^-1", correct: true},
            { text: "344 ms^-1", correct: false},
            { text: "18.6 kg ms^-1", correct: false},
            { text: "18.6 ms^-1", correct: false},
        ]
    },
        {
        image: "../images/diagram_2_.png",
        question: "The mass of the All-Black scrum is 883 kg. The mass of the Argentinian scrum is 850 kg. As the scrum is set, the All Blacks move forward at 0.354 m s⁻¹, and the Argentinians move forward at 0.378 m s⁻¹. The two scrums collide and stick together.",
        question2: "Calculate the speed and direction of the combined scrums immediately after they collide and stick together.",
        answers: [
            { text: "5.03 x 10^-3 ms-1 left", correct: false},
            { text: "8.718 x 10^-3 ms-1 left", correct: false},
            { text: "5.03 x 10^-3 ms-1 right", correct: true},
            { text: "8.718 x 10^-3 ms-1 right", correct: false},
        ]
    },

    {
        image: "../images/diagram_1_a.png",
        question: "When warming up, players run up the stairs.",
        question2: "Calculate the work done by a 68.3 kg player who runs up the stairs once.",
        answers: [
            { text: "27,500 J", correct: true},
            { text: "286.44 J", correct: false},
            { text: "16.28 J", correct: false},
            { text: "463.67 J", correct: false},
        ]
    },

    {
        image: "../images/diagram_1_a.png",
        question: "Another warmup activity is short sprints. During one sprint, the 68.3 kg player accelerates from rest to 7.52 m s⁻¹ in 4.35 s.",
        question2: "Calculate the average power produced by the player during this sprint.",
        answers: [
            { text: "18.2 W", correct: false},
            { text: "4.5 W", correct: false},
            { text: "256.8 W", correct: false},
            { text: "443.9 W", correct: true},
        ]
    },

    {
        image: "../images/diagram4b.png",
        question: "While waiting to play, two players sat on a uniform bench. The bench is 621 N and 3.21 m long. A 669 N player sits 0.110 m to the left of support A, and a 769 N player sits 0.240 m to the right of support A. ",
        question2: "By calculating torques about support A, calculate the value of the forces acting on the bench at A and B.",
        answers: [
            { text: "FA: 0.260N, FB: 0.110N", correct: false},
            { text: "FA: 642N , FB: 73.59N", correct: false},
            { text: "FA: 1710N, FB: 352N", correct: true},
            { text: "FA: 769N, FB: 621N", correct: false},
        ]
    },

    {
        image: "../images/spinning_img1.png",
        image2: "../images/spinning_img2.png",
        question: "Just before the players enter the game, they use one more warm-up activity, where two players hold hands and move around in a circle at constant speed.",
        question2: "What is the correctly labeled diagram to show the direction of acceleration on one of the players.",
        answers: [
            { text: "A", correct: true},
            { text: "B", correct: false},
        ]
    },

];

// This is grabbing different elements from my html page that will be controlled through javascript.
const questionElement = document.getElementById("question");
const questionElement2 = document.getElementById("question2");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const questionImage = document.getElementById("question-image");
const questionImage2 = document.getElementById('question-image-2');

// Starting the quiz at the first question (0) and setting the users score to 0 before the quiz starts.
let currentQuestionIndex = 0;
let score = 0;

// This is a function that resets the quiz to play from the very begginning
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Clears any previous question or score and then displays the new question from the begginning.
function showQuestion(){
    resetState();
    let currentQuestion = questions[ currentQuestionIndex ];
    
    questionImage.style.display = "block";
    questionImage.src = currentQuestion.image;
    
    // Target the second image element
    const questionImage2 = document.getElementById("question-image-2");

    // Display second image if it exists, hide if it doesn't
    if (currentQuestion.image2) {
        questionImage2.src = currentQuestion.image2;
        questionImage2.style.display = "block";
    } else {
        questionImage2.style.display = "none";
    }

    // Display first image if it exists, hide if it doesn't
    if (currentQuestion.image) {
        questionImage.src = currentQuestion.image;
        questionImage.style.display = "block";
    } else {
        questionImage.style.display = "none";
    }

    // Display the question number and add 1 each time to the current index
    let questionNo = currentQuestionIndex +1;
    
    // Display first question
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Target the second question element
    const questionElement2 = document.getElementById("question2");

    // Display question if it exists, hide if not
    if (currentQuestion.question2) {
        questionElement2.innerHTML = currentQuestion.question2;
        questionElement2.style.display = "block";
    } else {
        questionElement2.style.display = "none";
    }

    // Displays clickable answers for quiz
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
         if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
    
}

// When the user clicks next this will remove the current page and prepares the new question and hides the next button.
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// This checks when the user clicks and answer on the quiz and checks if the answer is tru or false and updates the UI if correct then the button will go green and if wrong the button will go red.
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextButton.style.display = "block";
}

// This is ending the quiz after all the questions are done and is displaying the users final results on the screen.
function showScore(){
    resetState();

    questionImage.style.display = "none";
    questionImage2.style.display = "none";

    document.getElementById("question2").style.display = "none";

    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

//This is the fuction that either when the user clicks the next buttons shows the next question or it finishes the quiz and shows the score.
function handleNextButton(){
    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

// This manages the next button when the user clicks in wether to show the next question of restart the quiz based on where the user is on the question list.
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

// This resets the score and sets the question index back to 0 and updates the UI to display the first question and answers back on the screen.
startQuiz();
startQuiz();

// Grabs the drawingCanvas element and the 2D drawing context
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Track if the user is holding down the mouse or not
let isPainting = false;

// Grab the image that will be used from HTML
const img = document.getElementById('myImage');

// Wait for background image to load before initializing the canvas
img.onload = function(){
    setupCanvas();
};

if (img.complete) {
    setupCanvas();
}

function setupCanvas() {
    // Set canvas dimensions to match the actual image size
    canvas.width = img.naturalWidth || img.width || 600; 
    canvas.height = img.naturalHeight || img.height || 400;
    
    // Draw the paper image onto the canvas as a background
    ctx.drawImage(img, 0, 0);
}

// Calculates cursors position on the canvas
function getMousePos(e) {
    const rect = canvas.getBoundingClientRect(); // Get the canvas current size and position on the screen
    
    // Calculate the scale difference between canvas internal pixels and display size
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    return {
        // Adjust mouse coordinates to perfectly align with the canvas, accounting for any scaling
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
    };
}

// Drawing Actions
function startDrawing(e) {
    isPainting = true; // Sets the drawing state to true
    const pos = getMousePos(e);
    ctx.beginPath(); // Starting a new drawing path
    ctx.moveTo(pos.x, pos.y); // Move the pen to the position of the cursor
}

function draw(e) {
    if (!isPainting) return; // Exit if mouse isn't clicked
    const pos = getMousePos(e);
    
    // Drawing styles and properties
    ctx.lineWidth = 2; // Thickness of the line
    ctx.strokeStyle = '#000000'; // Color of the line
    ctx.lineCap = 'round'; // Make end of the lines round
    ctx.lineJoin = 'round'; // Make lines that connect smooth
    
    ctx.lineTo(pos.x, pos.y); // Draw a line to the cursor position
    ctx.stroke(); // Renders the line onto the canvas
}

function stopDrawing() {
    if (isPainting) {
        ctx.stroke();
        ctx.closePath(); //Close the drawing path
        isPainting = false; // Reset drawing state
    }
}

// Core Input Controls (Event listeners for mouse actions)
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);


const clearBtn = document.getElementById('clearCanvasBtn');

// 2. Add the reset action trigger (Clears the canvas and restores the image)
clearBtn.addEventListener('click', () => {
    // Completely clears all drawings off the canvas board
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Instantly redraws your sheet of paper image back onto the background frame
    ctx.drawImage(img, 0, 0);
});