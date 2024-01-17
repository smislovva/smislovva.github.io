// Function to show the popup
function showPopup() {
    var popupContainer = document.getElementById("popup-container");
    popupContainer.style.display = "block";

    // Add an event listener to the "Sākt" button
    var startButton = document.getElementById("start-button");
    startButton.addEventListener("click", startTimer);
}

// Function to start the 5-minute timer
function startTimer() {
    // Hide the popup
    var popupContainer = document.getElementById("popup-container");
    popupContainer.style.display = "none";

    // Set the timer for 5 minutes (300,000 milliseconds)
    var timerDuration = 300000;
    setTimeout(redirectToQuizPage, timerDuration);
}

// Function to redirect to the quiz page
function redirectToQuizPage() {
    // Replace 'quiz.html' with the actual URL of your quiz page
    window.location.href = "quiz.html";
}

// Show the popup when the page loads or refreshes
window.addEventListener("load", showPopup);