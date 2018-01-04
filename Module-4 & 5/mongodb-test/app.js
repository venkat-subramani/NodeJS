var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test");

var userName = 'venkat';
var password = 'password';
var email = 'venkat@xyz.com';

var userSchema = new mongoose.Schema({
  userName : {type: String, unique: true},
  password : {type: String},
  email : {type: String, unique: true}
})

var userModel = mongoose.model('User', userSchema);

var user = new userModel;
user.name = userName;
user.pass = password;
user.mail = email;

/* Insert */
user.save(function(err, db){
  if(err){
    console.log('Error ', err);
  }
  else{
    console.log('Inserted');
  }
})

/* Retrieve */
userModel.find(function(err, users){
  if(err){
    console.log('Error ', err);
  }
  console.log('Get all users');
  console.log(users);
})


mongoose.connection.on('connected', function(){
  console.log('connected to DB');
});

mongoose.connection.on('error', function(){
  console.log('error on connecting to DB');
});

mongoose.connection.on('disconnected', function(){
  console.log('disconnected to DB');
});
