exports.up = (knex) => {
  return knex.schema.createTable('types', (table) => {
    table.increments.primary('id')
    table.string('types')
  })
}

exports.down = (knex) => {
  return knex.schema.droptable('types')
}
