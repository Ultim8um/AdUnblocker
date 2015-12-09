var adUnblockerApp = angular.module('adUnblockerApp', []);

adUnblockerApp.controller('statsCtrl', function ($scope, $http) {    
    $scope.updateStats = function(ids) {
        $http.get('data/stats.json').then(function(response) {
            $scope.stats = response.data;
            for (i = 0; i < ids.length; i++) {
                for (j = 0; j < $scope.stats.length; j++) {
                    if (ids[i] == $scope.stats[j].id) {
                        $scope.stats[j].amount = Number($scope.stats[j].amount) + .10;
                    }
                }
            }
            $http.post('/', angular.toJson($scope.stats)).then(function(data) {
                // Ignore
            });
        });
    };
});