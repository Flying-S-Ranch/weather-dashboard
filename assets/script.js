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
   cityBtn.classList.add('waves-effect')
   cityBtn.classList.add('waves-light')
   cityBtn.classList.add('btn')
   cityBtn.classList.add('col')
   cityBtn.classList.add('s12')
   // place the button under the search bar
   searchList.append(cityBtn)

// for ( i = 0; i < cityList.length, i++)

}

// USER INTERACTIONS
searchBtn.on("click", function(event){
    event.preventDefault;
    if (searchCity.value !== " "){
        cityWeather = {
            name: searchCity.value,
        }
        console.log(searchCity.value)
        localStorage.setItem("localWeather", JSON.stringify(cityWeather))
        searchCity.value = " "
        makeCityBtn();
        } 
    }
   )

// INITIALIZATIONS