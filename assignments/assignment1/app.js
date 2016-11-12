/**
 * Created by jtrmal on 12/11/2016.
 */
(function () {
    'use strict';

    angular.module('eatCheck', [])
        .controller('eatCheckController', function ($scope) {
            $scope.foodList = "";

            $scope.foodArray = [];

            $scope.parseFoodList = function () {
                var foodArray = $scope.foodList.split(/[ ,]*,/);
                $scope.foodArray = foodArray.filter(Boolean);
            };

            $scope.checkHowMuch = function () {
                if ($scope.foodArray.length > 3) {
                    $scope.verdict = 'Too much!';
                } else {
                    $scope.verdict = 'Enjoy!';
                }
            };
        });
})();
