'use strict';

angular.module('pgrcApp')
  .controller('RacesCtrl', ['$scope', 'angularFire', function ($scope, angularFire) {
    var url = 'https://kategreen.firebaseio.com/races';
    var promise = angularFire(url, $scope, 'races', []);

    promise.then(function() {
      $scope.setState();
      // Or, attach a function to $scope that will let a directive in markup manipulate the model.
      $scope.removeItem = function() {
        $scope.items.splice($scope.toRemove, 1);
        $scope.toRemove = null;
      };
    });

    $scope.setState = function() {
      var today = new Date();
      $scope.races.forEach(function(race,key) {
        $scope.races[key].id = key;
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
          if (pastDate) {
            if (results > 0) {
              state = 'results';
            } else {
              state = 'closed';
            }
          } else {
            state = 'open';
          }
        }
        console.log(state);
        $scope.races[key].state = state;
        console.log($scope.$root.$$phase);
      });
    };
  }]);