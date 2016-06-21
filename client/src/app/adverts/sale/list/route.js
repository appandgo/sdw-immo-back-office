(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.sale-adverts',{
            url: '/adverts/sale',
            views: {
                '@': {
                    template: '<list-sale-adverts></list-sale-adverts>',
                }
            }
        });
    }

    angular.module('app.routes.adverts.sale.list', ['app.directives.adverts.sale.list'])
    .config(config);
})();

