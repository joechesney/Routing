"use strict";

angular.module("RoutingApp").controller("CaliCtrl", function($scope, $q, $http){
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
    $scope.highwayName = highwayDataRaw.data.highway2.name;
    $scope.highwayDescription = highwayDataRaw.data.highway2.description;
    console.log('$scope.highwayName',$scope.highwayName);
  });
});