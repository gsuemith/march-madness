import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { SelectChar, Name } from './CharSelector'
import { runMatch } from '../actions'

const Match = ({ match, characters, runMatch }) => {
  // const defender = characters.find(character => {
  //   return character.id === match.defender.id
  // })

  // const challenger = characters.find(character => {
  //   return character.id === match.challenger.id
  // })

  const fight = e => {
    runMatch(match)
  }

  if(match.challenger.id === 'bye'){

    return (<></>)
  }

  return (
    <MatchCard>
      <SelectChar winner={match.winner} role='defender'>
        <h6 className="seed">{'#' + match.defender.seed}</h6>
        <Name loser={match.winner === 'challenger'}>
          {match.defender.id.split(' (')[0]}
        </Name>
      </SelectChar>
      <SelectChar winner={match.winner} role='challenger'>
        <h6 className="seed">{'#' + match.challenger.seed}</h6>
        { 
          match.challenger ?
          <>
            <Name loser={match.winner === 'defender'}>{match.challenger.id.split(' (')[0]}</Name>
          </>
          :
          <Name loser={match.winner === 'defender'}>bye</Name>
        }
      </SelectChar>
      <button onClick={fight} disabled={match.winner}>
        Play!
      </button>
    </MatchCard>
  )
}

const MatchCard = styled.div`
  margin-top: .7em;
  width: 10em;
`

const mapStateToProps = state => ({
  characters: state.characters
})

export default connect(mapStateToProps, { runMatch })(Match)
