(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

  function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('httpInterceptor');
    $stateProvider
      .state('root', {
        views: {
          'header': {
            templateUrl: 'src/app/header/header.tpl.html',
            controller: 'HeaderCtrl'
          },
          'footer': {
            templateUrl: 'src/app/footer/footer.tpl.html',
            controller: 'FooterCtrl'
          }
        }
      });
  }

  function MainCtrl($log) {
    $log.debug('MainCtrl laoded!');

    this.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
  }

  function run($log) {
    $log.debug('App is running!');
  }

  angular.module('app', [
      'ui.router',
      'common.filters.uppercase',
      'common.interceptors.http',
      'AdminLTE',
      'app.header',
      'app.footer',
      'home',

      'templates',

      // Components
      'app.directives.components.lightState',

      // Users
      'app.directives.users',
      'app.routes.users',
      'app.services.users',

      // List Agencies
      'app.directives.agencies.list',
      'app.routes.agencies.list',
      'app.services.agencies.list',

      // List Rent adverts
      'app.directives.adverts.rent.list',
      'app.routes.adverts.rent.list',
      'app.services.adverts.rent.list',      

      // Add Rent adverts
      'app.directives.adverts.rent.add',
      'app.services.adverts.rent.add',

      // Sale adverts
      'app.directives.adverts.sale',
      'app.routes.adverts.sale',
      'app.services.adverts.sale',


    ])
    .constant("API", {
        "URL": "https://sdw-immo-backend.herokuapp.com/",
        //"KEY": "FMpobv25eCmopiv5z57cZMovjz28vaPibve6",
        //"ID_OP":66
    })
    .value('value_user', {
      idUser:'',
      nom:'',
      prenom:'',
      pseudo:'',
      email:'',
      sessionId:'',
      idOperation:''
    })    

    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
