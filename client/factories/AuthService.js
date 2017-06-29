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

        return auth;


        function Login(username, password) {
            return $http.post(RESOURCES.USER_LOGIN_URL, {
                username: username,
                password: password
            }).success(authSuccess);
        }

        function Logout() {
            authToken.removeToken();
        }

        function Register() {
            return $http.post(RESOURCES.USER_REGISTER_URL, {
                email: "",
                password: ""
            }).success(authSuccess);
        }

        // TODO: REMOVE THIS METHOD
        function GetToken(token) {
            console.log('auth token: ' + token);
            return $http.post("/api/users/getToken", {
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
