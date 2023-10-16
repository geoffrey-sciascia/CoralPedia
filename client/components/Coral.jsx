/* eslint-disable promise/catch-or-return */
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

import { fetchOneCoral } from '../api'
import NavBar from './NavBar'

function OneCoral () {
  const [oneCoral, setOneCoral] = useState([])

  useEffect(() => {
    fetchOneCoral()
      .then(oneCoral => setOneCoral(oneCoral))
  }, [])

  return (
    <div>
      <NavBar />
      <h1>One Coral</h1>
      <p>This is the page for One Coral</p>
      {oneCoral.map(coral => <li key={coral.id}>{coral.name} ({coral.scientific_name})</li>)}
    </div>
  )
}
export default OneCoral
