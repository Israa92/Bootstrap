angular.module("myModule")
    .controller("ItemController", [
        "$scope",
        function ($scope) {
            $scope.title = "Item";
        }
    ]);