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
    'ui.router', // UI Router
    'ui.bootstrap', // Angular Bootstrap
    'restangular', // Restangular
    'ngStorage' // ngStorage for local storage
  ])

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/'); // For any unmatched url

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
      });
  });
