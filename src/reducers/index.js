const initialState = {
  characters: [],
  tournament: [],
  rounds: 1,
  currentRound: 0,
  currentMatch: 0,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  // case typeName:
  //   return { ...state, ...payload }

  default:
    return state
  }
}

export default reducer