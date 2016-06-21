(function(){
    'use strict'

    function ListUsersService($http,$log,API){
        var service = {};
        service.users = [];
        //var key = 'd07241f7f943c6861fa0a520b52cc049';
        service.getUsers = function () {
            $log.info('Get all the users');
            return $http.get(API.URL+'users',{
                params:{
                    //api_key: key
                },
            })
            .success(function(data) {
                $log.debug('Get all the users  ', data);
                service.users = data
            })
            .error(function(error) {
                $log.error('Error', error);
            })

        };
        return service;
    }

angular.module('app.services.users.list', [])
    .factory('ListUsersService', ListUsersService);
})()

