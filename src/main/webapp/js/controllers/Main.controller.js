(function () {
    'use strict';

    angular
        .module('controllers')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    function MainController($scope) {
        $scope.name = 'Main Controller';
    }
})();





