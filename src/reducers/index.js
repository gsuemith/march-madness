import { FETCH_CHARACTERS_START, 
  FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAIL, ADD_TO_TOURNAMENT,
  MOVE_DOWN, MOVE_UP 
} from "../actions"

const initialState = {
  characters: [],
  tournament: [],
  rounds: 1,
  currentRound: 0,
  currentMatch: 0,
  isFetching: false,
  error: '',
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
  // case typeName:
  //   return { ...state, ...payload }
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