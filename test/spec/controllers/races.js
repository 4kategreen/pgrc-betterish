'use strict';

describe('Controller: RacesCtrl', function () {

  // load the controller's module
  beforeEach(module('pgrcApp'));

  var RacesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RacesCtrl = $controller('RacesCtrl', {
      $scope: scope
    });
    scope.today = new Date('2013-06-01');
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });

  it('should determine the state of a race correctly so it displays things right', function() {

  });
});
