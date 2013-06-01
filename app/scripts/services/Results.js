'use strict';

angular.module('pgrcApp')
  .factory('Results', function (Parse) {
    var Results = angular.copy(Parse.Model);
    Results.configure('results');
    return Races;
  });
