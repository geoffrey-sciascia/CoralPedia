exports.seed = (knex) => {
  return knex('types').del()
    .then(() => {
      return knex('types').insert([
        { id: 1, type: 'Soft Coral' },
        { id: 2, type: 'LPS' },
        { id: 3, type: 'SPS' },
        { id: 4, type: 'Anemone' }
      ])
    })
}
