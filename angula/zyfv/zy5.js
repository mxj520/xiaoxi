/**
 * Created by dell-pc on 2017/3/14.
 */
(function(angular){
    var app = angular.module('zy5', ['ngRoute'])

    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/zy5',{
            templateUrl:'./zyfv/zy5.html',
            controller:'zy5Controller'
        })
    }])

    app.controller('zy5Controller', ['$scope',function($scope){
        $scope.data = []
    }])

})(angular)