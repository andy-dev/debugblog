'use strict';

/**
 * @ngdoc service
 * @name debugblog.BugService
 * @description
 * # BugService
 * Service in the debugBlog.
 */
angular.module('debugblogApp')
  .service('BugService', function($http){
    var service = {};
    var API_URL = 'http://localhost:3000';

    /**
     * Find all bugs.
     * @returns {Object}
     */
    service.findAllBugs = function() {
      return $http.get(API_URL.concat('/api/Bugs'));
    };

    /**
     * Add a task.
     * @param {string} bugId
     * @param {string} description
     */
     service.addBug = function(bugId,description) {
      return $http.post(API_URL.concat('/api/Bugs'), {
        bugId: bugId,
        description: description,
        isResolved: false
      });
    };

    return service;
  });