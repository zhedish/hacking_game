document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var passwordInput = document.getElementById("password");
    var password = passwordInput.value;
    var errorMessageElement = document.getElementById("errorMessage");

    // Verify password
    if (password === "Argos") {
        // Redirect to another page
        window.location.href = "hacking.html";
    } else {
        errorMessageElement.textContent = "Incorrect password. Please try again.";
        
        passwordInput.value = "";
    }
});

// Riddle and answer data
const riddles = [
    { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?", answer: "echo" },
    { question: "The more you take, the more you leave behind. What am I?", answer: "footsteps" },
    { question: "What has keys but can't open locks?", answer: "piano" },
    // Add more riddles as needed
];

// Initialize variables
let currentRiddleIndex = 0;
let correctAnswerCount = 0;

function processCommand() {
    const input = document.getElementById("commandInput").value.trim();
    if (input === "hack") {
        if (currentRiddleIndex < riddles.length) {
            displayRiddle(riddles[currentRiddleIndex]);
        } else {
            displayOutput("You've successfully hacked into the system!", "green");
        }
    } else if (input === "status") {
        displayOutput(`Correct answers: ${correctAnswerCount} / Total riddles: ${riddles.length}`, "blue");
    } else {
        displayOutput("Invalid command!", "red");
    }
    document.getElementById("commandInput").value = "";
}

function displayRiddle(riddle) {
    document.getElementById("output").innerHTML += `
        <h2>Riddle ${currentRiddleIndex + 1}</h2>
        <p>${riddle.question}</p>
        <input type="text" id="answerInput" placeholder="Enter your answer...">
        <button onclick="checkRiddleAnswer('${riddle.answer}')">Submit</button>
    `;
}

function checkRiddleAnswer(answer) {
    const userAnswer = document.getElementById("answerInput").value.trim();
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
        correctAnswerCount++;
        displayOutput("Correct answer!", "green");
        currentRiddleIndex++;
        if (currentRiddleIndex < riddles.length) {
            displayRiddle(riddles[currentRiddleIndex]);
        }
    } else {
        displayOutput("Incorrect answer. Try again.", "red");
    }
    document.getElementById("answerInput").value = "";
}

function displayOutput(message, color) {
    const output = document.getElementById("output");
    output.innerHTML += `<p style="color: ${color};">${message}</p>`;
    output.scrollTop = output.scrollHeight;
}

