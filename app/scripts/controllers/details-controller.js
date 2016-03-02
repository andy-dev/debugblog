(function(){
  'use strict';

  angular
    .module('debugblogApp')
    .controller('DetailsCtrl', DetailsCtrl);

    DetailsCtrl.$inject = ['$scope', 'bug', '$state', '$window', 'BugService'];

    function DetailsCtrl($scope, bug, $state, $window, BugService){
      var _this = this;

    }

})();