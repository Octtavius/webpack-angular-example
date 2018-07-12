'use strict';

// var angular = require('angular');

MainController.$inject = ['$scope'];
function MainController($scope) {
    $scope.hello = "Hello from my Controller";
};

angular.module('helloworld').controller('MainController', MainController);
// module.exports = MainController;