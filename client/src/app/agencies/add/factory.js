(function(){
    'use strict'

    function AddAgenciesService($http,$log,API){
        var service = {};
        service.agencies = [];
        //var key = 'd07241f7f943c6861fa0a520b52cc049';
        service.addAgencie = function () {
            $log.info('add agencies');
            return $http.get(API.URL+'rents',{
                params:{
                    //api_key: key
                },
            })
            .success(function(data) {
                $log.info('add agencies', data);
                service.agencies = data
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

