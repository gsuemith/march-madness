import axios from 'axios'
import { getURL
} from '../api'

import seed, { whoWins } from './seed'
import { rating538 } from '../csv/rating538'

export const TYPE = "TYPE"

export const START_TOURNAMENT = "START_TOURNAMENT"
export const ADD_TO_TOURNAMENT = "ADD_TO_TOURNAMENT"
export const REMOVE_FROM_TOURNAMENT = "REMOVE_FROM_TOURNAMENT"
export const MOVE_UP = "MOVE_UP"
export const MOVE_DOWN = "MOVE_DOWN"

export const RUN_MATCH = "RUN_MATCH"
export const RUN_BYES = "RUN_BYES"
export const UPDATE_WINNERS = "UPDATE_WINNERS"
export const NEXT_ROUND = "NEXT_ROUND"
export const DECLARE_WINNER = "DECLARE_WINNER"
export const CHOOSE_WINNER = "CHOOSE_WINNER"

export const FETCH_TEAMS_START = "FETCH_TEAMS_START"
export const FETCH_TEAMS_SUCCESS = "FETCH_TEAMS_SUCCESS"
export const FETCH_TEAMS_FAIL = "FETCH_TEAMS_FAIL"

export const action = () => {
  return {type: TYPE, payload: ''}
}

export const chooseWinner = (match, pick) => dispatch => {
  dispatch({
    type: RUN_MATCH, 
    payload: {
      ...match, 
      winner: pick !== match.winner ? pick : null}
  });
  dispatch({type:UPDATE_WINNERS})
}

export const nextRound = round => {
  if (round.winners.length === 1){
    return {
      type:DECLARE_WINNER, 
      payload:round.winners[0]
    }
  }
  const newRound = [];

  round.winners.forEach((winner, index, winners) => {
    if(index % 2 === 0){
      newRound.push({
        id: index/2,
        winner: null,
        defender: winner,
        challenger: winners[index + 1]
      })
    }
  })
  
  return {type: NEXT_ROUND, payload: newRound};
}

export const runMatch = match => dispatch => {
  const { defender, challenger } = match
  const winner = challenger.id === 'bye' ? 'defender' :
    (whoWins(defender.rating, challenger.rating) ? 'defender' : 'challenger');
  
  dispatch({
    type: RUN_MATCH, 
    payload: {...match, winner: winner}
  });
  dispatch({type:UPDATE_WINNERS})
}

export const runByes = round => dispatch => {
  round.forEach(match => {
    if(match.challenger.id === 'bye'){
      runMatch(match)(dispatch)
    }
  })
}

export const moveUp = (id) => {
  return {type: MOVE_UP, payload: id}
}

export const moveDown = (id) => {
  return {type: MOVE_DOWN, payload: id}
}

export const startTournament = (ids) => {
  
  let initial = seed(ids).map((matchup, index, array) => {
    // console.log(matchup)
    const newMatch = {
      id: index,
      winner: null,
      defender: {
        id: matchup[0], 
        rating: rating538.find(elo => elo.name === matchup[0]).rating,
        seed: Math.floor(index / 4) + 1
      },
      challenger: {
        id: matchup[1], 
        rating: rating538.find(elo => elo.name === matchup[1]).rating,
        seed: Math.floor(index / 4) + 1,
      }
    }
    return newMatch
  })

  while(initial.length > 2){
    initial = seed(initial)
  }

  const round1 = [];
  function tournamentOrder(array){
    if(Array.isArray(array[0])){
      tournamentOrder(array[0]);
      tournamentOrder(array[1]);
    } else {
      round1.push(array[0], array[1])
    }
  }

  tournamentOrder(initial)

  return {type:START_TOURNAMENT, payload:round1}
}

export const addToTournament = (character) => {
  return {type:ADD_TO_TOURNAMENT, payload:character}
}

export const removeFromTournament = (character) => {
  return {type:REMOVE_FROM_TOURNAMENT, payload:character}
}

export const getTeams = () => dispatch => {
  dispatch({type:FETCH_TEAMS_START})
  
  axios.get(getURL())
    .then(res =>{
        
        const teams = rating538.map(team => {
          return res.data.find(apiTeam => apiTeam.School === team.name)
        })
        teams.shift();  //remove 'bye'
        const teamList = teams.map(team => {
          return {
            id: team.School,
            teamName: team.Name,
            wins: team.Wins,
            losses: team.Losses, 
            logo: team.TeamLogoUrl
          }
        })
        
        dispatch({type:FETCH_TEAMS_SUCCESS, payload:teamList})
      })

      
    
    .catch(err =>{
      console.log('errors', err)
      dispatch({
        type: FETCH_TEAMS_FAIL, 
        payload: err
      })
    })  
}