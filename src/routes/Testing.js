import React, {useEffect} from 'react'
import axios from 'axios'

import seed from '../actions/seed'
import { ncaa } from '../csv/ncaa.js'

const teamsURL = 'https://api.sportsdata.io/v3/cbb/scores/json/teams?key=4570cd5e85c0439cb05471055ea02f40'
const tournamentURL = 'https://api.sportsdata.io/v3/cbb/scores/json/Tournament/2021?key=4570cd5e85c0439cb05471055ea02f40'

const Testing = () => {
  useEffect(() => {
    console.log(seed(seed(ncaa)))
    
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default Testing
