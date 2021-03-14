import { PUBLIC_KEY, PRIVATE_KEY } from './keys'

export const URL = 'https://gateway.marvel.com/v1/public/'

export const getURL = (endpoint, queries) => {
  const md5 = require('md5')
  const ts = Date.now()
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY)
  
 return `${URL}${endpoint}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}${queries ? '&' + queries.join("&") : ''}`
}

// Avengers 1009165
// Fantastic Four 1009299 
// X-Men 1009726
// Carol Danvers 1009261
// Blue Marvel 1011339
// Guardians of the Galaxy 1011299
// Illuminati 1010758
// Imperial Guard 1009363
// Inhumans 1009365
// Sasquatch, 1009560
// Shaman, 1009576
// Talisman 1009646
export const FORBIDDEN_GROUPS = [1009165, 1009299, 1009726, 1009261, 1011339, 1011299, 1010758, 1009363, 1009560, 1009365, 1009576, 1009646, 1010853]


//events

// 315 infinity; 38 characters
// 29 infinity war; 58 characters
// 314 age of ultron; 14 characters
// 238 civil war;  101 characters

// guardians of the galaxy starlord, drax, gamora, rocket, groot
// id: 1010733, name: "Star-Lord (Peter Quill)"
// id: 1010735, name: "Drax"
// id: 1017324, name: "Gamora"
// id: 1010744, name: "Rocket Raccoon"
// id: 1010743, name: "Groot"
// id: 1010365, name: "Nebula"
export const GUARDIANS_OF_THE_GALAXY = [1010733, 1010735, 1017324, 1010744, 1010743, 1010365]