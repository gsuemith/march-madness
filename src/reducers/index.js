import { FETCH_CHARACTERS_START, 
  FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAIL, 
  MOVE_DOWN, MOVE_UP, START_TOURNAMENT, UPDATE_WINNERS,
  ADD_TO_TOURNAMENT, REMOVE_FROM_TOURNAMENT, RUN_MATCH, NEXT_ROUND, DECLARE_WINNER
   
} from "../actions"
import { newRating } from "../actions/seed"

import {ncaa} from '../csv/ncaa.js'

const initialState = {
  characters: [],
  tournament: ncaa,
  rounds: [
    {id: 0, matches: [], winners: []}
  ], 
  //match = {id:0, winner:null, defender:{id:001, rating:1000}, challenger:...}
  currentRound: 0,
  isFetching: false,
  error: '',
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
  // case typeName:
  //   return { ...state, ...payload }
    case DECLARE_WINNER:
      return {
        ...state,
        // rounds: [...state.rounds, {}],
        tournamentWinner: payload.id,
        currentRound: 'winner'
      }

    case  NEXT_ROUND:
      return {
        ...state,
        rounds: [...state.rounds, {
          matches:payload,
          winners: [],
          id: state.currentRound + 1
        }],
        currentRound: state.currentRound + 1
      }

    case UPDATE_WINNERS:
      return {
        ...state,
        rounds: state.rounds.map(round => {
          return {
            ...round,
            winners: round.matches.reduce((acc, match) => {
              if (match.winner) {
                return acc = [...acc, {
                  ...match[match.winner],
                  rating: newRating(
                    match[match.winner].rating,
                    match[match.winner === 'defender' ? 'defender' : 'challenger'],
                    1
                  ),
                }]
              }
              return acc;
            }, [])
          }
        })
      }

    case RUN_MATCH: 
      return {
        ...state,
        rounds: state.rounds.map(round => {
          if(round.id === state.currentRound){
            return {
              ...round,
              matches: round.matches.map(match => {
                if(match.id === payload.id){
                  return payload
                }
                return match;
              })
            }
          }
          return round;
        })
      }
  
    case  START_TOURNAMENT:
      return {
        ...state,
        currentRound: 1,
        rounds: [{
          id: 1,
          winners: [],
          matches: payload
        }],
        tournamentWinner: null
      }

    case MOVE_UP:
      return {
        ...state,
        tournament: state.tournament.map((id, index, array) => {
          if(id === payload && index > 0){
            return array[index - 1]
          }
          if(array[index + 1] === payload){
            return payload
          }
          return id
        })
      }

    case MOVE_DOWN:
      return {
        ...state,
        tournament: state.tournament.map((id, index, array) => {
          if(id === payload && index+1 < state.tournament.length){
            return array[index + 1]
          }
          if(array[index - 1] === payload){
            return payload
          }
          return id
        })
      }

    case ADD_TO_TOURNAMENT:
      return {
        ...state,
        characters: state.characters.map(character => {
          if (character.id === payload.id){
            return {
              ...character,
              isCompeting: true
            };
          }
          return character;
        }),
        tournament: [
          ...state.tournament, 
          payload.id
        ]
      }

    case REMOVE_FROM_TOURNAMENT:
      return {
        ...state,
        characters: state.characters.map(character => {
          if (character.id === payload.id){
            return {
              ...character,
              isCompeting: false
            };
          }
          return character;
        }),
        tournament: state.tournament.filter(id => {
          return id !== payload.id
        })
      }
    
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        characters: payload,
      };

      case FETCH_CHARACTERS_FAIL:
        return {
          ...state,
          isFetching: false,
          error: payload
        }

  default:
    return state
  }
}

export default reducer