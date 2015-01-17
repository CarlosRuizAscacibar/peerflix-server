'use strict';

angular.module('peerflixServerApp')
.controller('StreamCtrl', function ($scope, $routeParams, $resource, $log, $q, $upload, torrentSocket) {
  $scope.ruta = '/torrents/' +  $routeParams.infoHash + '/files/' + $routeParams.path;
});
