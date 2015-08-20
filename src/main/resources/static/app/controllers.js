'use strict';

angular.module('Stundenzettel.controllers')
  .controller('StundenzettelCtrl', [
  		'$scope',
  		'$timeout',
  		'Pdf',
  		'Report',
  		function($scope, $timeout, Pdf, Report) {

			$scope.model = {
				base64endcodedpdf: ""
			};

			// callback for ng-click 'convertPdf':
			$scope.convertPdf = function() {

				// Get the Tickets from /zettel/jira/
				$scope.tickets = Pdf.query( {usr: $scope.model.jirauser, pw: $scope.model.jirapassword} );

				// Because of the asynchronous nature of the $resource/REST-call, we need to register us to a callback
				// by using the promise the query returns - only then, we are not loading any more :)
				$scope.tickets.$promise.then(function() {
					// get pdf back
				})
			};
		}]);