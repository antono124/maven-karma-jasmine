(function () {
    'use strict';

    angular
        .module('services')
        .factory('MathService', MathService);

    MathService.$inject = [];
    function MathService() {

        function sumValues(a, b) {
            return a + b;
        }

        function multiplyValues(a, b) {
            return a * b;
        }

        return {
            sum : sumValues,
            multiply : multiplyValues
        };
    }
})();
