const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getSoftCoral(res.body)
    .then(SoftCoral => {
      // console.log(req.body)
      return res.json(SoftCoral)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
