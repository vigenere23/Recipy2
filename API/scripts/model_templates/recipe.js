import { rand, randWords } from '../utils'

class recipeTemplate {

	constructor() {
		return {
			title: randWords(rand(2, 5)),
			description: 'Simply the best burger in the world',
			ingredients: [
				'Salsa',
				'Nachos'
			],
			steps: [
				'Mash\'em all together!'
			],
			cookingTime: rand(0, 4 * 60),
			waitingTime: rand(0, 24 * 60),
			numberOfFavorites: rand(0, 427),
			numberOfBookmarks: rand(0, 124),
			mealTypes: [rand(1, 4), rand(1, 4)]
		}
	}
}

export default recipeTemplate