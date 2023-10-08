const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllTypes(res.body)
    .then(types => {
      return res.json(types)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
