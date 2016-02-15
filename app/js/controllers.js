'use strict';

/* Controllers */

var aircraftProblemControllers = angular.module('aircraftProblemControllers', []);

aircraftProblemControllers.controller('homeController', ['$scope', 'aircraftQueueService',
  function($scope, aircraftQueueService) {
    // add the system boot so that it is available from a button
    $scope.systemBoot = aircraftQueueService.systemBoot;

    // go ahead and boot the system to start
    aircraftQueueService.systemBoot();

    // bind the queue
    $scope.queues = aircraftQueueService.queues;

    // bind the enqueueing
    $scope.enqueue = aircraftQueueService.enqueueAircraft;

    // bind the dequeing
    $scope.dequeue = aircraftQueueService.dequeueAircraft;

  }]);
