'use strict';

angular.module('pgrcApp')
  .controller('RacesCtrl', function ($scope, Races) {
    $scope.load = function() {
      Races.query().then(function(races) {
        $scope.races = races;
        
        angular.forEach($scope.races, function(val, key) {
          $scope.races[key].date  = val.date.iso;
        });
      });
    };

    $scope.load();
  });