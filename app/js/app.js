var addsApp = angular.module('addsAppModule', ['ngRoute'])
.config(function($routeProvider){
    $routeProvider.when('/login', {
        templateUrl:'',
        controller: 'MainController'
    })
});