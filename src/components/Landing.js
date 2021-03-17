import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { Button, TeamLogo } from '../styles'
import { getTeams } from '../actions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #999;
  align-content: center;
  font-size: x-large;
  flex-wrap: wrap;
  width: 40vw;
  margin: 1em;
  height: 700px;
`


const Landing = ({ tournament, characters, getTeams }) => {
  const { push } = useHistory();

  const start = e => {
    getTeams();
    push('/tournament')
  }

  useEffect(() => {
    
  }, [])

  return (
    <Container>
      <TeamLogo 
      src={'https://smsumustangs.com/images/2017/2/15/NCAAMBBlogo.jpg'}
      style={{width: '20em', height:'12em'}}
      />
      <p>
        Having trouble choosing a bracket?  It's been two years since you last had to fill out your bracket in time for the tournament.  
      </p>
      <p>
        Let the computer do it for you using the latest team ratings as determined by the Math geniuses over at fivethirtyeight.com.
      </p>
      <div>
        <p>
          You can still pick the teams yourself or leave it up to chance.  Don't like our prediction?  Just change it!  Click below to get started!
        </p>
        <Button onClick={start}>
          <h2>Start Tournament!</h2>
        </Button>
      </div>
    </Container>
  )
}

const mapStateToProps = state => ({
  tournament: state.tournament,
  characters: state.characters
})

export default connect(
  mapStateToProps, { getTeams })(Landing)
