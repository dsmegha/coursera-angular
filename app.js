(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', function ($scope) {
  $scope.spread = "";
  $scope.color = "transperent";
  $scope.foodQuantityMessage = function () {
  	$scope.message = checkFoodQuantity($scope.spread);
  };

  function checkFoodQuantity(string) {
  	if (!string || 0 == string.length) {
  		$scope.color = "red";
  		return "Please enter data first";
  	}
  	$scope.color = "green";
  	if (string.split(',').length < 4) {
  		return "Enjoy!";
  	}
  	return "Too much!";
  }
});

})();