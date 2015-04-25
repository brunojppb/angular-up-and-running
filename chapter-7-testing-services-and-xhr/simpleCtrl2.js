angular.module('simpleCtrl2App', [])
  .controller('SimpleCtrl2', ['$location', '$window', function($location, $window){
    var self = this;

    self.navigate1 = function(){
      $location.path('/some/where');
      console.log('Path: ' + $location.path());
    };

    self.navigate2 = function(){
      $location.path('/some/where/else');
      console.log('Path: ' + $location.path());
    };

  }]);
