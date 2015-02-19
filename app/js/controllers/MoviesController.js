"use strict";

angular.module('myApp').controller("MoviesController" ,function ($scope, Movie) {

    $scope.value = true;

    Movie.fetch().success(function(resp){
        $scope.movies = resp;
    });

    $scope.deleteMovie = function(movie){
        var index = $scope.movies.indexOf(movie);

        Movie.remove(movie.id)
            .success(function(){
                $scope.movies.splice(index, 1);
            }
        );
    };

    $scope.toogleView = function() {
        $scope.value = !$scope.value;
    };

});