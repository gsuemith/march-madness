import { FETCH_CHARACTERS_START, 
  FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAIL 
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