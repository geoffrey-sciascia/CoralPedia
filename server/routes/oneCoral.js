const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/Coral/:id', (req, res) => {
  const id = req.params.id
  db.getOneCoral(id)
    .then(OneCoral => {
      return res.json(OneCoral)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
