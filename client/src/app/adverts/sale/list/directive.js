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
            controller: function($log, SaleAdvertsService) {
                var vm=this;
                SaleAdvertsService.getSaleAdverts()
                    .then(function(saleAdverts) {
                        $log.debug('SaleAdverts in directives :',saleAdverts.data);
                        vm.saleAdverts = saleAdverts.data;

                    }, function(error){
                        $log.error('Error SaleAdverts', error);
                    });
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.adverts.sale.list', ['app.services.adverts.sale.list'])
    .directive('listSaleAdverts', listSaleAdvertsDirective); 

})();