document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var password = document.getElementById("password").value;

    // Verify password
    if (password === "Argos") {
        // Redirect to another page
        window.location.href = "hacking.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
});
