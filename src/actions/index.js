import axios from 'axios'
import { FORBIDDEN_GROUPS, getURL, GUARDIANS_OF_THE_GALAXY as gotg
} from '../keys'

export const TYPE = "TYPE"

export const ADD_TO_TOURNAMENT = "ADD_TO_TOURNAMENT"
export const REMOVE_FROM_TOURNAMENT = "REMOVE_FROM_TOURNAMENT"
export const MOVE_UP = "MOVE_UP"
export const MOVE_DOWN = "MOVE_DOWN"


export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START"
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS"
export const FETCH_CHARACTERS_FAIL = "FETCH_CHARACTERS_FAIL"

export const action = () => {
  return {type: TYPE, payload: ''}
}

export const moveUp = (id) => {
  return {type: MOVE_UP, payload: id}
}

export const moveDown = (id) => {
  return {type: MOVE_DOWN, payload: id}
}

export const addToTournament = (character) => {
  return {type:ADD_TO_TOURNAMENT, payload:character}
}

export const removeFromTournament = (character) => {
  return {type:REMOVE_FROM_TOURNAMENT, payload:character}
}

export const getCharacters = () => dispatch => {
  dispatch({type:FETCH_CHARACTERS_START})
  
  axios.get(getURL(
    'characters', 
    ['limit=100', 'events=314%2C315%2C29']
  ))
    .then(res =>{
      const characters = res.data.data.results
        .filter(character => {
          return !FORBIDDEN_GROUPS.find(id => id === character.id)
      })

      axios.all(gotg.map(id => axios.get(getURL(`characters/${id}`, null))))
        .then(res => {
          res.forEach(res => characters.push(res.data.data.results[0]))
          
          // Dispatch list of characters to state in alpha order
          characters.sort((a,b) => a.name.localeCompare(b.name))
          console.log("chars", characters)
          dispatch({
            type: FETCH_CHARACTERS_SUCCESS, 
            payload: characters
          })
        })
    })
    .catch(err =>{
      console.log('errors', err)
      dispatch({
        type: FETCH_CHARACTERS_FAIL, 
        payload: err
      })
    })  
}