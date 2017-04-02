/**
 * Created by dell-pc on 2017/3/14.
 */
(function(angular){
    var app = angular.module('zy1', ['ngRoute'])

    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/zy1',{
            templateUrl:'./zyone/zy1.html',
            controller:'zy1Controller'
        })
    }])

    app.controller('zy1Controller', ['$scope',function($scope){
        $scope.data = []
    }])

})(angular)