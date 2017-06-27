(function () {
  'use	strict';

  angular
    .module('tvptApp')
    .config(setRouting);

  function setRouting($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: '/pub/login.html',
        controller: 'LoginController',
        controllerAs: '$loginCtrl',
        onEnter: function () {
          console.log("enter /login");
        }
      })
      .state('admin', {
        abstract: true,
        url: '/admin',
        templateUrl: '/tmpl/templateAdmin.html',
        resolve: {
          userAuth: function ($state) {
            // TODO: Alterar true por função que retorna se user está autenticado
            if (false) {
              $state.go('login');
            }
            // TODO: Retornar um objecto com info do user autenticado
            return { value: true };
          }
        }
      })
      .state('admin.list', {
        url: '/list',
        templateUrl: '/prv/clientsList.html',     // loaded into ui-view of parent's template
        controller: 'AppController',
        controllerAs: '$appCtrl',
        onEnter: function () {
          console.log("enter admin/list");
        }
      })

  }

})();
