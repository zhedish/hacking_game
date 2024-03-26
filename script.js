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

//Hacking

// Define an array of riddles, their corresponding answers, and the number of attempts allowed
var riddles = [
    { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?", answer: "echo", attempts: 5 },
    { question: "The more you take, the more you leave behind. What am I?", answer: "footsteps", attempts: 5 },
    { question: "What has keys but can't open locks?", answer: "piano", attempts: 5 },
    // Add more riddles as needed
];

// Initialize a variable to track the current riddle index
var currentRiddleIndex = 0;

// Initialize a variable to track the number of attempts for the current riddle
var currentRiddleAttempts = 0;

function executeCommand() {
    var commandInput = document.getElementById("commandInput");
    var output = document.getElementById("output");
    var command = commandInput.value.trim().toLowerCase();
    
    if (command === "hack") {
        // Check if there are more riddles to solve
        if (currentRiddleIndex < riddles.length) {
            // Display the current riddle
            output.innerHTML += "<p>Riddle " + (currentRiddleIndex + 1) + ": " + riddles[currentRiddleIndex].question + "</p>";
        } else {
            // Player has solved all riddles and successfully hacked into the system
            output.innerHTML += "<p>You've successfully hacked into the system!</p>";
            // Optionally, you can reset the game here
            // resetGame();
        }
    } else if (command === "help") {
        // Display help message
        output.innerHTML += "<p>List of commands:</p><ul><li>help - Show this help message</li><li>scan - Scan for vulnerabilities</li><li>hack - Attempt to hack into the system</li></ul>";
    } else {
        // Handle input as a response to the current riddle
        checkAnswer(command);
        // Return early to prevent displaying "Error: Command not recognized"
        return;
    }

    output.scrollTop = output.scrollHeight;
    commandInput.value = "";
}

// Function to check the answer to the current riddle
function checkAnswer(answer) {
    var output = document.getElementById("output");
    var currentRiddle = riddles[currentRiddleIndex];

    if (answer.toLowerCase() === currentRiddle.answer) {
        output.innerHTML += "<p>Correct answer!</p>";
        // Move to the next riddle
        currentRiddleIndex++;
        currentRiddleAttempts = 0; // Reset the number of attempts for the next riddle
        // Check if there are more riddles to solve
        if (currentRiddleIndex < riddles.length) {
            // Display the next riddle
            output.innerHTML += "<p>Riddle " + (currentRiddleIndex + 1) + ": " + riddles[currentRiddleIndex].question + "</p>";
        } else {
            // Player has solved all riddles and successfully hacked into the system
            output.innerHTML += "<p>You've successfully hacked into the system!</p>";
            // Optionally, you can reset the game here
            // resetGame();
        }
    } else {
        output.innerHTML += "<p>Incorrect answer. Try again!</p>";
        currentRiddleAttempts++;
        if (currentRiddleAttempts >= currentRiddle.attempts) {
            output.innerHTML += "<p>You've reached the maximum number of attempts for this riddle.</p>";
            // Optionally, you can trigger the cooldown period here
            triggerCooldown();
        }
    }

    output.scrollTop = output.scrollHeight;
}

// Function to trigger the cooldown period
function triggerCooldown() {
    var output = document.getElementById("output");
    output.innerHTML += "<p>Initiating cooldown period...</p>";
    // Optionally, you can implement a timer to reset the game after the cooldown period
}
