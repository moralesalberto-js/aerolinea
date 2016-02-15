'use strict';

// app
var aircraftProblemApp = angular.module('aircraftProblemApp', ['ngRoute', 'aircraftProblemServices', 'aircraftProblemControllers']);

// routes
// to access the app goto:
// http://localhost:8000/app/#/home
aircraftProblemApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl : 'partials/home.html',
        controller : 'homeController'
      }).
      otherwise({
        redirectTo : '/home'
      });
  }]);
