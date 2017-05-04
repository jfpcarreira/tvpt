angular.module('tvptApp')
    .service('ClientService', ['$http', function ($http) {

            var REST_URL_CLIENT = '/api/clients/';

            this.getClients = function () {
                return $http.get(REST_URL_CLIENT);
            }

            this.createClient = function (client) {
                return $http.post(REST_URL_CLIENT, client);
            }

            this.updateClient = function (id, client) {
                return $http.put(REST_URL_CLIENT + id, client);
            }

            this.deleteClient = function (id) {
                return $http.delete(REST_URL_CLIENT + id);
            }

        }
    ]);
