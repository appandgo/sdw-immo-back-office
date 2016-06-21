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

  function MainCtrl($log,$state) {
    $log.debug('MainCtrl laoded!');

    this.isActive = function (viewLocation) { 
          $log.info(' is active ? !');

      //return viewLocation === $location.path();
      $log.info($state.is(viewLocation));
      $log.info($state.is('.users'));
      $log.info($state.include('root'));
      $log.info($state.is('root.users'));

      $state.is(viewLocation);
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

      //'templates',
      'templates',

      // Components
      'app.directives.components.lightState',

      // List Users
      'app.directives.users.list',
      'app.routes.users.list',
      'app.services.users.list',
      // Add Users
      'app.directives.users.add',
      'app.services.users.add',


      // List Agencies
      'app.directives.agencies.list',
      'app.routes.agencies.list',
      'app.services.agencies.list',
      // Add Agencies
      'app.directives.agencies.add',
      'app.services.agencies.add',


      // List Rent adverts
      'app.directives.adverts.rent.list',
      'app.routes.adverts.rent.list',
      'app.services.adverts.rent.list',      
      // Add Rent adverts
      'app.directives.adverts.rent.add',
      'app.services.adverts.rent.add',


      // List Sale adverts
      'app.directives.adverts.sale.list',
      'app.routes.adverts.sale.list',
      'app.services.adverts.sale.list',
      // Add Sale adverts
      'app.directives.adverts.sale.add',
      'app.services.adverts.sale.add',


    ])
    .constant("API", {
        "URL": "https://sdw-immo-backend.herokuapp.com/",
        //"KEY": "FMpobv25eCmopiv5z57cZMovjz28vaPibve6",
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
