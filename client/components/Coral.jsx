/* eslint-disable promise/catch-or-return */
import React, { useEffect, useState } from 'react'

import { fetchOneCoral } from '../api'
import NavBar from './NavBar'

function OneCoral () {
  const [oneCoral, setOneCoral] = useState([])

  useEffect(() => {
    fetchOneCoral()
      .then(oneCoral => setOneCoral(oneCoral))
  }, [])

  console.log(oneCoral)

  return (
    <div>
      <NavBar />
      {oneCoral.map(coral => <li key={coral.id}>
        <div className='coral-name'><h1>{coral.name} ({coral.scientific_name})</h1></div>
        <div className='coral-bio'>{coral.bio}</div>
        <div className='coral-hardyness'>{coral.hardyness}</div>
        <div className='coral-aggressiveness'>{coral.aggressiveness}</div>
        <div className='coral-warfare'>{coral.warfare}</div>
        <div className='coral-diet-specifics'>{coral.diet_specifics}</div>
        <div className='coral-husbandry'>{coral.husbandry}</div>
        <div className='coral-picture'></div>
      </li>)}
    </div>
  )
}
export default OneCoral
