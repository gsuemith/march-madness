import React from 'react'

import styled from 'styled-components'

import Landing from '../components/Landing'

const HomeLayout = styled.div`
  display: flex;
  justify-content: center;
`

const Home = () => {
  return (
    <HomeLayout>
      <Landing />
    </HomeLayout>
  )
}

export default Home
