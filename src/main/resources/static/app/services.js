'use strict';

angular.module('Stundenzettel.services')
  .factory('Pdf', [
    '$resource',
    function($resource) { 
      return $resource(
                '/zettel/jira/AllSecur',
                { usr: '@usr', pw: '@pw'});
  }]);