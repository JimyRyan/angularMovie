angularMovieApp.filter('displayRate', function () {

    return function(inputValue) {

        var s = "";

        for (var i = 0 ; i < inputValue ; i++) {
            s += '\u2605';
        }
        
        return s;
    };

});