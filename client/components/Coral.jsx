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
      <h1>One Coral</h1>
      <p>This is the page for One Coral</p>
      {oneCoral.map(coral => <li key={coral.id}>
        <div className='coral-name'><h2>{coral.name} ({coral.scientific_name})</h2></div>
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
