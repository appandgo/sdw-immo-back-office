  var config = function ($stateProvider) {
  	$stateProvider
	    .state('login', {
	      url: '/login',
	      abstract: false,
	      templateUrl: './src/app/login/connexion.html',
	      controller: 'ConnexionCtrl',
	    });
    };

angular.module('app.routes.login', [])
.config(config);

