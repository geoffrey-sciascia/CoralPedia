const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAnemone()
    .then(Anemone => {
      return res.json(Anemone)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
