'use strict';

angular.module('pgrcApp')
  .controller('RacesCtrl', function ($scope, Races) {
    $scope.load = function() {
      Races.query().then(function(races) {
        return $scope.races = races;
      });
    };

    $scope.load();
  });