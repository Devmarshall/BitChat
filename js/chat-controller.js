(function (window, angular, undefined) {
    
        var app = angular.module('BitChat');
    
        app.controller('ChatCtrl', function ($scope) {
            var vm = this;
            vm.test = 'testing user creation';
        })
    
    }(window, window.angular));