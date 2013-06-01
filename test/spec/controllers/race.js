'use strict';

describe('Controller: RaceCtrl', function () {

  // load the controller's module
  beforeEach(module('pgrcApp'));

  var RaceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RaceCtrl = $controller('RaceCtrl', {
      $scope: scope
    });
  }));
});
