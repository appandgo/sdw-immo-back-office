  var config = function ($stateProvider) {
  	$stateProvider
	    .state('app.profil', {
		    url: '/profil',
		    views: {
		      'menuContent': {
			      templateUrl: 'app/profil/profil.html',
			      controller: 'ProfilCtrl',
		      }
		    }
	    });
    };

angular.module('app.routes.profil', [])
.config(config);


