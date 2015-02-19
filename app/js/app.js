"use strict";

var angularMovieApp = angular.module('angularMovieApp', ['ngRoute']);

angularMovieApp.value('API_ROOT_URL', '/server/api/');

// Modifiable au moment de la configuration
angularMovieApp.constant('API_ROOT_URL', '/server/api/');

angularMovieApp.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller : 'homeController'
        })
        .when('/movies', {
            templateUrl: 'partials/movies.html',
            controller : 'moviesController'
        })
        .when('/movies/edit/:id', {
            templateUrl: 'partials/edit.html',
            controller: 'editMovieController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
