'use strict';

ConfigRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function ConfigRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/hello');

    var helloState = {
        name: 'hello',
        url: '/hello',
        templateUrl: './partials/smallTemplate.html'
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    };

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
}

module.exports = ConfigRouter;

// angular.module('helloworld').config(ConfigRouter);