//giving background color

const header = document.querySelector("#header");
const body = document.querySelector("body");
body.style.backgroundColor = "var(--mint)";
const jumbotron = document.querySelector("#jumbotron");
const headline = (jumbotron.innerHTML =
  "<h1> Welcome to The Health Planet</h1>");

//styling jumbotron

const jumboImageURL =
  "https://media.gettyimages.com/id/1311532658/photo/young-woman-losing-weight.jpg?s=612x612&w=0&k=20&c=dO2ceVicc-7f7eBImdEWQwTL89QEsqg687uVTJaTPys=";

jumbotron.style.backgroundImage = `url(${jumboImageURL})`;
jumbotron.style.backgroundSize = "cover";
jumbotron.style.backgroundPosition = "center";

//BMI calculator
const bmiForm = document.getElementById("bmi-form");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultBMI = document.getElementById("result");

bmiForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  const bmi = weight / ((height * height) / 10000);

  console.log(bmi);
  let bmiInterpretation;
  let bmiColor;
  if (bmi < 18.5) {
    bmiInterpretation = "Underweight";
    bmiColor = resultBMI.style.backgroundColor = "red";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiInterpretation = "Normal weight";
    bmiColor = resultBMI.style.backgroundColor = "green";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiInterpretation = "Overweight";
    bmiColor = resultBMI.style.backgroundColor = "orange";
  } else {
    bmiInterpretation = "Obese";
    bmiColor = resultBMI.style.backgroundColor = "red";
  }
  resultBMI.textContent = `Your BMI is ${bmi.toFixed(
    2
  )}.You are ${bmiInterpretation}.`;
  bmiColor;
});

//styling bmi calculator

bmiForm.style.backgroundColor = "yellow";
bmiForm.style.margin = "20px";
bmiForm.style.padding = "20px";
bmiForm.style.paddingTop = "6px";

// appending an item
const bmiGraph = document.querySelector("bmi-graph");
const graphGif = document.createElement("gif");
graphGif.src = "https://d26tpo4cm8sb6k.cloudfront.net/img/bmi-chart.gif";
graphGif.alt = "It is BMI graph";
bmiGraph.appendChild(graphGif);
