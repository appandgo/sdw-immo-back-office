(function() {
  'use strict';

  function footerCtrl($log) {
    $log.debug('Footer loaded');
  }

  angular.module('app.footer', [])
    .controller('FooterCtrl', footerCtrl);
})();
