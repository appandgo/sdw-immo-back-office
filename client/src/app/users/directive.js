(function() {
    'use strict';

    function listUsersDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/users/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, UsersService) {
                var vm=this;
                UsersService.getUsers()
                    .then(function(users) {
                        console.log('users in directives :',users.data);
                        vm.users = users.data;

                    }, function(error){
                        $log.error('Error users', error);
                    });
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.users', ['app.services.users'])
    .directive('listUsers', listUsersDirective); 

})();