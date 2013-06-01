'use strict';

angular.module('pgrcApp', ['Parse','ui.bootstrap'])
  .config(['ParseProvider', '$httpProvider', '$routeProvider',function (ParseProvider, $httpProvider, $routeProvider) {

    ParseProvider.initialize(
      'lEKhkqeZuGbj8SLXf5e8l8u6zjSW0ZcSukJ7LXWf',
      'hOJfJ6OEYEiiauMjOUtQ1B07lnmdJF1oLxG6I1Sg'
    );

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
      .when('/race/:id', {
        templateUrl: 'views/race.html',
        controller: 'RaceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
