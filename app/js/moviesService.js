angularMovieApp.factory("Movies", function ($http, API_ROOT_URL, $q)
{
    "use strict"; // Dans chaque block de chaque fichier

    // privée
    var API_BASE_URL = API_ROOT_URL + "movies";

    // publique


    // Declaration de type singleton
    return {
        fetch : function() {
            var defer = $q.defer();

            $http.get(API_BASE_URL)
                .success(function (data) {
                    defer.resolve(data);
                })
                .error(function() {
                    defer.reject();
                });

            return defer.promise;
        },
        save : function(movie) {
            if (movie.id) {
                return $http.put(API_BASE_URL, movie);
            }
            else {
                return $http.post(API_BASE_URL, movie);
            }
        }
    };
});



// Déclaration de type "instance de class"
/*
angularMovieApp.factory("Movies", function ($http, API_ROOT_URL, $q)
{
    this.fetch = function() {
        //....
    }

    this.save = function() {
        //....
    }
}
    */