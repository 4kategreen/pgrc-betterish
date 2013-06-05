'use strict';

angular.module('pgrcApp')
  .controller('RacesCtrl', ['$scope', 'angularFire', function ($scope, angularFire) {
    var url = 'https://kategreen.firebaseio.com/races';
    var promise = angularFire(url, $scope, 'races');

    promise.then(function() {
      var today = new Date();
      angular.forEach($scope.races, function(race,key) {
        var pastRegDate = today > new Date(race.registrationCloseDate) ? true : false;
        var pastDate = today > new Date(race.date) ? true : false;
        var results = race.results ? race.results.length : 0;
        $scope.races[key].state = race.state || 'closed';

        if (race.registrationCloseDate) {
          if (pastRegDate) {
            if (results > 0) {
              $scope.races[key].state = 'results';
            } else {
              $scope.races[key].state = 'closed';
            }
          } else {
            $scope.races[key].state = 'open';
          }
        } else {
          if (pastDate) {
            if (results > 0) {
              $scope.races[key].state = 'results';
            } else {
              $scope.races[key].state = 'closed';
            }
          }
        }
      });
      // Or, attach a function to $scope that will let a directive in markup manipulate the model.
      $scope.removeItem = function() {
        $scope.items.splice($scope.toRemove, 1);
        $scope.toRemove = null;
      };
    });
  }]);