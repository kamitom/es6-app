import { promises as fs  } from 'fs'


// console.log(JSON.parse(await fs.readFile('./package.json')).type)

// Look ma, no async function wrapper!
console.log(JSON.parse(await fs.readFile("./package.json")));
console.log(JSON.parse(await fs.readFile("./package.json")).type);
// module
