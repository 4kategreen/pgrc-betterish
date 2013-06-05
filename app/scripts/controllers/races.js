'use strict';

angular.module('pgrcApp')
  .controller('RacesCtrl', function ($scope, Races) {
    $scope.sort = 'date';
    $scope.new = new Races();

    $scope.load = function() {
      Races.query().then(function(races) {
        $scope.races = races;

        angular.forEach($scope.races, function(val, key) {
          $scope.races[key].date  = val.date.iso;
          $scope.races[key].linkTitle = $scope.races[key].results ? 
            'View Results' :
            'More Information'
        });
      });
    };

    $scope.save = function() {
      var newDate = new Date($scope.new.date);
      $scope.new.date = {
        "__type": "Date",
        "iso": newDate.toISOString()
      };
      $scope.new.save().then(function() {
        console.log('success', arguments);
        $scope.addRace.$setPristine;
        $scope.new = new Races();
        $scope.load();
      }, function() {
        console.log('fail', arguments);
      });
    }

    $scope.load();
  });