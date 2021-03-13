import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { SelectChar, Name } from './CharSelector'

const Match = ({ match, characters }) => {
  const defender = characters.find(character => {
    return character.id === match.defender.id
  })

  const challenger = characters.find(character => {
    return character.id === match.challenger.id
  })

  return (
    <MatchCard>
      <SelectChar>
        <h3 className="seed">{'#' + match.defender.seed}</h3>
        <img 
          src={`${defender.thumbnail.path}/standard_small.${defender.thumbnail.extension}`} 
          alt={defender.name}
        />
        <Name>{defender.name.split(' (')[0]}</Name>
      </SelectChar>
      <SelectChar>
        <h3 className="seed">{'#' + match.challenger.seed}</h3>
        <img 
          src={`${challenger.thumbnail.path}/standard_small.${challenger.thumbnail.extension}`} 
          alt={challenger.name}
        />
        <Name>{challenger.name.split(' (')[0]}</Name>
      </SelectChar>
      <button>Fight</button>
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

export default connect(mapStateToProps, {})(Match)
