"use strict";

angularMovieApp.controller("homeController" ,function ($scope) {

    $scope.user = 'Thierry LAU';

});

angularMovieApp.controller("moviesController" ,function ($scope, $http, Movies) {

    Movies.fetch().then(function(data){
        $scope.movies = data;
    });

    $scope.deleteMovie = function(index){
        $http.delete('/server/api/movies/' + $scope.movies[index].id)
            .success(function(resp){
                $scope.movies.splice(index, 1);
            }
        );
    };

});

angularMovieApp.controller('editMovieController', function($scope, $http, $routeParams, $location, Movies){

    var movieId = $routeParams.id;

    $http.get('/server/api/movies/' + movieId).success(function(movie){
       $scope.movie = movie;
    });

    $scope.updateMovie = function(movie){
        Movies.save(movie)
           .success(function(){
               $location.path('/movies');
           })
           .error(function(resp){
               console.log(resp);
           });
    };
});

angularMovieApp.controller("movieFormController" ,function ($scope, $http, Movies) {

    $scope.class = "error";

    $scope.addMovie = function(movie){

        Movies.save(movie)
            .success(function(){
                $scope.movies.push(movie);
                $scope.movie = {};
            })
            .error(function(resp){
                console.log(resp);
            });

    };

});

