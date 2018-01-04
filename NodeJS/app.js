var express = require('express');
var bodyParser = require('body-parser');

var db = require('./server/employeeModel.js')
var employee = require('./server/employeeActions.js');

var app = express();
app.use(bodyParser.json());
app.use('/client',express.static(__dirname+'/client'));

app.get('/',function(req, res){
  res.sendFile(__dirname+'/client/employee.html');
});

//RESTFUL APIS
app.get('/api/employees', employee.getEmployees);
app.post('/api/employees', employee.createEmployee);
app.put('/api/employees/:_id', employee.updateEmployee);
app.delete('/api/employees/:_id', employee.deleteEmployee);


var port = process.env.PORT || 3000;
var server = app.listen(port,function(req,res){
  console.log('Application running at http://localhost:'+port);
});
