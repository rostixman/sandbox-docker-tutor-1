const mongoose = require('mongoose')
const { db } = require('../configurations')

module.exports.connectDb = () => {
  mongoose.connect(db, {useNewUrlParser: true})

  return mongoose.connection
}
