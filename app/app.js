"use strict";

angular.module("RoutingApp", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
    .when("/", {
      templateUrl: "partials/greeting.html",
      controller: "MessageCtrl"
    })
    .when("/todo", {
      templateUrl: "partials/todos.html",
      controller: "TodoCtrl"
    })
    .when("/songs", {
      templateUrl: "partials/songs.html",
      controller: "SongCtrl"
    })
    .otherwise("/");
})
.controller("MessageCtrl", function($scope, $rootScope) {
  $scope.message = "Welcome to Angular!";
})
.controller("NameCtrl", function($scope) {
  $scope.message = "My name is Angular Man!";
});