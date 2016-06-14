var ProfilCtrl = function($scope,$state, ProfilService,value_user){

  $scope.doLogout = function() {
  	ProfilService
  	.logout()
  	.success(function(data) { console.log(data); })
    .error(function(error) { console.log(error); });

    $state.go('connexion');
  };
  $scope.infos=value_user;
};

angular
.module('app.controllers.profil', [])
.controller('ProfilCtrl',ProfilCtrl);