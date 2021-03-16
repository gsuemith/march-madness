import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { SelectChar, Name } from '../styles'
import { Matches } from '../components/Round'

import Round from '../components/Round'
import { startTournament } from '../actions'

const Tournament = ({ rounds, startTournament, tournament, winner }) => {
  
  return (
    <div>
      <p style={{padding: '0 2em', color:'#aaa'}}>
        This tournament is simulated with a simple random number generator to determine the winner of each matchup. The probabilities are based on the team's Elo rankings as of Sunday, March 14, 2021.
        <br/><br/>
        Below, you can choose a winner, have the computer predict a winner for that game, or have the computer pick a winner for every unpicked game in that round.
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
            <Name style={{textAlign: 'center'}}>Congrats {winner}!</Name>
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
