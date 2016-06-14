function ConnexionService($http,API,$log){

    var service = {};
    service.connexion = [];

    var loginSuccess = function(data) {
      service.connexion = data ;
      console.log(data);
    }
    var loginError= function(error) {
      $log.error('Error', error);
    }

    service.login = function (login , passwd) {
        return $http.get(API.URL,{
            params:{
              module:"connexion",
              action:"login",
              apiKey: API.KEY,
              login:login,
              password:passwd
            }
        })
        .success(loginSuccess)
        .error(loginError)
    };
    return service;
};

angular.module('app.services.connexion', [])
.factory('ConnexionService', ConnexionService);
