(function() {
    'use strict';

    function listRentAdvertsDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/adverts/rent/list/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, RentAdvertsService) {
                var vm=this;
                RentAdvertsService.getRentAdverts()
                    .then(function(rentAdverts) {
                        $log.debug('RentAdverts in directives :',rentAdverts.data);
                        vm.rentAdverts = rentAdverts.data;

                    }, function(error){
                        $log.error('Error RentAdverts', error);
                    });
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.adverts.rent.list', ['app.services.adverts.rent.list'])
    .directive('listRentAdverts', listRentAdvertsDirective); 

})();