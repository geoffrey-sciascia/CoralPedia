const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getSPSCoral()
    .then(SPSCoral => {
      return res.json(SPSCoral)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
