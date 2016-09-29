angular.module("myModule")
    .controller("MainController", [
        "$scope",
        "$route",
        function ($scope, $route) {
            $scope.$route = $route;
            $scope.items = [];

            $scope.loadItems = function () {
                var dataString = localStorage.getItem("items");

                if (dataString)
                    $scope.items = JSON.parse(dataString);
            }

            $scope.saveItems = function () {
                var jsonString = JSON.stringify($scope.items);
                localStorage.setItem("items", jsonString);
            }

            $scope.remove = function (index) {
                $scope.items.splice(index, 1);
            }

            $scope.loadItems();
        }
    ]);