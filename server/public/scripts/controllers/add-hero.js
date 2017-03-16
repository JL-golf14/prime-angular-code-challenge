app.controller('AddHeroListController',['$http', function($http){
    console.log('Add Hero List Controller loaded');

var self = this;
 self.heroesList = [];
self.newHero = {};


getHero();
function getHero(){
  $http({
    method: 'GET',
    url: '/heroes',
  }).then(function(response) {
    console.log(response.data);
    self.heroesList = response.data;
  });
}

self.addHero =function(){
    $http({
    method: 'POST',
    url:'/heroes',
    data:self.newHero
  }).then(function(response){
    console.log(response);
    getHero();
    self.newHero = {};
  });
}

}]);
