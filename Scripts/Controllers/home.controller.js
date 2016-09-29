angular.module("myModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home"
        }
    ]);