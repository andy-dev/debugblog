'use strict';

/**
 * @ngdoc service
 * @name debugblog.BugService
 * @description
 * # BugService
 * Service in the debugBlog.
 */
angular
  .module('debugblogApp')
  .service('BugService', function($http){
    var service = {};
    var API_URL = 'http://localhost:3000';

    service.findAllBugs = function() {
      return $http.get(API_URL.concat('/api/Bugs'));
    };

     service.addBug = function(description) {
      return $http.post(API_URL.concat('/api/Bugs'), {
        description: description,
        isResolved: false
      });
    };

    service.updateBug = function(bug){
      return $http.put(API_URL.concat('/api/Bugs/').concat(bug.id), bug);
    }

    service.deleteBug = function(bugId){
      return $http.delete(API_URL.concat('/api/Bugs/').concat(bugId));
    }

    return service;
  });