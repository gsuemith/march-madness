import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { SelectChar, Name } from '../components/CharSelector'
import { Matches } from '../components/Round'

import Round from '../components/Round'
import { startTournament } from '../actions'

const Tournament = ({ rounds, startTournament, tournament, winner }) => {
  
  return (
    <div>
      <p 
        onClick={e => startTournament(tournament)}
        style={{padding: '0 2em'}}
      >
        This tournament is simulated with a simple random number generator to determine the winner of each matchup. The probabilities are based on the team's Elo rankings as of Sunday, March 14, 2021
      </p>
      <Rounds>
      {
        rounds.map((round, index) => (
          <Round 
            key={index} 
            matches={round.matches}
            round={round}
          />
        ))
      }
      {
        winner 
        && 
        <Matches style={{width: '18em'}}>
          <SelectChar 
            style={{border: '3px solid gold', height: '80px'}}
          >
            <Name>{winner.id}</Name>
          </SelectChar>
        </Matches>
      }
      </Rounds>
    </div>
  )
}

const Rounds = styled.div`
  display: flex;
  justify-content: center;
`

const mapStateToProps = state => ({
  rounds: state.rounds,
  tournament: state.tournament,
  winner: state.tournamentWinner
})

export default connect(mapStateToProps, { startTournament })(Tournament)
