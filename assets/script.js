// DEPENDENCIES
var searchCity = document.querySelector("#search-input")
console.log(searchCity.value)
var searchBtn = $("#search-button")
var searchList = $("#city-search-list")
var cityNameEl = document.querySelector("#city-name")

// DATA / STATE
var cityWeather;
var openWeatherAPIKey = "6311504d4ded7625e2fa0f09aa7e0ac3"
var city = "Erdington"
var weatherQuery = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + openWeatherAPIKey;



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

function makeRequest() {
    fetch(weatherQuery)
        .then(function () {
            console.log("it's working")
            console.log(weatherQuery)
        })
}

makeRequest();

}

// USER INTERACTIONS
searchBtn.on("click", function(event){
    event.preventDefault;
    if (searchCity.value !== " "){
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