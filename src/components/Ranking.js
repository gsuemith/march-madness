import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Competitor from './Competitor'

const Container = styled.div`
  /* display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-grow: 2; */
  width: 70vw;
  margin: 1em;
  height: 700px;
`

const Ranking = ({ tournament, characters }) => {
  return (
    <Container>
      {
        tournament.map((id, index) => (
          <Competitor 
            key={id}
            seed={index + 1} 
            character={characters
            .find(character => character.id === id)}
          />
        ))
      }
    </Container>
  )
}

const mapStateToProps = state => ({
  tournament: state.tournament,
  characters: state.characters
})

export default connect(mapStateToProps, {})(Ranking)
