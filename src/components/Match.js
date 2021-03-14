import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { SelectChar, Name } from './CharSelector'
import { runMatch } from '../actions'

const Match = ({ match, characters, runMatch }) => {
  const defender = characters.find(character => {
    return character.id === match.defender.id
  })

  const challenger = characters.find(character => {
    return character.id === match.challenger.id
  })

  const fight = e => {
    e.preventDefault();
    runMatch(match)
  }

  return (
    <MatchCard>
      <SelectChar winner={match.winner} role='defender'>
        <h3 className="seed">{'#' + match.defender.seed}</h3>
        <img 
          src={`${defender.thumbnail.path}/standard_small.${defender.thumbnail.extension}`} 
          alt={defender.name}
        />
        <Name loser={match.winner == 'challenger'}>
          {defender.name.split(' (')[0]}
        </Name>
      </SelectChar>
      <SelectChar winner={match.winner} role='challenger'>
        <h3 className="seed">{'#' + match.challenger.seed}</h3>
        <img 
          src={`${challenger.thumbnail.path}/standard_small.${challenger.thumbnail.extension}`} 
          alt={challenger.name}
        />
        <Name loser={match.winner == 'defender'}>{challenger.name.split(' (')[0]}</Name>
      </SelectChar>
      <button onClick={fight} disabled={match.winner}>
        Fight!
      </button>
    </MatchCard>
  )
}

const MatchCard = styled.div`
  margin-top: 3em;
  width: 18em;
`

const mapStateToProps = state => ({
  characters: state.characters
})

export default connect(mapStateToProps, { runMatch })(Match)
