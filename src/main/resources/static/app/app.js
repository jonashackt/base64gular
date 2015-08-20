'use strict';

//Main module of the application
angular.module('Stundenzettel', [
  'ngResource',
  "ui.bootstrap",
  "Stundenzettel.controllers",
  "Stundenzettel.services"
]);

// Initialize separate module for controllers
angular.module('Stundenzettel.controllers', []);

// Initialize separate module for services
angular.module('Stundenzettel.services', []);