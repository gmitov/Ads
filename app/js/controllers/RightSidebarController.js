'use strict';

adsApp.controller('RightSidebarController',
    function ($scope, $rootScope, categoriesService, townsService) {
        $scope.categories = categoriesService.getAllCategories();
        $scope.towns = townsService.getAllTowns();

        $scope.categoryClicked = function(clickedCategoryId) {
            $scope.selectedCategoryId = clickedCategoryId;
            $rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);
            console.log(clickedCategoryId);
        };

        $scope.townClicked = function(clickedTownId) {
            $scope.selectedTownId = clickedTownId;
            $rootScope.$broadcast("townSelectionChanged", clickedTownId);
            console.log(clickedTownId);
        };
    }
);
