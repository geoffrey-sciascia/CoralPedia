const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/SoftCoral', (req, res) => {
  db.getSoftCoral(req.params.body)
    .then(SoftCoral => {
      return res.json(SoftCoral)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
