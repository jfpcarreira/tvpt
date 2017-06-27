(function () {
    'use strict';

    angular
        .module('tvptApp')
        .factory('AuthService', service);

    function service($http, $state, AuthTokenService, RESOURCES) {
        var auth = {};

        auth.login      = Login;
        auth.logout     = Logout;
        auth.register   = Register;
        auth.getToken   = GetToken;

        // TODO: Usar o ficheiro resourcesConstant.js
        var loginUrl = '/api/login';
        var registerUrl = '/api/register';

        function Login(username, password) {
            return $http.post(RESOURCES.USER_REST_URL, {
                username: username,
                password: password
            }).success(authSuccess);
        }

        function Logout() {
            authToken.removeToken();
        }

        function Register() {
            return $http.post(RESOURCES.USER_REST_URL, {
                email: "",
                password: ""
            }).success(authSuccess);
        }

        // TODO: REMOVE
        function GetToken(token) {
            console.log('auth token: ' + token);
            return $http.post("/api/getToken", {
                token: token
            });
        }

        // PRIVATE METHODS
        function authSuccess(res) {
            authToken.setToken(res.token);
            $state.go('admin.list');
        }

    }

})();
