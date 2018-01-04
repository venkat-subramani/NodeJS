(function() {
  'use strict';

  angular
    .module('employeeApp', [])
    .controller('employeeController', employeeController);

    employeeController.$inject = ['$scope', '$http', '$filter'];

    function employeeController ($scope, $http, $filter) {

      $scope.update = false;

      $scope.getEmployees = function(){
        $http({
          url:"/api/employees",
          method:"GET"
        }).then(function(res){
            $scope.employees = res.data;
            $scope.employeeData = {};
        	});
      };
      $scope.getEmployees();

      $scope.createEmployee = function(employee){
        employee.age = calculateAge(employee.dob);
        $http({
          url:"/api/employees",
          method:"POST",
          data: employee
        }).then(function(res){
          $scope.getEmployees();
        });
      };

      $scope.editEmployee = function(employee){
        $scope.update = true;
        $scope.employeeData = $filter('filter')($scope.employees, {'_id': employee._id}, true)[0];
        $scope.employeeData.dob = new Date(employee.dob);
      };

      $scope.updateEmployee = function(employee){
        $http({
          url:"/api/employees/"+employee._id,
          method:"PUT",
          data: employee
        }).then(function(res){
            $scope.update = false;
            $scope.getEmployees();
        });
      };

      $scope.deleteEmployee = function(employee){
        $http({
          url:"/api/employees/"+employee._id,
          method:"DELETE",
          data: employee
        }).then(function(res){
            $scope.getEmployees();
        });
      };

      $scope.formSubmit = function(employee){
        if(!$scope.update){
          $scope.createEmployee(employee);
        }
        else{
          $scope.updateEmployee(employee);
        }
      }

      var calculateAge = function(dob){
        var ageDifMs = Date.now() - dob.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        var age = Math.abs(ageDate.getUTCFullYear() - 1970);
        return age;
      }

    }
})();
