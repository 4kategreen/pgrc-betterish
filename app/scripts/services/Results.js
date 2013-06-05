'use strict';

angular.module('pgrcApp')
  .factory('Results', function (Parse) {
    var Results = angular.copy(Parse.Model);
    Results.configure('results','age','bib','chip','city','cnipTime','divisionName','firstName','gender','lastName','pace','place','race','state');
    return Results;
  });
