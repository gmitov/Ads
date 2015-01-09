adsApp.controller('HomeController', function($scope, adsService, townsService, categoriesService) {
    $scope.adsParams = {
        'startPage' : 1
        //'pageSize' : pageSize
    };

    adsService.getAllAds(function(resp) {
        $scope.adsData = resp;
    });

    townsService.getAllTowns(function(resp) {
        $scope.townData = resp;
    });

    categoriesService.getAllCategories(function(resp) {
        $scope.categoryData = resp;
    });

    $scope.reloadAds = function() {
        adsService.getAllAds(
            //$scope.adsParams,
            function success(data) {
                $scope.ads = data;
            },
            function error(err) {
                //notifyService.showError("Cannot load ads", err);
            }
        );
    };

    $scope.reloadAds();

    // This event is sent by RightSideBarController when the current category is changed
    $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
        $scope.adsParams.categoryId = selectedCategoryId;
        $scope.adsParams.startPage = 1;
        $scope.reloadAds();
    });

    // This event is sent by RightSideBarController when the current town is changed
    $scope.$on("townSelectionChanged", function(event, selectedTownId) {
        $scope.adsParams.townId = selectedTownId;
        $scope.adsParams.startPage = 1;
        $scope.reloadAds();
    });

});