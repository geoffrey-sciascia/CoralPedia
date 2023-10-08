const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getLPSCoral(res.body)
    .then(LPSCoral => {
      // console.log(req.body)
      return res.json(LPSCoral)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
