(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.agencies',{
            url: '/agencies',
            views: {
                '@': {
                    template: '<list-agencies></list-agencies>',
                }
            }
        });
    }

    angular.module('app.routes.agencies.list', ['app.directives.agencies.list'])
    .config(config);
})();

