(function() {
    'use strict';

    function addRentAdvertDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/adverts/rent/add/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log,$state, AddRentAdvertService) {
                var vm=this;


                vm.rentAdvert = {};

                vm.rentAdvert.state;
                vm.rentAdvert.name ;
                vm.rentAdvert.phone;
                vm.rentAdvert.email;

                vm.rentAdvert.description=" Bien a louer test : brian ";
                vm.rentAdvert.type=0;

                vm.rentAdvert.address = {};
                vm.rentAdvert.address.country= "France";
                vm.rentAdvert.address.city= "Paris";
                vm.rentAdvert.address.zipcode= "75012";
                vm.rentAdvert.address.street= "Rue baron leroy";
                vm.rentAdvert.address.building= "32";

                vm.rentAdvert.characteristics = {};
                vm.rentAdvert.characteristics.including_charges=true;
                vm.rentAdvert.characteristics.charges==30;
                vm.rentAdvert.characteristics.area=120;
                vm.rentAdvert.characteristics.rooms=6;
                vm.rentAdvert.characteristics.bedrooms=3;
                vm.rentAdvert.characteristics.rent=1000;

                vm.rentAdvert.owner = {};
                vm.rentAdvert.owner.first_name="brian";
                vm.rentAdvert.owner.last_name="soufir";
                vm.rentAdvert.owner.phone= "0786075550";



                vm.addRentAdvert = function(){
                    $log.info('click add add rent advert');
                    AddRentAdvertService.addRentAdvert(vm.rentAdvert)
                        .then(function(rentAdvert) {
                            $log.debug('add RentAdvert in directives :',rentAdvert.data);
                            vm.rentAdvert = rentAdvert.data;
                            $state.reload('root.rent-adverts');


                        }, function(error){
                            $log.error('Error RentAdvert', error);
                        });
                };

                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.adverts.rent.add', ['app.services.adverts.rent.add'])
    .directive('addRentAdvert', addRentAdvertDirective); 

})();