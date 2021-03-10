import React from 'react'

import styled from 'styled-components';

const SelectChar = styled.div`
  margin: 3px 0 3px 1em;
  box-shadow: 1px 1px 1px gray;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  :hover {
    box-shadow: 3px 3px 3px gray;
  }
`

const Name = styled.span`
  margin-left: .5em;
`

const CharSelector = ({ character }) => {
  return (
    <SelectChar>
      <img src={`${character.thumbnail.path}/standard_small.${character.thumbnail.extension}`} 
          alt={character.name}
      />
      <Name>{character.name}</Name>
    </SelectChar>
  )
}

export default CharSelector
