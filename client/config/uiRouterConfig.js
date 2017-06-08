(function () {
  'use	strict';

  angular
    .module('tvptApp')
    .config(setRouting);

  function setRouting($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('admin', {
        abstract: true,
        url: '/admin',
        templateUrl: '/tmpl/templateAdmin.html',
        onEnter: function () {
          console.log("enter admin abstract");
        }
      })
      .state('admin.login', {
        url: '/login',
        templateUrl: '/pub/login.html',           // loaded into ui-view of parent's template
        controller: 'LoginController',
        onEnter: function () {
          console.log("enter admin/login");
        }
      })
      .state('admin.list', {
        url: '/list',
        templateUrl: '/prv/clientsList.html',     // loaded into ui-view of parent's template
        onEnter: function () {
          console.log("enter admin/list");
        }
      })

  }

})();
