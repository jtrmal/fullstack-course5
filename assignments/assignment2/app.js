/**
 * Created by jtrmal on 20/11/2016.
 */
(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyControllerImpl)
        .controller('AlreadyBoughtController', AlreadyBoughtControllerImpl)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffServiceImpl);

    ToBuyControllerImpl.$inject = ['ShoppingListCheckOffService'];
    function ToBuyControllerImpl (cart) {
        var ctrl = this;

        ctrl.numItems = function () {
            console.log("getNumItems");
            return cart.getItemsToBuy().length;
        };

        ctrl.getItems = function () {
            console.log("getItems");
            return cart.getItemsToBuy();
        };

        ctrl.buyItem = function (index) {
            console.log("buyItem");
            cart.buyItem(index);
            return true;
        };

        ctrl.removeItem = function (index) {
            console.log("remvoeItem");
            cart.removeItem(index);
            return true;
        }

    }

    AlreadyBoughtControllerImpl.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtControllerImpl (checkout) {
        var ctrl = this;

        ctrl.numItems = function () {
            console.log("getNumItems");
            return checkout.getBoughtItems().length;
        };

        ctrl.getItems = function () {
            console.log("getItems");
            return checkout.getBoughtItems();
        }

    }

    function ShoppingListCheckOffServiceImpl() {
        var service = this;
        var itemsToBuy = [
            {name: "Cookies",
            count: 10},
            {name: "Chips",
            count: 3},
            {name: "Steak",
            count: 4},
            {name: "Onions",
            count: 20}
        ];

        var itemsBought = [];

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getBoughtItems = function () {
            return itemsBought;
        };

        service.buyItem = function (index) {
            var item = itemsToBuy[index];
            itemsToBuy.splice(index, 1);
            itemsBought.push(item);
        };

        service.removeItem = function (index) {
            itemsToBuy.splice(index, 1);
        };
    }

})();
