(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.rent-adverts',{
            url: '/adverts/rent',
            views: {
                '@': {
                    template: '<list-rent-adverts></list-rent-adverts>',
                }
            }
        });
    }

    angular.module('app.routes.adverts.rent.list', ['app.directives.adverts.rent.list'])
    .config(config);
})();

