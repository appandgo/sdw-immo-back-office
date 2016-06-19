(function(){
    'use strict'

    function AddUsersService($http,$log,API){
        var service = {};
        service.rentAdverts = [];

        service.addUser = function () {

            return $http.get(API.URL+'rents',{
                params:{
                    //api_key: key
                },
            })
            .success(function(data) {
                $log.debug('add user factory', data);
                service.rentAdverts = data
            })
            .error(function(error) {
                $log.error('Error', error);
            })

        };
        return service;
    }

angular.module('app.services.users.add', [])
    .factory('AddUsersService', AddUsersService);
})()

