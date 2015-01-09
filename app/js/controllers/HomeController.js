adsApp.controller('HomeController', function($scope, adsData) {
    adsData.getAllAds(function(resp) {
        $scope.adsData = resp;
    });

    adsData.getAllTowns(function(resp) {
        $scope.townData = resp;
    });

    adsData.getAllCategories(function(resp) {
        $scope.categoryData = resp;
    });
});