//function showCityValue(event) {
// event.preventDefault();
// let cityInput = document.querySelector("#city-input");}
//let exampleFormControlInput1 = document.querySelector(
// "#exampleFormControlInput1"
//);
//exampleFormControlInput1.addEventListener("submit", showCityValue);

function showTemperature() {
  event.preventDefault();
  let city = document.querySelector("city-input").value;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

//let message = `It is ${temperature} degrees in ${city}`;
//let h2 = document.querySelector("h2");
//h2.innerHTML = message;
