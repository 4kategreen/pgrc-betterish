'use strict';

angular.module('pgrcApp')
  .controller('RacesCtrl', ['$scope', 'angularFire', function ($scope, angularFire) {

    // GET RACES FROM FIREBASE
    var races = 'https://kategreen.firebaseio.com/races';
    // should return many, thus []
    var racesPromise = angularFire(races, $scope, 'races', []);

    racesPromise.then(function() {
      // Or, attach a function to $scope that will let a directive in markup manipulate the model.
      $scope.removeItem = function() {
        $scope.items.splice($scope.toRemove, 1);
        $scope.toRemove = null;
      };

      $scope.setState();
    });

    // GET DISTANCES FROM FIREBASE
    var distances = 'https://kategreen.firebaseio.com/distances';
    var distancesPromise = angularFire(distances, $scope, 'distances', []);

    // FUNCTIONS
    $scope.add = function() {
      $scope.new.date = new Date($scope.new.date).toISOString();
      $scope.races.push($scope.new);
      $scope.new = {};
      $scope.setState();
    };

    $scope.setState = function() {
      var today = new Date();
      $scope.races.forEach(function(race,key) {
        var pastRegDate = today > new Date(race.registrationCloseDate) ? true : false;
        var pastDate = today > new Date(race.date) ? true : false;
        var results = race.results ? race.results.length : 0;
        var state = 'closed';

        if (race.registrationCloseDate) {
          if (pastRegDate) {
            if (results > 0) {
              state = 'results';
            } else {
              state = 'closed';
            }
          } else {
            state = 'open';
          }
        } else {
          if (pastDate && results > 0) {
              state = 'results';
          } else {
            state = 'closed';
          }
        }

        if (!$scope.races[key].state || $scope.races[key].state !== state) {
          $scope.races[key].state = state;
        }
        $scope.races[key].id = key;
      });
    };

    $scope.dateOptions = {
      changeYear: true,
      changeMonth: true,
      yearRange: '1900:-0'
    };

  }]);