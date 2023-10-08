/* eslint-disable promise/catch-or-return */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { fetchLPSCoral } from '../api'

function LPSCoral () {
  const [lPSCoral, setLPSCoral] = useState([])

  useEffect(() => {
    fetchLPSCoral()
      .then(sPSCoral => setLPSCoral(sPSCoral))
  }, [])

  return (
    <div>
      <h1>LPS Coral</h1>
      <p>Here you will find a list of Large Polyp Stony Coral</p>
      <ul>
        {lPSCoral.map(lps => <li key={lps.id}><Link to={`/${lps.id}`}>{lps.name}</Link></li>)}
      </ul>
    </div>
  )
}
export default LPSCoral
