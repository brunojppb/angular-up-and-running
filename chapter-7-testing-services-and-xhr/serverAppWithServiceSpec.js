describe('Server App Integration', function(){
  beforeEach(module('serverApp2'));

  var ctrl, mockBackend;

  beforeEach(inject(function($controller, $httpBackend){
    mockBackend = $httpBackend;
    mockBackend.expectGET('/institutions')
      .respond(404, { errors: 'not found' });
    ctrl = $controller('MainCtrl');
  }));


  it('should handle error while loading itens', function(){
    expect(ctrl.institutions).toEqual([]);
    mockBackend.flush();
    expect(ctrl.errorMessage).toEqual('not found');
  });

  afterEach(function(){
    // ensure all expects set on the $httpBackend
    // were called
    mockBackend.verifyNoOutstandingExpectation();
    // Ensure all requests have responded
    mockBackend.verifyNoOutstandingRequest();
  });



});
