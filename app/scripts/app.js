'use strict';

/**
 * @ngdoc overview
 * @name debugblogApp
 * @description
 * # debugblogApp
 *
 * Main module of the application.
 */
angular
  .module('debugblogApp', [
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'restangular',
    'ngStorage'
  ])

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'homeCtrl',
        resolve: {
          bugs: function(BugService) {
            return BugService.findAllBugs();
          }
        }
      })
      .state('details', {
        url: '/details/:bugId',
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl',
        controllerAs: 'detailsCtrl',
        resolve: {
          bug: function($stateParams, BugService){
            return BugService.findBug($stateParams.bugId);
          }
        }
      });
  });
