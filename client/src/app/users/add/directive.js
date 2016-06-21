(function() {
    'use strict';

    function addUsersDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/users/add/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, AddUsersService) {
                var vm=this;
                AddUsersService.addUser()
                    .then(function(user) {
                        $log.debug('add users  in directives :',user.data);
                        //vm.user = user.data;

                    }, function(error){
                        $log.error('Error add users', error);
                    });
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.users.add', ['app.services.users.add'])
    .directive('addUser', addUsersDirective); 

})();