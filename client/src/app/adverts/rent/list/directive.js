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
            controller: function($log,$state, RentAdvertsService,DeleteRentAdvertService) {
                var vm=this;
                RentAdvertsService.getRentAdverts()
                    .then(function(rentAdverts) {
                        $log.debug('RentAdverts in directives :',rentAdverts.data);
                        vm.rentAdverts = rentAdverts.data;


                    }, function(error){
                        $log.error('Error RentAdverts', error);
                    });

                
                vm.deleteRentAdvert = function(id){
                    $log.debug('delete : ');
                    $log.debug(id);

                    DeleteRentAdvertService.deleteRentAdvert(id)
                    .then(function(RentAdvert) {
                        $log.debug('directives delete RentAdvert :',RentAdvert.data);
                        //vm.agencies = agencies.data;
                        $state.reload('root.rent-adverts');
                        //alert('L\'annonce ('+RentAdvert.data.name+') a été supprimé');

                    }, function(error){
                        $log.error('Error RentAdvert', error);
                    });
                };


            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.adverts.rent.list', ['app.services.adverts.rent.list'])
    .directive('listRentAdverts', listRentAdvertsDirective); 

})();