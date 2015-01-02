adsApp.controller('AdsController', function($scope, adsData) {
    adsData.getAllAds(function(resp) {
        $scope.data = resp;
    });
});