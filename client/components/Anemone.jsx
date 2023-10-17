/* eslint-disable promise/catch-or-return */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { fetchAnemone } from '../api'
import NavBar from './NavBar'

function Anemone () {
  const [anemones, setAnemones] = useState([])

  useEffect(() => {
    fetchAnemone()
      .then(anemones => setAnemones(anemones))
  }, [])

  return (
    <div>
      <NavBar />
      <h1>Anemone</h1>
      <p>Here you will find a list of Anemone</p>
      <ul>
        {anemones.map(anemone =>
          <li key={anemone.id}>
            <Link
              to={{
                pathname: `/coral/${anemone.id}`,
                state: { id: anemone.id }
              }}>{anemone.name}</Link>
          </li>)}
      </ul>
    </div>
  )
}
export default Anemone
