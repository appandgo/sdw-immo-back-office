var ConnexionCtrl = function($scope,$state,$ionicHistory,$ionicLoading,$ionicPopup, md5, ConnexionService,value_user){

  $scope.$on('$ionicView.enter', function(e) { 
    $scope.loginData.password = '';
    $ionicHistory.clearCache();
    
  })
  $scope.loginData = {};
  $scope.templateLoading='Connexion</br><ion-spinner icon="lines" class="spinner-energized" ></ion-spinner>'; 


   $scope.showAlert = function(titre, contenu) {
     var alertPopup = $ionicPopup.alert({
       title: titre,
       template: contenu,
       cssClass: 'showAlert'
     });
   };

  $scope.doLogin = function() {
    // Creer un service getMD5

    var pwdMd5 = md5.createHash($scope.loginData.password);
    $scope.loginData.passwordmd5 = pwdMd5;
    var user = $scope.loginData.username;

      console.log('pass : '+pwdMd5+' , user : '+user);

    if(pwdMd5 != null &&  user != null){
      console.log('pass ok : '+pwdMd5+' , user ok : '+user);
      $ionicLoading.show({
        template: $scope.templateLoading,
      });
    }

    ConnexionService.login(user,pwdMd5)
      .success(function(data) {
          if(data.sessionId){
            console.log(data);
            value_user.idMagasin=data.idMagasin;
            value_user.nom=data.nom;
            value_user.prenom=data.prenom;
            value_user.email=data.email;
            value_user.sessionId=data.sessionId;
            
            $ionicLoading.hide();
            $state.go('app.scanner');

          }
          else{
            $ionicLoading.hide();
            $scope.showAlert('Erreur','Erreur d\'identification.');
          }
      })
      .error(function(error) {
        console.log(error);
        $ionicLoading.hide();
        $scope.showAlert('Erreur','Verifiez votre connexion réseau.');
      });
    console.log(pwdMd5);
    $ionicLoading.hide();

  };
};

angular
.module('app.controllers.connexion', [])
.controller('ConnexionCtrl',ConnexionCtrl);