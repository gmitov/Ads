adsApp.factory('adsService', function($http, $log) {
    return {
        getAllAds: function(success, error) {
            $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/ads'})
                .success(function(data, status, headers, config) {
                    success(data);
                })
                .error(error)
        }
    }
});

adsApp.factory('categoriesService', function($http, $log) {
        return {
            getAllCategories: function(success, error) {
                $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/categories'})
                    .success(function(data, status, headers, config) {
                        success(data);
                    })
                    .error(error)
            }
        }
    }
);

adsApp.factory('townsService', function($http, $log) {
    return {
        getAllTowns: function (success, error) {
            $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/towns'})
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(error)
        }
    }
});
