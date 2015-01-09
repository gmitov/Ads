'use strict';

adsApp.controller('LoginController',
    function ($scope, $rootScope, $location, authService) {
        $scope.login = function(userData) {
            authService.login(userData,
                function success() {
                    //notifyService.showInfo("Login successful");
                    $location.path("/");
                },
                function error(err) {
                    // TODO: display the error message returned by the server
                }
            );
        };
    }
);
