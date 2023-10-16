// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const db = require('knex')(config)

// function to get all types
function getAllTypes () {
  return db('types')
    .select()
}

// function to get all soft coral
function getSoftCoral () {
  return db('coral')
    .select('coral.name', 'coral.id')
    .where('coral.type', '=', '1')
}
// function to get all LPS Coral

function getLPSCoral () {
  return db('coral')
    .select('coral.name', 'coral.id')
    .where('coral.type', '=', '2')
}

// function to get all SPS Coral

function getSPSCoral () {
  return db('coral')
    .select('coral.name', 'coral.id')
    .where('coral.type', '=', '3')
}


// function to get all Anemone

function getAnemone () {
  return db('coral')
    .select('coral.name', 'coral.id')
    .where('coral.type', '=', '4')
}

// function to get one coral

function getOneCoral (id) {
  return db('coral')
    .select()
    .where('coral.id', '=', id)
}

module.exports = {
  getAllTypes,
  getSoftCoral,
  getSPSCoral,
  getLPSCoral,
  getAnemone,
  getOneCoral
}
