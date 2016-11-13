/**
 * Created by jtrmal on 12/11/2016.
 */
(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckControllerImpl);

    LunchCheckControllerImpl.$inject = ['$scope'];
    function LunchCheckControllerImpl($scope) {
            $scope.foodList = "";

            $scope.foodArray = [];
            $scope.verdict = 'empty';
            $scope.verdictMessage = '';

            $scope.parseFoodList = function () {
                $scope.verdict = 'empty';
                $scope.verdictMessage = '';

                var foodArray = $scope.foodList.split(/[ ,]*,/);
                $scope.foodArray = foodArray.filter(Boolean);
            };

            $scope.checkHowMuch = function () {
                if ($scope.foodArray.length > 3) {
                    $scope.verdictMessage = 'Too much!';
                    $scope.verdict = 'toomuch';
                } else if ($scope.foodArray.length <= 0) {
                    $scope.verdictMessage = 'Please enter data first!';
                    $scope.verdict = 'needdata';
                } else {
                    $scope.verdictMessage = 'Enjoy!';
                    $scope.verdict = 'enjoy';
                }
            };
    };

})();
