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

    return (<div></div>)
  }

  return (
    <MatchCard>
      <SelectChar winner={match.winner} role='defender'>
        <h3 className="seed">{'#' + match.defender.seed}</h3>
        {/* <img 
          src={`${defender.thumbnail.path}/standard_small.${defender.thumbnail.extension}`} 
          alt={defender.name}
        /> */}
        <Name loser={match.winner === 'challenger'}>
          {match.defender.id.split(' (')[0]}
        </Name>
      </SelectChar>
      <SelectChar winner={match.winner} role='challenger'>
        <h3 className="seed">{'#' + match.challenger.seed}</h3>
        { 
          match.challenger ?
          <>
            {/* <img 
              src={`${challenger.thumbnail.path}/standard_small.${challenger.thumbnail.extension}`} 
              alt={challenger.name}
            /> */}
            <Name loser={match.winner === 'defender'}>{match.challenger.id.split(' (')[0]}</Name>
          </>
          :
          <Name loser={match.winner === 'defender'}>bye</Name>
        }
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
