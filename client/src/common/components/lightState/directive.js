(function() {
    'use strict';

    function lightStateDirective() {
        return {
            restrict: 'EA',
            //replace: true,
            templateUrl: './src/common/components/lightState/template.html',
            scope: {
                state:'=',
            },
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function() {

            },
            link: function(scope, elm, attrs){
                //console.log(scope.state);
                //vm.state = scope.state;

            }
        };
    }

angular.module('app.directives.components.lightState', [])
    .directive('lightState', lightStateDirective); 

})();