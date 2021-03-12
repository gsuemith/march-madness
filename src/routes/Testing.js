import React, {useEffect} from 'react'
import axios from 'axios'
import { getURL } from '../keys'

const Testing = () => {
  useEffect(() => {
    axios.get(getURL()).then(res => {
      console.log(res.data.data)
    })
      .catch(err => console.log("Error", err))
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Testing
