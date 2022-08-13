/* eslint-disable promise/catch-or-return */
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

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
        {types.map(type => <li key={type.id}>{type.type}</li>)}
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Anemone' element={<Anemone />} />
        <Route path='/LPS' element={<LPS />} />
        <Route path='/SPS' element={<SPS />} />
        <Route path='/SoftCoral' element={<SoftCoral />} />
        <Route path='/Coral' element={<Coral />} />
        <Route path='/NewCoral' element={<NewCoral />} />
      </Routes>
    </div>
  )
}

export default App
