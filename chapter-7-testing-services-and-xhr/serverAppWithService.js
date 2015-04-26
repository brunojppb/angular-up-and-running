angular.module('serverApp2', []).
  controller('MainCtrl', ['NoteService', function(NoteService){
    var self = this;
    self.institutions = [];
    self.errorMessage = '';

    NoteService.query().then(function(response){
      self.institutions = response.data.institutions;
    }, function(errorResponse){
      self.errorMessage = errorResponse.data.errors;
    });
  }])
  .factory('NoteService', ['$http', function($http){
    return {
      query: function(){
        return $http.get('/institutions');
      }
    };
  }]);
