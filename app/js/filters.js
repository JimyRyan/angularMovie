

angularMovieApp.filter('checkPoster', function () {
    return function(inputValue) {

        var o = inputValue;

        if (!inputValue)
        {
            o = 'img/no-poster.jpg';
        }

        return o;
    };
});
