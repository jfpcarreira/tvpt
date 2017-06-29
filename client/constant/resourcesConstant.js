(function () {
  'use	strict';

    angular
        .module('tvptApp')
        .constant('RESOURCES', (function() {
            var constants = {};

            constants.SERVICE_REST_URL  = '/api/services/';
            constants.CLIENT_REST_URL   = '/api/clients/';
            constants.USER_REST_URL     = '/api/users/';

            constants.USER_LOGIN_URL    = '/api/users/login';
            constants.USER_REGISTER_URL = '/api/users/register';

            return constants
        })());

})();
