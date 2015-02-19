"use strict";

/*
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller : 'HomeController'
        })
        .when('/movies', {
            templateUrl: 'partials/movies.html',
            controller : 'MoviesController'
        })
        .when('/movies/edit/:id', {
            templateUrl: 'partials/edit.html',
            controller: 'EditMovieController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
*/



(function() {

    'use strict';

    angular.module('myApp', [
        'ngRoute'
    ]);

    angular.module('myApp').config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'partials/home.html',
                controller : 'HomeController'
            })
            .when('/movies', {
                templateUrl: 'partials/movies.html',
                controller : 'MoviesController'
            })
            .when('/movies/edit/:id', {
                templateUrl: 'partials/edit.html',
                controller: 'EditMovieController'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });

    angular.module('myApp').run(function () {
        //console.log('run !!!');
    });

})();