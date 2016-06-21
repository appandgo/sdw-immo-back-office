(function() {
    'use strict';

    function listUsersDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/users/list/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, ListUsersService) {
                var vm=this;
                ListUsersService.getUsers()
                    .then(function(users) {
                        $log.debug('users in directives :',users.data);
                        vm.users = users.data;

                    }, function(error){
                        $log.error('Error users', error);
                    });
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.users.list', ['app.services.users.list'])
    .directive('listUsers', listUsersDirective); 

})();