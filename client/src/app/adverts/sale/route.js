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

    angular.module('app.routes.adverts.sale', ['app.directives.adverts.sale'])
    .config(config);
})();

