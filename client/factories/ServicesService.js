(function () {
    'use strict';
 
    angular
        .module('tvptApp')
        .factory('ServicesService', Service);

    function Service($http, $q, RESOURCES) {
        var service = {};
 
        service.getAll = GetAll;
        service.create = Create;
        service.update = Update;
        service.delete = Delete;

        return service;


        function GetAll () {
            return $http.get(RESOURCES.SERVICE_REST_URL)
                .then(handleSuccess, handleError);
        }

        function Create (service) {
            return $http.post(RESOURCES.SERVICE_REST_URL, service)
                .then(handleSuccess, handleError);
        }

        function Update (service) {
            return $http.put(RESOURCES.SERVICE_REST_URL + service._id, service)
                .then(handleSuccess, handleError);
        }

        function Delete (id) {
            return $http.delete(RESOURCES.SERVICE_REST_URL + id)
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
