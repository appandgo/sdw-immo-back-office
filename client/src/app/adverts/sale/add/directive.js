(function() {
    'use strict';

    function addSaleAdvertsDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/adverts/sale/add/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, AddSaleAdvertService) {
                var vm=this;



                vm.saleAdvert = {};

                vm.saleAdvert.state;
                vm.saleAdvert.name ;
                vm.saleAdvert.phone;
                vm.saleAdvert.email;

                vm.saleAdvert.description=" Bien a acheter test : brian ";
                vm.saleAdvert.type=0;

                vm.saleAdvert.address = {};
                vm.saleAdvert.address.country= "France";
                vm.saleAdvert.address.city= "Paris";
                vm.saleAdvert.address.zipcode= "75012";
                vm.saleAdvert.address.street= "Rue baron leroy";
                vm.saleAdvert.address.building= "32";

                vm.saleAdvert.characteristics = {};
                vm.saleAdvert.characteristics.area=120;
                vm.saleAdvert.characteristics.rooms=6;
                vm.saleAdvert.characteristics.bedrooms=3;
                vm.saleAdvert.characteristics.price=1000000;

                vm.saleAdvert.owner = {};
                vm.saleAdvert.owner.first_name="brian";
                vm.saleAdvert.owner.last_name="soufir";
                vm.saleAdvert.owner.phone= "0786075550";



                vm.addSaleAdvert = function(){
                    $log.info('click add add rent advert');
                AddSaleAdvertService.addSaleAdvert(vm.saleAdvert)
                    .then(function(saleAdverts) {
                        $log.debug('SaleAdverts in directives :',saleAdverts.data);
                        vm.saleAdverts = saleAdverts.data;

                    }, function(error){
                        $log.error('Error SaleAdverts', error);
                    });
                };

                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.adverts.sale.add', ['app.services.adverts.sale.add'])
    .directive('addSaleAdvert', addSaleAdvertsDirective); 

})();