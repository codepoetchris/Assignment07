/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */

(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    FormHandler.prototype.addSubmitHandler = function (fn) {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function (event) {
            event.preventDefault();

            // var data = $(this).serializeArray();
            var data = {};
            $(this).serializeArray().forEach(function (item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });
            console.log(data);
            fn(data);
            this.reset();
            this.elements[0].focus();
        });
    };

    FormHandler.prototype.addInputHandler = function (fn) {
        console.log('Setting input handler for form');
        this.$formElement.on('input', '[name="emailAddress"]', function (event) {
            var emailAddress = event.target.value;
            var message = '';
            if (fn(emailAddress)) {
                event.target.setCustomValidity('');
            } else {
                message = emailAddress + ' is not an authorized email address!';
                event.target.setCustomValidity(message);
            }
        });
    };

    FormHandler.prototype.addDecafInputHandler = function (fn) {
        this.$formElement.on('input', '[id="coffeeOrder"], [id="strengthLevel"]', function (event){
            console.log(event);

            var order = $('[id="coffeeOrder"]').val();
            var strength = $('[id="strengthLevel"]').val();
            var message = '';

            if (order == 'decaf' && !fn(order, strength)){
                message = 'A ' + order + ' with a strength of ' + strength + ' is not decaf';
            }

            //I couldn't figure out how to setCustomValidity() on a jQuery object
            var coffeeOrder = document.querySelector('[id="coffeeOrder"]');
            coffeeOrder.setCustomValidity(message);
            var coffeeStrength = document.querySelector('[id="strengthLevel"]');
            coffeeStrength.setCustomValidity(message);
        });
    };

    App.FormHandler = FormHandler;
    window.App = App;

})(window);
