export function rand(min, max) {
	min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randWords(number) {
	number = (number >= 0) ? number : 0
	let words = []
	for (let i = 0; i < number; i++) {
		words.push(listOfWords[rand(0, listOfWords.length)])
	}
	return words.join(' ')
}

let listOfWords = [
	'the',
	'All',
	'BBQ',
	'Lettuce',
	'Tomato',
	'King',
	'Alfredo',
	'Garnished',
	'Monster',
	'Summer',
	'Salmon',
	'Cheese',
	'&',
	'Beef',
	'and',
	'of',
	'Super',
	'Hamburger',
	'Salad',
	'Macaroni',
	'Olives',
	'Bacon'
]