(function() {
    'use strict';

    function addAgenciesDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/agencies/add/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log,$state, AddAgenciesService) {
                var vm=this;

                vm.agencie = {};
                vm.agencie.address = {};

                vm.agencie.email= "briansoufir4@hotmail.com";
                vm.agencie.name= "Agence test de brian";
                vm.agencie.phone= "0786075550";
                vm.agencie.address.country= "France";
                vm.agencie.address.city= "Paris";
                vm.agencie.address.zipcode= "75012";
                vm.agencie.address.street= "Rue baron leroy";
                vm.agencie.address.building= "32";


                vm.addAgencie = function(){
                    $log.info('click add agencie');
                    AddAgenciesService.addAgencie(vm.agencie)
                        .then(function(result) {
                            $state.reload('root.agencies');
                            $log.debug('add agencies in directives :',result.data);
                        }, function(error){
                            $log.error('Error add agencies', error);
                        });
                    
                };

            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.agencies.add', ['app.services.agencies.add'])
    .directive('addAgencie', addAgenciesDirective); 

})();