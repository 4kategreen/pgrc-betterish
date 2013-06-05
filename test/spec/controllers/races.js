'use strict';

describe('Controller: RacesCtrl', function () {

  // load the controller's module
  beforeEach(module('pgrcApp'));

  var RacesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RacesCtrl = $controller('RacesCtrl', {
      $scope: scope
    });
    scope.today = new Date('2013-06-01');
    scope.races = [
      {
        "name": "Laurel Pregnancy Center",
        "distance": "5K",
        "date": "2013-04-21",
        "registration": "www.google.com",
        "registrationCloseDate": "2013-04-18",
        "results": [
          {
            "firstName": "Kate",
            "lastName": "Green",
            "gender": "F",
            "time": "30:00"
          },
          {
            "firstName": "Kim",
            "lastName": "Ossi",
            "gender": "F",
            "time": "31:00"
          }
        ]
      },
      {
        "name": "Tortoise and the Hare",
        "distance": "5K",
        "date": "2013-04-28",
      },
      {
        "name": "Beltsville Academy",
        "distance": "5K",
        "date": "2013-06-08",
        "registration": "www.google.com",
        "registrationCloseDate": "2013-06-06"
      }
    ];

    scope.setState();
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });

  it('should determine the state of a race correctly so it displays things right', function() {
    expect(scope.races[0].state).toBe('results');
    expect(scope.races[1].state).toBe('closed');
    expect(scope.races[2].state).toBe('open');
  });
});