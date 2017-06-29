(function () {
  'use	strict';

  angular
    .module('tvptApp')
    .config(setRouting);

  function setRouting($stateProvider, $urlRouterProvider, $httpProvider) {

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
            // TODO: Alterar para função isUserAuthenticated que retorna se user está autenticado
            if (true) {
              // TODO: Retornar um objecto com info do user autenticado
              return { value: true };
            }
            else {
              $state.go('login');
            }
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

      // Injects interceptor for authentication
//      $httpProvider.interceptors.push('AuthInterceptor');
  }

})();
