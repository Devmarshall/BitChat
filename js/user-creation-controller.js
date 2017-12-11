(function (window, angular, undefined) {

    var app = angular.module('BitChat');

    app.controller('UserCreationCtrl', function ($scope) {
        var vm = this;
        vm.test = 'testing user creation';
    })

}(window, window.angular));