angular.module("myModule")
    .controller("ItemsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Items";
            $scope.newItem = {};

            $scope.addItem = function () {
                $scope.items.push($scope.newItem);
                $scope.newItem = {};
                $scope.saveItems();
            }
        }
    ]);