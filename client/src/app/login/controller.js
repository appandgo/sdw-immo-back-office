var ConnexionCtrl = function($scope,$state, ConnexionService,value_user){



  $scope.loginData = {};
  $scope.loginData.username = "didierdeschamps";
  $scope.loginData.password ="spmahcsedreidid" ; 



  $scope.login = function() {

    //console.log('pass : '+$scope.loginData.password+' , user : '+$scope.loginData.username);

    ConnexionService.login( $scope.loginData.username , $scope.loginData.password )
      .success(function(data) {

            //console.log(data);

          if(data.token){

            value_user.id=data.user.id;
            value_user.last_name=data.user.last_name;
            value_user.first_name=data.user.first_name;
            value_user.role=data.user.role;
            value_user.email=data.user.email;
            value_user.phone=data.user.phone;
            value_user.token=data.user.token;
            value_user.state=data.user.state;

            $state.go('root.home');

          }
          else{
            alert('Association Nom d\'utilisateur / mot d epasse érronée')
          }
      })
      .error(function(error) {
        console.log(error);
      });

  };
};

angular
.module('app.controllers.login', [])
.controller('ConnexionCtrl',ConnexionCtrl);