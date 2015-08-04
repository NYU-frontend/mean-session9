var app = angular.module('graphApp', ['ngRoute','firebase']);


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/graph',{
        templateUrl: 'partials/graph.html'
    })
    .when('/login',{
        templateUrl: 'partials/login.html'
    })
    .when('/register',{
        templateUrl: 'partials/register.html'
    })
    .otherwise({
        redirectTo: '/login'
    });
}]);
















