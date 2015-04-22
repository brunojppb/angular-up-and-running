angular.module('MyApp', [])
  .controller('MainCtrl', ['ItemService', function(ItemService){
    var self = this;
    self.tab = 'first';
    self.open = function(tab){
      self.tab = tab;
    };

    // self.items = [{id: 2, label: 'Hello'}];

    self.items = function(){
      return ItemService.list();
    };

    self.add = function(){
      console.log(ItemService.list().length);
      ItemService.add({
        id: self.items().length + 1,
        label: 'Item ' + self.items().length
      });
    };
  }])
  .factory('ItemService', [function(){

    var items = [
      { id: 1, label: 'Item 0' },
      { id: 2, label: 'Item 1' }
    ];

    return {
      list: function(){
        return items;
      },
      add: function(item){
        items.push(item);
      }
    };
  }]);
