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
            template: '<header class="main-header"></header>',
          },
          'leftSidebar': {
            template: '<left-sidebar> </left-sidebar>',
          },
         'footer': {
            template: '',
            //<footer class="main-footer"></footer>
          }
        }
      });
  }

  function MainCtrl($scope,$log,$state,value_user) {
    $log.debug('MainCtrl laoded!');

    // A mettre dans la directive leftSidebar
    $scope.user = {};
    $scope.user = value_user;
    $log.debug($scope.user);

    $scope.isActive = function (viewLocation) {

      $log.info(' is active ? ');
      $log.info(viewLocation);
      $log.info($state.is(viewLocation));
      //$log.info($state.);



      //return viewLocation === $location.path();
      //$log.info($state.is(viewLocation));
      //$log.info($state.is('.users'));
      //$log.info($state.include('root'));
      //$log.info($state.is('root.users'));

      return $state.is(viewLocation);
    };

    $scope.isRoot = function () { 

      //$log.info(' is root ? !');

      //$log.info(!$state.is('login'));

    return !$state.is('login');
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

      // Login
      'app.controllers.login',
      'app.routes.login',
      'app.services.login',

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
      id:'576870a0305693c102d96e17',
      last_name:'DESCHAMPS',
      first_name:'Didier',
      role:'0',
      email:'',
      phone:'',
      state:false,
      token:''
    })    





    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
