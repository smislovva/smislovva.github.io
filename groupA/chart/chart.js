var initialYValues = [55, 49, 44, 5];
var xValues = ["Iedzīvotāji", "Zeme", "Kultūras vērtība"];
var yValues = initialYValues.slice(); // Create a copy of initial values
var barColors = ["red", "green", "blue"];

var chart = new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Kolonizācijas traģiskās sekas"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 60 // Adjust the maximum value as needed
        }
      }]
    },
    animation: {
      duration: 1000, // Set the duration to control the speed (in milliseconds)
      easing: "easeInOutQuad", // Use "easeInOutQuad" for a smoother transition
    }
  }
});

document.getElementById("myChart").addEventListener("mousemove", function(e) {
  var activePoints = chart.getElementAtEvent(e);
  if (activePoints.length > 0) {
    var index = activePoints[0]._index;
    // Decrease the value on hover, but don't go below the threshold (e.g., 10)
    yValues[index] = Math.max(10, yValues[index] - 10);
    chart.data.datasets[0].data = yValues;
    chart.update();
  }
});

document.getElementById("myChart").addEventListener("mouseout", function() {
  chart.options.animation.duration = 0; // Set duration to 0 for immediate stop
  chart.update();
});

document.getElementById("resetButton").addEventListener("click", function() {
  yValues = initialYValues.slice(); // Reset to initial values
  chart.options.animation.duration = 1000; // Reset duration to original value
  chart.data.datasets[0].data = yValues;
  chart.update();
});