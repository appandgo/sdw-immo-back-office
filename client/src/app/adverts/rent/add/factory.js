(function(){
    'use strict'

    function AddRentAdvertService($http,$log,API){
        var service = {};
        service.rentAdvert = [];

        service.addRentAdvert = function (rentAdvert) {
            $log.debug('Factory : add rent advert');

            var data ={
                state : rentAdvert.state,
                name :  rentAdvert.name ,
                phone : rentAdvert.phone,
                email : rentAdvert.email,

                description : rentAdvert.description,
                type : rentAdvert.type,

                country : rentAdvert.address.country,
                city : rentAdvert.address.city,
                street : rentAdvert.address.street,
                building : rentAdvert.address.building,
                zipcode : rentAdvert.address.zipcode,

                including_charges : rentAdvert.characteristics.including_charges,
                charges : rentAdvert.characteristics.charges,
                area : rentAdvert.characteristics.area,
                rooms : rentAdvert.characteristics.rooms,
                bedrooms : rentAdvert.characteristics.bedrooms,
                rent : rentAdvert.characteristics.rent,

                first_name : rentAdvert.owner.first_name,
                last_name : rentAdvert.owner.last_name,
                phone : rentAdvert.owner.phone,

            };


            console.log(data);

            return $http.post(API.URL+'rents',data)
                .success(function(data) {
                    $log.debug('add rent advert success', data);
                    service.rentAdvert = data;
                })
                .error(function(error) {
                    $log.error('Error', error);
                });

        };

        return service;
    }

angular.module('app.services.adverts.rent.add', [])
    .factory('AddRentAdvertService', AddRentAdvertService);
})()

