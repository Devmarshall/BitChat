(function (window, angular, undefined) {

    var app = angular.module('BitChat');

    app.controller('ChatCtrl', function ($rootScope, $scope) {
        $scope.username = undefined;

        $rootScope.$on('new-user', function (event, username) {
            $scope.username = username;
        })

        $scope.$watch(function () {
            return $scope.username
        }, function () {

            if ($scope.username) {
                console.log('This is the new username: ', $scope.username);

            }
        })


    })

}(window, window.angular));