'use strict';

describe('Filter: results', function () {

  // load the filter's module
  beforeEach(module('pgrcApp'));

  // initialize a new instance of the filter before each test
  var results;
  beforeEach(inject(function ($filter) {
    results = $filter('results');
  }));

  it('should return the input prefixed with "results filter:"', function () {
    var text = 'angularjs';
    expect(results(text)).toBe('results filter: ' + text);
  });

});
