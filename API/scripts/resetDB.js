import mongoose from 'mongoose'
import consts from '@/constants'


mongoose.connect(consts.DB_PATH).then(async () => {

  console.log('Connected to database')
  
  var collections = await mongoose.connection.db.listCollections().toArray()

  if (collections.length != 0) {

    console.log(`Beginning deletion of ALL model entries (${collections.length})\n...`)

    for (const collection of collections) {
			console.log(`DELETING '${collection.name}' collection...`)
			try {
				await mongoose.connection.dropCollection(collection.name)
			}
			catch (err) {
				console.log(`Could not drop collection '${collection.name}'`)
        console.error(err)
			}
    }
    console.log('DONE')
    
  }
  else {
    console.log('Database already cleaned!')
  }

}, err => {

  console.log('Could not connect to database (probably wrong URL)')
  console.error(err)

})