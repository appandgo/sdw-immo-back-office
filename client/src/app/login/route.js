  var config = function ($stateProvider) {
  	$stateProvider
	    .state('connexion', {
	      url: '/connexion',
	      abstract: false,
	      templateUrl: 'app/connexion/connexion.html',
	      controller: 'ConnexionCtrl',
	    });
    };

angular.module('app.routes.connexion', [])
.config(config);

