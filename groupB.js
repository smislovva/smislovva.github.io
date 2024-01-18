
function startTimer() {
    var popupContainer = document.getElementById("popup-container");
    popupContainer.style.display = "none";

    var countdownTimer = document.getElementById("countdownTimer");
    countdownTimer.style.display = "block"; // Make the timer visible

    var timerDuration = 300; // 5 minutes in seconds
    var timer = setInterval(function() {
        var minutes = parseInt(timerDuration / 60, 10);
        var seconds = parseInt(timerDuration % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdownTimer.innerHTML = "Atlikušais laiks: " + minutes + ":" + seconds;

        if (--timerDuration < 0) {
            clearInterval(timer);
            redirectToQuizPage();
        }
    }, 1000);
}

function redirectToQuizPage() {
    // Replace 'quiz.html' with the actual URL of your quiz page
    window.location.href = "quiz.html";
}

function showPopup() {
    var popupContainer = document.getElementById("popup-container");
    var countdownTimer = document.getElementById("countdownTimer");
    countdownTimer.innerHTML = ""; // Clear the timer text
    popupContainer.style.display = "block";

    var startButton = document.getElementById("start-button");
    startButton.addEventListener("click", startTimer);
}

window.addEventListener("load", showPopup);