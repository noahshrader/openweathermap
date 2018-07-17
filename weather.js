// Set default variables
var apiKey = 'b72d10b7b527b805c5445dcce41e666c'
var temp;
var city;
var img;

function getWeather(zip) {
  var query = 'https://api.openweathermap.org/data/2.5/weather?' + 'zip=' + zip + '&units=imperial&APPID=' + apiKey
  getRequest(query)
}

function getRequest(query) {
  var request = new XMLHttpRequest() // Get back JSON object
  request.onreadystatechange = function() { // When we get data back, let's do something with it
    if (request.readyState == 4 && request.status == 200) {
      var data = JSON.parse(request.responseText)
      var weather = {}
      weather.img = data.weather[0].icon
      weather.city = data.name
      weather.temp = Math.round(data.main.temp)
      update(weather)
    }
  }
  request.open('GET', query, true)
  request.send()
}

function update(weather) {
  temperature.innerHTML = weather.temp
  city.innerHTML = weather.city
  image.src = 'https://openweathermap.org/img/w/' + weather.img + '.png'
}

window.onload = function () {

  // Set elements
  temp = document.getElementById('temperature')
  city = document.getElementById('city')
  img = document.getElementById('image')

  getWeather(38133) // Memphis
}