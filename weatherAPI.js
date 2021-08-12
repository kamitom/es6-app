// Recreate missing reference to require begin

// import { createRequire } from 'module'
// const require = createRequire(import.meta.url)
// require('dotenv').config()
// const request = require('postman-request')
// const fetch = require('node-fetch')

// Recreate missing reference to require end

import request from 'postman-request'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()

// console.log(process.env.WeatherStackAPIKey)
const weatherStackApiKey = process.env.WeatherStackAPIKey
const openApiKey = process.env.openWeatherMapAPIKey

// const sampleLocationLosAngeles = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=Los%20Angeles`
// const sampleLocationNewYork = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=New%20York`
// const sampleLocationLondon = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=London`
// const sampleLocationSapporo = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=Sapporo&language=ja`
// const sampleLocationSapporo1 = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=Sapporo`

const getLocationTemperatureCallback = (targetCityName, callbackFunc) => {
  const WeatherAPIUrl = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=` + targetCityName

  console.log('WeatherStack Callback Processing...')
  request(WeatherAPIUrl, (error, response, body) => {
    if (error) {
      console.log('low-level OS errors: ', error)
    } else if (JSON.parse(body).success === false) {
      console.log('API error:', JSON.parse(body).error.info)
    } else if (!error && response.statusCode === 200) {
      const responseJSON = JSON.parse(body)
      const replyTemperature = `${responseJSON.location.name}, Temperature: ${responseJSON.current.temperature}, Description: ${responseJSON.current.weather_descriptions[0]}`
      callbackFunc(replyTemperature)
    }
  })
}

const getWeatherStackPromises = async (locationName) => {
  console.log('WeatherStack Pormises Processing...')
  try {
    const securityLicationName = encodeURIComponent(locationName)
    const WeatherAPIUrl2 = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=` + securityLicationName

    const request = await fetch(WeatherAPIUrl2)
    const data = await request.json()
    // const realData = `location: ${data.location.name}, temperature: ${data.current.temperature}, desc: ${data.current.weather_descriptions}`
    // console.log('data: ', realData)
    return data
  } catch (error) {
    console.log('hoops! low-level errors: ', error)
  }
}

const getCovidData = async () => {
  console.log('index.html 10 | covid-19 Processing...')

  try {
    const request = await fetch('https://covid19.mathdro.id/api')
    const data = await request.json()
    // console.log(data)
    return data
  } catch (error) {
    console.log('covid-19 API error: ', error)
  }
}

const getOpenWeatherMapAPI = async (openLocation) => {
  console.log('OpenWeatherData Processing...')
  const securityLocation = encodeURIComponent(openLocation)
  const openUrl = `http://api.openweathermap.org/data/2.5/weather?q=${securityLocation}&units=metric&appid=${openApiKey}`

  const rq = await fetch(openUrl)
  const openData = await rq.json()
  return openData
}

export { getCovidData, getLocationTemperatureCallback as getWeatherStackCallback, getWeatherStackPromises as getWeaStackPromises, getOpenWeatherMapAPI as openMapAPI }
