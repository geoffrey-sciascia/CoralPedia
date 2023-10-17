/* eslint-disable promise/catch-or-return */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { fetchSoftCoral } from '../api'
import NavBar from './NavBar'

function SoftCoral () {
  const [softCoral, setSoftCoral] = useState([])

  useEffect(() => {
    fetchSoftCoral()
      .then(softCoral => setSoftCoral(softCoral))
  }, [])

  return (
    <div>
      <NavBar />
      <h1>Soft Coral</h1>
      <p>Here you will find a list of Soft Coral</p>
      <ul>
        {softCoral.map(softie => <li key={softie.id}><Link to={`/Coral/${softie.id}`}>{softie.name}</Link></li>)}
      </ul>
    </div>
  )
}
export default SoftCoral
