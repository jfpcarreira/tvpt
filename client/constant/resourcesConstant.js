(function () {
  'use	strict';

    angular
        .module('tvptApp')
        .constant('RESOURCES', (function() {
            var constants = {};

            constants.SERVICE_REST_URL  = '/api/services/';
            constants.CLIENT_REST_URL   = '/api/clients/';

            return constants
        })());

})();
