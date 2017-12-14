(function (window, angular, undefined) {

    var app = angular.module('BitChat');

    app.controller('ChatCtrl', function ($rootScope, $scope) {
        $scope.username = undefined;

        $rootScope.$on('new-user', function (event, username) {
            $scope.username = username;
            console.log(username);
        })

    })

}(window, window.angular));