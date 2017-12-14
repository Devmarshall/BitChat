(function () {
    var app = angular.module('BitChat', ['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

    });
}());