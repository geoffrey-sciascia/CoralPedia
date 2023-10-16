const express = require('express')

const db = require('../db/db')

const router = express.Router()

// helper function to remove commas from id string
function removeOddIndexCharacters (s) {
  // Stores the resultant string
  var newString = ''

  for (var i = 0; i < s.length; i++) {
    // If current index is odd
    if (i % 2 === 1) {
      // Skip the character
      continue
    }

    // Otherwise, append the
    // character
    newString += s[i]
  }

  // Return the result
  return newString
}

router.get('/', (req, res) => {
  const url = req.rawHeaders[21] // get url
  const urlCharsArr = url.split('') // convert url string to array
  const idArr = urlCharsArr.slice(28) // remove everything but the coral id numbers from the array
  const idMash = idArr.toString() // convert array to string
  const id = removeOddIndexCharacters(idMash) // get rid of commas

  db.getOneCoral(id)
    .then(OneCoral => {
      return res.json(OneCoral)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
