var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');

module.exports.getEmployees = function(req, res){
  Employee.find({}, function(err, employees){
    res.json(employees);
  });
};

module.exports.createEmployee = function(req,res){
	var employee = new Employee(req.body);
	employee.save(function(err, result){
	   res.json(result);
	})
};

module.exports.updateEmployee = function(req,res){
	Employee.update({_id: req.body._id}, req.body, function(err,response){
	  res.json(response);
	});
};

module.exports.deleteEmployee = function(req,res){
	Employee.remove({_id: req.params._id}, function(err, removed){
	  res.json(removed);
	});
};
