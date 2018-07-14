var angular = require("angular");
// var uiRoute = require("angular-ui-router");
import uiRoute from 'angular-ui-router';

var ConfigRouter = require('./routing');
angular.module('helloworld', [uiRoute])
    .config(ConfigRouter);

// require('./routing');
require('./js/controllers/MainController');

// var myApp = angular.module('helloworld', [uiRoute]);



// myApp.config(function($stateProvider) {
//     var helloState = {
//         name: 'hello',
//         url: '/hello',
//         template: '<h3>hello world!</h3>'
//     };
//
//     var aboutState = {
//         name: 'about',
//         url: '/about',
//         template: '<h3>Its the UI-Router hello world app!</h3>'
//     };
//
//     $stateProvider.state(helloState);
//     $stateProvider.state(aboutState);
// });