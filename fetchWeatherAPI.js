import * as utils from './weatherAPI.js'

utils.getCovidData().then(covidData => {
  console.log('confirmed', covidData.confirmed.value)
  //   document.getElementById("total-cases").innerText =
  //     covidData.confirmed.value;
}).catch((error) => {
  console.log(error)
}
)

utils.getWeaStackPromises('philadelphia').then(weatherData => {
  console.log('WeatherStack Promises Info: ', `${weatherData.location.name}, temperature: ${weatherData.current.temperature}, desc: ${weatherData.current.weather_descriptions}`)
}).catch(error => {
  console.log('low-level OS error: ', error)
})

utils.getWeatherStackCallback('xxyyzz', (error, data) => {
  console.log('WeatherStack Callback Info: ', data)
  console.log('WeatherStack Callback Error: ', error)
})

utils.openMapAPI('niigata').then((openReturn) => {
  // console.log('open return: ', openReturn)

  const openAns = `${openReturn.name}, Temperature: ${openReturn.main.temp}, Description: ${openReturn.weather[0].description}`
  console.log('OpenWeatherMapPromises Info: ', openAns)
}).catch((error) => {
  console.log('open error: ', error)
})
