// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const connection = require('knex')(config)

// function to get all types
function getAllTypes (db = connection) {
  return db('types')
    .select()
}

// function to get all coral in that type
function getSoftCoral (db = connection) {
  return db('coral')
    .select()
    .where('coral.type', '=', '1')
}

// function to get one coral

function getOneCoral (id, db = connection) {
  return db('coral')
    .select()
    .where('coral.id', '=', 1)
}

module.exports = {
  getAllTypes,
  getSoftCoral,
  getOneCoral
}
