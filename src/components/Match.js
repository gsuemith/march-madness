import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { SelectChar, Name } from '../styles'
import { runMatch, chooseWinner } from '../actions'

import { probability } from '../actions/seed'

const Match = ({ match, runMatch, chooseWinner }) => {

  const fight = e => {
    runMatch(match)
  }

  if(match.challenger && match.challenger.id === 'bye'){
    return (<></>)
  }

  const defenderWins = Math.round(probability(match.defender.rating, match.challenger.rating)*100)

  return (
    <MatchCard>
      <SelectChar 
        winner={match.winner} 
        role='defender'
        onClick={e => chooseWinner(match, 'defender')}
      >
        <h6 className="seed">{'#' + match.defender.seed}</h6>
        <Name>
          {Math.round(probability(match.defender.rating, match.challenger.rating)*100)}%
        </Name>
        <Name loser={match.winner === 'challenger'}>
          {match.defender.id.split(' (')[0]}
        </Name>
      </SelectChar>
      <SelectChar 
        winner={match.winner} 
        role='challenger'
        onClick={e => chooseWinner(match, 'challenger')}
      >
        <h6 className="seed">{'#' + match.challenger.seed}</h6>
        { 
          match.challenger ?
          <>
            <Name>
              {100 - defenderWins}%
            </Name>
            <Name loser={match.winner === 'defender'}>{match.challenger.id.split(' (')[0]}</Name>
          </>
          :
          <Name loser={match.winner === 'defender'}>bye</Name>
        }
      </SelectChar>
      <button onClick={fight} disabled={match.winner}>
        Predict
      </button>
    </MatchCard>
  )
}

const MatchCard = styled.div`
  margin-top: .7em;
  width: 12em;
`

const mapStateToProps = state => ({
  characters: state.characters
})

export default connect(
  mapStateToProps, 
  { runMatch, chooseWinner })(Match)
