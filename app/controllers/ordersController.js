(function() {
	var OrdersController = function ($scope, $log, $routeParams, customersFactory, appSettings) {
        var customerId = $routeParams.customerId;
        $scope.customer = null;
        $scope.appSettings = appSettings;
        
        function init() {
            //search the customers for customer id
            customersFactory.getCustomer(customerId)
                .success(function(customer){
                    $scope.customer = customer;
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });;
        }
        
        init();
    };
    
    OrdersController.$inject = ['$scope', '$log', '$routeParams','customersFactory', 'appSettings'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
} ());
