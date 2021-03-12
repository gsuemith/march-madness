import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { moveUp, moveDown, removeFromTournament } from '../actions'

export const Card = styled.div`
  display: inline-block;
  width: 160px;
  height: 300px;
  background-image: linear-gradient(to right bottom, white 20%, pink 40%, lightblue);
  box-shadow: 2px 2px 2px gray;
  margin: .5em;
  padding-left: 1em;
  :hover {
    box-shadow: 4px 4px 4px gray;
  }
`
const Header = styled.h2`
  display: flex;
  justify-content: space-between;
  padding-right: 1em;

  :nth-child(2) {
    color: red;
  }
  span {
    cursor: pointer;
  }
`

const Competitor = (props) => {
  const { character, seed, moveUp, 
    moveDown, removeFromTournament } = props;

  return (
    <Card>
      <Header>
        {`#${seed}`}
        <span onClick={e => moveUp(character.id)}>{"<"}</span>
        <span onClick={e => removeFromTournament(character)}>x</span>
        <span onClick={e => moveDown(character.id)}>{">"}</span>
      </Header>
      <h3>{character.name.split(' (')[0]}</h3>
      <img 
        src={`${character.thumbnail.path}/portrait_medium.${character.thumbnail.extension}`}
        alt={character.name}
        style={{border: 'solid 3px black'}}
      />
    </Card>
  )
}

export default connect(
  null, 
  { moveUp, moveDown, removeFromTournament }
)(Competitor)
