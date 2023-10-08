/* eslint-disable promise/catch-or-return */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { fetchSPSCoral } from '../api'

function SPSCoral () {
  const [sPSCoral, setSPSCoral] = useState([])

  useEffect(() => {
    fetchSPSCoral()
      .then(sPSCoral => setSPSCoral(sPSCoral))
  }, [])

  return (
    <div>
      <h1>SPS Coral</h1>
      <p>Here you will find a list of Small Polyp Stony Coral</p>
      <ul>
        {sPSCoral.map(sps => <li key={sps.id}><Link to={`/${sps.name}`}>{sps.name}</Link></li>)}
      </ul>
    </div>
  )
}
export default SPSCoral
