/**
 * Created by cmh on 2016/4/12.
 */
var myAppModule = angular.module("myApp",[]);

myAppModule.controller("TextController",
    function($scope){
        var someText = {};
        someText.message = "angularJS";
        $scope.someText = someText;
    }
);