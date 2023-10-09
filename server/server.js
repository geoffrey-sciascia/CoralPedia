const path = require('path')
const express = require('express')

// const helloRoutes = require('./routes/hello')
const typesRoutes = require('./routes/types')
const softCoralRoutes = require('./routes/softCoral')
const sPSCoralRoutes = require('./routes/sPSCoral')
const lPSCoralRoutes = require('./routes/lPSCoral')
const anemoneRoutes = require('./routes/anemone')
const oneCoralRoutes = require('./routes/oneCoral')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

// server.use('/api/v1/hello', helloRoutes)
server.use('/api/v1/softCoral', softCoralRoutes)
server.use('/api/v1/types', typesRoutes)
server.use('/api/v1/sPSCoral', sPSCoralRoutes)
server.use('/api/v1/lPSCoral', lPSCoralRoutes)
server.use('/api/v1/anemone', anemoneRoutes)
server.use('/api/v1/oneCoral', oneCoralRoutes)

// for browser router (react-router-dom)
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
