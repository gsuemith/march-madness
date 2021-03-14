import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Match from './Match'
import { nextRound } from '../actions'

const Round = ({ matches, round, nextRound, currentRound }) => {

  return (
    <Matches>
    {
      round.winners && 
      round.winners.length === matches.length &&
      currentRound === round.id &&
      <button 
        onClick={e => nextRound(round)}
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

const mapStateToProps = state => ({
  currentRound: state.currentRound,
})

export default connect(
  mapStateToProps, 
  { nextRound }
)(Round)
