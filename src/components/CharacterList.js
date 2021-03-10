import React from 'react'

import CharSelector from './CharSelector'

import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 30vw;
`

const CharacterList = ({ characters }) => {
  return (
    <Column>
      {
        characters.map(character => (
          <CharSelector character={character} key={character.id}/>
        ))
      }
    </Column>
  )
}

export default CharacterList
