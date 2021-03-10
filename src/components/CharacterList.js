import React from 'react'
import { connect } from 'react-redux';

import { getCharacters } from '../actions'

import CharSelector from './CharSelector'

import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 30vw;
`

const CharacterList = ({ characters, getCharacters }) => {
  return (
    <Column>
      {
        characters.length === 0 ?
        <button onClick={e => getCharacters()}>
          Get Characters
        </button>
        :
        characters.map(character => (
          <CharSelector character={character} key={character.id}/>
        ))
      }
    </Column>
  )
}

const mapStateToProps = state => ({
  characters: state.characters,
  error: state.error
})

export default connect(mapStateToProps,
  { getCharacters })(CharacterList);
