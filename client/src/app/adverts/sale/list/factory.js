(function(){
    'use strict'

    function SaleAdvertsService($http,$log,API){
        var service = {};
        service.saleAdverts = [];

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

    function DeleteSaleAdvertService($http,$log,API){
        var service = {};
        service.saleAdvert = [];

        service.deleteSaleAdvert = function (id) {
            $log.debug('delete saleAdvert : ',id);
            return $http.delete(API.URL+'sales/'+id)
            .success(function(data) {
                $log.debug('delete saleAdvert :  ', data);
                //service.saleAdvert = data
            })
            .error(function(error) {
                $log.error('Error', error);
            })

        };
        
        return service;
    }

angular.module('app.services.adverts.sale.list', [])
    .factory('SaleAdvertsService', SaleAdvertsService)
    .factory('DeleteSaleAdvertService', DeleteSaleAdvertService);
})()

