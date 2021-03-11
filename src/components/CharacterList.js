import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getCharacters } from '../actions'

import CharSelector from './CharSelector'

const Column = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: end; */
  min-width: 25vw;
  margin: 1em;
  height: 700px;
  max-width: 265px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display:none;
  }
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
