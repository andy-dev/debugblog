(function() {
  'use strict';

  angular
    .module('debugblogApp')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope', '$window', 'bugs', 'BugService'];

  function HomeCtrl($scope, $window, bugs, BugService) {

    var _this = this;
    _this.bugs = bugs.data;
    _this.newBug = {
      description: null
    };

    _this.addBug = function(){
      BugService.addBug(_this.newBug.description)
        .then(function(response){
          _this.newBug.description = null;
          _this.bugs.push(response.data);
        })
    };

    $scope.$on('bug.deleted', function(event,bug){
      _.pull(_this.bugs, bug);
    });
  }

})();



