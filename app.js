
console.log('starting')

setTimeout(() => {
  console.log('2 secs up')
}, 2000)

const geoCode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: address,
      longitude: 100
    }

    callback(data)
  }, 2000)
}

// console.log(geoCode('tw'))
geoCode('tw', (data2) => {
  console.log(data2)
})
