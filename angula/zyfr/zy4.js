/**
 * Created by dell-pc on 2017/3/14.
 */
(function(angular){
    var app = angular.module('zy4', ['ngRoute'])

    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/zy4',{
            templateUrl:'./zyfr/zy4.html',
            controller:'zy4Controller'
        })
    }])

    app.controller('zy4Controller', ['$scope',function($scope){
        $scope.data = []
    }])

})(angular)