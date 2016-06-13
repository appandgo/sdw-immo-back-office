(function() {
  'use strict';

  function headerCtrl($log) {
    $log.debug('Header loaded');
  }

  angular.module('app.header', [])
    .controller('HeaderCtrl', headerCtrl);
})();
