(function () {
    'use strict';

    angular
        .module('tvptApp')
        .factory('AuthInterceptor', interceptor);


    function interceptor(AuthTokenService) {
        return {
            request: function(config){
                var token = AuthTokenService.getToken();

                if (token){
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            response: function(response){
                return response;
            }
        };

    }

})();
