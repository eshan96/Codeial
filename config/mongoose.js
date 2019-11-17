const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/codeial_development', {useNewUrlParser: true})



const db = mongoose.connection;

db.on('err', console.error.bind(console, "Error connection to db"))


db.once('open', function(){
    console.log('Connected to database')
})

module.exports = db