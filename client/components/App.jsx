/* eslint-disable promise/catch-or-return */
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { fetchTypes } from '../api'
import Home from './Home'
import Anemone from './Anemone'
import LPS from './LPS'
import NewCoral from './NewCoral'
import Coral from './Coral'
import SoftCoral from './SoftCoral'
import SPS from './SPS'

function App () {
  const [types, setTypes] = useState([])

  useEffect(() => {
    fetchTypes()
      .then(types => setTypes(types))
  }, [])

  return (

    <div className='app-container'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Anemone' element={<Anemone />} />
        <Route path='/LPS' element={<LPS />} />
        <Route path='/SPS' element={<SPS />} />
        <Route path='/SoftCoral' element={<SoftCoral />} />
        <Route path='/Coral/:id' element={<Coral />} />
        <Route path='/NewCoral' element={<NewCoral />} />
      </Routes>
    </div>

  )
}

export default App
