function ConnexionService($http,API,$log){

    var service = {};
    service.user = [];

    var loginSuccess = function(data) {
      service.user = data ;
      console.log(data);
    }
    var loginError= function(error) {
      $log.error('Error', error);
    }

    service.login = function (login , passwd) {

            var data ={
                username : login ,
                password : passwd,

            };


            return $http.post(API.URL+'users/login',data)
            .success(function(data) {
                $log.debug('login ', data);
                service.user = data
            })
            .error(function(error) {
                $log.error('Error login', error);
            })

    };
    return service;
};

angular.module('app.services.login', [])
.factory('ConnexionService', ConnexionService);
