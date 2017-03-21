/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */

(function (window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function (email) {
            return /.+@bignerdranch\.com$/.test(email);
        },
        isDecaf: function (order, caffeineLevel) {
            console.log('validating ' + order + ' and ' + caffeineLevel);
            if(order == 'decaf' && caffeineLevel <= 20) {
                return true;
            }
            return false;
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);
