(function(){
    'use strict'

    function AddSaleAdvertService($http,$log,$state,API){
        var service = {};
        service.saleAdvert = [];

        service.addSaleAdvert = function (saleAdvert) {

           var data ={
                state : saleAdvert.state,
                name :  saleAdvert.name ,
                phone : saleAdvert.phone,
                email : saleAdvert.email,

                description : saleAdvert.description,
                type : saleAdvert.type,

                country : saleAdvert.address.country,
                city : saleAdvert.address.city,
                street : saleAdvert.address.street,
                building : saleAdvert.address.building,
                zipcode : saleAdvert.address.zipcode,

                area : saleAdvert.characteristics.area,
                rooms : saleAdvert.characteristics.rooms,
                bedrooms : saleAdvert.characteristics.bedrooms,
                price : saleAdvert.characteristics.price,

                first_name : saleAdvert.owner.first_name,
                last_name : saleAdvert.owner.last_name,
                phone : saleAdvert.owner.phone,

            };


            console.log(data);

            return $http.post(API.URL+'sales',data)
                .success(function(data) {
                    $log.debug('Factory add sale advert success', data);
                    service.saleAdvert = data;
                    $state.reload('root.sale-adverts');
                })
                .error(function(error) {
                    $log.error('Error', error);
                });

        };

        return service;
    }




angular.module('app.services.adverts.sale.add', [])
    .factory('AddSaleAdvertService', AddSaleAdvertService);
})()

