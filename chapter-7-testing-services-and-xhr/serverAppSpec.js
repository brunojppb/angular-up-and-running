describe('MainCtrl server calls', function(){
  beforeEach(module('serverApp'));

  var ctrl, mockBackend;

  beforeEach(inject(function($controller, $httpBackend){
    mockBackend = $httpBackend;
    mockBackend.expectGET('/institutions')
      .respond({ institutions: [{id: 1, name: 'IFPB'}] });
      ctrl = $controller('MainCtrl');
  }));

  it('should load institutions from server', function(){
    expect(ctrl.institutions).toEqual([]);
    // simulate a server response
    mockBackend.flush();
    expect(ctrl.institutions).toEqual( [{id: 1, name: 'IFPB'}] );

  });

  afterEach(function(){
    // ensure all expects set on the $httpBackend
    // were called
    mockBackend.verifyNoOutstandingExpectation();
    // Ensure all requests have responded
    mockBackend.verifyNoOutstandingRequest();

  });
});
