(function() {
  'use strict';

  angular
    .module('debugblogApp')
    .directive('avBug', avBug);

  function avBug() {
    return {
      templateUrl: 'views/directives/bug.html',
      restrict: 'E',
      controller: BugFormController,
      controllerAs: 'bugCtrl',
      bindToController: true,
      scope: {
        bug: '='
      }
    };
  };

  BugFormController.$inject = ['$window', '$scope', 'BugService'];

  function BugFormController($window, $scope, BugService) {
    var _this = this;

    _this.updateBug = function(){
      BugService.updateBug(_this.bug);
    };

    _this.deleteBug = function(){
      if($window.confirm("Delete the Bug?!")){
        return BugService.deleteBug(_this.bug.id)
          .then(function(){
            $scope.$emit('bug.deleted', _this.bug);
          });
      }
    };

  };

})();


