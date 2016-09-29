angular.module("myModule")
    .controller("AboutController", [
        "$scope",
        function ($scope) {
            $scope.title = "About"
        }
    ]);