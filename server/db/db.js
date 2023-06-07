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
    .select(
      'coral.name',
      'coral.scientific_name',
      'coral.id',
      'coral.type'
    )
    .where('coral.type', '1')
}

// function to get one coral

function getOneCoral (id, db = connection) {
  return db('coral')
    .select()
    .where('coral.id', id)
}

module.exports = {
  getAllTypes,
  getSoftCoral,
  getOneCoral
}
