var fs = require('fs');

const elo2021 = () => {
  const data = fs.readFileSync('elo.csv')
    .toString().split('\n')
    .map(string => string.split(',')
    .map(string => {
      return string.trim();
    }))

  return data
}

console.log(elo2021())

var file = fs.createWriteStream('elo.js')
file.on('error', err => console.log("error", err));

elo2021().forEach(line => {
  file.write(`{name:"${line[0]}", rating:${line[1]}},\n`)
})

file.end();

const ncaa = () => {
  const data = fs.readFileSync('ncaa.csv')
    .toString().split('\n')
    .map(string => string.split(',').map(string => string.trim()))

    return data
}

// console.log(ncaa())

// var file = fs.createWriteStream('ncaa.js')
// file.on('error', function(err) { /* error handling */ });
// ncaa().forEach(line => {
//   file.write(`${line.map(name => `"${name}"`)},\n`)
// })
// file.end()