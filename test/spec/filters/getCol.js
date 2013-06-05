'use strict';

describe('Filter: getCol', function () {

  // load the filter's module
  beforeEach(module('pgrcApp'));

  // initialize a new instance of the filter before each test
  var getCol;
  beforeEach(inject(function ($filter) {
    getCol = $filter('getCol');
  }));

  // it('should return the input prefixed with "getCol filter:"', function () {
  //   var text = 'angularjs';
  //   expect(getCol(text)).toBe('getCol filter: ' + text);
  // });

});
