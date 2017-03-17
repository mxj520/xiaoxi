/**
 * Created by dell-pc on 2017/3/14.
 */
(function(angular){

    var app = angular.module('zy2', ['ngRoute'])

    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/zy2',{
            templateUrl:'./zy2/zy2.html',
            controller:'zy2Controller'
        })
    }])

    app.controller('zy2Controller', ['$scope',function($scope){
        $scope.data = []
    }])

})(angular)