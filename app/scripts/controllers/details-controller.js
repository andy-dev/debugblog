'use strict';

/**
 * @ngdoc function
 * @name debugblogcontroller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the debugblog
 */

 angular.module('debugblogApp')
  .controller('DetailsCtrl', function($scope, bug, $state, $window, BugService){
    var _this = this;

    _this.bug = bug.data;

    $scope.$watch(function(){
      return _this.bug.isResolved;
    }, function(newValue, oldValue){
      if(newValue !== oldValue){
        BugService.updateBug(_this.bug)
          .then(function(response){
            _this.bug = response.data;
          })
      }
    })
  })