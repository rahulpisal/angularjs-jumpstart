(function() {
    
    var AllOrdersController = function ($scope, $log, $window, customersFactory, appSettings) {
        $scope.orders = null;
        $scope.ordersTotal = 0.0;
        $scope.totalType;
        $scope.appSettings = appSettings;
        
        function init() {
             customersFactory.getOrders()
                .success(function(orders) {
                    $scope.orders = orders;
                    getOrdersTotal();
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        }        
        
        function getOrdersTotal() {
            var total = 0;
            for (var i=0,len=$scope.orders.length;i<len;i++) {
                total += $scope.orders[i].total;
            }
            $scope.ordersTotal = total;
            $scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger';
        }

        init();
    };
    
    AllOrdersController.$inject = ['$scope', '$log', '$window', 'customersFactory', 'appSettings'];

    angular.module('customersApp')
      .controller('AllOrdersController', AllOrdersController);
    
}());