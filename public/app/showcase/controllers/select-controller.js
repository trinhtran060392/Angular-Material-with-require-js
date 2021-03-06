define(['showcase/module'], function (module) {
	'use strict';

	module.registerController('SelectCtrl', ['$scope', function ($scope) {
		this.userState = '';
        this.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function (state) { return { abbrev: state }; });
	}])
	.registerController('SelectOptGroupCtrl', ['$scope', function ($scope) {
		$scope.sizes = [
      "small (12-inch)",
      "medium (14-inch)",
      "large (16-inch)",
      "insane (42-inch)"
    ];
    $scope.toppings = [
      { category: 'meat', name: 'Pepperoni' },
      { category: 'meat', name: 'Sausage' },
      { category: 'meat', name: 'Ground Beef' },
      { category: 'meat', name: 'Bacon' },
      { category: 'veg', name: 'Mushrooms' },
      { category: 'veg', name: 'Onion' },
      { category: 'veg', name: 'Green Pepper' },
      { category: 'veg', name: 'Green Olives' }
    ];
	}])
	.registerController('SelectAsyncController', ['$scope', '$timeout', function ($scope, $timeout) {
		$scope.user = null;
	  $scope.users = null;
	  $scope.loadUsers = function() {
	   // Use timeout to simulate a 650ms request.
	    return $timeout(function() {
	      $scope.users =  $scope.users  || [
	        { id: 1, name: 'Scooby Doo' },
	        { id: 2, name: 'Shaggy Rodgers' },
	        { id: 3, name: 'Fred Jones' },
	        { id: 4, name: 'Daphne Blake' },
	        { id: 5, name: 'Velma Dinkley' }
	      ];
	    }, 650);
	  };
	}])
	.registerController('ValidateSelectCtrl', ['$scope', function ($scope) {
		
		$scope.clearValue = function() {
    $scope.myModel = undefined;
	  };

	  $scope.save = function() {
	    alert('Form was valid!');
	  };
	}]);
})