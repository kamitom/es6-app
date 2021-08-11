
console.log('starting')

setTimeout(() => {
  console.log('2 secs')
}, 2000)

setTimeout(() => {
  console.log('0 sec')
}, 0)

setTimeout(() => {
  console.log('1 sec')
}, 1000)

console.log('stopping')
