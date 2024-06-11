//giving background color

const header = document.querySelector("#header");
const body = document.querySelector("body");
body.style.backgroundColor = "var(--main-bg)";
const jumbotron = document.querySelector("#jumbotron");
const headline = (jumbotron.innerHTML =
  '<h1 style = "color: var(--persian); font-weight:bold;"> Welcome!</h1>');

//styling jumbotron

const jumboImageURL =
  "https://media.gettyimages.com/id/182912411/photo/bathroom-scales-and-tape-measure.jpg?s=612x612&w=0&k=20&c=X6yPt4cj4UOMH4J-szcuqIwt9oyoyeAZq5xLVs8qdBg=";

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

bmiForm.style.backgroundColor = "var(--light-green)";
bmiForm.style.margin = "20px";
bmiForm.style.padding = "20px";
bmiForm.style.paddingTop = "6px";

// appending an item

const imageCont = document.querySelector("#imageCont");
const graphGif = document.createElement("img");
graphGif.src = "https://d26tpo4cm8sb6k.cloudfront.net/img/bmi-chart.gif";
graphGif.alt = "It is graph";
imageCont.appendChild(graphGif);

//styling info

const info = document.getElementsByClassName("info");
info[0].style.margin = "20px";

const headers = document.querySelectorAll("h3");
for (const header of headers) {
  header.style.color = "var(--rose-ebony)";
  header.style.fontWeight = "bold";
  header.style.marginLeft = "20px";
}
