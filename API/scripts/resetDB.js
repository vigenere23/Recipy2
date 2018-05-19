var mongoose = require('mongoose')

var consts = require('../src/constants')

mongoose.connect(consts.DB_PATH).then(result => {
  console.log('Connected to database')
  mongoose.connection.db.listCollections().toArray().then(collections => {
    if (collections.length != 0) {
      console.log('Beginning deletion of ALL model entries...')
      collections.forEach(collection => {
        mongoose.connection.dropCollection(collection.name)
        console.log('DELETED \'' + collection.name + '\' collection')
      })
      console.log('DONE')
    }
    else {
      console.log('Database already cleaned')
    }
  })
}).catch(err => {
  console.log('OOPS, SOMETHING WENT WRONG!')
  throw error
})