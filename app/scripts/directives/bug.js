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
      restric: 'E',
      templateUrl: 'views/directives/bug.html',
      scope:{},
      bindToController: {
        bug: "="
      },
      controllerAs: 'bugCtrl',
      controller: function($scope){
        var _this = this;
      }
    }
  });