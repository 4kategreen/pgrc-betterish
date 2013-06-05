'use strict';

angular.module('pgrcApp')
  .controller('RaceCtrl', ['$scope', '$routeParams', 'angularFire', function ($scope, $routeParams, angularFire) {
    var url = 'https://kategreen.firebaseio.com/races/'+$routeParams.id;
    console.log(url);
    var promise = angularFire(url, $scope, 'races', []);

    $scope.columns = [
      { name: 'Place', id: 'place' },
      { name: 'Bib #', id: 'bib' },
      { name: 'Name', id: 'name' },
      { name: 'Age', id: 'age' },
      { name: 'Hometown', id: 'cityState' },
      { name: 'Time', id: 'chipTime' },
      { name: 'Pace per Mile', id: 'pace' }
    ];
  }]);
