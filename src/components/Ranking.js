import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { Card } from './Competitor'
import { startTournament } from '../actions'

const Container = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-grow: 2;
  width: 70vw;
  margin: 1em;
  height: 700px;
`


const Ranking = ({ tournament, characters, startTournament }) => {
  const { push } = useHistory();

  const start = e => {
    push('/tournament')
    startTournament(tournament);
  }

  useEffect(() => {
    
  }, [])

  return (
    <Container>
      <Card onClick={start}>
        <h2 >Start Tournament!</h2>
      </Card>
    </Container>
  )
}

const mapStateToProps = state => ({
  tournament: state.tournament,
  characters: state.characters
})

export default connect(
  mapStateToProps, { startTournament })(Ranking)
