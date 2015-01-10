'use strict';

adsApp.controller('RegisterController',
    function ($scope, $location, townsService, authService, notifyService) {
        $scope.userData = {townId: null};

        townsService.getAllTowns(function(resp) {
            $scope.townData = resp;
        });

        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                    $location.path("/");
                    notifyService.showInfo("Registration successful!");
                },
                function error(err) {
                    notifyService.showError("User registration failed", err);
                }
            );
        };
    }
);
