angular.module('tvptApp')
	.service('ServicesService', function ($http, RESOURCES) {

        this.getServices = function () {
            console.log("entrou no serviço");
            return $http.get(RESOURCES.SERVICE_REST_URL);
        }

        this.createService = function (service) {
            return $http.post(RESOURCES.SERVICE_REST_URL, service);
        }

        // TODO: Apenas receber o service e usar o _id disponibilizado pelo mongoDB
        this.updateService = function (id, service) {
            return $http.put(RESOURCES.SERVICE_REST_URL + id, service);
        }

        this.deleteService = function (id) {
            return $http.delete(RESOURCES.SERVICE_REST_URL + id);
        }

	});
