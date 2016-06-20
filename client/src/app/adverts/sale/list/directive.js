(function() {
    'use strict';

    function listSaleAdvertsDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/adverts/sale/list/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log,$state, SaleAdvertsService,DeleteSaleAdvertService) {
                var vm=this;
                SaleAdvertsService.getSaleAdverts()
                    .then(function(saleAdverts) {
                        $log.debug('list SaleAdverts in directives :',saleAdverts.data);
                        vm.saleAdverts = saleAdverts.data;

                    }, function(error){
                        $log.error('Error SaleAdverts', error);
                    });
                
                vm.deleteSaleAdvert = function(id){
                    $log.debug('delete : ');
                    $log.debug(id);

                    DeleteSaleAdvertService.deleteSaleAdvert(id)
                    .then(function(SaleAdvert) {
                        $log.debug('directives delete SaleAdvert :',SaleAdvert.data);
                        //vm.agencies = agencies.data;
                        $state.reload('root.sale-adverts');
                        //alert('L\'annonce ('+SaleAdvert.data.name+') a été supprimé');

                    }, function(error){
                        $log.error('Error SaleAdvert', error);
                    });
                };
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.adverts.sale.list', ['app.services.adverts.sale.list'])
    .directive('listSaleAdverts', listSaleAdvertsDirective); 

})();