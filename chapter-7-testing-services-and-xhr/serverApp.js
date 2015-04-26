angular.module('serverApp', [])
  .controller('MainCtrl', ['$http', function($http){
    var self = this;
    self.institutions = [];
    self.errorMessage = '';

    $http.get('/institutions').then(function(response){
      self.institutions = response.data.institutions;
    }, function(errorResponse){
      self.errorResponse = errorResponse.data.errors;
    });

  }]);

