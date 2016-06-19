(function(){
    'use strict'

    function ListAgenciesService($http,$log,API){
        var service = {};
        service.agencies = [];

        service.getAgencies = function () {
            $log.debug('Get all the agencies : ');
            return $http.get(API.URL+'agencies',{
                params:{
                    //api_key: key
                },
            })
            .success(function(data) {
                $log.debug('Get all the agencies (factory) ', data);
                service.agencies = data
            })
            .error(function(error) {
                $log.error('Error', error);
            })

        };
        
        return service;
    }

angular.module('app.services.agencies.list', [])
    .factory('ListAgenciesService', ListAgenciesService)
    .factory('AgenciesService', ListAgenciesService);
})()

