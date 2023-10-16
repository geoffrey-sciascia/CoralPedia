/* eslint-disable promise/catch-or-return */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { fetchTypes } from '../api'
import NavBar from './NavBar'

function Home () {
  const [types, setTypes] = useState([])

  useEffect(() => {
    fetchTypes()
      .then(types => setTypes(types))
  }, [])

  return (
    <div>
      <NavBar />
      <h1 className='app-title'>CoralPedia</h1>
      <p>Welcome to CoralPedia, A project by Geoffrey Sciascia</p>
      <ul>
        {types.map(type => <li key={type.id}><Link to={`/${type.alias}`}>{type.type}</Link></li>)}
      </ul>
    </div>
  )
}

export default Home
