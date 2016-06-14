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

    angular.module('app.routes.adverts.rent', ['app.directives.adverts.rent'])
    .config(config);
})();

