exports.up = (knex) => {
  return knex.schema.createTable('types', (table) => {
    table.increments('id')
    table.string('type')
    table.string('alias')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('types')
}
