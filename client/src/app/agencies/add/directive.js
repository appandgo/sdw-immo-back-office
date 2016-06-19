(function() {
    'use strict';

    function addAgenciesDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/adverts/rent/add/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, AddAgenciesService) {
                var vm=this;

                var addAgencie = function(){
                    $log.debug('click add agencie');
                };

                AddAgenciesService.addAgencie()
                    .then(function(result) {
                        $log.debug('add agencies in directives :',result.data);
                        vm.agencie = result.data;

                    }, function(error){
                        $log.error('Error add agencies', error);
                    });
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.agencies.add', ['app.services.agencies.add'])
    .directive('addAgencie', addAgenciesDirective); 

})();