'use strict';

angular.module('pgrcApp', ['ui.bootstrap.tabs','firebase'])
  .config(['$httpProvider', '$routeProvider',function ($httpProvider, $routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/join', {
        templateUrl: 'views/join.html',
        controller: 'JoinCtrl'
      })
      .when('/train', {
        templateUrl: 'views/train.html',
        controller: 'TrainCtrl'
      })
      .when('/races', {
        templateUrl: 'views/races.html',
        controller: 'RacesCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/races/:id', {
        templateUrl: 'views/race.html',
        controller: 'RaceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
