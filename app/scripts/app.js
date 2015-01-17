'use strict';

angular
  .module('peerflixServerApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'btford.socket-io',
    'rt.encodeuri',
    'angularFileUpload'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/stream/torrents/:infoHash/files/:path', {
        templateUrl: 'views/stream.html',
        controller: 'StreamCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function () {
    window.addEventListener('dragover', function(e) {
      e.preventDefault();
    }, false);
    window.addEventListener('drop', function(e) {
      e.preventDefault();
    }, false);
  });
