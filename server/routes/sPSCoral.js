const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getSPSCoral(res.body)
    .then(SPSCoral => {
      // console.log(req.body)
      return res.json(SPSCoral)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
