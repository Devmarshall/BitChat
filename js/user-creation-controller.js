(function (window, angular, undefined) {

    var app = angular.module('BitChat');

    app.controller('UserCreationCtrl', function ($rootScope, $scope) {
        $scope.username = undefined;

        $scope.createUser = function (username) {
            $rootScope.$broadcast('new-user', username);
            console.log('fired', username);
        }

    })
}(window, window.angular));