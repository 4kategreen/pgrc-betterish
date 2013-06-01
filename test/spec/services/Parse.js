'use strict';

describe('Service: Parse', function () {

  // load the service's module
  beforeEach(module('pgrcApp'));

  // instantiate service
  var Parse;
  beforeEach(inject(function (_Parse_) {
    Parse = _Parse_;
  }));

  it('should do something', function () {
    expect(!!Parse).toBe(true);
  });

});
