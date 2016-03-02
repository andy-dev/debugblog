(function(){
  'use strict';

  angular
    .module('debugblogApp')
    .controller('DetailsCtrl', DetailsCtrl);

    DetailsCtrl.$inject = ['$scope', 'bug', '$state', '$window', 'BugService'];

    function DetailsCtrl ($scope, bug, $state, $window, BugService){

      var _this = this;
      _this.bug = bug.data;

      $scope.$watch(
        function(){ return _this.bug.isResolved;},
        function(newValue, oldValue){
          if(newValue !== oldValue){
            BugService.updateBug(_this.bug)
            .then(function(response){
              _this.bug = response.data;
            })
          }
        });
    };

})();

