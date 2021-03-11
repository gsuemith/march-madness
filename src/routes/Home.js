import React from 'react'

import styled from 'styled-components'

import CharacterList from '../components/CharacterList'
import Ranking from '../components/Ranking'

const HomeLayout = styled.div`
  display: flex;
  justify-content: center;
`

const Home = () => {
  return (
    <HomeLayout>
      <CharacterList />
      <Ranking />
    </HomeLayout>
  )
}

export default Home
