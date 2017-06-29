(function () {
    'use strict';
 
    angular
        .module('tvptApp')
        .factory('UsersService', Service);

    function Service($http, $q, RESOURCES) {
        var user = {};
 
        user.get    = Get;
        user.getAll = GetAll;
        user.create = Create;
        user.update = Update;
        user.delete = Delete;

        return user;


        function Get (id) {
            return $http.get(RESOURCES.USER_REST_URL + id + "?populate=services")
                .then(handleSuccess, handleError);
        }

        function GetAll () {
            return $http.get(RESOURCES.USER_REST_URL + "?populate=services")
                .then(handleSuccess, handleError);
        }

        function Create (user) {
            return $http.post(RESOURCES.USER_REST_URL, user)
                .then(handleSuccess, handleError);
        }

        function Update (user) {
            return $http.put(RESOURCES.USER_REST_URL + user._id, user)
                .then(handleSuccess, handleError);
        }

        function Delete (id) {
            return $http.delete(RESOURCES.USER_REST_URL + id)
                .then(handleSuccess, handleError);
        }


        // private functions
        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }

    }

})();
