'use strict';

angular.module('pgrcApp')
  .factory('Races', function (Parse) {
    var Races = angular.copy(Parse.Model);
    Races.configure('races','cityState','clubRace','date','distance','location','name','registrationLink','results');
    return Races;
  });