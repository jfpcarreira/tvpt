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
        onEnter: function () {
          console.log("enter admin abstract");
//          $state.target('login');
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
