app.controller('HeroListController',['$http', function($http){
    console.log('Hero List Controller loaded');

var self = this;
 self.heroesList = [];
self.newHero = {};
self.updateHero = {};


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


self.deleteHero = function(heroId){
  $http({
  method: 'DELETE',
  url:'/heroes/'+ heroId,

}).then(function(response){
  console.log(response);
  getHero();

});
}




self.updateHero = function(hero){
  $http({
  method: 'PUT',
  url:'/heroes/'+ hero.id,
  data: hero

}).then(function(response){
  console.log(response);
  getHero();
});
}







}]);
