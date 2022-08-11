exports.seed = (knex) => {
  return knex('types').del()
    .then(() => {
      return knex('types').insert([
        { id: 1, type: 'Soft Coral' },
        { id: 2, type: 'Large Polyp Stony Coral' },
        { id: 3, type: 'Small Polyp Stony Coral' },
        { id: 4, type: 'Anemone' }
      ])
    })
}
