/* eslint-disable promise/catch-or-return */
import React, { useEffect, useState } from 'react'

import { fetchTypes } from '../api'

function App () {
  const [types, setTypes] = useState([])

  useEffect(() => {
    fetchTypes()
      .then(types => setTypes(types))
  }, [])

  return (
    <div className='app-container'>
      <h1 className='app-title'>CoralPedia</h1>
      <p>Welcome to CoralPedia, A project by Geoffrey Sciascia</p>
      <ul>
        {types.map(t => <li key={t.id}>{t.type}</li>)}
      </ul>
    </div>
  )
}

export default App
