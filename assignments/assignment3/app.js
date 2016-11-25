/**
 * Created by jtrmal on 20/11/2016.
 */
(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', foundItemsDirective);

    function foundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItem.html',
            restrict: 'E',
            scope: {
                foundItems: '<foundItems',
                onRemove: '<onRemove'
            },
        };
        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController (items) {
        var ctrl = this;

        ctrl.results = [];
        ctrl.search_in_progress = false;

        ctrl.search = function (query) {
            ctrl.search_in_progres = true;
            console.log("Searching for " + query);
            items.getMatchedMenuItems(query)
                .then(function(result) {
                    console.log(result);
                    ctrl.results = result;
                });
            ctrl.search_in_progres = false;
        }

        ctrl.removeItem = function(index) {
            ctrl.results.splice(index, 1);
        }
    }

    MenuSearchService.$inject = ['$http']
    function MenuSearchService($http) {
        var ctrl = this;

        ctrl.getMatchedMenuItems = function (term) {
            return $http({
                    method: 'GET',
                    url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
                }).then(function (result) {
                console.log(result);
                var found = [];
                if (!term) {
                    return found;
                }
                for (var idx in result.data.menu_items) {
                    var item =result.data.menu_items[idx];
                    if ((item.description.toLowerCase().search(term) >= 0) ||
                        (item.name.toLocaleLowerCase().search(term) >= 0)) {
                        found.push(item);
                    }
                }
                return found;
            });
        }

    }

})();
