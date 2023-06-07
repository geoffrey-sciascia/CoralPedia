exports.seed = (knex) => {
  return knex('types').del()
    .then(() => {
      return knex('types').insert([
        { id: 1, type: 'Soft Coral', alias: 'SoftCoral' },
        { id: 2, type: 'Large Polyp Stony Coral', alias: 'LPS' },
        { id: 3, type: 'Small Polyp Stony Coral', alias: 'SPS' },
        { id: 4, type: 'Anemone', alias: 'Anemone' }
      ])
    })
}
