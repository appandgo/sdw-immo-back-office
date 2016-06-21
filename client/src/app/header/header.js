(function() {
  'use strict';

  function headerCtrl($log,value_user,$scope) {
    $log.debug('Header loaded');
    $scope.user=value_user;

  }

  angular.module('app.header', [])
    .controller('HeaderCtrl', headerCtrl);
})();
