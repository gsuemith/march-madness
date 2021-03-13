import React from 'react'
import styled from 'styled-components'

import Match from './Match'

const Round = ({ matches }) => {
  return (
    <Matches>
    {
      matches.map(match => (
        <Match match={match} key={match.id}/>
      ))
    }
    </Matches>
  )
}

const Matches = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export default Round
