var adsApp = angular.module('addsAppModule', ['ngRoute'])
.config(function($routeProvider){
    $routeProvider.when('/login', {
        templateUrl:'templates/login.html'
    });
    $routeProvider.when('/register', {
        templateUrl:'templates/register.html'
    });
    $routeProvider.when('/ads', {
        templateUrl:'templates/all-ads-guest.html'
    });
    $routeProvider.otherwise({redirectTo: '/ads'})
});