import { FETCH_CHARACTERS_START, 
  FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAIL, 
  MOVE_DOWN, MOVE_UP, START_TOURNAMENT,
  ADD_TO_TOURNAMENT, REMOVE_FROM_TOURNAMENT
   
} from "../actions"

const initialState = {
  characters: [],
  tournament: [],
  rounds: [
    {matches: [], winners: []}
  ], 
  //match = {defender:{id:001, rating:1000}, challenger:...}
  currentRound: 0,
  isFetching: false,
  error: '',
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
  // case typeName:
  //   return { ...state, ...payload }
    case  START_TOURNAMENT:
      return {
        ...state,
        currentRound: 0,
        rounds: [{
          winners: [],
          matches: payload
        }]
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