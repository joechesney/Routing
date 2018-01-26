"use strict";



angular.module("RoutingApp").controller("WhiteRimCtrl", function($scope, $q, $http){
  $scope.getInfo = ()=>{
    return $q((resolve, reject)=>{
      $http.get("../../highways.json")
      .then(datas=>{
        // console.log('datas',datas);
        resolve(datas);
      });
    });
  };

  $scope.getInfo()
  .then(highwayDataRaw=>{
    $scope.highwayName = highwayDataRaw.data.highway1.name;
    $scope.highwayDescription = highwayDataRaw.data.highway1.description;
    console.log('$scope.highwayName',$scope.highwayName);
  });

  
});