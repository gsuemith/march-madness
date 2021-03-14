import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Match from './Match'
import { nextRound } from '../actions'

const Round = ({ matches, round, nextRound }) => {
  const [disabled, setDisabled] = useState(false)

  const completeRound = e => {
    nextRound(round)
    setDisabled(true)
  }

  return (
    <Matches>
    {
      round.winners && round.winners.length === matches.length &&
      <button 
        onClick={completeRound} 
        disabled={disabled}
      >
        Next Round
      </button>
    }
    {
      matches &&
      matches.map(match => (
        <Match match={match} key={match.id}/>
      ))
    }
    </Matches>
  )
}

export const Matches = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
`

export default connect(
  null, 
  { nextRound }
)(Round)
