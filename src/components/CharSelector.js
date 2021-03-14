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

export const SelectChar = styled.div`
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
  .seed {
    width: 2.5em;
    padding: 1em 0 0 .5em;
    background-color: green;  //default
    background-color: ${({ winner, role }) => {
      if(winner){
        return winner === role ? 'gold' : 'red'
      } else {return 'none'}
      }};
    height: 100%;
  }
`

export const Name = styled.span`
  margin-left: .5em;
  text-decoration: ${({ loser }) => loser ?'line-through':'none'};
  `


export default connect(
  null, 
  { addToTournament, removeFromTournament }
)(CharSelector)
