'use strict';


describe('aircraftQueueService', function() {

  beforeEach(module('aircraftProblemApp'));



  // test the queueing of aircraft
  it('should enqueue aircraft', inject(function(aircraftQueueService) {
    aircraftQueueService.systemBoot();
    var queue = aircraftQueueService.queues[0];
    aircraftQueueService.enqueueAircraft(queue);
    expect(aircraftQueueService.queues[0].aircrafts.length).toEqual(1);
  }));

  // test the system boot, it should bring counts to 0
  it('should have all queues empty after system boot', inject(function(aircraftQueueService) {
    // enqueue aircrafts
    for(var i=0; i < aircraftQueueService.queues.length; i++) {
      var queue = aircraftQueueService.queues[i];
      aircraftQueueService.enqueueAircraft(queue);
    }

    // the queues should not be empty
    for(var i=0; i < aircraftQueueService.queues.length; i++) {
      expect(aircraftQueueService.queues[i].aircrafts.length).toEqual(1);
    }

    // now do the system boot
    aircraftQueueService.systemBoot();

    // the queues should be empty
    for(var i=0; i < aircraftQueueService.queues.length; i++) {
      expect(aircraftQueueService.queues[i].aircrafts.length).toEqual(0);
    }
  }));


  // test the dequeueing
  it('should dequeue aircraft in the priority order', inject(function(aircraftQueueService) {
    // clear queues
    aircraftQueueService.systemBoot();

    // easier to read this way for testing
    var largePassengerQueue = aircraftQueueService.queues[0];
    var smallPassengerQueue = aircraftQueueService.queues[1];
    var largeCargoQueue = aircraftQueueService.queues[2];
    var smallCargoQueue = aircraftQueueService.queues[3];

    // enqueue a bunch of aircraft
    aircraftQueueService.enqueueAircraft(smallPassengerQueue);
    aircraftQueueService.enqueueAircraft(largePassengerQueue);
    aircraftQueueService.enqueueAircraft(largeCargoQueue);
    aircraftQueueService.enqueueAircraft(smallCargoQueue);
    aircraftQueueService.enqueueAircraft(smallPassengerQueue);


    // now dequeue and it should be in the right order
    expect(aircraftQueueService.dequeueAircraft().type).toEqual('Large Passenger');
    expect(aircraftQueueService.dequeueAircraft().type).toEqual('Small Passenger');
    expect(aircraftQueueService.dequeueAircraft().type).toEqual('Small Passenger');
    expect(aircraftQueueService.dequeueAircraft().type).toEqual('Large Cargo');
    expect(aircraftQueueService.dequeueAircraft().type).toEqual('Small Cargo');
  }));
});
