import * as utils from './weatherAPI.js'

utils.getCovidData().then(covidData => {
  console.log('confirmed', covidData.confirmed.value)
  //   document.getElementById("total-cases").innerText =
  //     covidData.confirmed.value;
})

// utils.getLocationTemperature().then(weatherData => {
//   console.log('Real Weather', `location: ${weatherData.location.name}, temperature: ${weatherData.current.temperature}, desc: ${weatherData.current.weather_descriptions}`)
// })

utils.getWeatherTest('San Francisco', (xData) => {
  console.log('Temperature Info: ', xData)
})
