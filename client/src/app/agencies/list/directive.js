(function() {
    'use strict';

    function listAgenciesDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/agencies/list/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, ListAgenciesService) {
                var vm=this;
                ListAgenciesService.getAgencies()
                    .then(function(agencies) {
                        //console.log('agencies in directives :',agencies.data);
                        vm.agencies = agencies.data;

                    }, function(error){
                        $log.error('Error agencies', error);
                    });
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.agencies.list', ['app.services.agencies.list'])
    .directive('listAgencies', listAgenciesDirective); 

})();