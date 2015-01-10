var adsApp = angular.module('addsAppModule', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/login', {
            templateUrl:'templates/login.html',
            controller: 'LoginController'
        });
        $routeProvider.when('/register', {
            templateUrl:'templates/register.html',
            controller: 'RegisterController'
        });
        $routeProvider.when('/', {
            templateUrl:'templates/show-ads.html',
            controller: 'HomeController'
        });
        $routeProvider.otherwise({redirectTo: '/'})
    });
