'use strict';

/**
 * @ngdoc directive
 * @name debugblog.directive:avBug
 * @description
 * # avBug
 */

 angular.module('debugblogApp')
  .directive('avBug', function($window, BugService){
    return {
      restric: 'E', //only match element name
      templateUrl: 'views/directives/bug.html',
      scope:{},
      bindToController: {
        bug: "="
      },
      controllerAs: 'bugCtrl',//directive required controller
      controller: function($scope){
        var _this = this;

        _this.updateBug = function(){
          BugService.updateBug(_this.bug);
        };


      }
    }
  });