// Recreate missing reference to require
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

require('dotenv').config()
const request = require('postman-request')
const fetch = require('node-fetch')

// console.log(process.env.WeatherStackAPIKey)
const weatherStackApiKey = process.env.WeatherStackAPIKey

// const sampleLocationLosAngeles = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=Los%20Angeles`
// const sampleLocationNewYork = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=New%20York`
// const sampleLocationLondon = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=London`
// const sampleLocationSapporo = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=Sapporo&language=ja`
const sampleLocationSapporo1 = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=Sapporo`

let answerTemp = ''

const getWeatherTest = async () => {
  request(sampleLocationSapporo1, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const responseJSON = JSON.parse(body)
      // console.log(response.statusCode)
      // console.log(responseJSON)
      // console.log(responseJSON.location.name)
      // console.log(responseJSON.location.timezone_id)
      // console.log(responseJSON.current.temperature)
      // console.log(responseJSON.current.weather_descriptions[0])

      answerTemp = `location: ${responseJSON.location.name}, temp: ${responseJSON.current.temperature}, desc: ${responseJSON.current.weather_descriptions[0]}`
      // console.log(`Temp: ${answerTemp}`)
      return answerTemp
    } else {
      console.log('hoops!! Not working.')
    }
  })
}

const getLocationTemperature = async () => {
  try {
    const request = await fetch(sampleLocationSapporo1)
    const data = await request.json()
    // const realData = `location: ${data.location.name}, temperature: ${data.current.temperature}, desc: ${data.current.weather_descriptions}`
    // console.log('data: ', realData)
    return data
  } catch (error) {
    console.log('hoops! error: ', error)
  }
}

const getCovidData = async () => {
  // console.log('index.html 10 | Processing...')
  const request = await fetch('https://covid19.mathdro.id/api')
  const data = await request.json()
  // console.log(data)
  return data
}

export { getCovidData, getWeatherTest, getLocationTemperature }
