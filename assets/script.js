// DEPENDENCIES
var searchCity = document.querySelector("#search-input")
console.log(searchCity.value)
var searchBtn = $("#search-button")
var searchList = $("#city-search-list")
var cityNameEl = document.querySelector("#city-name")
var dateEl = document.querySelector("#date")
var timeEl = document.querySelector("#local-time")
var tempEl = document.querySelector("#temp")
var windEl = document.querySelector("#wind-speed")
var humidityEl = document.querySelector("#humidity")

// DATA / STATE
var cityWeather;




// var cityList = [];

// FUNCTIONS

function makeCityBtn() {
   // create a button with the name of the city
   var savedCity = JSON.parse(localStorage.getItem("localWeather"))
   console.log(savedCity.name)
   var cityBtn = document.createElement("button");
   // build the button's appearance
   cityBtn.textContent = savedCity.name;
   cityBtn.classList.add('waves-effect')
   cityBtn.classList.add('waves-light')
   cityBtn.classList.add('btn')
   cityBtn.classList.add('col')
   cityBtn.classList.add('s12')
   // place the button under the search bar
   searchList.append(cityBtn)
}

function makeRequest() {
    var openWeatherAPIKey = "6311504d4ded7625e2fa0f09aa7e0ac3"
    var city = searchCity.value
    console.log(city)
    var weatherQuery = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + openWeatherAPIKey;
    // I followed the example in activity 06>01>04-Stu_Create_Fetch for lines 39-52
    fetch(weatherQuery)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        windEl.textContent = "WindSpeed: " + data.wind.speed + "mph"
        tempEl.textContent = "Temperature: " + Math.floor((data.main.temp - 273.15)* 9/5 + 32) + "F"
        humidityEl.textContent = "Humidity: " + data.main.humidity + "%"
      })
}


// USER INTERACTIONS
searchBtn.on("click", function(event){
    event.preventDefault;
    if (searchCity.value !== " "){
        makeRequest();
        cityWeather = {
            name: searchCity.value, 
        }
        cityNameEl.textContent= searchCity.value
        localStorage.setItem("localWeather", JSON.stringify(cityWeather))
        searchCity.value = " "
        
        makeCityBtn();
        } 
    }
   )

// INITIALIZATIONS