var myApp = angular.module("myApp",['ngMaterial','ui.router','ngLetterAvatar', 'md.data.table']);
myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state("design",{
      url:"/design",
      templateUrl:"partials/design.html"
    })

    .state('design.namespace', {
      url: "/namespace",
      templateUrl: "partials/namespace.html"
    })
    .state('design.instance', {
      url: "/instance",
      templateUrl: "partials/instance.html"
    })
    .state('design.createInstance', {
      url: "/instance/createInstance",
      templateUrl: "partials/createInstance.html"
      // controller:"createInstanceCtrl"
    })
    .state('design.listInstance', {
      url: "/instance/listInstance",
      templateUrl: "partials/listInstance.html"
      // controller:"createInstanceCtrl"
    })
    .state('design.createNamespace', {
        url: "/createNamespace",
        templateUrl: "partials/createNamespace.html",
         controller:"createNamespaceCtrl"

      })
    .state('design.stream', {
      url: "/stream",
      templateUrl: "partials/stream.html"
    })
    .state('design.function', {
      url: "/function",
      templateUrl: "partials/function.html"
    })
    .state('design.watchlist', {
      url: "/watchlist",
      templateUrl: "partials/watchlist.html"
    })

}]);
myApp.controller("myController",["$scope","$location","$log",function($scope,$location,$log){

}]);

myApp.controller("createInstanceCtrl",["$scope","$state",function($scope, $state){

  $scope.instance = {};

  $scope.submit = function (){
    alert($scope.instance.name+"  "+ $scope.instance.ipAddress+"  "+ $scope.instance.description+"  "+$scope.instance.location);
    $state.go("design.listInstance")
  }

}]);

myApp.controller("createNamespaceCtrl",["$scope","$state",function($scope, $state){
  $scope.nameSpace = {
    dataSchema: []
  };
  var keyIndex=0;

  $scope.addDataFormat = function(){
    var newSchemaField = { 'fieldAlias': $scope.fieldAlias, 'fieldName': $scope.fieldName, 'fieldType': $scope.fieldType };
    console.log("new field: ", newSchemaField);
      $scope.nameSpace.dataSchema.push(newSchemaField);
    console.log($scope.nameSpace.dataSchema.length);
    $scope.fieldAlias = $scope.fieldName = $scope.fieldType = "";
  }

  $scope.nameSpace.submit = function(){
    $scope.nameSpace.myJsonString = JSON.parse($scope.nameSpace.jsonFormat);
  }

}]);
