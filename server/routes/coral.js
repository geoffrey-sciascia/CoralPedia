const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/SPS', (req, res) => {
  db.getCoralByType(req.params.body)
    .then(SPS => {
      return res.json(SPS)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
