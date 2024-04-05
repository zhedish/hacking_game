//------------------------------------------------------------------------
//                          LOGIN SECTION 
//------------------------------------------------------------------------

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

//------------------------------------------------------------------------
//                          HACKING SECTION 
//------------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", () => {
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

    const processCommand = () => {
    const input = document.getElementById("commandInput").value.trim().toLowerCase();

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


    const displayOutput = (message, color = "black") => {
        const output = document.getElementById("output");
        output.innerHTML += `<p style="color: ${color};">${message}</p>`;
        output.scrollTop = output.scrollHeight;
    };

    const createRiddleInput = () => {
        const riddleInputContainer = document.createElement("div");
        riddleInputContainer.id = "riddleInputContainer";

        const answerInput = document.createElement("input");
        answerInput.type = "text";
        answerInput.id = "answerInput";
        answerInput.placeholder = "Enter your answer...";

        const answerSubmitButton = document.createElement("button");
        answerSubmitButton.textContent = "Submit";
        answerSubmitButton.addEventListener("click", () => checkRiddleAnswer(riddles[currentRiddleIndex].answer));

        riddleInputContainer.appendChild(answerInput);
        riddleInputContainer.appendChild(answerSubmitButton);

        document.getElementById("output").appendChild(riddleInputContainer);
    };

    const formElement = document.getElementById("answerForm");

    formElement.addEventListener("submit", checkRiddleAnswer);

    const checkRiddleAnswer = (answer) => {
        event.preventDefault();

        const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();

        if (userAnswer === answer.toLowerCase()) {
            correctAnswerCount++;
            displayOutputAndRemoveContainer("Correct answer!", "green");
            currentRiddleIndex++;
            if (currentRiddleIndex < riddles.length) {
                displayRiddle(riddles[currentRiddleIndex]);
            } else {
                displayOutput("You've successfully hacked into the system!", "green");
            }
        } else {
            displayOutput("Incorrect answer. Try again.", "red");
        }
        document.getElementById("answerInput").value = "";
    };

    const displayRiddle = (riddle) => {
        displayOutput("", "black");
        createRiddleInput();
        displayOutput(`<h2>Riddle ${currentRiddleIndex + 1}</h2><p>${riddle.question}</p>`);
    };


    const displayOutputAndRemoveContainer = (message, color = "black") => {
        const output = document.getElementById("output");
        const riddleInputContainer = document.getElementById("riddleInputContainer");
        if (riddleInputContainer) {
            output.removeChild(riddleInputContainer);
        }
        displayOutput(message, color);
    };

    // Set the initial event listener
    document.getElementById("executeCommand").addEventListener("click", processCommand);

    // Add a small delay before the initial message appears
    setTimeout(() => {
        displayOutput("Welcome to the hacking mini-game. Type one of the available commands.", "black");
    }, 1000);

});