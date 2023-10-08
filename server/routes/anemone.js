const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAnemone(res.body)
    .then(Anemone => {
      // console.log(req.body)
      return res.json(Anemone)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
