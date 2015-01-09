'use strict';

adsApp.controller('RegisterController',
    function ($scope, $location, adsData, authService) {
        $scope.userData = {townId: null};

        adsData.getAllTowns(function(resp) {
            $scope.townData = resp;
        });

        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                    console.log(authService.getAuthHeaders());
                },
                function error(err) {
                    //notifyService.showError("User registration failed", err);
                }
            );
        };
    }
);
