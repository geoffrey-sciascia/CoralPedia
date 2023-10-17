/* eslint-disable promise/catch-or-return */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { fetchSPSCoral } from '../api'
import NavBar from './NavBar'

function SPSCoral () {
  const [sPSCoral, setSPSCoral] = useState([])

  useEffect(() => {
    fetchSPSCoral()
      .then(sPSCoral => setSPSCoral(sPSCoral))
  }, [])

  return (
    <div>
      <NavBar />
      <h1>SPS Coral</h1>
      <p>Here you will find a list of Small Polyp Stony Coral</p>
      <ul>
        {sPSCoral.map(sps => <li key={sps.id}><Link to={`/Coral/${sps.id}`}>{sps.name}</Link></li>)}
      </ul>
    </div>
  )
}
export default SPSCoral
