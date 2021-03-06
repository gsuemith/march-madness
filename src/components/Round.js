import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Match from './Match'
import { nextRound, runMatch } from '../actions'
import { Button } from '../styles'

const Round = ({ matches, round, nextRound, currentRound, runMatch }) => {
  const [roundPending, setPending] = useState(true)

  useEffect(() => {
    if(round.winners.length === matches.length 
      && 
      currentRound === round.id 
      && 
      !roundPending){
      nextRound(round);
    }
  }, [round.winners, roundPending])

  const newRound = e => {
    e.preventDefault();
    
    if(matches[0].challenger.id === 'bye'){
      matches.forEach(match => {
        if(match.challenger.id === 'bye'){
          runMatch(match);
        }
      })
     }
     setPending(false)
  }

  const predictAll = e => {
    matches.forEach(match => {
      if(!match.winner){
        runMatch(match);
      }
    })
  }

  return (
    <>
    <Matches>
    {
      matches 
      &&
      matches.map(match => (
        <Match match={match} key={match.id}/>
      ))
    }
    </Matches>

    <Matches> {/**Next round button */}
    {
      round.winners 
      && 
      round.winners.length === matches.length 
      &&
      currentRound === round.id 
      ?
      <Button onClick={newRound}>
        {matches.length === 1 ? 'And the winner is...' : 'Next Round'}
      </Button>
      :
      (roundPending || currentRound === 1) &&
      <Button onClick={predictAll}>Predict All</Button>
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
  { nextRound, runMatch }
)(Round)
