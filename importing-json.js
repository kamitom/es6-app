// import data1 from './data.json'
// TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".json"

// console.log(data1)

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const data2 = require('./data.json')

console.log(data2)
// {"that": "works"}
