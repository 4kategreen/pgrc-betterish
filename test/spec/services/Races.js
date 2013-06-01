'use strict';

describe('Service: Races', function () {

  // load the service's module
  beforeEach(module('pgrcApp'));

  // instantiate service
  var Races;
  beforeEach(inject(function (_Races_) {
    Races = _Races_;
  }));

  it('should do something', function () {
    expect(!!Races).toBe(true);
  });

});
