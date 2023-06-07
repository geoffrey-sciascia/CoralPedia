/* eslint-disable promise/catch-or-return */
import React, { useEffect, useState } from 'react'

import { fetchTypes } from '../api'

function Home () {
  const [types, setTypes] = useState([])

  useEffect(() => {
    fetchTypes()
      .then(types => setTypes(types))
  }, [])

  return (
    <div>
      <h1 className='app-title'>CoralPedia</h1>
      <p>Welcome to CoralPedia, A project by Geoffrey Sciascia</p>
      <ul>
        {types.map(type => <li key={type.id}>{type.type}</li>)}
      </ul>
    </div>
  )
}

export default Home
