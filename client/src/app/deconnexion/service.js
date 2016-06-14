function DeconnexionService($http,API,$log,value_user){

    var service = {};
    service.deconnexion = [];

    service.logout = function () {
        return $http.get(API.URL,{
            params:{
              module:"connexion",
              action:"logout",
              apiKey: API.KEY,
              sessionId:value_user.sessionId
            }
        })
        .success(function(data) {
            service.deconnexion = data ;
            console.log(data);
        })
        .error(function(error) {
            $log.error('Error', error);
        })
    };
    return service;
};

angular.module('app.services.deconnexion', [])
.factory('DeconnexionService', DeconnexionService);
