const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/SoftCoral', (req, res) => {
  db.getSoftCoral()
    .then(SoftCoral => {
      return res.json(SoftCoral)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/SPS', (req, res) => {
  db.getSPSCoral()
    .then(SPSCoral => {
      return res.json(SPSCoral)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/LPS', (req, res) => {
  db.getLPSCoral()
    .then(LPSCoral => {
      return res.json(LPSCoral)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/Anemone', (req, res) => {
  db.getAnemone()
    .then(Anemone => {
      return res.json(Anemone)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

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
