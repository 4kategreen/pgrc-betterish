'use strict';

angular.module('pgrcApp')
  .filter('getCol', function () {
    return function(input,column) {
      return input[column];
    };
  });
