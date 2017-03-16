var app = angular.module('HeroApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/heroList', {
      templateUrl: '/views/hero-list.html',
      controller: 'HeroListController',
      controllerAs: 'hlc'
    })
    .when('/addHeroList', {
      templateUrl: '/views/addhero.html',
      controller: 'AddHeroListController',
      controllerAs: 'ahlc'
    })
    .otherwise({
      redirectTo: 'heroList'
    })
}]);
