'use strict';

angular.module('pgrcApp')
  .controller('RaceCtrl', ['$scope', '$routeParams', 'angularFire', function ($scope, $routeParams, angularFire) {
    var url = 'https://kategreen.firebaseio.com/races/'+$routeParams.id;
    // should return 1, thus {}
    var promise = angularFire(url, $scope, 'race', {});

    $scope.columns = [
      { name: 'Place', id: 'place' },
      { name: 'Bib #', id: 'bib' },
      { name: 'First Name', id: 'firstName' },
      { name: 'Last Name', id: 'lastName' },
      { name: 'Gender', id: 'gender' },
      { name: 'Age', id: 'age' },
      { name: 'Hometown', id: 'cityState' },
      { name: 'Time', id: 'time' },
      { name: 'Pace per Mile', id: 'pace' }
    ];
  }]);
