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
