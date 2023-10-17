const express = require('express')

const db = require('../db/db')

const router = express.Router()

// helper function to remove commas from id string
function removeOddIndexCharacters (string) {
  // Stores the resultant string
  let newString = ''

  for (let i = 0; i < string.length; i++) {
    // If current index is odd
    if (i % 2 === 1) {
      // Skip the character
      continue
    }
    // Otherwise, append the character
    newString += string[i]
  }
  // Return the result
  return newString
}

router.get('/coral/:id', (req, res) => {
  const url = req.rawHeaders[21] // get url
  const urlCharsArr = url.split('') // convert url string to array
  const idArr = urlCharsArr.slice(28) // remove everything but the coral id numbers from the array
  const idMash = idArr.toString() // convert array to string
  const id = removeOddIndexCharacters(idMash) // get rid of commas
  // console.log(req)
  db.getOneCoral(id)
    .then(OneCoral => {
      return res.json(OneCoral)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
