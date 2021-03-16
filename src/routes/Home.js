import React from 'react'

import styled from 'styled-components'

import Ranking from '../components/Ranking'

const HomeLayout = styled.div`
  display: flex;
  justify-content: center;
`

const Home = () => {
  return (
    <HomeLayout>
      <Ranking />
    </HomeLayout>
  )
}

export default Home
