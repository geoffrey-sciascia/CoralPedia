// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const connection = require('knex')(config)

function getAllTypes (db = connection) {
  return db('types')
    .select()
}

module.exports = {
  getAllTypes
}
