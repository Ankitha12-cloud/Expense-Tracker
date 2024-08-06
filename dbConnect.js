const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(
  'mongodb+srv://ankithasaraswathi:ankithaS@12@cluster0.v4fxemp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  { useNewUrlParser: true, useUnifiedTopology: true }
);


const connection = mongoose.connection

connection.on('connected', () =>
  console.log('Mongo DB Connection Successful')
);