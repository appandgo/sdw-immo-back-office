(function(){
    'use strict'

    function SaleAdvertsService($http,$log,API){
        var service = {};
        service.saleAdverts = [];
        //var key = 'd07241f7f943c6861fa0a520b52cc049';
        service.getSaleAdverts = function () {
            $log.info('Get all the sale adverts');
            return $http.get(API.URL+'sales',{
                params:{
                    //api_key: key
                },
            })
            .success(function(data) {
                $log.info('Get all the sale adverts', data);
                service.saleAdverts = data
            })
            .error(function(error) {
                $log.error('Error', error);
            })

        };
        return service;
    }

angular.module('app.services.adverts.sale.list', [])
    .factory('SaleAdvertsService', SaleAdvertsService);
})()

