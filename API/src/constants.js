export default Object.freeze({

  DB_PATH: 'mongodb://admin:admin@recipy-shard-00-00-hzbfr.mongodb.net:27017,recipy-shard-00-01-hzbfr.mongodb.net:27017,recipy-shard-00-02-hzbfr.mongodb.net:27017/test?ssl=true&replicaSet=Recipy-shard-0&authSource=admin&retryWrites=true',

  sorts: Object.freeze([
    'numberOfFavorites',
    'numberOfBookmarks',
    'createdAt'
  ]),

	orders: Object.freeze([
    'desc', 
    'asc'
  ]),
	
	mealTypes: Object.freeze({
		breakfast: 1,
		lunch: 2,
		dinner: 3,
		dessert: 4
	})

})
