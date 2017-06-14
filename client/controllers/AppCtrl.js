angular.module('tvptApp')
	.controller('AppController', function (toastr, $uibModal, $translate, $location, $state, ClientsService) {
		var $appCtrl = this;

		// Initializes the list of services
		$appCtrl.loadClients = function () {
			ClientsService.getAll()
				.then(function(response) {
					$appCtrl.clients = response;
				}, function(response) {
					toastr.error('Error getting the list of clients');
				});
		}

		// Opens modal for new client
		$appCtrl.newClient = function () {
			$uibModal.open({
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: '/modal/newClientModal.html',
				controller: 'NewClientModalCtrl',
				controllerAs: '$ncm'
			})
			.result.then(function (newClient) {
				ClientsService.create(newClient);
				$appCtrl.loadClients();
			}, function () {
				console.log('Carreguei no Cancel do promisse');
			});
		}

		//Opens a confirm modal to delete a client
		$appCtrl.deleteClient = function (client) {
			var params = {
				contextObj: client,
				titleContent: 'Delete client',
				bodyContent: 'Are you sure you want to delete this client: <b>' + client.name + '</b>?',
				onSuccess: function (clientToDelete) {
					ClientsService.delete(clientToDelete._id);
					$appCtrl.clients.splice($appCtrl.clients.indexOf(clientToDelete), 1);
				},
				onCancel: function (clientNotToDelete) {
					console.log('User pressed cancel');
				}
			};

			newConfirm(params);
		}

		/**
			Generic private method to create a confirm modal. Receives the following parameter:

			var params = {
				contextObj:		The context object that will be passed to the onSuccess and onCancel functions
				titleContent: 	The title that will be shown on the modal
				bodyContent: 	The content that will be shown on the modal
				onSuccess: 		The function that will be executed when user press OK button
				onCancel: 		The function that will be executed when user press CANCEL button
		*/
		function newConfirm(params) {
			$uibModal.open({
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: '/modal/confirmModal.html',
				controller: 'ConfirmModalCtrl',
				controllerAs: '$cm',
				resolve: {
					genParams: params
				}
			})
			.result.then(function () {
				params.onSuccess(params.contextObj);
			}, function () {
				params.onCancel(params.contextObj);
			});
		}

		// Changes the i18n language in use
		$appCtrl.changeLang = function (lang) {
			$translate.use(lang);
		}

		// Returns the CSS flag corresponding to the current locale
		$appCtrl.getFlagCss = function () {
			return 'flag-icon flag-icon-' + $translate.use();
		}

		// Logouts the user
		$appCtrl.logout = function () {
			alert('TODO');
			$state.go('login');
		}

		// TODO: Delete this method
		$appCtrl.todo = function () {
			alert('TODO');
		}
	});
