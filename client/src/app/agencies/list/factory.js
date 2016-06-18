(function(){
    'use strict'

    function ListAgenciesService($http,$log,API){
        var service = {};
        service.agencies = [];
        //var key = 'd07241f7f943c6861fa0a520b52cc049';
        service.getAgencies = function () {
            $log.info('Get all the agencies');
            return $http.get(API.URL+'agencies',{
                params:{
                    //api_key: key
                },
            })
            .success(function(data) {
                $log.info('Get all the agencies', data);
                service.agencies = data
            })
            .error(function(error) {
                $log.error('Error', error);
            })

        };
        return service;
    }

angular.module('app.services.agencies.list', [])
    .factory('ListAgenciesService', ListAgenciesService);
})()

