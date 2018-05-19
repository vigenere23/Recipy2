var Recipe = require('../src/models/recipe')

var recipe = new Recipe({
  title: 'The King Burger',
  description: 'Simply the best burger in the world',
  ingredients: [
    'Salsa',
    'Nachos'
  ],
  steps: [
    'Mash\'em all together!'
  ],
  cookingTime: 15,
  waitingTime: 5,
  numberOfFavorites: 12,
  numberOfBookmarks: 15
})

module.exports = recipe