'use strict';

adsApp.controller('LoginController',
    function ($scope, $rootScope, $location, authService, notifyService) {
        $scope.login = function(userData) {
            authService.login(userData,
                function success() {
                    notifyService.showInfo("Login successful");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError('Username or password is incorrect');
                }
            );
        };
    }
);
