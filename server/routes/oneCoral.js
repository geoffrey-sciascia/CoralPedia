const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
//   console.log(req.params)
  db.getOneCoral(res.body)
    .then(OneCoral => {
      return res.json(OneCoral)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
