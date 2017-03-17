/**
 * Created by dell-pc on 2017/3/14.
 */
(function(angular){

    var app = angular.module('zy3', ['ngRoute'])

    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/zy3',{
            templateUrl:'./zy3/zy3.html',
            controller:'zy3Controller'
        })
    }])

    app.controller('zy3Controller', ['$scope',function($scope){
        $scope.data = []
    }])

})(angular)