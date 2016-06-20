(function(){
    'use strict'

    function AddAgenciesService($http,$log,API){
        var service = {};
        service.agencies = [];

        service.addAgencie = function (agencie) {
            $log.debug('add agencies');



            var data ={
                name :  agencie.name ,
                phone : agencie.phone,
                email : agencie.email,

                country : agencie.address.country,
                city : agencie.address.city,
                street : agencie.address.street,
                building : agencie.address.building,
                zipcode : agencie.address.zipcode,

            };


            console.log(data);

            return $http.post(API.URL+'agencies',data)
            .success(function(data) {
                $log.debug('add agencies', data);
                //service.agencies = data
            })
            .error(function(error) {
                $log.error('Error', error);
            })

        };
        return service;
    }

angular.module('app.services.agencies.add', [])
    .factory('AddAgenciesService', AddAgenciesService);
})()

