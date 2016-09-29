angular.module("myModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider

                .when("/", {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController",
                    caseInsensitiveMatch: true,
                    activeTab: "Home"
                })

            .when("/Items", {
                templateUrl: "Views/Items.html",
                controller: "ItemsController",
                caseInsensitiveMatch: true,
                activeTab: "Items"
            })

            .when("/Items/:id", {
                templateUrl: "Views/Item.html",
                controller: "ItemController",
                caseInsensitiveMatch: true,
                activeTab: "Items"
            })

            .when("/About", {
                templateUrl: "Views/About.html",
                controller: "AboutController",
                caseInsensitiveMatch: true,
                activeTab: "About"
            });
        }
    ]);