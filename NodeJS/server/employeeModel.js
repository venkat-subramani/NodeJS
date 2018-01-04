var mongoose = require( 'mongoose' );
var dbURI = 'mongodb://localhost/nodejs';
//var dbURI = 'mongodb://nodejs:nodejs@ds115701.mlab.com:15701/nodejs';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Database connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Database connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Database disconnected');
});

var employeeSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  email: String,
  dob: Date,
  department: String,
  gender: String,
  age: Number
});

mongoose.model( 'Employee', employeeSchema);
