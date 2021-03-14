import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Match from './Match'
import { nextRound } from '../actions'

const Round = ({ matches, round, nextRound, currentRound }) => {

  return (
    <>
    <Matches>
    {
      matches &&
      matches.map(match => (
        <Match match={match} key={match.id}/>
        ))
      }
    </Matches>
    <Matches>
    {
      round.winners && 
      round.winners.length === matches.length &&
      currentRound === round.id &&
      <button 
        onClick={e => nextRound(round)}
      >
        {matches.length === 1 ? 'And the winner is...' : 'Next Round'}
      </button>
    }
    </Matches>
    </>
  )
}

export const Matches = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-around;
`

const mapStateToProps = state => ({
  currentRound: state.currentRound,
})

export default connect(
  mapStateToProps, 
  { nextRound }
)(Round)
