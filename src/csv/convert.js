var fs = require('fs');

// export const elo2021 = (fs) => {
//   const data = fs.readFileSync('elo.csv')
//     .toString().split('\n')
//     .map(string => string.split(',')
//     .map(string => {
//       return string.trim();
//     }))

//   return data
// }

const ncaa = () => {
  const data = fs.readFileSync('ncaa.csv')
    .toString().split('\n')
    .map(string => string.split(',').map(string => string.trim()))

    return data
}

console.log(ncaa())

var file = fs.createWriteStream('ncaa.js')
file.on('error', function(err) { /* error handling */ });
ncaa().forEach(line => {
  file.write(`${line.map(name => `"${name}"`)},\n`)
})
file.end()