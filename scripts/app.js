'use strict';

var app = angular.module('app', [  
  'ngRoute'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/teste', {
        templateUrl: 'views/teste.html',
        controller: 'TesteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    // $locationProvider
    //   .html5Mode(true)
    //   .hashPrefix('!');
  }
]);

