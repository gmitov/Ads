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
        templateUrl:'templates/all-ads-guest.html',
        controller: 'HomeController'
    });
    $routeProvider.otherwise({redirectTo: '/'})
});

//http://viralpatel.net/blogs/angularjs-service-factory-tutorial/
//http://stackoverflow.com/questions/17376890/angular-js-full-example-of-get-post-delete-put-client-for-a-rest-crud-backend