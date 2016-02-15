'use strict';

// all services will be under this module
var aircraftProblemServices = angular.module('aircraftProblemServices', []);

aircraftProblemServices.factory('aircraftQueueService', function () {

  // queues is an array object that will hold the queues
  // the order of the array is IMPORTANT
  // it sets the priority of the queues
  var _queues = [
    { name: 'Large Passenger', aircrafts : [] }, // highest priority
    { name: 'Small Passenger', aircrafts : [] },
    { name: 'Large Cargo', aircrafts : [] },
    { name: 'Small Cargo', aircrafts : [] }, // lowest priority
  ];

  var _systemBoot = function () {
    // systemBoot will reset the queues object
    // and set each queue as an empty array
    for(var i = 0; i < _queues.length; i++ ) {
      _queues[i].aircrafts = [];
    }
  };

  // with angular, we can actually have the user send us the actual
  // queue in the options in the select, so no need to test for a string
  // we will pass the actual queue when asking to enqueue the aircraft
  var _enqueueAircaft = function (queue) {
    queue.aircrafts[queue.aircrafts.length] = { type : queue.name };
  };

  // dequeueing is simply taking the first element
  // out of the appropriate queue
  // first find the appropriate queue
  // then remove first element
  var _dequeueAircraft = function () {
    var queue = _find_appropriateQueue();
    return queue.aircrafts.shift();
  };

  // iterate over the queues in the priority order
  // and return the first queue that has elements in it
  var _find_appropriateQueue = function () {
    for(var i=0; i < _queues.length; i++) {
      if(_queues[i].aircrafts.length > 0) {
        return _queues[i];
      }
    }
  };

  // public interface per the requirements
  // the service responds to systemBoot, enqueueAircraft and dequeueAircraft
  // added the queues object to the public interface to allow to display the queue and for testing queue
  return {
    systemBoot : _systemBoot,
    enqueueAircraft : _enqueueAircaft,
    dequeueAircraft : _dequeueAircraft,
    queues : _queues
  };
});
