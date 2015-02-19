"use strict";

angular.module('myApp').directive("editable", ['Movie', function (Movie) {

    return {
        restrict : 'E',
        replace : true,
        templateUrl : "js/directives/editable.html",
        scope : {
            label : '@',
            value : '='
        },
        link : function(scope, element, attrs) {

            // editMode is disable by default
            scope.editMode = false;

            // if label attribut is not provide then remove
            // the label element
            if(!attrs.label){
                    element.find('label').remove();
            }

            // find the input elemnt of this directive ...
            var input = element.find('input');

            // and listen for blur event
            input.bind('blur', function() {

                // since blur event occured ouside the angular execution context
                // we need to call scope.$apply to tell angularjs about the changes
                scope.$apply(function(){

                    // Store in database
                    Movie.update(scope.$parent.movie)
                        .success(function(movie) {

                            // the change is to disable the editMode
                            scope.editMode = false;
                        });
                });
            });
        }
    }
}]);