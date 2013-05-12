'use strict';

angular.module('pgrcApp')
  .filter('results', function () {
    return function(input,bool) {
      angular.forEach(input,function(result) {
        if (result.results === bool) {
          return result;
        }
      });
    };
  });
