exports.up = (knex) => {
  return knex.schema.createTable('coral', (table) => {
    table.increments('id')
    table.string('name')
    table.string('scientific_name')
    table.string('bio')
    table.string('warfare')
    table.string('hardyness')
    table.string('diet_specifics')
    table.string('husbandry')
    table.string('aggressiveness')
    table.string('pictures')
    table.integer('type')
  })
}

exports.down = (knex) => {
  return knex.schema.droptable('coral')
}
