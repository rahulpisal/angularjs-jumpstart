(function() {
	var OrdersController = function ($scope, $routeParams, customersFactory) {
        var customerId = $routeParams.customerId;
        $scope.customer = null;
        
        function init() {
            //search the customers for customer id
            $scope.customer = customersFactory.getCustomer(customerId);
        }
        
        init();
    };
    
    OrdersController.$inject = ['$scope', '$routeParams','customersFactory'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
} ());
