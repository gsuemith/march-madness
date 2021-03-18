import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { SelectChar, Name, TeamLogo, Button } from '../styles'
import { runMatch, chooseWinner } from '../actions'

import { probability } from '../actions/seed'

const Match = ({ match, runMatch, chooseWinner, teams }) => {

  const fight = e => {
    runMatch(match)
  }

  if(match.challenger && match.challenger.id === 'bye'){
    return (<></>)
  }

  const defenderWins = Math.round(probability(match.defender.rating, match.challenger.rating)*100)

  const logo = id => {
    const myTeam = teams.find(team => team.id === id);
    
    return myTeam ? myTeam.logo : '#'
  }

  return (
    <MatchCard>
      <SelectChar 
        winner={match.winner} 
        role='defender'
        onClick={e => chooseWinner(match, 'defender')}
      >
        <h6 className="seed">{'#' + match.defender.seed}</h6>
        <TeamLogo src={logo(match.defender.id)}/>
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
            <TeamLogo src={logo(match.challenger.id)}/>
            <Name>
              {100 - defenderWins}%
            </Name>
            <Name loser={match.winner === 'defender'}>{match.challenger.id.split(' (')[0]}</Name>
          </>
          :
          <Name loser={match.winner === 'defender'}>bye</Name>
        }
      </SelectChar>
      { !match.winner &&
        <Button onClick={fight} disabled={match.winner}>
        Predict
      </Button>}
    </MatchCard>
  )
}

const MatchCard = styled.div`
  margin-top: .7em;
  width: 12.3em;
`

const mapStateToProps = state => ({
  teams: state.teams
})

export default connect(
  mapStateToProps, 
  { runMatch, chooseWinner })(Match)
