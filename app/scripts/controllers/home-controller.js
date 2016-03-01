'use-strict';

/**
 * @ngdoc function
 * @name debugblogApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the debugblogApp
 */
angular.module('debugblogApp')
  .controller('HomeCtrl', function($scope, $window, bugs, BugService){
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
    }
  });