'use strict';

angular.module('pgrcApp')
  .controller('RaceCtrl', function ($scope, $routeParams, Results) {
    $scope.columns = [
      { name: 'Place', id: 'place' },
      { name: 'Bib #', id: 'bib' },
      { name: 'Name', id: 'name' },
      { name: 'Age', id: 'age' },
      { name: 'Hometown', id: 'cityState' },
      { name: 'Time', id: 'chipTime' },
      { name: 'Pace per Mile', id: 'pace' }
    ];

    $scope.load = function() {
      console.log($routeParams.id);
      Results.query({
        where: {
          race: $routeParams.objectId
        }
      }).then(function(results) {
        $scope.results = results;
        console.log('result controller');
      });
    };

    $scope.load();
  });
