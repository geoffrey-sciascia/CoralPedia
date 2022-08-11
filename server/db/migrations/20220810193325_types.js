exports.up = (knex) => {
  return knex.schema.createTable('types', (table) => {
    table.increments('id')
    table.string('type')
  })
}

exports.down = (knex) => {
  return knex.schema.droptable('types')
}
