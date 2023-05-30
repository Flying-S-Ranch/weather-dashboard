// DEPENDENCIES
var searchCity = document.querySelector("#search-input")
var searchBtn = document.querySelector("#search-button")

// DATA / STATE

// FUNCTIONS

// USER INTERACTIONS
searchBtn.addEventListener("click", function(event){
    event.preventDefault;
    var cityWeather = {
        name: searchCity.value,
    }
    console.log(cityWeather)
})

// INITIALIZATIONS