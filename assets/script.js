// DEPENDENCIES
var searchCity = document.querySelector("#search-input")
console.log(searchCity.value)
var searchBtn = $("#search-button")
var searchList = $("#city-search-list")

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
   // place the button under the search bar
   searchList.append(cityBtn)

// for ( i = 0; i < cityList.length, i++)

}

// USER INTERACTIONS
searchBtn.on("click", function(event){
    event.preventDefault;
    cityWeather = {
        name: searchCity.value,
    }
    console.log(searchCity.value)
    localStorage.setItem("localWeather", JSON.stringify(cityWeather))
    searchCity.value = " "
    makeCityBtn();
    })

// INITIALIZATIONS