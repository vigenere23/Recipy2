export default {

  DB_PATH: 'mongodb://admin:admin@recipy-shard-00-00-hzbfr.mongodb.net:27017,recipy-shard-00-01-hzbfr.mongodb.net:27017,recipy-shard-00-02-hzbfr.mongodb.net:27017/test?ssl=true&replicaSet=Recipy-shard-0&authSource=admin&retryWrites=true',

  sorts: ['favorites', 'bookmarks', 'createdAt'],

  orders: ['desc', 'asc']

}
