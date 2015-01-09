adsApp.controller('AppController',
    function ($scope, $location, authService) {
        // Put the authService in the $scope to make it accessible from all screens
        $scope.authService = authService;

        var currentUser = authService.getCurrentUser();
        if(currentUser) {
            $scope.username = currentUser.username;
        }

        $scope.logout = function() {
            authService.logout();
            //notifyService.showInfo("Logout successful");
            $location.path('/');
        };
    }
);