import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addToTournament, removeFromTournament } from '../actions';


const CharSelector = ({ character, addToTournament, removeFromTournament }) => {
  const handleClick = e => {
    if(character.isCompeting){
      removeFromTournament(character)
    } else {
      addToTournament(character);
    }
  }

  return (
    <SelectChar
      bgColor={character.isCompeting && "#add8e6"} 
      onClick={handleClick}
    >
      <img 
        src={`${character.thumbnail.path}/standard_small.${character.thumbnail.extension}`} 
        alt={character.name}
      />
      <Name>{character.name.split(' (')[0]}</Name>
    </SelectChar>
  )
}

const SelectChar = styled.div`
  margin: 3px 0;
  box-shadow: 1px 1px 1px gray;
  width: 95%;
  height: 45px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  cursor: pointer;
  :hover {
    box-shadow: 3px 3px 3px gray;
  }
`

const Name = styled.span`
  margin-left: .5em;
  `


export default connect(
  null, 
  { addToTournament, removeFromTournament }
)(CharSelector)
