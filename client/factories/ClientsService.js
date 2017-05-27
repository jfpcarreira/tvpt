(function () {
    'use strict';
 
    angular
        .module('tvptApp')
        .factory('ClientsService', Service);

    function Service($http, $q, RESOURCES) {
        var client = {};
 
        client.getAll = GetAll;
        client.create = Create;
        client.update = Update;
        client.delete = Delete;

        return client;


        function GetAll () {
            return $http.get(RESOURCES.CLIENT_REST_URL + "?populate=services")
                .then(handleSuccess, handleError);
        }

        function Create (client) {
            return $http.post(RESOURCES.CLIENT_REST_URL, client)
                .then(handleSuccess, handleError);
        }

        // TODO: Apenas receber o service e usar o _id disponibilizado pelo mongoDB
        function Update (id, client) {
            return $http.put(RESOURCES.CLIENT_REST_URL + id, client)
                .then(handleSuccess, handleError);
        }

        function Delete (id) {
            return $http.delete(RESOURCES.CLIENT_REST_URL + id)
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
