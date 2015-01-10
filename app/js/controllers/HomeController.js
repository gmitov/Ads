adsApp.controller('HomeController', function($scope, adsService, townsService, categoriesService) {
    adsService.getAllAds(function(resp) {
        $scope.adsData = resp;
    });

    townsService.getAllTowns(function(resp) {
        $scope.townData = resp;
    });

    categoriesService.getAllCategories(function(resp) {
        $scope.categoryData = resp;
    });
});