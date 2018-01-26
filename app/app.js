"use strict";



angular.module("RoutingApp", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
    .when("/cali", {
      templateUrl: "partials/cali.html",
      controller: "CaliCtrl"
    })
    .when("/whiteRim", {
      templateUrl: "partials/whiteRim.html",
      controller: "WhiteRimCtrl"
    })
    .otherwise("/");
})
.controller("MessageCtrl", function($scope, $rootScope) {
  $scope.message = "Welcome to Angular!";
});