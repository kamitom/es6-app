import * as utils from './weatherAPI.js'

utils.getCovidData().then(covidData => {
  console.log('confirmed', covidData.confirmed.value)
  //   document.getElementById("total-cases").innerText =
  //     covidData.confirmed.value;
}).catch((error) => {
  console.log(error)
}
)

utils.getLocationTemperature('philadelphia').then(weatherData => {
  console.log('Real Weather', `location: ${weatherData.location.name}, temperature: ${weatherData.current.temperature}, desc: ${weatherData.current.weather_descriptions}`)
}).catch(error => {
  console.log('low-level OS error: ', error)
})

utils.getWeatherTest('sapporo', (fetchTheTemperature) => {
  console.log('Currently temperature Info: ', fetchTheTemperature)
})
