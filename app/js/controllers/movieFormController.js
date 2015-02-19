"use strict";

angular.module('myApp').controller("MovieFormController" ,function ($scope, Movie) {

    $scope.addMovie = function(movie) {

        Movie
            .create(movie)
            .success(function() {
                $scope.movies.push(movie);
                $scope.movie = {};
            })
            .error(function(resp){
                console.log(resp);
            });

    };
});