import Test from '../models/test'

exports.index = (req, res) => {
  res.send('test/index page')
}

exports.new_get = (req, res) => {
  var test = new Test({
    title: 'Test',
    description: 'Just a simple test'
  })
  test.save().then((result) => {
    res.send(result)
  }).catch((err) => {
    console.error(err)
  })
}

exports.all = (req, res) => {
  Test.find({}).then(result => {
    res.send(result)
  }).catch(err => {
    res.send(err)
  })
}