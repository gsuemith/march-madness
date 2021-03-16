import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addToTournament, removeFromTournament } from '../actions';
import { SelectChar, Name } from '../styles'

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


export default connect(
  null, 
  { addToTournament, removeFromTournament }
)(CharSelector)
