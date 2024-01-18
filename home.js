$(document).ready(function() {
    var navbar = $(".navbar");

    $(document).scroll(function() {
        var scrollPos = $(this).scrollTop();

        if (scrollPos > 50) {
            navbar.addClass("scrolled");
        } else {
            navbar.removeClass("scrolled");
        }
    });
});

$(document).ready(function() {
    var content2 = $(".content2");
    var content2Pos = content2.offset().top;
    var windowHeight = $(window).height();

    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();

        if (scrollPos > content2Pos - windowHeight + 100) {
            content2.addClass("visible");
        } else {
            content2.removeClass("visible");
        }
    });
});

$(document).ready(function() {
    var content3 = $(".content3");
    var content3Pos = content3.offset().top;
    var windowHeight = $(window).height();

    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();

        if (scrollPos > content3Pos - windowHeight + 100) {
            content3.addClass("visible");
        } else {
            content3.removeClass("visible");
        }
    });
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

$(document).ready(function() {
    var content21 = $(".content21");
    var content21Pos = content21.offset().top;
    var windowHeight = $(window).height();

    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();

        if (scrollPos > content21Pos - windowHeight + 100) {
            content21.addClass("visible");
        } else {
            content21.removeClass("visible");
        }
    });
});

$(document).ready(function() {
    var content22 = $(".content22");
    var content22Pos = content22.offset().top;
    var windowHeight = $(window).height();

    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();

        if (scrollPos > content22Pos - windowHeight + 100) {
            content22.addClass("visible");
        } else {
            content22.removeClass("visible");
        }
    });
});


// Get all image cards
const imageCards = document.querySelectorAll('.image-card');

// Loop through each image card and attach click event listeners
imageCards.forEach((card, index) => {
    const image = card.querySelector('.image');
    const textOverlay = card.querySelector('.image-text-overlay');

    let isVisible = false; // Track if the text overlay is currently visible

    image.addEventListener('click', () => {
        // Toggle the visibility of the text overlay
        isVisible = !isVisible;
        textOverlay.style.opacity = isVisible ? '1' : '0';

        // Toggle the opacity of the image
        image.style.opacity = isVisible ? '0.5' : '1';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const timeline = document.querySelector('#timeline');

    window.addEventListener('scroll', () => {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach((section, index) => {
            if (section.offsetTop <= scrollPosition + window.innerHeight / 1.3) {
                section.classList.add('visible');
                // Update timeline progress
                timeline.style.width = ((index + 1) / sections.length * 100) + '%';
            }
        });
    });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


window.addEventListener('scroll', function() {
    var highlights = document.querySelectorAll('.highlight'); // Select all elements

    highlights.forEach(function(element) { // Iterate through each element
        var position = element.getBoundingClientRect();

        // Check if element is in view
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('highlighted');
        }
    });
});

window.addEventListener('scroll', function() {
    var highlights = document.querySelectorAll('.highlight-yellow'); // Select all elements

    highlights.forEach(function(element) { // Iterate through each element
        var position = element.getBoundingClientRect();

        // Check if element is in view
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('highlighted-yellow');
        }
    });
});



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








/* scroll indicator function */
function init() {
    const slider = document.getElementById("weightSlider");

    slider.oninput = onSliderInput;

    updateValue(slider);
    updateValuePosition(slider);
    updateLabels(slider);
    updateProgress(slider);

    setTicks(slider);
}

function onSliderInput(event) {
    const selectedYear = updateValue(event.target);
    updateMap(selectedYear); // Function to update the map image
    updateValuePosition(event.target);
    updateLabels(event.target);
    updateProgress(event.target);
}

function updateValue(slider) {
    let value = document.getElementById(slider.dataset.valueId);
    const yearValues = ['1788', '1965', '1993', '2013'];
    const selectedYear = yearValues[slider.value];
    value.innerHTML = "<div>" + selectedYear + "</div>";
    return selectedYear;
}

function updateMap(year) {
    const imagePath = "materials/" + year + ".png"; // Construct the image path
    const mapImage = d3.select('#australiaMap');
    
    // Change the image source
    mapImage.attr('src', imagePath);

  
}


function setTicks(slider) {
    let container = document.getElementById(slider.dataset.tickId);

    const tickCount = 4; // for years 1788, 1965, 1993, 2013

    for (let ii = 0; ii < tickCount; ii++) {
        let tick = document.createElement("span");
        tick.className = "tick-slider-tick";
        container.appendChild(tick);
    }
}

window.onload = init;
window.addEventListener("resize", onResize);
