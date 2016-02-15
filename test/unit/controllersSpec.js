'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {

  beforeEach(module('aircraftProblemApp'));

  describe('aircraftProblemControllers', function() {
    var scope, homeController;
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        homeController = $controller('homeController', {$scope : scope});
    }));

    it('should create the queues model and it will have the four queues', function () {
      expect(scope.queues.length).toEqual(4)
    });
  });
});
