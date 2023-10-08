// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const connection = require('knex')(config)

// function to get all types
function getAllTypes (db = connection) {
  return db('types')
    .select()
}

// function to get all soft coral
function getSoftCoral (db = connection) {
  return db('coral')
    .select()
    .where('coral.type', '=', '1')
}

// function to get all SPS Coral

function getSPSCoral (db = connection) {
  return db('coral')
    .select()
    .where('coral.type', '=', '3')
}
// function to get one coral

function getOneCoral (id, db = connection) {
  return db('coral')
    .select()
    .where('coral.id', '=', id)
}

module.exports = {
  getAllTypes,
  getSoftCoral,
  getSPSCoral,
  getOneCoral
}
