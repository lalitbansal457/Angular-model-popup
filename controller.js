var mymodal = angular.module('mymodal', ['ngAnimate']);

mymodal.controller('modelCtrl', function($scope){
    $scope.show = false

    $scope.open = function(){
        $scope.show = true;
    }

    $scope.close = function() {
        $scope.show = false;
    }

    $scope.stop = function($event) {
        $event.stopPropagation();
    }
});