exports.seed = (knex) => {
  return knex('coral').del()
    .then(() => {
      return knex('coral').insert([
        { id: 1, name: 'Bubble Tip Anemone', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 2, name: 'Rockflower Anemone', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 3, name: 'Carpet Anemone', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 4, name: 'Magnificient Anemone', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 5, name: 'Tube Anemone', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 6, name: 'Zoanthid', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 7, name: 'Star Polyps', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 8, name: 'Kenya Tree', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 9, name: '', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 10, name: '', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 11, name: '', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 12, name: '', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 13, name: '', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 14, name: '', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 15, name: '', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 16, name: '', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 17, name: '', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 18, name: '', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 19, name: '', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: },
        { id: 20, name: '', scientific_name: '', warfare: '', hardyness: '', diet_specifics: '', husbandry: '', aggressiveness: '', pictures: '', type: }
      ])
    })
}
