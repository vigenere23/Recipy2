import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

// Routes
import collectionsRoute from '@/routes/collections'
import usersRoute from '@/routes/users'
import recipesRoute from '@/routes/recipes'

// constants
import consts from '@/constants'

// Connect to database
import mongoose from 'mongoose'
mongoose.connect(consts.DB_PATH)
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => console.log('connected to the database'))

// Bind middlewares
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// Bind routes
app.use('/collections', collectionsRoute)
app.use('/users', usersRoute)
app.use('/recipes', recipesRoute)

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.send('ERROR');
});

app.listen(process.env.PORT || 8081)

export default app